import { IProject } from "@/app/components/Projects";


const projects: IProject[] = [
  {
    id: 1,
    title: "NutriYum",
    description: "Description of Project 1",
    technologies: ["React Native", "Node.js", "Express", "Postgres"],
    github: "https://github.com/NutriYum/NutriYum",
    liveDemo: "https://www.youtube.com/watch?time_continue=2&v=C6Lc_XBkEWU&embeds_referring_euri=http%3A%2F%2Fwww.rashaunwarner.com%2F&embeds_referring_origin=http%3A%2F%2Fwww.rashaunwarner.com&source_ve_path=Mjg2NjY&feature=emb_logo&ab_channel=DanFeeney",
  },
  {
    id: 2,
    title: "LCA Properties, LLC",
    description: "Description of Project 2.",
    technologies: ["Angular", "Node.js", "Express"],
    github: "https://github.com/rawarne2/lca-properties",
    liveDemo: "http://www.lcaresidentialproperties.com/",
  },
  {
    id: 3,
    title: "Top 5 Dating App",
    description: `Dating app that limits how many people a user 
    can stay matched with at a time to encourage more quality communication`,
    technologies: ["React Native", "Django", "MongoDB"],
    github: "https://github.com/rawarne2/top-five",
    liveDemo: "https://github.com/rawarne2/top-five",
  },
  {
    id: 4,
    title: "Fullstack Fitness",
    description: "Description of Project 2.",
    technologies: ["React", "Node.js", "Express"],
    github: "https://github.com/rawarne2/FullstackFitness2",
    liveDemo: "https://www.youtube.com/watch?v=6APp1UMvJSI&embeds_referring_euri=http%3A%2F%2Fwww.rashaunwarner.com%2F&embeds_referring_origin=http%3A%2F%2Fwww.rashaunwarner.com&source_ve_path=Mjg2NjY&feature=emb_logo&ab_channel=FullstackAcademy",
  },
  {
    id: 6,
    title: "NBA Stats Search",
    description: "Description of Project 2.",
    technologies: ["React", "Node.js", "Express"],
    github: "https://github.com/rawarne2/nba-stats",
    liveDemo: "https://nba-stats-search.herokuapp.com/",
  },
  // Add more projects as needed
];


export default projects;