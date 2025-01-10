jest.mock('puppeteer', () => {
  const page = {
    goto: jest.fn(),
    evaluate: jest.fn(),
    close: jest.fn(),
  };

  const browser = {
    newPage: jest.fn(() => page),
    close: jest.fn(),
  };

  return {
    launch: jest.fn(() => browser),
    __mockPage: page,
    __mockBrowser: browser,
  };
});

const puppeteer = require('puppeteer');
const { scan } = require('../src/scanner');

describe('scan', () => {
  const mockPage = puppeteer.__mockPage;
  const mockBrowser = puppeteer.__mockBrowser;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should throw an error if URL is empty', async () => {
    await expect(scan('')).rejects.toThrow('Invalid URL: The URL cannot be empty.');
  });

  it('should launch a browser and scan the given URL', async () => {
    const testUrl = 'http://example.com';

    mockPage.goto.mockResolvedValueOnce();
    mockPage.evaluate.mockResolvedValueOnce([
      { element: 'DIV', id: 'header', classList: 'nav', zIndex: 100 },
      { element: 'SPAN', id: null, classList: 'highlight', zIndex: 50 },
    ]);

    const result = await scan(testUrl);

    expect(puppeteer.launch).toHaveBeenCalled();
    expect(mockPage.goto).toHaveBeenCalledWith(testUrl, { waitUntil: 'networkidle2' });
    expect(result).toEqual([
      { element: 'DIV', id: 'header', classList: 'nav', zIndex: 100 },
      { element: 'SPAN', id: null, classList: 'highlight', zIndex: 50 },
    ]);
  });

  it('should close the browser after scanning', async () => {
    const testUrl = 'http://example.com';

    mockPage.goto.mockResolvedValueOnce();
    mockPage.evaluate.mockResolvedValueOnce([]);

    await scan(testUrl);

    expect(mockBrowser.close).toHaveBeenCalled();
  });

  it('should handle errors during scanning', async () => {
    const testUrl = 'http://example.com';

    mockPage.goto.mockRejectedValueOnce(new Error('Page not found'));

    await expect(scan(testUrl)).rejects.toThrow('Page not found');
    expect(mockBrowser.close).toHaveBeenCalled();
  });
});
