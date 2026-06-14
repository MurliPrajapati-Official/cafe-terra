import { motion } from 'motion/react';

export function GuestStories() {
  return (
    <section className="py-24 md:py-32 bg-ivory" id="stories">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:mb-24 text-center border-b border-border-light pb-12">
          <span className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase block mb-4">Reputation</span>
          <h2 className="text-4xl md:text-6xl font-display text-primary">Guest Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border-light bg-surface">
          
          {/* Story 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-border-light hover:bg-ivory/30 transition-colors"
          >
            <div className="text-accent text-[80px] font-display leading-[0.5] mt-4 mb-8">"</div>
            <p className="text-xl md:text-2xl font-display text-primary mb-12 flex-grow leading-relaxed italic">
              One of a kind restaurant in Pune, the unique ambience is full of greenery, it is that kind of a place where you would want to spend quality time with your loved ones coupled with great food.
            </p>
            <div className="border-t border-border-light pt-6">
              <div className="font-bold text-primary uppercase tracking-[0.2em] text-[11px] mb-1">Sameer Bedekar</div>
              <div className="text-stone font-semibold text-[10px] uppercase tracking-[0.1em]">Local Guide</div>
            </div>
          </motion.div>

          {/* Story 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-border-light hover:bg-ivory/30 transition-colors"
          >
            <div className="text-accent text-[80px] font-display leading-[0.5] mt-4 mb-8">"</div>
            <p className="text-xl md:text-2xl font-display text-primary mb-12 flex-grow leading-relaxed italic">
              Basho's is a bit of a hidden gem—quite literally. Once inside, the place completely transforms your expectations. The vibes are completely unmatched here.
            </p>
            <div className="border-t border-border-light pt-6">
              <div className="font-bold text-primary uppercase tracking-[0.2em] text-[11px] mb-1">Saurabh Parate</div>
              <div className="text-stone font-semibold text-[10px] uppercase tracking-[0.1em]">Local Guide</div>
            </div>
          </motion.div>

          {/* Story 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col p-8 md:p-12 lg:p-16 hover:bg-ivory/30 transition-colors md:col-span-2 lg:col-span-1"
          >
            <div className="text-accent text-[80px] font-display leading-[0.5] mt-4 mb-8">"</div>
            <p className="text-xl md:text-2xl font-display text-primary mb-12 flex-grow leading-relaxed italic">
              Cozy place surrounded with lots of lush green trees. Location wise it feels where are we going, until we go inside. The environment is really calming.
            </p>
            <div className="border-t border-border-light pt-6">
              <div className="font-bold text-primary uppercase tracking-[0.2em] text-[11px] mb-1">Nilesh Awalkar</div>
              <div className="text-stone font-semibold text-[10px] uppercase tracking-[0.1em]">Local Guide</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
