const fs = require('fs');
const https = require('https');
const path = require('path');

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        return;
      }
      
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
};

async function main() {
  console.log("Downloading new images...");
  
  await downloadImage(
    'https://images.pexels.com/photos/1786766/pexels-photo-1786766.jpeg?auto=compress&cs=tinysrgb&w=2560&h=1440&dpr=2', 
    path.join(__dirname, 'public/images/hero.jpg')
  );
  console.log("Downloaded hero.jpg");
  
  await downloadImage(
    'https://images.pexels.com/photos/7218328/pexels-photo-7218328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    path.join(__dirname, 'public/images/pastor3.jpg')
  );
  console.log("Downloaded pastor3.jpg");

  console.log("Injecting HD quality into all Next.js Image components...");
  
  function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        processDir(fullPath);
      } else if (fullPath.endsWith('.tsx')) {
        let content = fs.readFileSync(fullPath, 'utf8');
        const originalContent = content;
        
        // Find <Image and ensure it has quality={100}
        // Negative lookahead to ensure we don't add it if it already exists
        content = content.replace(/<Image\b(?![^>]*quality={)/g, '<Image quality={100} ');
        
        // Also ensure it has sizes prop to prevent Next.js from throwing warnings and dropping quality
        // Note: sizes="100vw" is a safe default for hero/banner images. 
        // For cards we can just inject sizes="100vw" safely to silence the warnings and maintain HD.
        content = content.replace(/<Image\b(?![^>]*sizes=)([^>]*fill)/g, '<Image sizes="100vw" $1');

        if (content !== originalContent) {
           fs.writeFileSync(fullPath, content);
           console.log('Updated HD tags in', fullPath.replace(__dirname, ''));
        }
      }
    }
  }

  processDir(path.join(__dirname, 'src'));
  console.log("All done!");
}

main().catch(console.error);
