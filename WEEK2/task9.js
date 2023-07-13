const fs = require('fs');
const path = require('path');

// Delete a file
function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`File '${filePath}' deleted successfully.`);
  } else {
    console.log(`File '${filePath}' does not exist.`);
  }
}

// Rename a file
function renameFile(oldFilePath, newFilePath) {
  if (fs.existsSync(oldFilePath)) {
    fs.renameSync(oldFilePath, newFilePath);
    console.log(`File '${oldFilePath}' renamed to '${newFilePath}' successfully.`);
  } else {
    console.log(`File '${oldFilePath}' does not exist.`);
  }
}

// List files and directories in a given directory
function listFilesAndDirs(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.log(`Error reading directory '${directoryPath}': ${err}`);
    } else {
      files.forEach(file => {
        const filePath = path.join(directoryPath, file);
        const isDirectory = fs.statSync(filePath).isDirectory();
        console.log(`${isDirectory ? 'Directory' : 'File'}: ${filePath}`);
      });
    }
  });
}

// Example usage

// Delete a file
const fileToDelete = '/Users/apple/Desktop/sem 5/FSWD/WEEK2/file2.txt';
deleteFile(fileToDelete);

// Rename a file
const oldFilePath = '/Users/apple/Desktop/sem 5/FSWD/WEEK2/file1.txt';
const newFilePath = '/Users/apple/Desktop/sem 5/FSWD/WEEK2/new.txt';
renameFile(oldFilePath, newFilePath);

// List files and directories in a given directory
const directoryPath = '/Users/apple/Desktop/sem 5/FSWD/WEEK2/folder1';
listFilesAndDirs(directoryPath);
