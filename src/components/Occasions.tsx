import { motion } from 'motion/react';

const occasions = [
  {
    title: "Family Celebrations",
    desc: "Spacious tables, curated sharing menus, and an atmosphere that brings generations together.",
    span: "col-span-12 md:col-span-8",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=2065&auto=format&fit=crop"
  },
  {
    title: "Date Nights",
    desc: "Intimate seating, dim lighting, and signature cocktails for perfect evenings.",
    span: "col-span-12 md:col-span-4",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Corporate Gatherings",
    desc: "Sophisticated environments for team dinners and client entertainment.",
    span: "col-span-12 md:col-span-6",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Birthday Events",
    desc: "Dedicated hospitality for your milestone moments, complete with customized experiences.",
    span: "col-span-12 md:col-span-6",
    image: "https://images.unsplash.com/photo-1513278974582-3e1b4a4e1bbc?q=80&w=1974&auto=format&fit=crop"
  }
];

export function Occasions() {
  return (
    <section className="py-24 md:py-32 bg-ivory border-t border-border-light" id="celebrations">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-24 md:flex items-end justify-between border-b border-border-light pb-12"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase block mb-4">Every Eventuality</span>
            <h2 className="text-5xl md:text-6xl font-display text-primary leading-tight">
              Designed For<br/>Every Occasion
            </h2>
          </div>
          <div className="mt-8 md:mt-0 text-espresso font-bold text-lg max-w-md">
            Whether an intimate dinner for two or a celebration for fifty, our spaces adapt to your narrative.
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 pb-24 border-b border-border-light">
          {occasions.map((occ, idx) => (
            <motion.div 
              key={occ.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`${occ.span} group relative h-[400px] md:h-[500px] overflow-hidden border border-border-light bg-black`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80 mix-blend-multiply" />
              <img 
                src={occ.image} 
                alt={occ.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end border border-white/10 m-4">
                <span className="text-[10px] text-accent tracking-[0.2em] font-bold mb-2">0{idx + 1}</span>
                <h3 className="text-3xl md:text-4xl font-display text-surface mb-4">{occ.title}</h3>
                <p className="text-ivory/90 max-w-md text-lg transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {occ.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
