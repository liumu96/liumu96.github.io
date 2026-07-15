export const profile = {
  name: "Xing Liu",
  role: "Ph.D. Student",
  affiliation: "Institute of Visual Computing, TU Graz",
  location: "Graz, Austria",
  email: "xing.liu@tugraz.at",
  introduction:
    "I am a Ph.D. student at the Institute of Visual Computing, TU Graz, working with Alexander Plopski. My research focuses on gaze prediction and human–computer interaction for wearable XR.",
  perspective:
    "My work connects machine learning with eye tracking, interactive systems, and real-time 3D engineering. I am particularly interested in causal and adaptive gaze modeling that can operate under the constraints of wearable devices.",
  links: [
    { label: "Email", href: "mailto:xing.liu@tugraz.at" },
    { label: "TU Graz", href: "https://ivc.tugraz.at/people/xing-liu/" },
    { label: "GitHub", href: "https://github.com/liumu96" },
  ],
};

export const researchThemes = [
  {
    index: "01",
    title: "Gaze prediction",
    text: "Causal models that reconstruct or predict gaze streams from sparse observations and continuously available motion signals.",
  },
  {
    index: "02",
    title: "Wearable XR",
    text: "Investigating gaze methods that may reduce the need for continuous high-rate eye tracking on AR glasses.",
  },
  {
    index: "03",
    title: "Interactive systems",
    text: "Connecting sensing and prediction quality to human–computer interaction, behavior understanding, and visual computing applications.",
  },
];

export const projects = [
  {
    category: "Current research",
    title: "Adaptive gaze modeling for wearable XR",
    text: "Exploring causal gaze upsampling from low-frequency observations and head motion, with an emphasis on online prediction and realistic device constraints.",
    accent: "cyan",
  },
  {
    category: "Augmented reality · Cultural heritage",
    title: "ARtiVision",
    text: "A gaze-guided AR system that bridges expert knowledge and visitor experience for artifact interpretation.",
    accent: "violet",
    href: "https://journal.hep.com.cn/fcs/EN/10.1007/s11704-026-60114-x",
  },
  {
    category: "HCI · Human–food interaction",
    title: "ViFeed",
    text: "A CHI 2025 collaboration studying strategic video manipulation for slower eating and greater food awareness during screen-based dining.",
    accent: "amber",
    href: "https://dl.acm.org/doi/10.1145/3706598.3713793",
  },
  {
    category: "3D reconstruction · Cultural heritage",
    title: "Painting micro-surface reconstruction",
    text: "Structured-light scanning, reconstruction, and interactive visualization of painting surface details for conservation workflows.",
    accent: "rose",
  },
];

export const publications = [
  {
    year: "2026",
    title:
      "ARtiVision: Bridging Expert Knowledge and Visitor Experience through Gaze-Guided Artifact Interpretation in AR",
    authors:
      "Wei Zhang, Xing Liu, Biying Xu, Xinzhuo Deng, Kam-Kwai Wong, Wenjie Ning, and Wei Chen",
    venue: "Frontiers of Computer Science",
    href: "https://journal.hep.com.cn/fcs/EN/10.1007/s11704-026-60114-x",
    doi: "10.1007/s11704-026-60114-x",
  },
  {
    year: "2025",
    title:
      "ViFeed: Promoting Slow Eating and Food Awareness through Strategic Video Manipulation during Screen-Based Dining",
    authors:
      "Yang Chen, Felicia Fang-Yi Tan, Zhuoyu Wang, Xing Liu, Jiayi Zhang, Yun Huang, Shengdong Zhao, and Ching Chiuan Yen",
    venue: "CHI Conference on Human Factors in Computing Systems",
    href: "https://dl.acm.org/doi/10.1145/3706598.3713793",
    doi: "10.1145/3706598.3713793",
  },
];

export const journey = [
  {
    label: "Now",
    title: "Ph.D. Student · TU Graz",
    text: "Eye gaze prediction and human–computer interaction in AR/VR environments.",
  },
  {
    label: "Research",
    title: "Research Assistant · Zhejiang University",
    text: "AR, visual analytics, and cultural-heritage research at the State Key Laboratory of CAD&CG.",
  },
  {
    label: "Industry",
    title: "3D visualization · Tencent Tech & SF Tech",
    text: "Interactive 3D visualization and front-end systems for industrial digital twins.",
  },
  {
    label: "2018",
    title: "M.Eng. · Electronic Science and Technology",
    text: "National University of Defense Technology.",
  },
  {
    label: "2016",
    title: "B.Eng. · Microelectronics",
    text: "Nanjing University of Aeronautics and Astronautics.",
  },
];
