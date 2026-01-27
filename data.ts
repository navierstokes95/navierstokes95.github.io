
import { ExperienceItem, ProjectItem, SkillCategory, PublicationItem, TrainingItem } from './types';

export const PERSONAL_INFO = {
  name: "Arif Ahmed",
  // Encoded to prevent simple scrapers from picking up the data
  email: "YXJpZmFobWVkLm1lMTRAZ21haWwuY29t", // arifahmed.me14@gmail.com
  phone: "Kzg4MCAxNTU3IDc1MiA4OTU=", // +880 1557 752 895
  location: "Dhaka, Bangladesh",
  linkedin: "arifahmed-me-buet",
  github: "GitHub",
  website: "engrarifahmed.com",
  education: {
    degree: "B.Sc. in Mechanical Engineering",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    period: "2015 – 2019",
    location: "Dhaka, Bangladesh"
  },
  profileImage: "/profile.jpg" // Path to your profile image (e.g., "/profile.jpg")
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "BITAC (Bangladesh Industrial Technical Assistance Center)",
    role: "Assistant Engineer (Research and Development)",
    period: "2021 – Present",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Lead industrial R&D, innovation and technology transfer related activities in BITAC.",
      "Hands-on operation of precision machine tools for production of industrial spare parts e.g 3-axis/4-axis CNC milling, lathe, EDM, Wire-Cut, Laser Cut etc.",
      "Worked as a tender team member in various national and international projects of international partners like ADB, JICA, World Bank worth over USD 200 Million.",
      "Worked as a trainer and specialist on developing course curriculum and delivering training on Industrial Automation, Robotics, CNC machining, CAD/CAM, 3D printing etc.",
      "Operated 3D printers of both FDM and SLA technologies for prototyping and post-processing.",
      "Developed CAD models of industrial spare parts applying DFM and ASME Y14.5 GD&T standards using SolidWorks and Onshape.",
      "Performed engineering simulations, FEA and CFD analysis using SolidWorks Simulation and Ansys.",
      "Performed Reverse Engineering of industrial parts using 3D scanners (structured light and laser triangulation).",
      "Experienced in CAM programming for CNC machining using Fusion 360 and MasterCAM.",
      "Expertise in Plastic injection mold design and Sheet metal die design.",
      "Experience in industrial automation using PLC programming, SCADA systems, and Industrial Robotics."
    ]
  },
  {
    company: "DBL Pharmaceuticals LTD",
    role: "Executive, Project Planning and Sourcing",
    period: "Oct 2020 – Mar 2021",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Performing technical sourcing of pharmaceutical capital machinery and process utility equipment as per URS.",
      "Collaborated with commercial team for smooth Letter of Credit (LC) processing and customs clearance.",
      "Collaborating closely with Engineering, R&D, and QC to understand requirements and brief top management for budget approval.",
      "Monitoring and tracking project progress, delivery schedules, and overseeing supply chain operations."
    ]
  },
  {
    company: "IoTixLab",
    role: "Research Engineer (Part-time)",
    period: "2018 – 2020",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Contributed to R&D projects in IoT-based automation.",
      "Focused on industrial design and installation of environmental data loggers, PCB enclosures, sourcing sensors (Onshape, FreeCAD).",
      "Communicating with suppliers (local and foreign) to ensure technical support and timely availability of parts."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Industrial Energy Monitoring Dashboard",
    description: "Created IoT based real-time SCADA dashboard for tracking industrial energy usage.",
    fullDescription: "Created IoT based real-time SCADA dashboard for tracking industrial energy usage.",
    impact: "The energy consumption reduction of an industry needs a data driven approach, rather than randomly turning loads on or off. By leveraging Siemens PLC, MODBUS, MQTT, Node-RED, we were able to build a real time SCADA dashboard with reporting facilities that can track energy consumption real-time, by days, weeks or month. This significantly helps assess performance of energy conservation initiatives and quickly make adjustments.",
    objectives: [
      "Build IoT based SCADA dashboard to track electrical energy usage",
      "Implementation of Industrial IoT using open-source cloud technologies",
      "Build training modules and curriculum to train on smart energy management"
    ],
    tags: ["Siemens PLC", "MODBUS", "MQTT", "Node-RED"],
    category: "Automation and IIoT",
    image: "/energy.jpg",
    demoUrl: "https://demo.thingsboard.io/dashboard/0982fa20-349a-11ed-89c2-7b8e9c33fd73?publicId=88e774d0-367f-11ed-89c2-7b8e9c33fd73"
  },
  {
    title: "CNC Machine OEE Monitoring",
    description: "Designed and implemented a CNC machine OEE monitoring dashboard integrating Haas MTConnect, Fanuc FOCAS API, MQTT, and Ethernet request/response protocols.",
    fullDescription: "Designed and implemented a CNC machine OEE monitoring dashboard integrating Haas MTConnect, Fanuc FOCAS API, MQTT, and Ethernet request/response protocols to acquire real-time production data from multiple controller platforms.",
    impact: "Modern manufacturing environments demand high-volume, high-quality production with minimal rejection under strict scheduling constraints. Achieving Six Sigma–level performance requires accurate Overall Equipment Effectiveness (OEE) evaluation, which is inefficient and error-prone when based on manual logbooks.\n\nThis project addressed that gap by integrating industrial IoT frameworks and cloud-connected data pipelines with CNC systems. Machine data was extracted through MTConnect and FOCAS interfaces, processed using Node-RED, and transmitted via MQTT to develop a unified OEE analytics dashboard. The system supports multi-vendor CNC environments, enabling standardized performance monitoring across heterogeneous controllers.",
    objectives: [
      "Enhance manufacturing efficiency through advanced OEE-based performance analytics",
      "Deploy industrial IoT architecture for real-time machine monitoring and production insight",
      "Enable data-driven decision-making for quality improvement and downtime reduction",
      "Establish scalable communication between diverse CNC control platforms"
    ],
    tags: ["Haas MTConnect", "Fanuc FOCAS", "MQTT", "Node-RED", "IIoT"],
    category: "Automation and IIoT",
    image: "/oee.png",
    demoUrl: "https://demo.thingsboard.io/dashboard/16adb630-38a0-11ee-9079-75f587c23e37?publicId=88e774d0-367f-11ed-89c2-7b8e9c33fd73"
  },
  {
    title: "Collaborative Robot-CNC Integration",
    description: "Commissioned and deployed a 6-axis collaborative robot (Universal Robots) integrated with a CNC machining cell to achieve lights-out manufacturing.",
    fullDescription: "Commissioned and deployed a 6-axis collaborative robot (Universal Robots) integrated with a CNC machining cell to achieve lights-out manufacturing, enabling continuous 24/7 autonomous production with minimal human intervention.",
    impact: "To meet modern manufacturing demands for high productivity, reduced labor dependency, and consistent quality, this project focused on robotic automation of machine tending operations. The CNC machining process is programmed through CAM software, while the collaborative robot performs all peripheral tasks, including part loading/unloading, machine door operation, and keypad-based machine control.\n\nThe system communicates with the CNC via digital I/O interfaces to monitor machining status signals. Upon cycle completion, the robot coordinates with a pneumatically actuated vise system to ensure accurate clamping and unclamping of components, maintaining repeatability and process reliability. This integration significantly reduces idle time, improves spindle utilization, and supports unattended operation.\n\nFurther development involves enhancing system intelligence through machine vision and AI-based object recognition, enabling the robot to perform random bin picking and precise part positioning inside the vise. This advancement aims to transition the system from structured automation toward adaptive robotic manufacturing, capable of handling variable part orientation and increasing operational flexibility.",
    objectives: [
      "Enable lights-out CNC production through robotic machine tending",
      "Improve machine utilization and reduce manual handling time",
      "Integrate robot–CNC communication via industrial I/O signaling",
      "Implement pneumatic workholding automation for precise part clamping",
      "Advance toward vision-guided and AI-driven robotic manipulation for flexible manufacturing systems"
    ],
    tags: ["UR5 Cobot", "Fanuc CNC", "Industrial I/O", "Pneumatics", "Lights-out Manufacturing"],
    category: "Automation and IIoT",
    image: "/cobot.png"
  },
  {
    title: "Reverse Engineering of Industrial Components",
    description: "Performed 3D scanning and modeling of complex industrial parts.",
    tags: ["Einscan", "Geomagic", "SolidWorks", "Fusion 360"],
    category: "Industrial Design"
  },
  {
    title: "SolidWorks Macro Automation for 3D Modeling",
    description: "Reduced manual 3D modeling time by 20x using automated macros.",
    tags: ["SolidWorks", "C#"],
    category: "Industrial Design"
  },
  {
    title: "Inventory Management System",
    description: "Designed and deployed an inventory tracking platform.",
    tags: ["Airtable", "Gemini", "ChatGPT"],
    category: "Industrial Design"
  },
  {
    title: "Agricultural Irrigation Pump Reengineering",
    description: "Used CFD for redesigning irrigation pump impeller and introduced 3D printing in impeller casting pattern, achieved 40% increase in flowrate. Awarded 'Best Innovation' by Ministry of Industry.",
    tags: ["ANSYS", "SolidWorks", "3D Printing"],
    category: "Research"
  },
  {
    title: "Pesticide Spraying Drone",
    description: "Designed and manufactured agricultural spraying drone.",
    tags: ["ROS", "Gazebo", "Pixhawk", "3D Printing"],
    category: "Research"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "CAD & CAM Software",
    items: ["SolidWorks", "Onshape", "Fusion 360", "AutoCAD", "Autodesk Inventor", "CATIA", "FreeCAD", "MasterCAM", "ArtCAM", "Geomagic Design X"]
  },
  {
    category: "Simulation & Analysis",
    items: ["ANSYS (FEA, CFD)", "MATLAB", "ROS2", "Gazebo", "CFTurbo"]
  },
  {
    category: "Programming & Web",
    items: ["C/C++", "Python", "JavaScript", "NodeJS", "PostgreSQL", "CSS3"]
  },
  {
    category: "Automation & IoT",
    items: ["Siemens PLC", "Mitsubishi PLC", "SCADA", "Arduino", "Raspberry Pi", "Node-RED", "MQTT"]
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    authors: "A. Ahmed, A. Istiak, and M. M. Helali",
    title: "Vibration analysis of rolling element bearing using micro electro-mechanical system (mems) based accelerometer",
    conference: "Proceedings of the International Conference on Mechanical, Industrial & Energy Engineering",
    year: 2024
  },
  {
    authors: "F. Mayesha, S. Chowdhury, and A. Ahmed",
    title: "A comparative analysis of mechanical properties in fdm-printed pla and cfrpla components under different printing parameter variations",
    conference: "Proceedings of the 2nd International Conference on Mechanical Engineering (INCOM)",
    year: 2024
  }
];

export const TRAININGS: TrainingItem[] = [
  {
    title: "Australia Awards Fellowship",
    organization: "Curtin University, Australia",
    period: "Oct 2024",
    details: "Climate Resilient Industrialisation for a Green Economy in Bangladesh focused on sustainable manufacturing practices."
  },
  {
    title: "AI Training",
    organization: "Intel Malaysia and GOTT Factory",
    period: "Jul 2024",
    details: "Focused on AI Applications in Industry and advanced computing applications."
  },
  {
    title: "Capacity Building Program",
    organization: "KOREATECH, South Korea",
    period: "Oct–Nov 2023",
    details: "Mechatronics Engineering focused on programming PLC, Servo, VFD, COBOT arm and Pneumatics."
  },
  {
    title: "ITEC Scholarship",
    organization: "IIT Kanpur, India",
    period: "Mar 2023",
    details: "Robotics Training Concentrated on robotics fundamentals, automation, and applied robotics projects."
  }
];
