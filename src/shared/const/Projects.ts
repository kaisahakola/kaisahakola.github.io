import { ProjectItem } from "../types/ProjectTypes"
import WildHerbSS from "../../assets/images/game-project-ss.png";
import WildherbWebpageSS from "../../assets/images/wildherb-webpage.png";
import HockeySS from "../../assets/images/naiskiekko-ss.png";
import Android from "../../assets/images/android-ss.png";
import Ios from "../../assets/images/ios-ss.png";
import AltZoneGallery from "../../assets/images/altzone-gallery.png";

export const WildHerb: ProjectItem = {
    title: "Wild Herb Adventure!",
    links: [
        {url: "https://webpages.tuni.fi/21tiko2f/wildherb.html", text: "Horta Games"}, 
        {url: "https://www.villipihlaja.fi/?lang=en", text: "villipihlaja.fi"}
    ],
    images: [
        {url: WildHerbSS, width: "1692px", height: "843px", type: "desktop"}, 
        {url: WildherbWebpageSS, width: "2862px", height: "1372px", type: "desktop"}
    ],
    technologies: ["C#", "Unity", "HTML", "CSS"],
    myRole: "Game & Web Developer",
    description: "This was a school project in which we developed a mobile game called Wild Herb Adventure. It was a team-based project, with each team assigned a client for whom to develop the game. Our client was a well-being company named Villipihlaja. Our game was awarded the Best Game title and is available for download on the Google Play Store. This project marked one of my first large-scale team collaborations and had a significant impact on my professional growth. I gained invaluable experience working with a client and was able to demonstrate my programming skills—primarily to myself, but also to my teammates. As one of the two programmers on the project, I contributed to the game development and independently created the website.",
} as const

export const Hockey: ProjectItem = {
    title: "Women's Ice Hockey",
    links: [{url: "https://www.naiskiekko.fi/", text: "naiskiekko.fi"}],
    images: [{url: HockeySS, width: "2834px", height: "1342px", type: "desktop"}],
    technologies: ["JavaScript", "Pug", "HTML", "SCSS", "Node.js", "PostgreSQL"],
    myRole: "Frontend Developer",
    description: "Building a website for women’s ice hockey in Finland. The website has centralized information about Finnish women's ice hockey. I was a part of the project when it first started and the website has since been further developed by other developers. My role consisted of developing the frontend side of the website, but I also got to try backend development at times when my help was needed. During this project I learned to trust my skills and take more responsibility as a member of a team. ",
} as const

export const AndroidAndIos: ProjectItem = {
    title: "Android and iOS Applications",
    links: [
        {url: "https://github.com/kaisahakola/mobile-crud-android", text: "mobile-crud-android"}, 
        {url: "https://github.com/kaisahakola/mobile-crud-ios", text: "mobile-crud-ios"}
    ],
    images: [
        {url: Android, width: "648px", height: "1374px", type: "mobile"}, 
        {url: Ios, width: "768px", height: "1572px", type: "mobile"}
    ],
    technologies: ["Swift", "Kotlin"],
    description: "A project that includes two CRUD-style mobile applications. One of the applications has been developed for the Android operating system and the other for the iOS operating system. The functionality is the same in both applications. The application is a list of contacts where the user can edit, delete and add new contacts.",
} as const

export const AltZone: ProjectItem = {
    title: "ALT Zone Webpages",
    links: [
        {url: "https://altzone.fi/en", text: "altzone.fi/en"},
        {url: "https://github.com/Alt-Org/Altzone-WebPages", text: "Altzone-Webpages"}
    ],
    technologies: ["TypeScript", "SCSS", "Next.js", "Headless CMS"],
    myRole: "Lead Web Developer",
    description: "This is a volunteer-driven website development project, and you can find more information about it through the link above. I began working on this project last fall and was promoted to Lead Web Developer in January. In my role, I am responsible for developing the website, conducting code reviews, and managing issue tracking. Stepping out of my comfort zone by accepting the invitation to join the leadership team has been incredibly rewarding. This experience has provided valuable opportunities for growth, and I have significantly enhanced my skills in modern web development.",
    images: [
        {url: AltZoneGallery, width: "2862px", height: "1372px", type: "desktop"}
    ]
} as const
