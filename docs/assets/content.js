// Shared content, based on the supplied October 2026 CV and ASC presentation.
// Keep news newest first. Empty links and unavailable photographs are omitted.
window.PORTFOLIO = {
  profile: {
    name: "Abid Al Morshed",
    role: "PhD Candidate, Mechanical & Aerospace Engineering",
    affiliation: "Michigan Technological University",
    intro: "I develop computational models to understand how composite structures deform and fracture, with a focus on finite element methods and custom Abaqus implementations.",
    portrait: "assets/portrait.webp",
    email: "abidalmorshed@gmail.com",
    links: { linkedin: "", github: "https://github.com/abid-al-morshed", scholar: "", researchgate: "" },
    resume: "", cv: "assets/abid-al-morshed-cv.pdf"
  },
  research: {
    title: "Phase-field modeling of composite fracture",
    summary: "A three-dimensional framework for intralaminar fracture in fiber-reinforced composites under quasi-static and dynamic loading.",
    image: "assets/composite-fracture.png",
    imageAlt: "Finite element mesh and phase-field fracture prediction for a unidirectional lamina in three-point bending",
    imageCaption: "Finite element mesh and predicted fracture in a unidirectional lamina under three-point bending. From my ASC 2026 presentation.",
    overview: "The direction of the fibers and the type of loading both influence how a composite cracks. My research develops a phase-field model that accounts for these effects within a common framework for slow and rapid loading.",
    approach: "The formulation separates the energy associated with opening and shear, then combines these contributions with a mixed-mode fracture resistance. Fiber orientation enters through the anisotropic constitutive response, while the crack-surface regularization remains isotropic.",
    implementation: "I implement the formulation in Abaqus through custom Fortran user elements (UELs), defining the element residuals and tangent matrices. A staggered solution updates displacement and damage, with Newmark time integration for dynamic loading.",
    findings: [
      {title:"Fiber orientation and loading mode", text:"Quasi-static open-hole tension examples reproduce orientation-dependent response and crack paths. Mode III examples extend the formulation to out-of-plane shear."},
      {title:"Dynamic fracture and inertia", text:"Comparisons of classical, partially coupled, and fully coupled formulations show that the treatment of inertia affects crack width and branching. In the dynamic open-hole tension example, full coupling produces a sharper, less branched crack pattern."},
      {title:"Benchmark comparisons", text:"The framework is evaluated through open-hole tension, Mode III fracture, impact benchmarks, and three-point bending, with comparisons to available experimental results."}
    ],
    related: ["mode-resolved-manuscript", "dynamic-fracture-manuscript", "asc-proceeding"]
  },
  earlierResearch: [
    {id:"cfd-ml", title:"CFD and machine learning", summary:"Mixed convective heat transfer in a vented cavity under dynamic flow modulation.", year:"2025", url:"https://doi.org/10.1002/htj.23349"},
    {id:"energy-storage", title:"Thermal energy storage", summary:"Thermal analysis of compressed-air energy storage with phase-change materials.", year:"2024", url:"https://doi.org/10.2139/ssrn.4993585"}
  ],
  engineering: [
    {title:"Peltier-effect refrigerator", image:"assets/refrigerator.webp", alt:"Peltier refrigerator prototype", summary:"Designed and built a thermoelectric refrigerator prototype, including the CAD model and physical assembly."},
    {title:"Arduino-based self-balancing robot", image:"assets/robot.webp", alt:"Arduino self-balancing robot prototype", summary:"Developed a self-balancing prototype through mechanical modeling, circuit design, and Arduino control."}
  ],
  publications: [
    {id:"cfd-ml-paper", title:"Mixed convective heat transfer characteristic in vented cavity under dynamic flow modulation by CFD and neural network model approaches", status:"Published", type:"Journal article", authors:["M. A. A. Morshed","N. A. Mini","M. A. Hakim","M. N. Hasan"], venue:"Heat Transfer", detail:"54(5), 3072–3087", year:"2025", doi:"https://doi.org/10.1002/htj.23349"},
    {id:"energy-storage-paper", title:"Thermal Analysis of an Advanced Adiabatic Compressed Air Energy Storage System with Phase Changing Materials for Thermal Energy Storage", status:"Published", type:"Conference proceedings", authors:["M. A. A. Morshed","M. A. Mahmud","M. Atiqur","M. Z. Haq"], venue:"Proceedings of the Energy Conference 2023: National and Global Issues (ENCON23)", detail:"", year:"2024", doi:"https://doi.org/10.2139/ssrn.4993585"},
    {id:"cfrp-book-chapter", title:"Lessons Learned from CFRP Failures: Case Studies and Insights", status:"Accepted", type:"Book chapter", authors:["M. A. A. Morshed","N. A. Mini"], venue:"Handbook of Carbon Fiber Reinforced Polymer Composites", detail:"Edited by Md Zillur Rahman and Kalim Deshmukh. Springer Nature.", year:"2026", doi:""},
    {id:"asc-proceeding", title:"Predicting Fracture in Fiber-Reinforced Composites Using a Novel Mixed-Mode Energy Decomposition Based Phase-Field Model Under Dynamic Loading", status:"Accepted", type:"Conference proceedings", authors:["M. A. A. Morshed","T. Sain"], venue:"American Society for Composites 41st Annual Technical Conference", detail:"", year:"2026", doi:""},
    {id:"mode-resolved-manuscript", title:"A Three-dimensional Mode-resolved Phase-field Formulation for Quasi-static and Dynamic Intralaminar Fracture in Unidirectional Composite", status:"Under review", type:"Journal manuscript", authors:["M. A. A. Morshed","M. R. Karim","A. Kumar","T. Sain"], venue:"Computer Methods in Applied Mechanics and Engineering", detail:"", year:"2026", doi:""},
    {id:"dynamic-fracture-manuscript", title:"Towards Dynamic Fracture Modeling of Fiber-Reinforced Composites Using a Mixed-Mode Energy Decomposition-Based Phase-Field Approach", status:"Under review", type:"Journal manuscript", authors:["M. A. A. Morshed","T. Sain"], venue:"Engineering Fracture Mechanics", detail:"", year:"2026", doi:""}
  ],
  // Home features these events; the full gallery keeps every event below.
  homeActivities: ["ses-2026", "asc-2026", "three-minute-thesis-2026"],
  events: [
    {id:"ses-2026", title:"Society of Engineering Science", shortTitle:"SES", date:"", dateLabel:"2026", location:"", description:"Presenting composite fracture research at SES", photos:[], slides:"", recording:""},
    {id:"asc-2026", title:"American Society for Composites", shortTitle:"ASC", date:"", dateLabel:"2026", location:"", description:"Presenting dynamic fracture modeling at ASC", photos:[], slides:"", recording:""},
    {id:"three-minute-thesis-2026", title:"Three Minute Thesis", shortTitle:"3MT", date:"", dateLabel:"2026", location:"Michigan Tech", description:"Three Minute Thesis at Michigan Tech", photos:[], slides:"", recording:""},
    {id:"three-minute-thesis-2025", title:"Three Minute Thesis", shortTitle:"3MT", date:"", dateLabel:"2025", location:"Michigan Tech", description:"Three Minute Thesis at Michigan Tech", photos:[], slides:"", recording:""},
    {id:"gsg-poster-2025", title:"GSG poster presentation", shortTitle:"GSG", date:"", dateLabel:"2025", location:"", description:"Poster presentation at GSG", photos:[], slides:"", recording:""},
    {id:"icc-poster-2025", title:"ICC poster presentation", shortTitle:"ICC", date:"", dateLabel:"2025", location:"", description:"Poster presentation at ICC", photos:[], slides:"", recording:""}
  ],
  involvement: [
    {id:"reu-mentoring", title:"Research rotation mentoring", shortTitle:"COE–REU", dateLabel:"2026", description:"Research rotation mentoring in the COE–REU Program", photos:[]},
    {id:"festival-of-nations", title:"Festival of Nations", shortTitle:"Festival of Nations", dateLabel:"2026", description:"Community involvement at the Festival of Nations", photos:[]},
    {id:"trail-cleanup", title:"Keweenaw Land Trust", shortTitle:"Trail cleanup", dateLabel:"2025", description:"Trail cleanup with the Keweenaw Land Trust", photos:[]}
  ],
  // Home shows four entries. Every record remains in News & updates.
  // Only confirmed years are used until exact announcement dates are supplied.
  news: [
    {title:"CFRP failure case-study chapter accepted", category:"Accepted", dateLabel:"2026", group:"2026", description:"“Lessons Learned from CFRP Failures: Case Studies and Insights” accepted for the Handbook of Carbon Fiber Reinforced Polymer Composites, Springer Nature.", href:"publications.html#cfrp-book-chapter"},
    {title:"Dynamic composite-fracture paper accepted at ASC", category:"Accepted", dateLabel:"2026", group:"2026", description:"Conference proceedings paper accepted for the American Society for Composites 41st Annual Technical Conference.", href:"publications.html#asc-proceeding"},
    {title:"Research presented at SES and ASC", category:"Conferences", dateLabel:"2026", group:"2026", description:"Presented my research on phase-field modeling of composite fracture at the Society of Engineering Science and American Society for Composites conferences.", href:"talks.html"},
    {title:"College of Engineering Candidacy Incentive Award", category:"Award", dateLabel:"2026", group:"2026", description:"Received the College of Engineering Candidacy Incentive Award at Michigan Technological University.", href:"about.html#honors"},
    {title:"Mentoring in the COE–REU Program", category:"Mentoring", dateLabel:"2026", group:"2026", description:"Served as a Research Rotation Mentor.", href:"talks.html#involvement"},
    {title:"Poster presentation at ICC", category:"Presentation", dateLabel:"2025", group:"2025", description:"Presented a research poster at ICC.", href:"talks.html#icc-poster-2025"},
    {title:"Three Minute Thesis at Michigan Tech", category:"Activity", dateLabel:"2025", group:"2025", description:"Participated in the Three Minute Thesis competition.", href:"talks.html#three-minute-thesis-2025"},
    {title:"CFD and neural-network research published in Heat Transfer", category:"Publication", dateLabel:"2025", group:"2025", description:"Published work on mixed convection in a vented cavity under dynamic flow modulation.", href:"publications.html#cfd-ml-paper"},
    {title:"Energy-storage research published in ENCON23 proceedings", category:"Publication", dateLabel:"2024", group:"2024", description:"Thermal analysis of advanced adiabatic compressed-air energy storage with phase-change materials.", href:"publications.html#energy-storage-paper"},
    {title:"Three Minute Thesis at Michigan Tech", category:"Activity", dateLabel:"2024", group:"2024", description:"Participated in the Three Minute Thesis competition.", href:"talks.html"}
  ],
  education: [
    {title:"PhD in Mechanical and Aerospace Engineering", institution:"Michigan Technological University", description:"Computational modeling of composite fracture", dates:"Expected Fall 2027"},
    {title:"BSc in Mechanical Engineering", institution:"Bangladesh University of Engineering and Technology", description:"Computational fluid mechanics and heat transfer", dates:"May 2023"}
  ],
  experience: [
    {title:"Graduate Research Assistant", institution:"Michigan Technological University", description:"Developing a 3D phase-field model for composite fracture under static and dynamic loading, implemented through custom Fortran user elements in Abaqus.", dates:"Fall 2024–present"},
    {title:"Graduate Teaching Assistant", institution:"Michigan Technological University", description:"Led practical sessions in control engineering and HVAC analysis, and taught MATLAB/Simulink and Python for engineering modeling and data analysis.", dates:"Spring 2025"}
  ],
  honors: [
    {title:"College of Engineering Candidacy Incentive Award", institution:"Michigan Technological University", dates:"2026"},
    {title:"Dean’s List and University Merit Scholarship", institution:"Bangladesh University of Engineering and Technology", dates:"2017 & 2018"}
  ]
};
