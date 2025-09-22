
// import { image, title } from "framer-motion/client"
// import { ArrowRight, ExternalLink, Github } from "lucide-react"

// const projects=[
//     {
//         id:1,
//         title:"Saas Landing Page",
//         description:"A beautiful landing page app using areact and Tailwind",
//         image:"src/assets/Projects/html-projects.jpg",
//         tags:["React","TailwindCss","Supabase"],
//         demoUrl:"#",
//         githubUrl:"#",
//     },
//     {
//         id:2,
//         title:"Saas Landing Page",
//         description:"A beautiful landing page app using areact and Tailwind",
//         image:"src/assets/Projects/Mern.png",
//         tags:["React","TailwindCss","Supabase"],
//         demoUrl:"#",
//         githubUrl:"#",
//     },
//     {
//         id:3,
//         title:"Saas Landing Page",
//         description:"A beautiful landing page app using areact and Tailwind",
//         image:"src/assets/Projects/2.webp",
//         tags:["React","TailwindCss","Supabase"],
//         demoUrl:"#",
//         githubUrl:"#",

//     },
//     {
//         id:4,
//         title:"Saas Landing Page",
//         description:"A beautiful landing page app using areact and Tailwind",
//         image:"src/assets/Projects/images.jpg",
//         tags:["React","TailwindCss","Supabase"],
//         demoUrl:"#",
//         githubUrl:"#",
//     }
// ]

// export const ProjectsSection =()=>{
//     return (
//         <section id="projects" className="relative px-4 py-24">
//             <div className="container max-w-5xl mx-auto">
//                 <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl"> 
//                     {" "}Featured <span className="text-primary">Projects</span>
//                 </h2>
//                 <p className="mx-auto mb-12 text-center text-muted-foreground mmax-w-2xl">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio asperiores sapiente nulla soluta atque id enim velit possimus ex quae laborum, fugit consequuntur eum harum cumque assumenda ipsa dolorum?
//                 </p>
//                 <div className="grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//                     {projects.map((project,key )=>(
//                         <div key={key} className="overflow-hidden rounded shadow group bg-card-lg-xs card-hover">
//                             <div className="h-48 overflow-hidden">
//                                 <img src={project.image} alt={project.title}
//                                 className="object-cover w-full h-full transition-transform duration-500 group-honver:scale-110"/>
//                             </div>
//                             <div className="p-6">
//                                 <div className="flex gap-2 mb-4 flex-warp">
//                                     {project.tags.map((tag)=>(
//                                         <span className="px-2 py-1 text-xs font-medium rounded borber-full bg-secondary text-secondary">{tag}</span>
//                                     ))}
                                    
//                                 </div>
                                
//                             </div>
//                             <h3 className="text-xl font-semibold md-1">{project.title}</h3>
//                             <p className="mb-4 text-sm text-muted-foreground">
//                                 {project.description}
//                             </p>
//                             <div className="flex items-center justify-between">
//                                 <div className="flex space-x-3">
//                                     <a href={project.demoUrl}
//                                     target="_blank"
//                                     className="transition-colors duration-300 text-foreground/80 hover:text-primsry">
//                                         <ExternalLink size={20}/>
//                                     </a>
//                                     <a href={project.githubUrl}
//                                     target="_blank"
//                                     className="transition-colors duration-300 text-foreground/80 hover:text-primsry">
//                                         <Github size={20}/>                                        
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
                
//                 <div className="mt-12 text-center">
//                     <a
//                     className="items-center gap-2 mx-auto cosmic-button w-fit" 
//                     target="_blank"
//                     href="https://github.com/machadop1407"
//                     >
//                         Check My Github<ArrowRight size={16}/>
                        
//                     </a>
                    
//                 </div>
//             </div>
//         </section>
//     )
// }

// import { image, title } from "framer-motion/client"
// import { ArrowRight, ExternalLink, Github } from "lucide-react"

// const projects=[
//     {
//         id:1,
//         title:"Saas Landing Page",
//         description:"A beautiful landing page app using areact and Tailwind",
//         image:"src/assets/Projects/html-projects.jpg",
//         tags:["React","TailwindCss","Supabase"],
//         demoUrl:"#",
//         githubUrl:"#",
//     },
//     {
//         id:2,
//         title:"Saas Landing Page",
//         description:"A beautiful landing page app using areact and Tailwind",
//         image:"src/assets/Projects/Mern.png",
//         tags:["React","TailwindCss","Supabase"],
//         demoUrl:"#",
//         githubUrl:"#",
//     },
//     {
//         id:3,
//         title:"Saas Landing Page",
//         description:"A beautiful landing page app using areact and Tailwind",
//         image:"src/assets/Projects/2.webp",
//         tags:["React","TailwindCss","Supabase"],
//         demoUrl:"#",
//         githubUrl:"#",

//     },
//     {
//         id:4,
//         title:"Saas Landing Page",
//         description:"A beautiful landing page app using areact and Tailwind",
//         image:"src/assets/Projects/images.jpg",
//         tags:["React","TailwindCss","Supabase"],
//         demoUrl:"#",
//         githubUrl:"#",
//     }
// ]

// export const ProjectsSection =()=>{
//     return (
//         <section id="projects" className="relative px-4 py-24">
//             <div className="container max-w-5xl mx-auto">
//                 <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl"> 
//                     {" "}Featured <span className="text-primary">Projects</span>
//                 </h2>
//                 <p className="mx-auto mb-12 text-center text-muted-foreground mmax-w-2xl">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio asperiores sapiente nulla soluta atque id enim velit possimus ex quae laborum, fugit consequuntur eum harum cumque assumenda ipsa dolorum?
//                 </p>
//                 <div className="grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//                     {projects.map((project,key )=>(
//                         <div key={key} className="overflow-hidden rounded shadow group bg-card-lg-xs card-hover">
//                             <div className="h-48 overflow-hidden">
//                                 <img src={project.image} alt={project.title}
//                                 className="object-cover w-full h-full transition-transform duration-500 group-honver:scale-110"/>
//                             </div>
//                             <div className="p-6">
//                                 <div className="flex gap-2 mb-4 flex-warp">
//                                     {project.tags.map((tag)=>(
//                                         <span className="px-2 py-1 text-xs font-medium rounded borber-full bg-secondary text-secondary">{tag}</span>
//                                     ))}
                                    
//                                 </div>
                                
//                             </div>
//                             <h3 className="text-xl font-semibold md-1">{project.title}</h3>
//                             <p className="mb-4 text-sm text-muted-foreground">
//                                 {project.description}
//                             </p>
//                             <div className="flex items-center justify-between">
//                                 <div className="flex space-x-3">
//                                     <a href={project.demoUrl}
//                                     target="_blank"
//                                     className="transition-colors duration-300 text-foreground/80 hover:text-primsry">
//                                         <ExternalLink size={20}/>
//                                     </a>
//                                     <a href={project.githubUrl}
//                                     target="_blank"
//                                     className="transition-colors duration-300 text-foreground/80 hover:text-primsry">
//                                         <Github size={20}/>                                        
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
                
//                 <div className="mt-12 text-center">
//                     <a
//                     className="items-center gap-2 mx-auto cosmic-button w-fit" 
//                     target="_blank"
//                     href="https://github.com/machadop1407"
//                     >
//                         Check My Github<ArrowRight size={16}/>
                        
//                     </a>
                    
//                 </div>
//             </div>
//         </section>
//     )
// }
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Saas Landing Page",
    description: "A beautiful landing page app using React and Tailwind",
    image: "src/assets/Projects/html-projects.jpg",
    tags: ["React", "TailwindCss", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "MERN App",
    description: "A full-stack MERN app with authentication and CRUD functionality",
    image: "src/assets/Projects/Mern.png",
    tags: ["React", "NodeJS", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website to showcase projects and skills",
    image: "src/assets/Projects/2.webp",
    tags: ["React", "TailwindCss", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "E-commerce Site",
    description: "An e-commerce website with product listing, cart, and checkout",
    image: "src/assets/Projects/images.jpg",
    tags: ["React", "Redux", "Stripe API"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          odio asperiores sapiente nulla soluta atque id enim velit possimus ex
          quae laborum, fugit consequuntur eum harum cumque assumenda ipsa
          dolorum?
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden transition-transform duration-300 rounded-lg shadow-lg group bg-card card-hover"
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary/20 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="transition-colors duration-300 text-foreground/80 hover:text-primary"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="transition-colors duration-300 text-foreground/80 hover:text-primary"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Github Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/WhiteDevil2326"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all duration-300 rounded-full shadow-lg bg-primary hover:bg-primary/90"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
