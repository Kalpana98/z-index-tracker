#!/usr/bin/env node

const { Command } = require('commander');
const path = require('path');
const chalk = require('chalk');
const { scan } = require('../src/scanner');
const { displayResults } = require('../src/display');

const program = new Command();

program
  .name('z-index-tracker')
  .description('Track z-indexes from a webpage or local HTML file')
  .version('0.0.2');

program
  .command('scan <input>')
  .description('Scan z-indexes from a webpage or local HTML file')
  .action(async (input) => {
    try {
      let url = input.trim();

      if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('file://')) {
        const absoluteFilePath = path.resolve(url);
        url = 'file://' + absoluteFilePath;
        console.log('Scanning local file:', url);
      } else {
        console.log('Scanning URL:', url);
      }

      const zIndexData = await scan(url);
      displayResults(zIndexData);
    } catch (error) {
      console.error(chalk.red('Error:', error.message));
    }
  });

program.parse(process.argv);
