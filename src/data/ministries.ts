import { Users, Heart, Music, BookOpen } from "lucide-react";

export const ministries = [
  {
    slug: "mens-ministry",
    title: "Men's Ministry (KAMA)",
    description: "Equipping men to be godly leaders in their homes, church, and society.",
    longDescription: "The Kenya Anglican Men's Association (KAMA) at Holy Trinity Church is a brotherhood dedicated to sharpening one another in faith and leadership. We believe that when men rise up to their God-given mandate, families thrive and society is transformed. We meet regularly for intense Bible study, mentorship, business networking, and sports. Whether you are a young professional, a new father, or an elder, there is a place for you to grow in character and spiritual authority.",
    icon: "Users", // Using string identifier, will map to Lucide icon in component
    image: "/images/ministry-men.jpg",
    meetingTime: "Every 2nd Saturday at 8:00 AM",
    leader: "Elder Joseph Mutua",
    contactEmail: "kama@holytrinitynairobi.org"
  },
  {
    slug: "womens-ministry",
    title: "Women's Ministry (MU)",
    description: "Empowering women to grow in faith, support one another, and serve the community.",
    longDescription: "The Mothers' Union (MU) is a vibrant sisterhood of women who are passionate about prayer, family, and community service. Our ministry provides a safe space for women to share their journeys, receive biblical counsel, and build deep, authentic friendships. Through our various programs—ranging from marriage enrichment seminars to outreach initiatives for the marginalized—we are raising a generation of Proverbs 31 women who impact their world with grace and strength.",
    icon: "Heart",
    image: "/images/ministry-women.jpg",
    meetingTime: "Every 3rd Saturday at 9:00 AM",
    leader: "Mrs. Sarah Kamau",
    contactEmail: "mu@holytrinitynairobi.org"
  },
  {
    slug: "youth-ministry",
    title: "Youth Ministry",
    description: "A dynamic environment for teens and young adults to discover their purpose in Christ.",
    longDescription: "Our Youth Ministry is arguably the most energetic group in the church! We are relentlessly committed to reaching the next generation with the uncompromised Gospel of Jesus Christ in a way they can understand and relate to. Through weekly fellowships, electrifying worship nights, camps, and discipleship tracks, we equip youths to navigate modern challenges—peer pressure, identity, and career choices—from a solid biblical worldview.",
    icon: "Music",
    image: "/images/ministry-youth.jpg",
    meetingTime: "Every Friday at 5:30 PM",
    leader: "Pastor Peter Ochieng",
    contactEmail: "youth@holytrinitynairobi.org"
  },
  {
    slug: "sunday-school",
    title: "Sunday School",
    description: "Nurturing children in the Word of God through engaging and interactive biblical lessons.",
    longDescription: "We believe that children are not just the church of tomorrow; they are the church of today. Our Sunday School ministry provides a meticulously planned, safe, and wildly fun environment for kids aged 3-12. Through age-specific classes, interactive storytelling, worship, and crafts, we help children build a deeply rooted foundation in Jesus Christ. All our teachers undergo rigorous background checks and continuous training in child ministry.",
    icon: "BookOpen",
    image: "/images/ministry-children.jpg",
    meetingTime: "Sundays at 9:30 AM & 11:30 AM",
    leader: "Teacher Mary Wambui",
    contactEmail: "kids@holytrinitynairobi.org"
  }
];
