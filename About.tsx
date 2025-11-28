import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-luxury-bg text-luxury-text py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 border-l border-r border-luxury-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            
            {/* Image Col */}
            <div className="md:col-span-5 relative">
                <div className="relative z-10 border border-luxury-border p-4 bg-white">
                     {/* 
                        HINWEIS: Bitte speichern Sie Ihr Profilbild als "profile.jpg" im public-Ordner.
                     */}
                     <img 
                        src="/profile.jpg" 
                        onError={(e) => {
                            e.currentTarget.src = "https://www.dsv.org/app/uploads/2025/06/01_Felix-Diemer-fuer-SailGP_Germany-SailGP-Team_Paul-Kohlhoff-scaled.jpg";
                        }}
                        alt="Der Gründer" 
                        className="w-full aspect-[3/4] object-cover grayscale contrast-110 brightness-105"
                    />
                </div>
                {/* Decorative background element */}
                <div className="absolute top-12 -left-12 w-full h-full border border-luxury-gold/30 -z-0 hidden md:block"></div>
            </div>

            {/* Content Col */}
            <div className="md:col-span-7 flex flex-col justify-center">
                <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] mb-8 block">Der Gründer</span>
                
                <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
                    Leistungswille.<br/>
                    <span className="italic text-gray-500">Klassische Präzision.</span>
                </h2>
                
                <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed mb-12">
                    <p>
                        <span className="text-luxury-text font-medium">Kohlhoffprojekte</span> überträgt die Prinzipien des Hochleistungssports auf die Immobilienentwicklung: Fokus, Ausdauer und absoluten Teamgeist.
                    </p>
                    <p>
                        Wir realisieren Projekte mit derselben Präzision, die im Wettkampf den Unterschied macht. Unser Anspruch ist es, Räume zu schaffen, die nicht nur funktionale Werte erfüllen, sondern Charakter und Beständigkeit beweisen.
                    </p>
                </div>

                <div className="flex flex-col space-y-4 border-t border-luxury-border pt-8">
                     <p className="text-sm font-light text-gray-500 italic">
                        "Erfolg ist planbar – durch Disziplin, Vision und das richtige Team."
                     </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;