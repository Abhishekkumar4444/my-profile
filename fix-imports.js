const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes("from '/public/") || content.includes('from "/public/')) {
        content = content.replace(/from '\/public\//g, "from '@/public/");
        content = content.replace(/from "\/public\//g, 'from "@/public/');
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'app'));
processDir(path.join(__dirname, 'utils'));
console.log('Done!');
