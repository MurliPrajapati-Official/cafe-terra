import { motion } from 'motion/react';

const experiences = [
  {
    title: "Dining",
    desc: "A culinary journey celebrating authentic flavors with contemporary finesse.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    align: "left"
  },
  {
    title: "Cocktails",
    desc: "Handcrafted signatures and timeless classics poured with precision.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    align: "right"
  },
  {
    title: "Celebrations",
    desc: "Curated atmospheres designed specifically for your most important gatherings.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
    align: "left"
  }
];

export function Experience() {
  return (
    <section className="py-24 md:py-32 bg-ivory" id="experience">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-border-light pb-12"
        >
          <div>
            <span className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase block mb-4">The Destination</span>
            <h2 className="text-5xl md:text-7xl font-display text-primary leading-tight">The Basho's<br/>Experience</h2>
          </div>
        </motion.div>

        <div className="space-y-16 md:space-y-32">
          {experiences.map((exp, idx) => (
            <div 
              key={exp.title} 
              className={`flex flex-col ${exp.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch gap-8 md:gap-16 border border-border-light bg-surface p-6 md:p-12 transition-colors hover:bg-ivory/50`}
            >
              {/* Image Panel */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-3/5 aspect-[4/3] md:aspect-[16/9] relative overflow-hidden group border border-border-light"
              >
                <div className="absolute inset-0 bg-espresso/10 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay" />
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>

              {/* Text Panel */}
              <motion.div 
                initial={{ opacity: 0, x: exp.align === 'right' ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full md:w-2/5 flex flex-col justify-center py-8"
              >
                <span className="text-[10px] font-bold text-accent tracking-[0.2em] mb-4 block">0{idx + 1}</span>
                <h3 className="text-4xl md:text-5xl font-display mb-6 text-primary">{exp.title}</h3>
                <p className="text-espresso font-bold text-lg leading-relaxed mb-10 max-w-sm">
                  {exp.desc}
                </p>
                <div>
                  <a href="#" className="border border-primary px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-primary hover:text-white transition-colors">
                    Explore {exp.title}
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
