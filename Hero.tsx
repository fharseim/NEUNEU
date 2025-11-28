import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end overflow-hidden border-b border-luxury-border">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
          alt="Architectural Detail"
          className="w-full h-full object-cover opacity-90 scale-105 animate-[pulse_15s_ease-in-out_infinite]"
        />
        {/* Lighter Gradient for Light Theme transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Grid Overlay Lines (Bauhaus Style) - White lines for dark image context */}
      <div className="absolute inset-0 pointer-events-none z-10 flex container mx-auto px-6 md:px-12 border-l border-r border-white/10 opacity-30">
        <div className="w-1/3 h-full border-r border-white/10"></div>
        <div className="w-1/3 h-full border-r border-white/10"></div>
      </div>

      {/* Content - White Text on Image */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          
          <div className="w-full md:w-2/3">
             <div className="overflow-hidden mb-4">
                <span className="block text-luxury-gold text-xs md:text-sm uppercase tracking-[0.4em] animate-fade-in-up">
                  Projektentwicklung
                </span>
             </div>
             
             <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white opacity-95">
               <span className="block animate-[reveal_1s_cubic-bezier(0.77,0,0.175,1)_0.2s_forwards] translate-y-full">VISION.</span>
               <span className="block animate-[reveal_1s_cubic-bezier(0.77,0,0.175,1)_0.4s_forwards] translate-y-full">PRÄZISION.</span>
               <span className="block animate-[reveal_1s_cubic-bezier(0.77,0,0.175,1)_0.6s_forwards] translate-y-full italic font-light text-gray-300">TRADITION.</span>
             </h1>
          </div>

          <div className="w-full md:w-1/3 border-l border-white/20 pl-0 md:pl-8 pb-2 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
            <p className="text-gray-200 text-sm md:text-base font-light leading-relaxed max-w-sm">
              Wir schaffen architektonische Wahrzeichen in ganz Deutschland. 
              Eine Symbiose aus junger Ambition und zeitlosen Baustandards.
            </p>
            
            <div className="mt-8 flex gap-4">
               <div className="h-[1px] w-12 bg-luxury-gold self-center"></div>
               <span className="text-xs uppercase tracking-widest text-white">Gegr. 2024 — München</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;