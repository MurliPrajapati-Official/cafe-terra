import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative md:h-screen w-full bg-ivory pt-24 md:pt-20 flex flex-col" id="hero">
      <div className="grid grid-cols-1 md:grid-cols-12 flex-1 border-b border-border-light">
        {/* Left Side: Content */}
        <div className="col-span-1 border-b md:border-b-0 md:col-span-7 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-r-0 md:border-r border-border-light z-10 bg-ivory">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-accent text-[11px] uppercase tracking-[0.3em] font-bold mb-6 block">
              Premier Restobar & Social Dining
            </span>
            <h1 className="text-primary font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 font-bold">
              Where Pune<br/>
              <span className="italic text-accent">Celebrates.</span>
            </h1>
            <p className="text-espresso max-w-md text-lg leading-relaxed font-bold mb-12">
              A complete social dining destination. From milestone birthdays to intimate date nights, we curate the moments that define your life.
            </p>
            
            <div className="flex flex-wrap gap-8 md:gap-12 border-t border-border-light pt-8">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1 font-semibold">Location</span>
                <span className="font-semibold text-primary text-sm">Koregaon Park Annexe</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1 font-semibold">Ambience</span>
                <span className="font-semibold text-primary text-sm">Lush Greenery & Cozy</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1 font-semibold">Cuisine</span>
                <span className="font-semibold text-primary text-sm">Signature Global Fusion</span>
              </div>
            </div>
            
            <div className="mt-12 md:hidden">
              <a 
                href="#reservation"
                className="inline-block border border-primary px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-bold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Book Your Experience
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="col-span-1 md:col-span-5 relative min-h-[50vh] md:min-h-full">
          <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')" }}
            />
            {/* Design overlap badge */}
            <div className="absolute top-8 left-0 md:top-12 bg-ivory px-6 py-4 flex flex-col border-r border-b border-t border-border-light md:border-t-0 z-20 shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone font-semibold">Now Hosting</span>
              <span className="font-display italic text-xl text-primary mt-1">Anniversaries</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical text matching design */}
      <div className="hidden xl:block absolute left-4 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] text-[9px] uppercase tracking-[0.5em] text-border-light font-bold select-none z-0">
        A HIDDEN GEM IN KOREGAON PARK PUNE
      </div>
    </section>
  );
}
