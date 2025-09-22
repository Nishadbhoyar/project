// import { Instagram, Linkedin, MapPin, Twitter } from "lucide-react"
// import{cn} from "@/lib/utils";
// import { useToast } from "../hooks/use-toast";

// export const ContactSection=()=>{
//     const handleSubmit=(e)=>{
//         const {toast}=useToast();
//         e.preventDefault()
//         setTimeout(()=>{
//             toast({
//                 title:"Message sent!",
//                 description:"thank you for our message. I'will get back to you soon. ",
                
//             });
            
//         },1500);
//     };
//     return(
//         <section id="contact" className="relative px-4 py-24 bg-secondary/30">
//             <div className="container max-w-5xl mx-auto">
//                 <h2 className="text-3xl font-bold md:text-4xl md-4 texxt-center">
//                     Get In <span className="text-primary">Touch</span>
//                 </h2>
//                     <p className="max-w-2xl mx-auto text-c enter text-muted-foreground md-12">
//                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque accusamus recusandae nemo. Perspiciatis tenetur facere eos quibusdam ratione dignissimos vel, sed voluptatem magnam neque magni veritatis laudantium, amet hic id.
                        
//                     </p>
//                     <div className="grid-cols-1 gap-12 md:grid-cols-2">
//                         <div className="items-start space-x-4 flexx">
//                             <h3 className="text-2xlfont-semibold md-6">
//                                 {" "}
//                                 Contact Information
//                             </h3>
//                             <div className="justify-center space-y-6">
//                                 <div className="flex items-start space-x-4">
//                                     <div className="p-3 rounded-full bg-primary/10">
//                                     <Mail className="w-6 h-6 text-primary"/>{" "}
//                                     </div>
//                                     <div>
//                                         <h4 className="font-medium">Email</h4>
//                                         <a
//                                         href="mailtohello@gmail.com"
//                                         className="text-muted-foreground hover:text-primary tenssition-colors">
//                                             hello@gmail.com
//                                         </a>
//                                     </div>
                                    
//                                 </div>

//                                 {/*  */}
//                                 <div className="flex items-start space-x-4">
//                                     <div className="p-3 rounded-full bg-primary/10">
//                                     <Phone className="w-6 h-6 text-primary"/>{" "}
//                                     </div>
//                                     <div>
//                                         <h4 className="font-medium">Phone</h4>
//                                         <a
//                                         href="tel:+91 1234567891"
//                                         className="text-muted-foreground hover:text-primary tenssition-colors">
//                                             +91 1234567891
//                                         </a>
//                                     </div>
//                                 </div>

//                                 {/*  */}
//                                 <div className="flex items-start space-x-4">
//                                     <div className="p-3 rounded-full bg-primary/10">
//                                     <MapPin className="w-6 h-6 text-primary"/>{" "}
//                                     </div>
//                                     <div>
//                                         <h4 className="font-medium">Location </h4>
//                                         <a
//                                         href="mailtohello@gmail.com"
//                                         className="text-muted-foreground hover:text-primary tenssition-colors">
//                                             India , Maharashtra, Pune, Vadgaon Budruk
//                                         </a>
//                                     </div>
//                                 </div>                                
//                             </div>
//                             <div className="pt-8">
//                                 <h4 className="mb-4 font-medium">Connect With Me</h4>
//                                 <div className="flex justify-center space-x-4">
//                                     <a href="#" target="_blank">
//                                         <Linkedin/>
//                                     </a>
//                                     <a href="#" target="_blank">
//                                        <Twitter/> 
//                                     </a>
//                                     <a href="#" target="_blank">
//                                        <Instagram/> 
//                                     </a>
//                                 </div>  
//                             </div>
//                         </div>
//                         <div className="p-8 rounded-lg shadow bg-card-xs" onSubmit={handleSubmit}>
//                             <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>
                            
//                             <form className="space-y-6">
//                                 <div>
//                                     <label htmlFor="name" className="block mb-2 text-sm font-medium">{" "}Your Name</label>
//                                     <input 
//                                     type="text" id="name" name="name" required className="w-full px-4 py-3 border rounded-md-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                                     placeholder="Enter your name "
//                                     />
                                        
                                    
//                                 </div>

//                                 {/*  */}

//                                  <div>
//                                     <label htmlFor="email" className="block mb-2 text-sm font-medium">{" "}Your Email</label>
//                                     <input 
//                                     type="email" id="email" name="email" required className="w-full px-4 py-3 border rounded-md-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                                     placeholder="Enter your Email "
//                                     />
                                        
                                    
//                                 </div>
//                                 {/*  */}
//                                  <div>
//                                     <label htmlFor="message" className="block mb-2 text-sm font-medium">{" "}Your Message</label>
//                                     <textarea
//                                     id="message" name="message" required className="w-full px-4 py-3 border resize rounded-md-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary-none"
//                                     placeholder="Enter your message "
//                                     />
                                        
                                    
//                                 </div>
//                                 <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                    
//                                 )}>
//                                     Send Message
//                                     <Send size={18}/>                                     
//                                 </button>
//                             </form>
                            
//                         </div>
//                     </div>
                    
                
//             </div>
//         </section>
//     )
// }

// import { Instagram, Linkedin, MapPin, Twitter, Mail, Phone, Send } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useToast } from "../hooks/use-toast";

// export const ContactSection = () => {
//   const { toast } = useToast();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTimeout(() => {
//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       });
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="relative px-4 py-24 bg-secondary/30">
//       <div className="container max-w-5xl mx-auto">
//         {/* Section Title */}
//         <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
//           Get In <span className="text-primary">Touch</span>
//         </h2>
//         <p className="max-w-2xl mx-auto mb-12 text-center text-muted-foreground">
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque accusamus recusandae nemo. Perspiciatis tenetur facere eos quibusdam ratione dignissimos vel, sed voluptatem magnam neque magni veritatis laudantium, amet hic id.
//         </p>

//         {/* Grid */}
//         <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
//           {/* Contact Info */}
//           <div className="flex flex-col space-y-8">
//             <h3 className="text-2xl font-semibold">Contact Information</h3>

//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Mail className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Email</h4>
//                   <a
//                     href="mailto:hello@gmail.com"
//                     className="transition-colors text-muted-foreground hover:text-primary"
//                   >
//                     hello@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Phone className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Phone</h4>
//                   <a
//                     href="tel:+911234567891"
//                     className="transition-colors text-muted-foreground hover:text-primary"
//                   >
//                     +91 1234567891
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <MapPin className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Location</h4>
//                   <p className="text-muted-foreground">India, Maharashtra, Pune, Vadgaon Budruk</p>
//                 </div>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="pt-8">
//               <h4 className="mb-4 font-medium">Connect With Me</h4>
//               <div className="flex items-center gap-4">
//                 <a href="#" target="_blank"><Linkedin size={20} /></a>
//                 <a href="#" target="_blank"><Twitter size={20} /></a>
//                 <a href="#" target="_blank"><Instagram size={20} /></a>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form onSubmit={handleSubmit} className="p-8 space-y-6 rounded-lg shadow bg-card">
//             <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>

//             <div>
//               <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 placeholder="Enter your name"
//                 className="w-full px-4 py-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 placeholder="Enter your Email"
//                 className="w-full px-4 py-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 required
//                 placeholder="Enter your message"
//                 className="w-full px-4 py-3 border rounded-md resize-none bg-background focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//             </div>

//             <button
//               type="submit"
//               className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
//             >
//               Send Message <Send size={18} />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

import { Instagram, Linkedin, MapPin, Twitter, Mail, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative px-4 py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-muted-foreground">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque accusamus recusandae nemo.
          Perspiciatis tenetur facere eos quibusdam ratione dignissimos vel, sed voluptatem magnam neque
          magni veritatis laudantium, amet hic id.
        </p>

        {/* Grid */}
        <div className="grid gap-12 text-center grid-cols--1 items md:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col justify-start space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="transition-colors text-muted-foreground hover:text-primary"
                  >
                    hello@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+911234567891"
                    className="transition-colors text-muted-foreground hover:text-primary"
                  >
                    +91 1234567891
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="transition-colors text-muted-foreground hover:text-primary">
                     India,Maharashtra<br></br>Pune
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-start space-x-4">
              <h4 className="mb-4 font-medium">Connect With Me</h4>
              <div className="flex items-center gap-4">
                <a href="#" target="_blank"><Linkedin size={20} /></a>
                <a href="#" target="_blank"><Twitter size={20} /></a>
                <a href="#" target="_blank"><Instagram size={20} /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="self-start p-8 space-y-6 rounded-lg shadow bg-card"
          >
            <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>

            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your Email"
                className="w-full px-4 py-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Enter your message"
                className="w-full px-4 py-3 border rounded-md resize-none bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
