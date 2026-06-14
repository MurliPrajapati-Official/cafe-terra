export function Footer() {
  return (
    <footer className="bg-surface text-primary py-16 md:py-24 border-t border-border-light relative z-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 md:mb-24">
          
          <div className="lg:col-span-2">
            <h3 className="font-display text-4xl mb-6">Basho's</h3>
            <p className="text-espresso font-bold max-w-sm text-lg leading-relaxed mb-8">
              A complete social dining destination. Setting the standard for hospitality and celebration in Pune.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-stone tracking-[0.3em] uppercase mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#experience" className="hover:text-accent transition-colors text-sm font-semibold uppercase tracking-[0.1em]">The Experience</a></li>
              <li><a href="#menu" className="hover:text-accent transition-colors text-sm font-semibold uppercase tracking-[0.1em]">Signature Menu</a></li>
              <li><a href="#celebrations" className="hover:text-accent transition-colors text-sm font-semibold uppercase tracking-[0.1em]">Social Events</a></li>
              <li><a href="#stories" className="hover:text-accent transition-colors text-sm font-semibold uppercase tracking-[0.1em]">Guest Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-stone tracking-[0.3em] uppercase mb-6">Information</h4>
            <ul className="space-y-6">
              <li>
                <span className="block text-[10px] font-bold text-stone tracking-[0.2em] uppercase mb-1">Hours</span>
                <span className="text-sm font-semibold uppercase tracking-[0.1em]">Mon – Sun: 12 PM - 11:30 PM</span>
              </li>
              <li>
                <span className="block text-[10px] font-bold text-stone tracking-[0.2em] uppercase mb-2">Social</span>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-accent transition-colors text-sm font-semibold uppercase tracking-[0.1em]">Instagram</a>
                  <a href="#" className="hover:text-accent transition-colors text-sm font-semibold uppercase tracking-[0.1em]">Facebook</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-light text-[10px] uppercase tracking-[0.2em] font-semibold text-stone">
          <p>Designed for the Occasion &copy; {new Date().getFullYear()} Basho's</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
