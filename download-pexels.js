const fs = require('fs');
const https = require('https');
const path = require('path');

const mappings = [
  { id: '6275774', filename: 'pastor1.jpg' }, // Pastor holding bible
  { id: '8814998', filename: 'pastor2.jpg' }, // Pastor talking
  { id: '8817486', filename: 'pastor3.jpg' }, // Woman in cassock
  { id: '29328997', filename: 'worship.jpg' }, // Audience in worship
  { id: '19392550', filename: 'service1.jpg' }, // People during mass
  { id: '37489110', filename: 'communion-new.jpg' }, // Holy communion
  { id: '36509215', filename: 'contact-building.jpg' }, // Church senegal
  { id: '20850766', filename: 'history.jpg' }, // Cathedral basilica
  { id: '36259899', filename: 'hero.jpg' }, // Gothic cathedral interior
  { id: '36788989', filename: 'ministry-youth.jpg' }, // Young friends
  { id: '17155698', filename: 'ministry-children.jpg' }, // Boy among children
  { id: '14419891', filename: 'children.jpg' }, // Grayscale young kids
  { id: '9353491', filename: 'community.jpg' }, // Friends hugging
  { id: '9353485', filename: 'ministry-women.jpg' }, // Group smiling
  { id: '11514395', filename: 'ministry-men.jpg' }, // Group in park
  { id: '12243433', filename: 'mission.jpg' } // Man/woman couple
];

// Additional copies to replace other hero images with real ones
const extras = [
  { source: 'hero.jpg', dest: 'about-hero.jpg' },
  { source: 'history.jpg', dest: 'contact-hero.jpg' },
  { source: 'worship.jpg', dest: 'events-hero.jpg' },
  { source: 'service1.jpg', dest: 'services-hero.jpg' },
  { source: 'ministry-youth.jpg', dest: 'ministries-hero.jpg' },
  { source: 'pastor1.jpg', dest: 'sermons-hero.jpg' },
  { source: 'communion-new.jpg', dest: 'give-hero.jpg' },
  { source: 'communion-new.jpg', dest: 'service2.jpg' },
  { source: 'community.jpg', dest: 'service3.jpg' },
  { source: 'ministry-women.jpg', dest: 'service4.jpg' },
  { source: 'ministry-men.jpg', dest: 'service5.jpg' },
  { source: 'ministry-youth.jpg', dest: 'event1.jpg' },
  { source: 'community.jpg', dest: 'event2.jpg' },
  { source: 'mission.jpg', dest: 'event3.jpg' },
  { source: 'pastor2.jpg', dest: 'sermon1.jpg' },
  { source: 'pastor3.jpg', dest: 'sermon2.jpg' },
  { source: 'pastor1.jpg', dest: 'sermon3.jpg' }
];

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
  const imagesDir = path.join(__dirname, 'public', 'images');
  
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  for (const item of mappings) {
    const url = `https://images.pexels.com/photos/${item.id}/pexels-photo-${item.id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`;
    const filepath = path.join(imagesDir, item.filename);
    console.log(`Downloading ${item.filename}...`);
    try {
      await downloadImage(url, filepath);
      console.log(`Successfully downloaded ${item.filename}`);
    } catch (err) {
      console.error(`Error downloading ${item.filename}:`, err.message);
    }
  }

  // Copy extras to replace all AI images
  for (const item of extras) {
    const sourcePath = path.join(imagesDir, item.source);
    const destPath = path.join(imagesDir, item.dest);
    try {
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied ${item.source} to ${item.dest}`);
      }
    } catch (err) {
      console.error(`Error copying ${item.dest}:`, err.message);
    }
  }
}

main();
