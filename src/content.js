export const profile = {
  name: "Xing Liu",
  role: "Ph.D. Student",
  institute: "Institute of Visual Computing",
  instituteHref: "https://ivc.tugraz.at/",
  university: "Graz University of Technology",
  location: "Graz, Austria",
  supervisors: [
    { name: "Prof. Alexander Plopski", href: "https://ivc.tugraz.at/people/alexander-plopski/" },
    { name: "Prof. Dieter Schmalstieg", href: "https://ivc.tugraz.at/people/dieter-schmalstieg/" },
  ],
  email: "xing.liu@tugraz.at",
  orcid: "0009-0002-0065-2693",
  portrait: "/images/xing-liu-portrait-winter-2026.jpg",
  cv: "/CV_Xing_Liu_2026.pdf",
  researchSummary:
    "My research focuses on eye tracking and gaze interaction in augmented and virtual reality. My broader interests include computer graphics, simulation, and animation.",
  backgroundBio:
    "Previously, I was a research assistant at Zhejiang University. I received my M.S. from the National University of Defense Technology and my B.S. from Nanjing University of Aeronautics and Astronautics.",
  collaborationNote: "I welcome discussions and potential collaborations.",
  links: [
    { label: "Email", href: "mailto:xing.liu@tugraz.at" },
    { label: "ORCID", href: "https://orcid.org/0009-0002-0065-2693" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=mg7MkI4AAAAJ" },
    { label: "IVC Profile", href: "https://ivc.tugraz.at/people/xing-liu/" },
    { label: "GitHub", href: "https://github.com/liumu96" },
  ],
};

export const researchThemes = [
  { title: "Eye tracking & gaze interaction", emoji: "👀" },
  { title: "Augmented and virtual reality", emoji: "🥽" },
  { title: "Human-computer interaction", emoji: "✨" },
  { title: "Computer graphics", emoji: "🎨" },
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
    slug: "danqingscan",
    originalContentOnly: true,
    // Abstract transcribed from the publisher; retain the source wording, including typos.
    abstractSource: "https://www.sciencedirect.com/science/article/pii/S2468502X26000495",
    venueLabel: "Visual Informatics",
    year: "2026",
    short: "DS",
    image: "/images/publications/danqingscan.jpg",
    title: "DanqingScan: Low-cost 3D scanning for traditional Chinese painting analysis",
    authors: "Y. Li, X. Liu, Y. Wu, M. Xu, W. Zhang, Y. Zhang, and W. Chen",
    authorLinks: {
      "Y. Li": "https://yunhaoli2020.github.io/",
      "W. Zhang": "https://zwstart.github.io/",
      "W. Chen": "https://zjuvai.cn/authors/weichen/",
    },
    venue: "Visual Informatics, 2026, Article 100353 · In press · Journal Pre-proof",
    publicationStatus: "In press",
    doi: "10.1016/j.visinf.2026.100353",
    href: "https://www.sciencedirect.com/science/article/pii/S2468502X26000495",
    linkLabel: "DOI",
    tags: ["3D Reconstruction", "Computational Imaging", "Cultural Heritage"],
    summary:
      "A low-cost structured-light 3D scanning system for traditional Chinese paintings, built from off-the-shelf hardware to recover high-resolution surface normals and detailed 3D surface models.",
    abstract: [
      "With the progress of 3D scanning technologies, these is a growing demand on low-cost, high-quality 3D scanning solutions for cultural heritage preservation. Specifically, accurate 3D surface detail acquisition can significantly support researchers and conservators in assessing the surface damage and restoration conditions of Chinese paintings. This, in turn, facilitates further conservation efforts as well as related tasks such as digital documentation, brushstroke analysis, and other forms of technical examination. However, existing 3D scanning solutions for cultural heritage preservation are often suffer from high cost, lack of user-friendliness, and relatively low accuracy. To address these limitations, in this paper, we propose a robust and low-cost structured light 3D scanning system specifically designed for traditional Chinese paintings. The system is built entirely from off-the-shelf consumer-grade hardware components. Based upon the gradient illumination, it enables high-quality surface scanning and produces high-resolution surface normal maps of scanned paintings. These normal maps can be further transferred into detailed 3D surface models. To enhance user friendliness, we also developed an interactive user interface that allows users to observe, analysis and annotate key features such as brushstrokes, damages and trace of previous restorations. To validate the effectiveness of our method, we conduct extensive experiments by scanning the real ancient Chinese paintings. Experimental results show our system’s potential to support a wide range of cultural heritage applications, including brushstroke analysis, damage assessment, and painting restoration.",
    ],
    researchDetails: [
      { label: "Problem", text: "Make high-resolution surface inspection practical for painting conservation without relying on expensive specialist scanners." },
      { label: "System", text: "A consumer-hardware structured-light setup combines gradient illumination, normal-map recovery, and 3D reconstruction." },
      { label: "Use", text: "The resulting models support close inspection of brushstrokes, surface damage, and evidence of earlier restoration." },
    ],
    figures: [
      {
        src: "/images/publications/danqingscan.jpg",
        alt: "DanqingScan pipeline from the scanning setup to surface reconstruction and an interactive inspection interface",
        originalCaption: true,
        caption: "We propose DanqingScan, a low-cost 3D scanning system for Chinese painting analysis using consumer-grade hardware. It employs structured light to estimate surface normals and reconstruct 3D surfaces, augmented by an interactive interface for detailed examination and analysis.",
      },
      {
        // Publisher original: https://ars.els-cdn.com/content/image/1-s2.0-S2468502X26000495-gr2_lrg.jpg
        src: "/images/publications/details/danqingscan-gradient-illumination.jpg",
        alt: "Opposing horizontal and vertical gradient-illumination images used to estimate surface-normal components and form a normal map",
        originalCaption: true,
        caption: "Illustration of the gradient illumination procedure. Images are acquired under each gradient pattern in horizontal and vertical direction. From there the gradient illuminated images are subtracted, forming 𝑥 and 𝑦 component of the normal map. Then we estimate the z component and form the finally computed surface normal map.",
      },
      {
        // Publisher original: https://ars.els-cdn.com/content/image/1-s2.0-S2468502X26000495-gr4_lrg.jpg
        src: "/images/publications/details/danqingscan-painting-reconstruction.jpg",
        paperFigure: 4,
        alt: "Lotus painting shown as a color image, surface normal map, and reconstructed surface, with enlarged flower details",
        originalCaption: true,
        caption: "Results of our image-based stitching technique. (a) Albedo map of the whole image of stitched printing. (b) Reconstructed surface normal map. (c) Reconstructed 3D surface. (d) Close-up view of surface reconstruction. (e) The same section with albedo texture mapping applied.",
      },
      {
        // Publisher original: https://ars.els-cdn.com/content/image/1-s2.0-S2468502X26000495-gr6_lrg.jpg
        src: "/images/publications/details/danqingscan-normal-comparison.jpg",
        visible: false,
        paperFigure: 6,
        alt: "Side-by-side surface normal maps of a painted flower from UniPS, SDM-UniPS, and DanqingScan",
        originalCaption: true,
        caption: "Qualitative evaluations of our method against SOTA universal PS methods on the scanned Chinese painting data. The results are represented by the estimated normal maps from different methods. Experimental results demonstrate that our method achieves superior performance on reconstructing 3D surface of Chinese paintings.",
      },
    ],
    highlights: [
      "Combines gradient illumination with consumer-grade hardware for high-resolution surface acquisition.",
      "Transforms surface normal maps into detailed 3D surface models for technical examination.",
      "Provides an interactive interface for inspecting brushstrokes, damage, and traces of previous restoration.",
      "Evaluated by scanning real ancient Chinese paintings.",
    ],
  },
  {
    slug: "causal-gaze-upsampling",
    projectPageAvailable: false,
    venueLabel: "GEMINI · ISMAR Workshop",
    year: "2026",
    short: "CG",
    image: "/images/publications/causal-gaze-upsampling.png",
    title: "Causal Gaze Upsampling from Sparse Gaze Observations for XR",
    authors: "X. Liu and A. Plopski",
    authorLinks: {
      "A. Plopski": "https://ivc.tugraz.at/people/alexander-plopski/",
    },
    venue: "GEMINI 2026 at ISMAR 2026 · October 2026",
    publicationStatus: "Accepted · Paper coming soon",
    href: "https://sites.google.com/view/gemini-2026/home",
    linkLabel: "Workshop",
    tags: ["Gaze Prediction", "Sparse Gaze", "Extended Reality"],
    summary:
      "A position paper that formulates causal gaze upsampling: producing a target-rate gaze stream in real time from sparse measured gaze anchors and target-rate headset motion.",
    abstract: [
      "Gaze provides important information for foveated rendering, gaze-based interaction, and user-behavior analysis in extended reality (XR). High-frequency gaze sampling is desirable for interaction and for detecting fixations and saccades, but power constraints on mobile devices may prevent eye gaze from being available at the desired rate.",
      "We propose causal gaze upsampling: producing a target-rate gaze stream in real time from sparse gaze observations. Measured gaze samples are available only at anchor frames, while headset motion remains synchronized with the target timeline. At each target frame, either a measured anchor or a causal prediction updates the history. After an anchor arrives, retrospective imputation can revise stored predictions without changing already emitted outputs. The paper discusses how this formulation relates to existing gaze-prediction approaches and what it implies for XR applications.",
    ],
    researchDetails: [
      { label: "Input", text: "Sparse measured gaze anchors together with headset motion that remains available at the target output rate." },
      { label: "Online rule", text: "At non-anchor frames, the system predicts only the current gaze sample from past gaze history and currently available head motion." },
      { label: "Scope", text: "This position paper defines the causal problem setting and its open research questions; it does not yet claim a completed benchmark or deployed model." },
    ],
    figures: [
      {
        src: "/images/publications/causal-gaze-upsampling.png",
        alt: "Conceptual pipeline for causal gaze upsampling from sparse gaze anchors and target-rate head motion",
        caption: "Conceptual formulation: sparse measured anchors and target-rate headset motion support causal single-step prediction on the target timeline.",
      },
    ],
    highlights: [
      "Defines a causal, single-step prediction setting without access to future gaze anchors.",
      "Uses measured anchors to correct online history while predictions fill the intermediate target frames.",
      "Separates emitted causal predictions from optional retrospective imputation of stored history.",
      "Identifies open questions around rollout error, irregular anchors, temporal stability, and power trade-offs.",
    ],
  },
  {
    slug: "artivision",
    originalContentOnly: true,
    // Accepted manuscript: Abstract and captions of Figures 1–2, copied verbatim.
    abstractSource: "https://journal.hep.com.cn/fcs/EN/10.1007/s11704-026-60114-x",
    venueLabel: "Frontiers of Computer Science",
    year: "2026",
    short: "AR",
    image: "/images/publications/artivision.png",
    title:
      "ARtiVision: Bridging Expert Knowledge and Visitor Experience through Gaze-Guided Artifact Interpretation in AR",
    authors: "W. Zhang, X. Liu, B. Xu, X. Deng, K.-K. Wong, W. Ning, and W. Chen",
    authorLinks: {
      "W. Zhang": "https://zwstart.github.io/",
      "B. Xu": "https://jiangmizzz.com/",
      "K.-K. Wong": "https://kamkwai.com/",
      "W. Chen": "https://zjuvai.cn/authors/weichen/",
    },
    venue: "Frontiers of Computer Science, 2026 · In press · Accepted manuscript (Just Accepted)",
    publicationStatus: "In press",
    doi: "10.1007/s11704-026-60114-x",
    href: "https://journal.hep.com.cn/fcs/EN/10.1007/s11704-026-60114-x",
    linkLabel: "DOI",
    tags: ["Augmented Reality", "Gaze Interaction", "Cultural Heritage"],
    summary:
      "A gaze-guided augmented reality framework that connects curatorial knowledge with personalized, interactive artifact interpretation in museums.",
    abstract: [
      "Museums play a vital role in promoting public art education and cultural appreciation. However, traditional guidance methods often lack interactivity and fail to convey curatorial insights effectively, resulting in fragmented visitor attention and superficial understanding of artifacts. To address these challenges, we present ARtiVision, a gaze-guided augmented reality framework designed to deliver immersive and personalized museum experiences. Based on interviews with 2 curators and a visitor behavior study with 12 museum visitors, we construct a hierarchical artifact appreciation model that bridges expert knowledge with diverse visitor needs, enabling multi-level engagement with cultural exhibits. ARtiVision integrates two core components: an expert-driven annotation system for structuring interpretive content, and an AR application that presents this content interactively based on visitor preferences and attention. This design allows visitors to explore artifacts at varying depths, enhancing autonomy and comprehension. A follow-up study with 12 museum visitors and 2 curators demonstrate that ARtiVision improves engagement duration, enhances knowledge retention, and streamlines curatorial workflows. Our results highlight ARtiVision’s potential as a scalable, user-adaptive solution for enriching museum experiences.",
    ],
    researchDetails: [
      { label: "Foundation", text: "Curator interviews and visitor eye-tracking data are translated into a four-level artifact-appreciation structure." },
      { label: "Experience", text: "Gaze-responsive AR lets visitors move from basic context to in-depth interpretation at their own pace." },
      { label: "Evaluation", text: "The work studies both sides of the workflow: the museum visitor experience and the curator's authoring process." },
    ],
    figures: [
      {
        src: "/images/publications/artivision.png",
        alt: "ARtiVision overview showing museum viewing behavior, expert annotations, layered AR content, and visitor attention",
        originalCaption: true,
        caption: "Overview of the ARtiVision framework for gaze-guided artifact interpretation. (A) Visitor viewing heatmap without guidance, showing dispersed attention. (B) Expert annotations with viewing path and focal areas on a traditional Chinese painting. (C) Four appreciation levels: (C1) Basic, (C2) Moderate, (C3) Advanced, (C4) In-depth. (D) Visitor interacting with ARtiVision AR application via Vision Pro. (E) Interaction heatmap showing focused exploration in the AR environment.",
      },
      {
        src: "/images/publications/details/artivision-eye-tracking.png",
        visible: false,
        alt: "ARtiVision eye-tracking study analysis including heatmaps, viewing time, attention importance, gaze paths, and seal viewing frequency",
        originalCaption: true,
        caption: "(A) Components of the TCP: core painting (A1), inscriptions (A2), seals (A3), and key objects (A4, A5). (B) Eye-tracking heatmap of V1, showing gaze distribution, entry points (white triangles), and viewing duration. (C) Aggregated analysis of 12 participants: (C1) viewing time, (C2) attention importance (C2-1 fixation density, C2-2 unattended regions), (C3) viewing path complexity, and (C4) seal attention distribution.",
      },
      {
        src: "/images/publications/details/artivision-framework.png",
        paperFigure: 4,
        alt: "ARtiVision framework from expert information hierarchy and annotation to AR presentation",
        originalCaption: true,
        caption: "ARtiVision framework: (A) Experts define a four-level information hierarchy; (B) artifacts are annotated via a annotation system; (C) annotations are structured into data; (D) AR application renders four-level guidance for visitors.",
      },
      {
        src: "/images/publications/details/artivision-evaluation.png",
        visible: false,
        paperFigure: 6,
        portrait: true,
        alt: "ARtiVision evaluation showing usability, knowledge acquisition, appreciation experience, and viewing time",
        originalCaption: true,
        caption: "(A) Usability (SUS 81.9). (B) Knowledge acquisition with detailed AR (B1) vs. non-AR (B2) comparison. (C) Appreciation experience. (D) Viewing time comparison.",
      },
    ],
    highlights: [
      "Builds a hierarchical artifact appreciation model from interviews with 2 curators and a visitor behavior study with 12 museum visitors.",
      "Combines an expert-driven annotation system with an AR application that adapts interpretive content to visitor preferences and attention.",
      "Evaluates the system in a follow-up study with 12 museum visitors and 2 curators.",
      "Reports longer engagement, improved knowledge retention, and a more streamlined curatorial workflow.",
    ],
  },
  {
    slug: "vifeed",
    originalContentOnly: true,
    // Author-hosted paper (CC BY 4.0), Abstract on PDF page 2. Do not copy-edit.
    abstractSource: "https://synteraction.org/assets/files/Chen,%20Y%20et%20al%202025%20-%20ViFeed%20Promoting%20Slow%20Eating%20and%20Food%20Awareness%20through%20Strategic%20Video%20Manipulation%20during%20Screen-Based%20Dining.pdf",
    venueLabel: "CHI",
    year: "2025",
    short: "VF",
    image: "/images/publications/vifeed.png",
    title:
      "ViFeed: Promoting Slow Eating and Food Awareness through Strategic Video Manipulation during Screen-Based Dining",
    authors: "Y. Chen, F. Fang-Yi Tan, Z. Wang, X. Liu, J. Zhang, Y. Huang, S. Zhao, and C. C. Yen",
    authorLinks: {
      "Y. Chen": "https://www.polyu.edu.hk/sd/people/academic-staff/chen-yang/",
      "F. Fang-Yi Tan": "https://feliciatan.co/",
      "Z. Wang": "https://sg.linkedin.com/in/zhuoyu-wang-391b29248",
      "J. Zhang": "https://sg.linkedin.com/in/jiayi-georgia-zhang-167122165",
      "Y. Huang": "https://ischool.illinois.edu/people/yun-huang",
      "S. Zhao": "https://www.shengdongzhao.com/",
      "C. C. Yen": "https://discovery.nus.edu.sg/960-chingchiuan-yen",
    },
    venue: "CHI '25, Article 359, 24 pages, Yokohama, Japan, 2025",
    doi: "10.1145/3706598.3713793",
    award: "CHI 2025 Honorable Mention Award",
    tags: ["Human–Computer Interaction", "Mindful Eating", "Gaze-Aware Systems"],
    summary:
      "A video-watching system that uses subtle playback-speed adjustments and glanceable food-awareness cues to support mindful eating during screen-based meals.",
    abstract: [
      "Given the widespread presence of screens during meals, the notion that digital engagement is inherently incompatible with mindfulness. We demonstrate how the strategic design of digital content can enhance two core aspects of mindful eating: slow eating and food awareness. Our research unfolded in three sequential studies: (1). Zoom Eating Study: Contrary to the assumption that video-watching leads to distraction and overeating, this study revealed that subtle video speed manipulations—can promote slower eating (by 15.31%) and controlled food intake (by 9.65%) while maintaining meal satiation and satisfaction. (2). Co-design workshop: Informed the development of ViFeed, a video playback system strategically incorporating subtle speed adjustments and glanceable visual cues. (3). Field Study: A week-long deployment of ViFeed in daily eating demonstrated its efficacy in fostering food awareness, food appreciation, and sustained engagement. By bridging the gap between ideal mindfulness practices and screen-based behaviors, this work offers insights for designing digital-wellbeing interventions that align with, rather than against, existing habits.",
    ],
    researchDetails: [
      { label: "Intervention", text: "Video playback gradually slows while camera-based eating-state detection controls when glanceable food-awareness cues appear." },
      { label: "Research program", text: "The project progresses from a controlled eating study, through participatory design, to a one-week field deployment." },
      { label: "Outcome", text: "The studies show how an existing screen-based habit can be redesigned to encourage slower eating and greater food awareness." },
    ],
    figures: [
      {
        src: "/images/publications/vifeed.png",
        alt: "ViFeed system with playback-speed manipulation, eating-state detection, and glanceable mindful-eating cues",
        originalCaption: true,
        caption: "Interacting with ViFeed While watching videos, ViFeed subtly adjusts the video playback speed to encourage slower eating ① and continuously detecting eating state using the camera ②. Once attention diversion (prolonged eating pauses with gaze on the screen) is detected, glanceable food awareness cues are displayed in the live stream format on the right corner of the screen to nudge ③. When the user resumes habitual eating behavior as detected by the camera, ④ The food awareness cues automatically disappear ⑤.",
      },
      {
        src: "/images/publications/details/vifeed-study-overview.png",
        visible: false,
        alt: "Overview of the three ViFeed studies covering slow eating, co-design, and the field study",
        originalCaption: true,
        caption: "Study overview: Exploring mindfulness via two components - slow eating and food awareness - across three studies (Note: ◯ indicate maintenance, ⊗ indicates compromise, ✓⃝ indicates enhancement)",
      },
      {
        src: "/images/publications/details/vifeed-eating-results.png",
        visible: false,
        paperFigure: 3,
        alt: "Eating behavior across Focused, Standard, and Adjusted eating conditions",
        originalCaption: true,
        caption: "Eating behavior in terms of food intake, food oral processing behavior and gaze on food across three meal conditions (Yellow: Focused, Blue: Standard, Green:Adjusted",
      },
      {
        src: "/images/publications/details/vifeed-prompt-pipeline.png",
        paperFigure: 6,
        alt: "Facial tracking, chewing monitoring, signal processing, and conditions for triggering food-awareness cues",
        originalCaption: true,
        caption: "System pipeline to trigger prompts",
      },
      {
        src: "/images/publications/details/vifeed-field-results.png",
        visible: false,
        paperFigure: 8,
        alt: "Comparison of food awareness in the ViFeed and Control groups on days 1 and 7",
        originalCaption: true,
        caption: "Comparison of food awareness between ViFeed and Control on D1 (immediate effect) and D7 (prolonged effect)",
      },
    ],
    highlights: [
      "A Zoom eating study found that subtle video-speed manipulation promoted 15.31% slower eating and more controlled food intake.",
      "A co-design workshop informed the system's playback interventions and glanceable awareness cues.",
      "A week-long field deployment examined ViFeed during everyday eating routines.",
      "Received a CHI 2025 Honorable Mention Award.",
    ],
  },
];

export const explorations = [
  {
    label: "Rokid · AR application · Award",
    title: "Zhiwojing (知我境)",
    text: "Co-developed with Team Dollaria. Recipient of the Best AI Application Award at the 2025 Rokid University AR Application Innovation Challenge.",
    image: "/images/projects/zhiwojing-award.jpg",
    href: "https://finance.sina.com.cn/roll/2025-08-11/doc-infkriex9609672.shtml",
    showCta: false,
    external: true,
  },
  {
    label: "Blender",
    title: "3D Modeling",
    text: "Building 3D scenes and assets while exploring form, material, lighting, and visual storytelling.",
    href: "/blender",
    visible: false,
  },
  {
    label: "Three.js · WebGL",
    title: "Creative Coding",
    text: "Turning ideas into playful, interactive 3D experiences that live directly on the web.",
    visible: false,
  },
  {
    label: "C++ · Unity",
    title: "Physics Simulation",
    text: "Making physical systems visible and interactive through experiments with bodies, cloth, soft materials, and fluids.",
    visible: false,
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
