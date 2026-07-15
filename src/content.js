export const profile = {
  name: "Xing Liu",
  role: "First-year Ph.D. Student",
  institute: "Institute of Visual Computing",
  university: "Graz University of Technology",
  location: "Graz, Austria",
  supervisors: [
    { name: "Prof. Alexander Plopski", href: "https://ivc.tugraz.at/people/alexander-plopski/" },
    { name: "Prof. Dieter Schmalstieg", href: "https://ivc.tugraz.at/people/dieter-schmalstieg/" },
  ],
  email: "xing.liu@tugraz.at",
  orcid: "0009-0002-0065-2693",
  portrait: "/images/xing-liu.jpg",
  cv: "/CV_Xing_Liu_2026.pdf",
  bio: [
    "My research interests include gaze estimation, augmented and virtual reality, and human-computer interaction.",
    "Beyond my current research, I am also interested in computer graphics, especially simulation and animation.",
    "I enjoy building applications that turn ideas into interactive experiences, and I am always happy to exchange ideas, discuss new directions, and explore potential collaborations.",
  ],
  links: [
    { label: "Email", href: "mailto:xing.liu@tugraz.at" },
    { label: "ORCID", href: "https://orcid.org/0009-0002-0065-2693" },
    { label: "IVC Profile", href: "https://ivc.tugraz.at/people/xing-liu/" },
    { label: "GitHub", href: "https://github.com/liumu96" },
  ],
};

export const researchThemes = [
  { title: "Gaze estimation" },
  { title: "Augmented and virtual reality" },
  { title: "Human-computer interaction" },
];

export const education = [
  {
    period: "2025.06–Present",
    degree: "Ph.D. student",
    institution: "Institute of Visual Computing, Graz University of Technology",
    href: "https://ivc.tugraz.at/",
    location: "Graz, Austria",
    detail: "Supervisors: Prof. Alexander Plopski and Prof. Dieter Schmalstieg",
  },
  {
    period: "2016.09–2018.12",
    degree: "M.S. in Electronic Science and Technology",
    institution: "National University of Defense Technology",
    location: "China",
    detail: "Supervisor: Prof. Yuan Naichang",
  },
  {
    period: "2012.09–2016.07",
    degree: "B.S. in Microelectronics",
    institution: "Nanjing University of Aeronautics and Astronautics",
    location: "China",
    detail: "Supervisor: Prof. Bu Gang",
  },
];

export const positions = [
  {
    period: "2025.06–Present",
    role: "Ph.D. student",
    institution: "Institute of Visual Computing, TU Graz",
    href: "https://ivc.tugraz.at/",
    location: "Graz, Austria",
  },
  {
    period: "2024.06–2025.05",
    role: "Research Assistant",
    institution: "Visual Analytics and Intelligence Group, Zhejiang University",
    href: "https://zjuvai.cn/",
    location: "Hangzhou, China",
  },
  {
    period: "2024.05–2024.09",
    role: "Part-time Remote Intern",
    institution: "NUS Synteraction Lab",
    href: "https://synteraction.org/",
    location: "Remote",
  },
  {
    period: "2021.06–2023.04",
    role: "Frontend Engineer",
    institution: "Tencent Tech",
    location: "Shenzhen, China",
  },
  {
    period: "2019.03–2021.05",
    role: "Frontend Engineer",
    institution: "SF Tech",
    location: "Shenzhen, China",
  },
];

export const news = [];

export const publications = [
  {
    year: "2026",
    short: "AR",
    image: "/images/publications/artivision.png",
    title:
      "ARtiVision: Bridging Expert Knowledge and Visitor Experience through Gaze-Guided Artifact Interpretation in AR",
    authors: "W. Zhang, X. Liu, B. Xu, X. Deng, K.-K. Wong, W. Ning, and W. Chen",
    venue: "Frontiers of Computer Science, 2026",
    doi: "10.1007/s11704-026-60114-x",
    href: "https://journal.hep.com.cn/fcs/EN/10.1007/s11704-026-60114-x",
    linkLabel: "Paper",
    tags: ["Augmented Reality", "Gaze Interaction", "Cultural Heritage"],
  },
  {
    year: "2025",
    short: "VF",
    image: "/images/publications/vifeed.png",
    title:
      "ViFeed: Promoting Slow Eating and Food Awareness through Strategic Video Manipulation during Screen-Based Dining",
    authors: "Y. Chen, F. Fang-Yi Tan, Z. Wang, X. Liu, J. Zhang, Y. Huang, S. Zhao, and C. C. Yen",
    venue: "CHI '25, Article 359, 24 pages, Yokohama, Japan, 2025",
    doi: "10.1145/3706598.3713793",
    tags: ["Human–Computer Interaction", "Mindful Eating", "Gaze-Aware Systems"],
  },
];

export const explorations = [
  {
    label: "Rokid · AR application · Award",
    title: "Zhiwojing (知我境)",
    text: "Co-developed with Team Dollaria. Recipient of the Best AI Application Award at the 2025 Rokid University AR Application Innovation Challenge.",
    image: "/images/projects/zhiwojing-award.jpg",
    href: "https://finance.sina.com.cn/roll/2025-08-11/doc-infkriex9609672.shtml",
    cta: "View award source",
    external: true,
  },
  {
    label: "Blender",
    title: "3D Modeling",
    text: "Building 3D scenes and assets while exploring form, material, lighting, and visual storytelling.",
    href: "/blender",
  },
  {
    label: "Three.js · WebGL",
    title: "Creative Coding",
    text: "Turning ideas into playful, interactive 3D experiences that live directly on the web.",
  },
  {
    label: "C++ · Unity",
    title: "Physics Simulation",
    text: "Making physical systems visible and interactive through experiments with bodies, cloth, soft materials, and fluids.",
  },
];

export const blenderWorks = [
  { category: "Rigid Bodies", index: "01", preview: "/images/blender/balls-01.jpg", video: "/videos/blender/balls-01.mp4" },
  { category: "Rigid Bodies", index: "02", preview: "/images/blender/balls-02.png", video: "/videos/blender/balls-02.mp4" },
  { category: "Cloth", index: "01", preview: "/images/blender/cloth-01.png", video: "/videos/blender/cloth-01.mp4" },
  { category: "Cloth", index: "02", preview: "/images/blender/cloth-02.png", video: "/videos/blender/cloth-02.mp4" },
  { category: "Fire & Smoke", index: "01", preview: "/images/blender/fire-smoke.jpg", video: "/videos/blender/fire-smoke.mp4" },
  { category: "Smoke", index: "01", preview: "/images/blender/smoke.jpg", video: "/videos/blender/smoke.mp4" },
  { category: "Soft Body", index: "01", preview: "/images/blender/soft-body.png", video: "/videos/blender/soft-body.mp4" },
  { category: "Fluid", index: "01", preview: "/images/blender/fluid.png" },
];

export const blenderRenders = [
  { category: "Nature", title: "Forest", image: "/images/blender/forest.png" },
];
