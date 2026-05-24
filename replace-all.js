const fs = require('fs');
const path = require('path');

const walk = function(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src/app');
let replacedCount = 0;

// simple mapping of unsplash ID or content hint to our local image
const getReplacement = (url, fileContent) => {
    if (url.includes('1548625361') || fileContent.includes('Hero') || fileContent.includes('Background')) return '/images/hero.jpg';
    if (url.includes('1543622748') || url.includes('1490730141103')) return '/images/history.jpg';
    if (url.includes('1511632765486') || url.includes('Youth')) return '/images/youth.jpg';
    if (url.includes('1511895426328') || url.includes('Children')) return '/images/children.jpg';
    if (url.includes('1438232992991') || url.includes('Communion')) return '/images/communion.jpg';
    if (url.includes('1529070538774') || url.includes('Contemporary') || url.includes('Community')) return '/images/community.jpg';
    if (url.includes('1504052434569') || url.includes('Worship')) return '/images/worship.jpg';
    if (url.includes('1566753323558')) return '/images/pastor1.jpg';
    if (url.includes('1573496359142')) return '/images/pastor2.jpg';
    if (url.includes('1506794778202')) return '/images/pastor3.jpg';
    
    // Default random selection if no match
    const options = ['/images/hero.jpg', '/images/worship.jpg', '/images/community.jpg', '/images/history.jpg'];
    return options[Math.floor(Math.random() * options.length)];
}

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?q=80&w=[0-9]+&auto=format&fit=crop/g;
    
    let modified = content.replace(regex, (match) => {
        replacedCount++;
        return getReplacement(match, content);
    });
    
    if (modified !== content) {
        fs.writeFileSync(file, modified);
        console.log(`Updated ${file}`);
    }
});

console.log(`Finished! Replaced ${replacedCount} links.`);
