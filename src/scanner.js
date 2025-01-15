const puppeteer = require('puppeteer');

const scan = async (url) => {
  if (!url) {
    throw new Error('Invalid URL: The URL cannot be empty.');
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle2' });

    const zIndexMap = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const zIndexData = [];

      elements.forEach((el) => {
        const zIndex = window.getComputedStyle(el).zIndex;
        if (zIndex !== 'auto' && !isNaN(Number(zIndex))) {
          zIndexData.push({
            element: el.tagName,
            id: el.id || null,
            classList: [...el.classList].join('.') || null,
            zIndex: Number(zIndex),
          });
        }
      });

      return zIndexData.sort((a, b) => b.zIndex - a.zIndex);
    });

    return zIndexMap;
  } catch (error) {
    throw error;
  } finally {
    await browser.close();
  }
};

module.exports = { scan };
