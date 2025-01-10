#!/usr/bin/env node
const { Command } = require("commander");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const chalk = require("chalk");

const program = new Command();

program
  .name("z-index-tracker")
  .description("Track and display all z-index values in your project")
  .version("1.0.0");

program
  .command("scan")
  .description("Scan a webpage or HTML file for z-index values")
  .argument("<file>", "HTML file or URL to scan")
  .action((file) => {
    if (fs.existsSync(file)) {
      const html = fs.readFileSync(file, "utf-8");
      const dom = new JSDOM(html);
      const zIndexData = getAllZIndexes(dom.window.document);
      displayResults(zIndexData);
    } else {
      console.log(chalk.red("File not found."));
    }
  });

program.parse();