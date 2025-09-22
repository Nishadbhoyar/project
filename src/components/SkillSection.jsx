// // // import { useEffect, useState } from "react";
// // // import { cn } from "@/lib/utils";

// // // const Counter = ({ value, duration = 1500 }) => {
// // //   const [count, setCount] = useState(0);

// // //   useEffect(() => {
// // //     let start = 0;
// // //     const end = value;
// // //     const stepTime = 16; // ~60fps
// // //     const increment = end / (duration / stepTime);

// // //     const timer = setInterval(() => {
// // //       start += increment;
// // //       if (start >= end) {
// // //         start = end;
// // //         clearInterval(timer);
// // //       }
// // //       setCount(Math.floor(start));
// // //     }, stepTime);

// // //     return () => clearInterval(timer);
// // //   }, [value, duration]);

// // //   return <span>{count}%</span>;
// // // };


// // // const skills = [
// // //   // Frontend
// // //   { name: "HTML", level: 95, category: "frontend" },
// // //   { name: "CSS", level: 90, category: "frontend" },
// // //   { name: "JavaScript", level: 85, category: "frontend" },
// // //   { name: "React", level: 80, category: "frontend" },
// // //   { name: "Tailwind CSS", level: 75, category: "frontend" },
// // //   { name: "TypeScript", level: 70, category: "frontend" },
// // //   { name: "Next.js", level: 65, category: "frontend" },

// // //   // Backend
// // //   { name: "Node.js", level: 80, category: "backend" },
// // //   { name: "Express.js", level: 75, category: "backend" },
// // //   { name: "MongoDB", level: 70, category: "backend" },
// // //   { name: "SQL / MySQL", level: 85, category: "backend" },
// // //   { name: "Java (Spring Boot)", level: 65, category: "backend" },
// // //   { name: "Python (Django/Flask)", level: 60, category: "backend" },

// // //   // Tools
// // //   { name: "Git & GitHub", level: 85, category: "tools" },
// // //   { name: "VS Code", level: 90, category: "tools" },
// // //   { name: "Postman", level: 75, category: "tools" },
// // //   { name: "Figma", level: 70, category: "tools" },
// // //   { name: "Docker", level: 65, category: "tools" },
// // //   { name: "AWS", level: 60, category: "tools" },
// // //   { name: "Firebase", level: 70, category: "tools" },
// // //   { name: "Linux / Bash", level: 75, category: "tools" },
// // // ];

// // // const categories = ["all", "frontend", "backend", "tools"];

// // // export const SkillSection = () => {
// // //   const [activeCategory, setActiveCategory] = useState("all");

// // //   const filteredSkills = skills.filter(
// // //     (skill) => activeCategory === "all" || skill.category === activeCategory
// // //   );

// // //   return (
// // //     <section id="skills" className="relative px-4 py-24 bg-secondary/30">
// // //       <div className="container max-w-5xl mx-auto">
// // //         <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
// // //           My<span className="text-primary"> Skills</span>
// // //         </h2>

// // //         {/* Category Filter Buttons */}
// // //         <div className="flex flex-wrap justify-center gap-4 mb-12">
// // //           {categories.map((category, key) => (
// // //             <button
// // //               key={key}
// // //               onClick={() => setActiveCategory(category)}
// // //               className={cn(
// // //                 "px-5 py-2 capitalize transition-colors duration-300 rounded-full",
// // //                 activeCategory === category
// // //                   ? "bg-primary text-primary-foreground"
// // //                   : "bg-secondary/70 text-foreground hover:bg-secondary"
// // //               )}
// // //             >
// // //               {category}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* Skills Grid */}
// // //         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
// // //           {filteredSkills.map((skill, key) => (
// // //             <div
// // //               key={key}
// // //               className="p-6 rounded-lg shadow-xs bg-card card-hover opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
// // //               style={{ animationDelay: `${key * 0.1}s` }}
// // //             >
// // //               <div className="mb-4 text-left">
// // //                 <h3 className="text-lg font-semibold">{skill.name}</h3>
// // //               </div>

// // //               {/* Progress Bar */}
// // //               <div className="w-full h-2 overflow-hidden rounded-full bg-secondary/50">
// // //                 <div
// // //                   className="h-2 rounded bg-gradient-to-r from-primary via-primary/70 to-primary bg-[length:200px_100%] animate-[shimmer_2s_linear_infinite]"
// // //                   style={{ width: skill.level + "%" }}
// // //                 />
// // //               </div>

// // //               {/* Animated Counter */}
// // //               <div className="mt-1 text-right">
// // //                 <span className="text-sm text-muted-foreground">
// // //                   <Counter value={skill.level} />
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import ProgressBar from "@/components/ProgressBar";
// // import { cn } from "@/lib/utils";

// // const skillCategories = {
// //   frontend: [
// //     { name: "React", level: 90 },
// //     { name: "Next.js", level: 80 },
// //     { name: "Tailwind CSS", level: 85 },
// //     { name: "JavaScript", level: 88 }
// //   ],
// //   backend: [
// //     { name: "Node.js", level: 82 },
// //     { name: "Express.js", level: 78 },
// //     { name: "MongoDB", level: 75 },
// //     { name: "MySQL", level: 70 }
// //   ],
// //   other: [
// //     { name: "Git & GitHub", level: 85 },
// //     { name: "Docker", level: 65 },
// //     { name: "Figma", level: 72 },
// //     { name: "Postman", level: 77 }
// //   ]
// // };

// // export const SkillSection = () => {
// //   const [activeCategory, setActiveCategory] = useState("frontend");

// //   return (
// //     <section id="skills" className="relative px-4 py-24 bg-secondary/30">
// //       <div className="container max-w-5xl mx-auto">
// //         {/* Title */}
// //         <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
// //           My <span className="text-primary">Skills</span>
// //         </h2>

// //         {/* Tabs */}
// //         <div className="flex justify-center mb-8 space-x-4">
// //           {Object.keys(skillCategories).map((category) => (
// //             <button
// //               key={category}
// //               onClick={() => setActiveCategory(category)}
// //               className={cn(
// //                 "px-4 py-2 text-sm font-medium rounded-full transition-colors",
// //                 activeCategory === category
// //                   ? "bg-primary text-white"
// //                   : "bg-secondary text-muted-foreground hover:bg-secondary/70"
// //               )}
// //             >
// //               {category.charAt(0).toUpperCase() + category.slice(1)}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Skill Grid */}
// //         <motion.div
// //           key={activeCategory} // forces re-render to replay animation
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ staggerChildren: 0.1, duration: 0.5 }}
// //           className="grid grid-cols-1 gap-6 md:grid-cols-2"
// //         >
// //           {skillCategories[activeCategory].map((skill, index) => (
// //             <motion.div
// //               key={skill.name}
// //               initial={{ opacity: 0, y: 15 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: index * 0.1 }}
// //               className="p-6 shadow-md rounded-2xl bg-card"
// //             >
// //               {/* Skill Name */}
// //               <div className="flex justify-between mb-2">
// //                 <span className="font-medium">{skill.name}</span>
// //               </div>

// //               {/* Animated Progress Bar with number */}
// //               <ProgressBar value={skill.level} duration={1500} />
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };
// import { useState } from "react";
// import { motion } from "framer-motion";
// import ProgressBar from "@/components/ProgressBar";
// import { cn } from "@/lib/utils";

// // ✅ Skills list
// const skills = [
//   // Frontend
//   { name: "React", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },
//   { name: "Tailwind CSS", level: 85, category: "frontend" },
//   { name: "JavaScript", level: 88, category: "frontend" },

//   // Backend
//   { name: "Node.js", level: 82, category: "backend" },
//   { name: "Express.js", level: 78, category: "backend" },
//   { name: "MongoDB", level: 75, category: "backend" },
//   { name: "MySQL", level: 70, category: "backend" },

//   // Tools
//   { name: "Git & GitHub", level: 85, category: "tools" },
//   { name: "Docker", level: 65, category: "tools" },
//   { name: "Figma", level: 72, category: "tools" },
//   { name: "Postman", level: 77, category: "tools" }
// ];

// // ✅ Categories including "all"
// const categories = ["all", "frontend", "backend", "tools"];

// export const SkillSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   // Filter skills
//   const filteredSkills =
//     activeCategory === "all"
//       ? skills
//       : skills.filter((skill) => skill.category === activeCategory);

//   return (
//     <section id="skills" className="relative px-4 py-24 bg-secondary/30">
//       <div className="container max-w-5xl mx-auto">
//         {/* Title */}
//         <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
//           My <span className="text-primary">Skills</span>
//         </h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center mb-8 space-x-4">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-4 py-2 text-sm font-medium rounded-full transition-colors capitalize",
//                 activeCategory === category
//                   ? "bg-primary text-white"
//                   : "bg-secondary text-muted-foreground hover:bg-secondary/70"
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Skill Grid */}
//         <motion.div
//           key={activeCategory} // re-trigger animation on toggle
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ staggerChildren: 0.1, duration: 0.5 }}
//           className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {filteredSkills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="p-6 shadow-md rounded-2xl bg-card"
//             >
//               {/* Skill Name */}
//               <div className="flex justify-between mb-2">
//                 <span className="font-medium">{skill.name}</span>
//               </div>

//               {/* ProgressBar with animated percentage */}
//               <ProgressBar value={skill.level} duration={1500} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// import { useState } from "react";
// import { motion } from "framer-motion";
// import ProgressBar from "@/components/ProgressBar";
// import { cn } from "@/lib/utils";

// // ✅ Skills list
// const skills = [
//   // Frontend
//   { name: "React", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },
//   { name: "Tailwind CSS", level: 85, category: "frontend" },
//   { name: "JavaScript", level: 88, category: "frontend" },

//   // Backend
//   { name: "Node.js", level: 82, category: "backend" },
//   { name: "Express.js", level: 78, category: "backend" },
//   { name: "MongoDB", level: 75, category: "backend" },
//   { name: "MySQL", level: 70, category: "backend" },

//   // Tools
//   { name: "Git & GitHub", level: 85, category: "tools" },
//   { name: "Docker", level: 65, category: "tools" },
//   { name: "Figma", level: 72, category: "tools" },
//   { name: "Postman", level: 77, category: "tools" }
// ];

// // ✅ Categories including "all"
// const categories = ["all", "frontend", "backend", "tools"];

// export const SkillSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   // Filter skills
//   const filteredSkills =
//     activeCategory === "all"
//       ? skills
//       : skills.filter((skill) => skill.category === activeCategory);

//   return (
//     <section id="skills" className="relative px-4 py-24 bg-secondary/30">
//       <div className="container max-w-5xl mx-auto">
//         {/* Title */}
//         <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
//           My <span className="text-primary">Skills</span>
//         </h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center mb-8 space-x-4">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-4 py-2 text-sm font-medium rounded-full transition-colors capitalize",
//                 activeCategory === category
//                   ? "bg-primary text-white shadow-md shadow-primary/40"
//                   : "bg-secondary text-muted-foreground hover:bg-secondary/70 hover:shadow-sm"
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Skill Grid */}
//         <motion.div
//           key={activeCategory} // re-trigger animation on toggle
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ staggerChildren: 0.1, duration: 0.5 }}
//           className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {filteredSkills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="p-6 transition-transform duration-300 shadow-md rounded-2xl bg-card hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-2"
//             >
//               {/* Skill Name */}
//               <div className="flex justify-between mb-2">
//                 <span className="font-medium transition-colors duration-300 hover:text-primary">
//                   {skill.name}
//                 </span>
//               </div>

//               {/* ProgressBar with animated percentage */}
//               <div className="transition-transform duration-300 hover:scale-[1.02]">
//                 <ProgressBar value={skill.level} duration={1500} />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

import { useState } from "react";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/utils";

// ✅ Skills list with logos
const skills = [
  // Frontend
  {
    name: "React",
    level: 90,
    category: "frontend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    level: 80,
    category: "frontend",
    logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  },
  {
    name: "Tailwind CSS",
    level: 85,
    category: "frontend",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "JavaScript",
    level: 88,
    category: "frontend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },

  // Backend
  {
    name: "Node.js",
    level: 82,
    category: "backend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    level: 78,
    category: "backend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    level: 75,
    category: "backend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    level: 70,
    category: "backend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  },

  // Tools
  {
    name: "Git & GitHub",
    level: 85,
    category: "tools",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    name: "Docker",
    level: 65,
    category: "tools",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  {
    name: "Figma",
    level: 72,
    category: "tools",
    logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  },
  {
    name: "Postman",
    level: 77,
    category: "tools",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
];

// ✅ Categories including "all"
const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter skills
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative px-4 py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors capitalize",
                activeCategory === category
                  ? "bg-primary text-white shadow-md shadow-primary/40"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/70 hover:shadow-sm"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <motion.div
          key={activeCategory} // re-trigger animation on toggle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1, duration: 0.5 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 transition-transform duration-300 shadow-md rounded-2xl bg-card hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-2"
            >
              {/* Skill Name + Logo */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 rounded"
                  />
                  <span className="font-medium transition-colors duration-300 hover:text-primary">
                    {skill.name}
                  </span>
                </div>
              </div>

              {/* ProgressBar with animated percentage */}
              <div className="transition-transform duration-300 hover:scale-[1.02]">
                <ProgressBar value={skill.level} duration={1500} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
