const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');

const images = [
  { name: 'hero.jpg', title: 'Cathedral' },
  { name: 'history.jpg', title: 'History_of_Christianity' },
  { name: 'communion-new.jpg', title: 'Eucharist' },
  { name: 'children.jpg', title: 'Sunday_school' },
  { name: 'community.jpg', title: 'Christian_fellowship' },
  { name: 'worship.jpg', title: 'Christian_worship' },
  { name: 'pastor1.jpg', title: 'Pastor' },
  { name: 'pastor2.jpg', title: 'Clergy' },
  { name: 'pastor3.jpg', title: 'Preacher' },
  { name: 'about-hero.jpg', title: 'Christian_cross' },
  { name: 'vision.jpg', title: 'Stained_glass' },
  { name: 'mission.jpg', title: 'Christian_ministry' },
  { name: 'contact-hero.jpg', title: 'Church_architecture' },
  { name: 'contact-building.jpg', title: 'Chapel' },
  { name: 'events-hero.jpg', title: 'Liturgy' },
  { name: 'event1.jpg', title: 'Mass_(liturgy)' },
  { name: 'event2.jpg', title: 'Gospel_music' },
  { name: 'event3.jpg', title: 'Evangelism' },
  { name: 'give-hero.jpg', title: 'Almsgiving' },
  { name: 'giving.jpg', title: 'Offertory' },
  { name: 'ministries-hero.jpg', title: 'Vocation' },
  { name: 'ministry-men.jpg', title: 'Disciple_(Christianity)' },
  { name: 'ministry-women.jpg', title: 'Deaconess' },
  { name: 'ministry-youth.jpg', title: 'Youth_ministry' },
  { name: 'ministry-children.jpg', title: 'Child_dedication' },
  { name: 'sermons-hero.jpg', title: 'Sermon' },
  { name: 'sermon1.jpg', title: 'Pulpit' },
  { name: 'sermon2.jpg', title: 'Bible' },
  { name: 'sermon3.jpg', title: 'Gospel' },
  { name: 'sermon4.jpg', title: 'Crucifix' },
  { name: 'sermon5.jpg', title: 'Prayer' },
  { name: 'sermon6.jpg', title: 'Altar' },
  { name: 'services-hero.jpg', title: 'Church_service' },
  { name: 'service1.jpg', title: 'Hymnal' },
  { name: 'service2.jpg', title: 'Choir' },
  { name: 'service3.jpg', title: 'Baptistery' },
  { name: 'service4.jpg', title: 'Lectern' },
  { name: 'service5.jpg', title: 'Pipe_organ' }
];

if (!fs.existsSync('public/images')){
    fs.mkdirSync('public/images', { recursive: true });
}

async function run() {
  console.log("Fetching perfectly contextual Wikipedia images...");
  for (const img of images) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=thumbnail&pithumbsize=1280&titles=${img.title}`;
    
    try {
      const data = await new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'AntigravityBot/1.0' } }, (res) => {
          let d = '';
          res.on('data', chunk => d += chunk);
          res.on('end', () => {
            try { resolve(JSON.parse(d)); } catch(e) { reject(new Error("Parse error")); }
          });
          res.on('error', reject);
        }).on('error', reject);
      });

      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(500); // Rate limit to 2 req/sec

      const pages = data.query.pages;
      if (!pages) throw new Error("Invalid response");
      const pageId = Object.keys(pages)[0];
      
      if (pages[pageId].thumbnail) {
        const sourceUrl = pages[pageId].thumbnail.source;
        console.log(`Downloading ${img.name} (from ${img.title})...`);
        execSync(`curl.exe -s -L -o public/images/${img.name} "${sourceUrl}"`);
      } else {
        console.log(`NO IMAGE FOUND for ${img.title}, falling back to LoremFlickr generic...`);
        execSync(`curl.exe -s -L -o public/images/${img.name} "https://loremflickr.com/1280/800/church/all?lock=${Math.floor(Math.random()*1000)}"`);
      }
    } catch (e) {
      console.log(`Error processing ${img.name}: ${e.message}`);
    }
  }
  console.log("All done!");
}

run();
