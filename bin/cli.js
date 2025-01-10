#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { Command } = require("commander");
const { scan } = require("../src/scanner");
const { displayResults } = require("../src/display");

const program = new Command();

program
  .version("1.0.0")
  .description("Track and display all z-index values in your application");

program
  .command("scan <file>")
  .description("Scan a webpage or HTML file for z-index values")
  .action((file) => {
    const filePath = path.resolve(file);

    // Read the HTML content
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      process.exit(1);
    }

    const htmlContent = fs.readFileSync(filePath, "utf-8");
    const results = scan(htmlContent); // Pass the HTML content to `scan`
    displayResults(results);
  });

program.parse(process.argv);