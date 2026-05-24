const { execSync } = require('child_process');
const fs = require('fs');

const images = [
  { name: 'hero.jpg', tags: 'church' },
  { name: 'history.jpg', tags: 'church,history' },
  { name: 'communion-new.jpg', tags: 'communion' },
  { name: 'children.jpg', tags: 'children,church' },
  { name: 'community.jpg', tags: 'community,church' },
  { name: 'worship.jpg', tags: 'worship' },
  { name: 'pastor1.jpg', tags: 'pastor' },
  { name: 'pastor2.jpg', tags: 'pastor' },
  { name: 'pastor3.jpg', tags: 'pastor' },
  { name: 'about-hero.jpg', tags: 'church' },
  { name: 'vision.jpg', tags: 'church' },
  { name: 'mission.jpg', tags: 'church' },
  { name: 'contact-hero.jpg', tags: 'church' },
  { name: 'contact-building.jpg', tags: 'church,building' },
  { name: 'events-hero.jpg', tags: 'event,church' },
  { name: 'event1.jpg', tags: 'event' },
  { name: 'event2.jpg', tags: 'event' },
  { name: 'event3.jpg', tags: 'event' },
  { name: 'give-hero.jpg', tags: 'offering' },
  { name: 'giving.jpg', tags: 'giving,church' },
  { name: 'ministries-hero.jpg', tags: 'ministry' },
  { name: 'ministry-men.jpg', tags: 'men,church' },
  { name: 'ministry-women.jpg', tags: 'women,church' },
  { name: 'ministry-youth.jpg', tags: 'youth,church' },
  { name: 'ministry-children.jpg', tags: 'children,church' },
  { name: 'sermons-hero.jpg', tags: 'sermon' },
  { name: 'sermon1.jpg', tags: 'sermon' },
  { name: 'sermon2.jpg', tags: 'sermon' },
  { name: 'sermon3.jpg', tags: 'sermon' },
  { name: 'sermon4.jpg', tags: 'sermon' },
  { name: 'sermon5.jpg', tags: 'sermon' },
  { name: 'sermon6.jpg', tags: 'sermon' },
  { name: 'services-hero.jpg', tags: 'worship' },
  { name: 'service1.jpg', tags: 'worship' },
  { name: 'service2.jpg', tags: 'worship' },
  { name: 'service3.jpg', tags: 'worship' },
  { name: 'service4.jpg', tags: 'worship' },
  { name: 'service5.jpg', tags: 'worship' }
];

if (!fs.existsSync('public/images')){
    fs.mkdirSync('public/images', { recursive: true });
}

console.log("Fetching original generic images...");
for (let i = 0; i < images.length; i++) {
  const img = images[i];
  const url = `https://loremflickr.com/1280/800/${img.tags}/all?lock=${i}`;
  console.log(`Downloading ${img.name}...`);
  try {
    execSync(`curl.exe -s -L -o public/images/${img.name} "${url}"`);
  } catch(e) {
    console.log(`Error on ${img.name}`);
  }
}
console.log("All done!");
