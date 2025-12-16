const fs = require('fs-extra');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// List of files and directories to copy
const filesToCopy = [
  'index.html',
  'about',
  'contact',
  'privacy-policy',
  'terms-of-service',
  'cdn-cgi'
];

// Copy each file/directory to dist
filesToCopy.forEach(file => {
  const src = path.join(process.cwd(), file);
  const dest = path.join(distDir, file);
  
  if (fs.existsSync(src)) {
    fs.copySync(src, dest, { overwrite: true });
    console.log(`Copied: ${file}`);
  } else {
    console.warn(`Warning: ${file} not found, skipping...`);
  }
});

console.log('Build completed successfully!');
