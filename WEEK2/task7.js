const fs = require('fs');
const path = require('path');

function backupFile(filePath) {
  const backupPath = filePath + '.bak';
  
  try {
    if (fs.existsSync(filePath)) {
      fs.copyFileSync(filePath, backupPath);
      console.log(`Backup created: ${backupPath}`);
    } else {
      console.log(`Error: File '${filePath}' does not exist.`);
    }
  } catch (err) {
    console.error(`Error creating backup: ${err}`);
  }
}

function restoreFile(filePath) {
  const backupPath = filePath + '.bak';
  
  try {
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, filePath);
      console.log(`File restored: ${filePath}`);
    } else {
      console.log(`Error: Backup file '${backupPath}' does not exist.`);
    }
  } catch (err) {
    console.error(`Error restoring file: ${err}`);
  }
}

// Usage
const fileToBackup = 'file1.txt';

// Create a backup of the file
backupFile(fileToBackup);

// Restore the file from the backup
restoreFile(fileToBackup);
