const { JSDOM } = require("jsdom");

const scan = (htmlContent) => {
  // Simulate the DOM using JSDOM
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;

  const elements = document.querySelectorAll("*");
  const zIndexMap = [];

  elements.forEach((el) => {
    const zIndex = dom.window.getComputedStyle(el).zIndex; // Use dom.window here
    if (zIndex !== "auto" && !isNaN(Number(zIndex))) {
      zIndexMap.push({
        element: el.tagName,
        id: el.id,
        classList: [...el.classList].join("."),
        zIndex: Number(zIndex),
      });
    }
  });

  return zIndexMap.sort((a, b) => b.zIndex - a.zIndex);
};

module.exports = { scan };