/* This is to add '-' to files and folders containing a blank space in them */

const fs = require('fs');
const path = require('path');

function renameFilesAndFolders(directoryPath) {
  fs.readdir(directoryPath, (err, items) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    items.forEach((item) => {
      const oldPath = path.join(directoryPath, item);
      const newPath = path.join(directoryPath, item.replace(/\s/g, '-'));

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error renaming ${oldPath}:`, err);
        } else {
          console.log(`Renamed: ${oldPath} -> ${newPath}`);
        }
      });
    });
  });
}

// Replace '/path/to/your/directory' with the path to your directory
const directoryPath = '/Users/kartiksanil/Coding/web-development/html-css/';
renameFilesAndFolders(directoryPath);
