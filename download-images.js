const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
        headers: { 
            'User-Agent': 'HolyTrinityChurchDemo/1.0 (https://github.com/example/holytrinity; myemail@example.com) Node.js/16' 
        }
    };
    https.get(url, options, (response) => {
      if (response.statusCode === 200) {
          response.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
      } else {
          reject(new Error(`Failed with status code: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

const images = [
  { name: 'hero.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/St_Pauls_Anglican_Cathedral_London_Ontario_interior.jpg/1280px-St_Pauls_Anglican_Cathedral_London_Ontario_interior.jpg' },
  { name: 'history.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Trinity_Anglican_Church_interior.jpg/1280px-Trinity_Anglican_Church_interior.jpg' },
  { name: 'community.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Inside_Liverpool_Anglican_Church.jpg/1280px-Inside_Liverpool_Anglican_Church.jpg' },
  { name: 'worship.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Interior_of_St_Mary_Redcliffe%2C_Bristol_1.jpg/1280px-Interior_of_St_Mary_Redcliffe%2C_Bristol_1.jpg' },
  { name: 'youth.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/St_Mary%27s_Cathedral_Interior%2C_Sydney%2C_NSW%2C_Australia.jpg/1280px-St_Mary%27s_Cathedral_Interior%2C_Sydney%2C_NSW%2C_Australia.jpg' },
  { name: 'children.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/York_Minster_interior_looking_east.jpg/1280px-York_Minster_interior_looking_east.jpg' },
  { name: 'communion.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Salisbury_Cathedral_Interior_2.jpg/1280px-Salisbury_Cathedral_Interior_2.jpg' },
  { name: 'pastor1.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Winchester_Cathedral_interior_1.jpg/1280px-Winchester_Cathedral_interior_1.jpg' },
  { name: 'pastor2.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Gloucester_Cathedral_interior_1.jpg/1280px-Gloucester_Cathedral_interior_1.jpg' },
  { name: 'pastor3.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Exeter_Cathedral_interior_1.jpg/1280px-Exeter_Cathedral_interior_1.jpg' }
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run() {
  console.log('Downloading images with proper User-Agent and delay...');
  for (const img of images) {
    try {
      await download(img.url, path.join(dir, img.name));
      console.log(`Downloaded ${img.name}`);
      await sleep(2000); // 2 second delay between requests
    } catch (e) {
      console.error(`Failed to download ${img.name}: ${e.message}`);
    }
  }
  console.log('Done.');
}

run();
