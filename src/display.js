const chalk = require("chalk");

const displayResults = (results) => {
  console.log(chalk.green("Z-Index Tracker Results:"));
  console.table(
    results.map(({ element, id, classList, zIndex }) => ({
      Element: `${element}${id ? `#${id}` : ""}${classList ? `.${classList}` : ""}`,
      ZIndex: zIndex,
    }))
  );
};

module.exports = { displayResults };