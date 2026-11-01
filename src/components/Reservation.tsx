import { motion } from 'motion/react';

export function Reservation() {
  return (
    <section className="py-0 border-t border-border-light" id="reservation">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        
        {/* Contact/Info Half */}
        <div className="bg-espresso text-ivory w-full lg:w-1/2 p-12 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-center relative">
          {/* Subtle background texture or overlay could go here */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80')] bg-cover mix-blend-overlay z-0" />
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="z-10 relative"
          >
            <span className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase block mb-4">Secure Your Table</span>
            <h2 className="text-5xl md:text-7xl font-display mb-16 text-surface">Reserve Your<br/>Experience</h2>
            
            <div className="space-y-12">
              <div className="border-t border-ivory/20 pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase">Location</h4>
                  <a href="https://www.google.com/maps/place/India's+Pune" target="_blank" rel="noopener noreferrer" className="border-b border-ivory/30 pb-0.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:text-ivory hover:border-ivory transition-colors">Get Directions</a>
                </div>
                <p className="text-lg text-ivory/80 font-bold mb-6">GWJ9+39G Near, Eden Villa Dhayarkar Vasti Lane, 2, <br/>tadi Gutta chowk, Koregaon Park Annexe, Mundhwa, Pune 411036</p>
                <div className="h-48 md:h-64 w-full border border-ivory/20 relative overflow-hidden bg-[#111111] group">
                  <iframe 
                    src="https://maps.google.com/maps?q=Basho's+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(1) contrast(1.2) brightness(0.8)' }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Basho's Location"
                    className="opacity-70 mix-blend-screen transition-all duration-700 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:filter-none"
                  ></iframe>
                </div>
              </div>
              
              <div className="border-t border-ivory/20 pt-6 border-b pb-6">
                <h4 className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase mb-2">Direct Contact</h4>
                <p className="text-lg text-ivory/80 mb-6 font-bold">+91 XXXXX XXXXX</p>
                <div className="flex gap-8">
                  <a href="#" className="border-b border-ivory/30 pb-1 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-ivory transition-colors">Call Now</a>
                  <a href="#" className="border-b border-ivory/30 pb-1 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-ivory transition-colors">WhatsApp</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form Half */}
        <div className="bg-surface w-full lg:w-1/2 p-12 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-center border-l lg:border-l border-border-light">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            <form className="space-y-10">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col border-b border-border-light pb-2 focus-within:border-primary transition-colors">
                  <label className="text-[10px] font-bold text-stone tracking-[0.2em] uppercase mb-2">Date</label>
                  <input type="date" className="bg-transparent outline-none font-body text-primary text-xl font-bold w-full appearance-none" required />
                </div>
                <div className="flex flex-col border-b border-border-light pb-2 focus-within:border-primary transition-colors">
                  <label className="text-[10px] font-bold text-stone tracking-[0.2em] uppercase mb-2">Time</label>
                  <input type="time" className="bg-transparent outline-none font-body text-primary text-xl font-bold w-full appearance-none" required />
                </div>
              </div>
              
              <div className="flex flex-col border-b border-border-light pb-2 focus-within:border-primary transition-colors">
                <label className="text-[10px] font-bold text-stone tracking-[0.2em] uppercase mb-2">Guests</label>
                <select className="bg-transparent outline-none font-body text-primary text-xl font-bold w-full appearance-none rounded-none" required>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="group">7+ (Group Booking)</option>
                </select>
              </div>

              <div className="flex flex-col border-b border-border-light pb-2 focus-within:border-primary transition-colors">
                <label className="text-[10px] font-bold text-stone tracking-[0.2em] uppercase mb-2">Occasion (Optional)</label>
                <select className="bg-transparent outline-none font-body text-primary text-xl font-bold w-full appearance-none rounded-none">
                  <option value="">Select an occasion</option>
                  <option value="dinner">Regular Dining</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="corporate">Corporate Event</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full border border-primary bg-primary text-surface py-5 mt-8 font-bold tracking-[0.2em] uppercase text-[11px] hover:bg-surface hover:text-primary transition-colors duration-500"
              >
                Request Reservation
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
