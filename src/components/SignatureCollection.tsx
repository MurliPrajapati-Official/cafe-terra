import { motion } from 'motion/react';

export function SignatureCollection() {
  return (
    <section className="py-24 md:py-32 bg-surface text-primary border-t border-border-light" id="menu">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Editorial Text */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <span className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase block mb-4">Culinary Art</span>
              <h2 className="text-5xl md:text-6xl font-display mb-8">Signature<br/>Collection</h2>
              <p className="text-espresso font-bold text-lg leading-relaxed mb-12">
                A selection of our defining dishes. Each plate is a structured 
                composition of bold North Indian heritage and modern culinary precision.
              </p>
              <a href="#menu" className="inline-block border border-primary px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-primary hover:text-white transition-colors">
                View Full Menu
              </a>
            </motion.div>
          </div>

          {/* Dishes */}
          <div className="w-full lg:w-2/3 space-y-16">
            
            {/* Dish 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="group border border-border-light bg-ivory p-6 md:p-12 hover:bg-surface transition-colors"
            >
              <div className="aspect-[16/9] mb-8 overflow-hidden border border-border-light">
                <img 
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dal Makhani Reserve" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 border-b border-border-light pb-4">
                <h3 className="text-3xl font-display text-primary">Tandoori Chicken</h3>
                <span className="text-[10px] text-accent tracking-[0.2em] font-bold uppercase mt-2 md:mt-0">Signature</span>
              </div>
              <p className="text-espresso font-bold text-lg max-w-2xl">
                Slow-cooked for 24 hours over wood fire. Finished with home-churned butter and a hint of smoked garlic. Our interpretation of the classic.
              </p>
            </motion.div>

            {/* Dish 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="group border border-border-light bg-ivory p-6 md:p-12 hover:bg-surface transition-colors"
            >
              <div className="aspect-[16/9] mb-8 overflow-hidden border border-border-light">
                <img 
                  src="https://images.unsplash.com/photo-1628294895950-9805252327bc?q=80&w=2070&auto=format&fit=crop" 
                  alt="Truffle Malai Tikka" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 border-b border-border-light pb-4">
                <h3 className="text-3xl font-display text-primary">Truffle Malai Tikka</h3>
                <span className="text-[10px] text-accent tracking-[0.2em] font-bold uppercase mt-2 md:mt-0">Chef's Choice</span>
              </div>
              <p className="text-espresso font-bold text-lg max-w-2xl">
                Charcoal-roasted chicken steeped in cardamom cream, elevated with white truffle oil and edible silver foil.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
