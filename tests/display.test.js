const chalk = require('chalk');
const { displayResults } = require('../src/display');

// Mock console methods
console.log = jest.fn();
console.table = jest.fn();

describe('displayResults', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should log the header with green color', () => {
    const results = [];
    displayResults(results);

    expect(console.log).toHaveBeenCalledWith(chalk.green('Z-Index Tracker Results:'));
  });

  it('should format and display results in a table', () => {
    const results = [
      { element: 'DIV', id: 'test', classList: 'class1', zIndex: 100 },
      { element: 'SPAN', id: null, classList: null, zIndex: 50 },
    ];

    displayResults(results);

    expect(console.table).toHaveBeenCalledWith([
      { Element: 'DIV#test.class1', ZIndex: 100 },
      { Element: 'SPAN', ZIndex: 50 },
    ]);
  });

  it('should handle an empty results array without errors', () => {
    const results = [];
    displayResults(results);

    expect(console.table).toHaveBeenCalledWith([]);
  });
});
