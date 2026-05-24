const fs = require('fs');

const updateFile = (path, replacements) => {
    let content = fs.readFileSync(path, 'utf8');
    replacements.forEach((rep) => {
        // Find the nth occurrence or generic replace
        if (rep.from && rep.to) {
            content = content.replace(rep.from, rep.to);
        }
    });
    fs.writeFileSync(path, content);
}

// ABOUT
updateFile('src/app/about/page.tsx', [
    { from: /<img src="\/images\/hero\.jpg" alt="Church Background"/, to: '<img src="/images/about-hero.jpg" alt="Church Background"' },
    { from: /<img src="\/images\/hero\.jpg" alt="Historic Church"/, to: '<img src="/images/history.jpg" alt="Historic Church"' },
    { from: /<img src="\/images\/hero\.jpg" alt="Vision"/, to: '<img src="/images/vision.jpg" alt="Vision"' },
    { from: /<img src="\/images\/hero\.jpg" alt="Mission"/, to: '<img src="/images/mission.jpg" alt="Mission"' }
]);

// CONTACT
updateFile('src/app/contact/page.tsx', [
    { from: /<img src="\/images\/hero\.jpg" alt="Contact Background"/, to: '<img src="/images/contact-hero.jpg" alt="Contact Background"' },
    { from: /<img src="\/images\/hero\.jpg" alt="Church Building"/, to: '<img src="/images/contact-building.jpg" alt="Church Building"' }
]);

// EVENTS
let eventsContent = fs.readFileSync('src/app/events/page.tsx', 'utf8');
eventsContent = eventsContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/event1.jpg"');
eventsContent = eventsContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/event2.jpg"');
eventsContent = eventsContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/event3.jpg"');
eventsContent = eventsContent.replace(/<img src="\/images\/hero\.jpg" alt="Events Background"/, '<img src="/images/events-hero.jpg" alt="Events Background"');
fs.writeFileSync('src/app/events/page.tsx', eventsContent);

// GIVE
updateFile('src/app/give/page.tsx', [
    { from: /<img src="\/images\/hero\.jpg" alt="Give Background"/, to: '<img src="/images/give-hero.jpg" alt="Give Background"' },
    { from: /<img src="\/images\/hero\.jpg" alt="Worship and Giving"/, to: '<img src="/images/giving.jpg" alt="Worship and Giving"' }
]);

// MINISTRIES
let minContent = fs.readFileSync('src/app/ministries/page.tsx', 'utf8');
minContent = minContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/ministry-men.jpg"');
minContent = minContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/ministry-women.jpg"');
minContent = minContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/ministry-youth.jpg"');
minContent = minContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/ministry-children.jpg"');
minContent = minContent.replace(/<img src="\/images\/hero\.jpg" alt="Ministries Background"/, '<img src="/images/ministries-hero.jpg" alt="Ministries Background"');
fs.writeFileSync('src/app/ministries/page.tsx', minContent);

// SERMONS
let sermContent = fs.readFileSync('src/app/sermons/page.tsx', 'utf8');
sermContent = sermContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/sermon1.jpg"');
sermContent = sermContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/sermon2.jpg"');
sermContent = sermContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/sermon3.jpg"');
sermContent = sermContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/sermon4.jpg"');
sermContent = sermContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/sermon5.jpg"');
sermContent = sermContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/sermon6.jpg"');
sermContent = sermContent.replace(/<img src="\/images\/hero\.jpg" alt="Sermons Background"/, '<img src="/images/sermons-hero.jpg" alt="Sermons Background"');
fs.writeFileSync('src/app/sermons/page.tsx', sermContent);

// SERVICES
let servContent = fs.readFileSync('src/app/services/page.tsx', 'utf8');
servContent = servContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/service1.jpg"');
servContent = servContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/service2.jpg"');
servContent = servContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/service3.jpg"');
servContent = servContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/service4.jpg"');
servContent = servContent.replace(/image: "\/images\/hero\.jpg"/, 'image: "/images/service5.jpg"');
servContent = servContent.replace(/<img src="\/images\/hero\.jpg" alt="Services Background"/, '<img src="/images/services-hero.jpg" alt="Services Background"');
fs.writeFileSync('src/app/services/page.tsx', servContent);

console.log("All paths semantically updated!");
