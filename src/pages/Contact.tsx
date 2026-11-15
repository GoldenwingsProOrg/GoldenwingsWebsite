import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe, MessageSquare, ArrowRight, ShieldCheck, Headphones } from 'lucide-react';
import locationImage from '../assets/dubai_contact_location.png';

const Contact: React.FC = () => {
  return (
    <div className="bg-gw-black selection:bg-gw-gold selection:text-gw-black dark-mesh-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="h-[2px] w-8 bg-gw-gold"></div>
            <span className="text-gw-gold font-bold tracking-[0.3em] uppercase text-xs">Direct Access</span>
            <div className="h-[2px] w-8 bg-gw-gold"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black text-white mb-6"
          >
            Get In <span className="text-gw-gold italic">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-light"
          >
            Connect directly with our senior corporate advisors in Dubai. Reach out via call, WhatsApp, or visit our office in Deira.
          </motion.p>
        </div>

        {/* Quick Contact Action Banners */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {/* Call Card */}
          <a 
            href="tel:+971569775916"
            className="bg-gw-dark/80 hover:bg-gw-dark border border-white/5 hover:border-gw-gold/40 p-8 rounded-3xl transition-all duration-300 group flex items-center justify-between"
          >
            <div className="flex items-center space-x-5">
              <div className="p-4 bg-gw-gold/10 rounded-2xl text-gw-gold group-hover:bg-gw-gold group-hover:text-black transition-colors duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Call Us Direct</p>
                <p className="text-lg font-serif font-bold text-white group-hover:text-gw-gold transition-colors">+971 56 977 5916</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-gray-500 group-hover:text-gw-gold group-hover:translate-x-1 transition-all" />
          </a>

          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/971569775916"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gw-dark/80 hover:bg-gw-dark border border-white/5 hover:border-gw-gold/40 p-8 rounded-3xl transition-all duration-300 group flex items-center justify-between"
          >
            <div className="flex items-center space-x-5">
              <div className="p-4 bg-green-500/10 rounded-2xl text-green-400 group-hover:bg-green-500 group-hover:text-black transition-colors duration-300">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Chat on WhatsApp</p>
                <p className="text-lg font-serif font-bold text-white group-hover:text-green-400 transition-colors">Instant Advisory</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-gray-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
          </a>

          {/* Email Card */}
          <a 
            href="mailto:info@goldenwindspro.com"
            className="bg-gw-dark/80 hover:bg-gw-dark border border-white/5 hover:border-gw-gold/40 p-8 rounded-3xl transition-all duration-300 group flex items-center justify-between"
          >
            <div className="flex items-center space-x-5">
              <div className="p-4 bg-gw-gold/10 rounded-2xl text-gw-gold group-hover:bg-gw-gold group-hover:text-black transition-colors duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Official Email</p>
                <p className="text-sm md:text-base font-serif font-bold text-white group-hover:text-gw-gold transition-colors break-all">info@goldenwindspro.com</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-gray-500 group-hover:text-gw-gold group-hover:translate-x-1 transition-all" />
          </a>
        </motion.div>

        {/* Detailed Information Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Office & Operations Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gw-dark p-10 md:p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden border border-white/5 space-y-8"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gw-gold/10 blur-[70px] pointer-events-none"></div>

            <div className="flex items-center space-x-4 border-b border-white/5 pb-6">
              <div className="p-3 bg-gw-gold/10 rounded-2xl text-gw-gold">
                <Headphones size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold">Office & Operation Hours</h3>
                <p className="text-xs text-gray-400">Available to serve you across Dubai and the UAE</p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { 
                  icon: <Phone className="text-gw-gold" size={20} />, 
                  label: "Phone Line", 
                  value: "+971 56 977 5916", 
                  action: "tel:+971569775916", 
                  actionText: "Call Now" 
                },
                { 
                  icon: <Mail className="text-gw-gold" size={20} />, 
                  label: "Corporate Inquiries", 
                  value: "info@goldenwindspro.com", 
                  action: "mailto:info@goldenwindspro.com", 
                  actionText: "Write Email" 
                },
                { 
                  icon: <MapPin className="text-gw-gold" size={20} />, 
                  label: "Physical Address", 
                  value: "101, Deira Business, Dubai, United Arab Emirates", 
                  action: "https://maps.google.com/?q=Deira+Dubai", 
                  actionText: "Get Directions" 
                },
                { 
                  icon: <Clock className="text-gw-gold" size={20} />, 
                  label: "Operating Hours", 
                  value: "Monday – Friday: 9:00 AM – 6:00 PM (GST)", 
                  subtext: "Saturday - Sunday: By appointment" 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gw-gold/20 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">{item.label}</div>
                      <div className="text-base font-semibold text-white">{item.value}</div>
                      {item.subtext && (
                        <div className="text-xs text-gray-400 mt-1">{item.subtext}</div>
                      )}
                    </div>
                  </div>
                  {item.action && (
                    <a 
                      href={item.action} 
                      target={item.action.startsWith('http') ? '_blank' : undefined}
                      rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="hidden sm:inline-flex items-center text-xs font-bold text-gw-gold hover:text-white transition-colors border border-gw-gold/30 hover:border-white px-3 py-2 rounded-xl mt-2"
                    >
                      {item.actionText}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center space-x-2">
                <ShieldCheck size={16} className="text-gw-gold" />
                <span>Licensed Corporate Service Provider</span>
              </span>
              <span className="text-gw-gold font-bold">Dubai, UAE</span>
            </div>
          </motion.div>

          {/* Location & Presence Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gw-dark rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl flex flex-col justify-between"
          >
            <div className="relative h-72 overflow-hidden group">
              <img 
                src={locationImage} 
                alt="Deira Business District Dubai" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gw-dark via-gw-dark/40 to-transparent"></div>
              <div className="absolute top-6 left-6 bg-gw-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center space-x-2">
                <Globe className="text-gw-gold w-4 h-4 animate-pulse" />
                <span className="text-xs font-bold text-white">Deira Business Hub</span>
              </div>
            </div>

            <div className="p-10 md:p-12 space-y-6">
              <div>
                <h4 className="text-2xl font-serif font-black text-white mb-3">Strategically Rooted in Deira</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our headquarters are located in the heart of Deira's commercial quarter, allowing for rapid liaison and document submission with the Department of Economy and Tourism (DET), Free Zone authorities, and federal ministries.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xl font-bold text-gw-gold font-serif">100%</div>
                  <div className="text-[11px] text-gray-400 mt-1">Direct Consultant Liaison</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xl font-bold text-gw-gold font-serif">&lt; 1 Hour</div>
                  <div className="text-[11px] text-gray-400 mt-1">Standard Response Time</div>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="tel:+971569775916" 
                  className="w-full btn-premium py-5 text-center block text-sm tracking-widest uppercase font-bold"
                >
                  Speak with an Advisor
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
