import React from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-luxury-bg text-luxury-text border-t border-luxury-border">
      <div className="container mx-auto px-6 md:px-12 border-l border-r border-luxury-border">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
            
            {/* Left: Info */}
            <div className="py-24 md:py-32 md:pr-16 border-b md:border-b-0 md:border-r border-luxury-border flex flex-col justify-between">
                <div>
                    <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-none">
                        Wir bauen<br/>
                        <span className="italic text-gray-500">die Zukunft.</span>
                    </h2>
                    <p className="text-gray-600 font-light text-lg max-w-sm">
                        Interessiert an einer Investition oder haben Sie ein Projektangebot? Wir sind stets auf der Suche nach neuen Möglichkeiten in ganz Deutschland.
                    </p>
                </div>

                <div className="space-y-8 mt-16 md:mt-0">
                    <div>
                        <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">E-Mail</span>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-2xl font-serif hover:text-luxury-gold transition-colors">
                            {CONTACT_INFO.email}
                        </a>
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Büro</span>
                        <address className="text-xl font-light not-italic text-gray-600">
                            {CONTACT_INFO.address.split(',')[0]}<br/>
                            {CONTACT_INFO.address.split(',')[1]}
                        </address>
                    </div>
                </div>
            </div>

            {/* Right: Form */}
            <div className="py-24 md:py-32 md:pl-16 flex flex-col justify-center bg-gray-100/50">
                <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative group">
                        <input 
                            type="text" 
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-xl focus:outline-none focus:border-luxury-gold transition-colors text-luxury-text placeholder-transparent peer"
                            placeholder="Name"
                            id="name"
                        />
                        <label htmlFor="name" className="absolute left-0 top-4 text-gray-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-luxury-gold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 uppercase tracking-widest text-sm">
                            Name
                        </label>
                    </div>

                    <div className="relative group">
                        <input 
                            type="email" 
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-xl focus:outline-none focus:border-luxury-gold transition-colors text-luxury-text placeholder-transparent peer"
                            placeholder="E-Mail"
                            id="email"
                        />
                         <label htmlFor="email" className="absolute left-0 top-4 text-gray-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-luxury-gold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 uppercase tracking-widest text-sm">
                            E-Mail
                        </label>
                    </div>

                    <div className="relative group">
                        <textarea 
                            rows={3}
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-xl focus:outline-none focus:border-luxury-gold transition-colors text-luxury-text placeholder-transparent peer resize-none"
                            placeholder="Nachricht"
                            id="message"
                        />
                         <label htmlFor="message" className="absolute left-0 top-4 text-gray-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-luxury-gold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 uppercase tracking-widest text-sm">
                            Nachricht
                        </label>
                    </div>
                    
                    <button type="submit" className="group flex items-center gap-4 text-luxury-text hover:text-luxury-gold transition-colors duration-300 pt-4">
                        <span className="uppercase tracking-[0.2em] text-sm">Anfrage Senden</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;