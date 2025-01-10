const isValidFile = (filePath) => {
    return filePath.endsWith(".html") || filePath.startsWith("http");
  };
  
  module.exports = { isValidFile };