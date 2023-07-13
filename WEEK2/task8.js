const fs = require('fs');
const path = require('path');

function createDirectoryRecursively(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
}

function createFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '');
  }
}

function createStructureFromJSON(json, basePath = '') {
  if (typeof json === 'object') {
    Object.entries(json).forEach(([name, value]) => {
      const fullPath = path.join(basePath, name);
      const isDirectory = typeof value === 'object' && !Array.isArray(value);

      if (isDirectory) {
        createDirectoryRecursively(fullPath);
        createStructureFromJSON(value, fullPath);
      } else {
        createFile(fullPath);
      }
    });
  }
}

// Example JSON structure
const json = {
  folder1: {
    folder2: {
      file1: "hiii",
      file2: "My name is dharmik",
    },
    file3: "i am dharmik"
  },
  file4: "who i am"
};

// Define the base directory path
const baseDir = '/Users/apple/Desktop/sem 5/FSWD/WEEK2';

// Create the structure
createStructureFromJSON(json, baseDir);
