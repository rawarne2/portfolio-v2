export interface IProject {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  link?: string;
}
// add this portfolio site as a project
// add dates to projects
export const projects: IProject[] = [
  {
    id: 1,
    title: "Top 5 Dating App",
    image: "image.png",
    description: `Dating app that limits how many people a user 
      can stay matched with at a time to encourage more quality communication`,
    technologies: ["React Native", "Django", "MongoDB"],
    github: "https://github.com/rawarne2/top-five", // make array or combine in github
    // demo: "", // make a demo
  },
  {
    id: 2,
    title: "NutriYum",
    image: "image.png",
    description: `NutriYum is a mobile app built with React Native for iOS and Android. 
      NutriYum keeps track of of all the nutrients in what you eat so you don't have to, 
      making your diet management as simple and easy as possible. All you have to do is 
      snap what you eat then bon appétit!`,
    technologies: ["React Native", "Node.js", "Express", "Postgres"],
    github: "https://github.com/NutriYum/NutriYum",
    demo: "https://www.youtube.com/watch?v=C6Lc_XBkEWU&t=2s&ab_channel=DanFeeney",
  },
  {
    id: 3,
    title: "LCA Properties, LLC",
    image: "image.png",
    description: "Angular and Express.js website displaying information about my mom’s rental properties and provides maintenance request form submissions through email. Desktop and mobile friendly. No longer in use after sale of buildings.",
    technologies: ["Angular", "Node.js", "Express"],
    github: "https://github.com/rawarne2/lca-properties",
    link: "http://www.lcaresidentialproperties.com/",
  },
  {
    id: 4,
    title: "NBA Stats Search", // not working! fix!
    image: "image.png",
    description: `This application allows users to search for the major NBA stats 
      by player name. It is made using React and Redux`, // say if this has test and what the data source is
    technologies: ["React", "Node.js", "Express"],
    github: "https://github.com/rawarne2/nba-stats",
    // demo: "https://nba-stats-search.herokuapp.com/",
    link: "https://nba-stats-search.herokuapp.com/",

  },
  {
    id: 5,
    title: "Fullstack Fitness",
    image: "image.png",
    description: `Fullstack Fitness is a React Native mobile application 
      that I created for my Hackathon project at Fullstack Academy. I had 
      just over 2 class days to work on this project and it was my first 
      interaction with React Native. This app can track how far you run or 
      bike and a timer to let you know how long you have been active. There 
      is also an audible notification every 5 minutes that lets you know how 
      far you have traveled.`,
    technologies: ["React"], // add more. look at package.json
    github: "https://github.com/rawarne2/FullstackFitness2",
    demo: "https://youtu.be/6APp1UMvJSI?si=AGpHcIOZmxpkZsRf",
  },
];

export const experienceData = [
  {
    id: 1,
    company: "84.51",
    jobTitle: "Developer Apprentice",
    location: "Cincinnati",
    description: `After my bootcamp, I did an apprenticeship at 84.51 for about 7
      months. I learned a variety of new skills on the job such as Java, Spring Boot,
      Angular to name a few. I was developing enterprise level, production code while 
      pair programming or working solo. I had a mentor from a company called Launch Scout 
      (formerly called Gaslight) who helped me get up to speed on new languages,
      frameworks, paradigms, best practices, and more so that I can begin my
      career on the right foot. The apprenticeship also included book clubs,
      algorithm challenges, and side projects.`,
    date: "November 2018 to May 2019",
    tools: [
      "Angular",
      "Spring Boot",
      "TypeScript",
      "Java",
      "Algorithms",
      "OracleDB",
      "RabbitMQ",
      "Agile",
    ],
  },
  {
    id: 2,
    company: "Kinetic Vision",
    jobTitle: "Full Stack Web Developer",
    location: "Cincinnati",
    description: `After my apprenticeship, I worked as a Fullstack Web Developer at
      Kinetic Vision for 13 months. I started off working closely with and
      learning from the lead developer, and eventually began leading my own
      projects with co-ops. At this company, I help plan and develop
      projects from beginning to end. This includes scoping, estimates,
      feature design, development, bug fixes, code reviews, documentation,
      and deployment. I also meet with clients to review features and
      discuss next steps. In addition, I helped mentor co-ops and other
      developers improve their skills and share knowledge about different
      projects.`,
    date: "July 2019 to August 2020",
    tools: [
      "React",
      "Redux",
      "JavaScript",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "Postgres",
      "Python",
      "Tornado",
      "Django",
      "Server Management",
      "Deployments",
    ],
  },
  {
    id: 3,
    company: "iFit",
    jobTitle: "Software Engineer",
    location: "Remote",
    description: `iFit is a
      consumer facing application with around 6 million users globally. I have created new features, fixed bugs, tested features,
      monitored errors, refactored code, and implemented microservices to
      create Webviews that are displayed in mobile devices and embedded
      fitness machines. We used TypeScript, AWS, Lambda Serverless, S3,
      REST, React, Redux, and Node. Worked on high visibility sections of
      the app, such as the home screen, pre and post workout screens.
      Collaborated with other teams and helped teammates learn different
      repos that I had the most experience on.`,
    date: "December 2020 to November 2022",
    tools: [
      "React",
      "Node.js",
      "Express",
      "Postgres",
      "TypeScript",
      "AWS (Lambda, S3, CloudWatch)",
      "React Query",
      "Redux",
    ],
  },
  {
    id: 4,
    company: "Codementor.io",
    jobTitle: "Freelance Software Engineer and Mentor",
    location: "Remote",
    description: `Clients schedule mentoring sessions with me for expert guidance 
      in software development. Provide code reviews, write code for various projects, 
      and debug issues.`,
    date: "September 2023 to present",
    tools: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Data Structures",
      "Algorithms",
    ],
  },
];

/*
- consider adding fitness app (describe as full auth using AWS Cognito)
- grace shopper
- meal wheel
*/
