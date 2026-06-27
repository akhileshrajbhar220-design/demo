import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="font-display text-4xl md:text-6xl text-stone-900 mb-6">Get In Touch</h1>
        <div className="w-16 h-[1px] bg-stone-900 mx-auto mb-8"></div>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          We'd love to hear from you. For inquiries about our timepieces, support, or general questions, please reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Contact Information */}
        <div>
           <h2 className="font-display text-3xl text-stone-900 mb-8">Contact Information</h2>
           
           <div className="space-y-10">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-stone-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-stone-900" />
                 </div>
                 <div>
                    <h3 className="uppercase tracking-widest text-sm font-medium mb-2 text-stone-900">Address</h3>
                    <p className="text-stone-600 leading-relaxed">
                      EliteWatches Headquarters<br/>
                      245 Madison Avenue<br/>
                      New York, NY 10016<br/>
                      USA
                    </p>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-stone-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-stone-900" />
                 </div>
                 <div>
                    <h3 className="uppercase tracking-widest text-sm font-medium mb-2 text-stone-900">Phone</h3>
                    <p className="text-stone-600 leading-relaxed">
                      +1 (800) 555-2025
                    </p>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-stone-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-stone-900" />
                 </div>
                 <div>
                    <h3 className="uppercase tracking-widest text-sm font-medium mb-2 text-stone-900">Email</h3>
                    <p className="text-stone-600 leading-relaxed">
                      support@elitewatches.com
                    </p>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-stone-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-stone-900" />
                 </div>
                 <div>
                    <h3 className="uppercase tracking-widest text-sm font-medium mb-2 text-stone-900">Business Hours</h3>
                    <ul className="text-stone-600 leading-relaxed space-y-1">
                      <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
                      <li>Saturday: 10:00 AM – 4:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 border border-stone-100 shadow-sm">
           <h2 className="font-display text-3xl text-stone-900 mb-8">Send a Message</h2>
           <form className="space-y-6">
              <div className="space-y-2">
                 <label htmlFor="name" className="block text-xs uppercase tracking-widest font-medium text-stone-900">Full Name</label>
                 <input 
                   type="text" 
                   id="name"
                   className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors"
                   placeholder="John Doe"
                 />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label htmlFor="email" className="block text-xs uppercase tracking-widest font-medium text-stone-900">Email Address</label>
                   <input 
                     type="email" 
                     id="email"
                     className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors"
                     placeholder="john@example.com"
                   />
                </div>
                <div className="space-y-2">
                   <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-medium text-stone-900">Phone Number</label>
                   <input 
                     type="tel" 
                     id="phone"
                     className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors"
                     placeholder="+1 (555) 000-0000"
                   />
                </div>
              </div>

              <div className="space-y-2">
                 <label htmlFor="subject" className="block text-xs uppercase tracking-widest font-medium text-stone-900">Subject</label>
                 <input 
                   type="text" 
                   id="subject"
                   className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors"
                   placeholder="How can we help?"
                 />
              </div>

              <div className="space-y-2">
                 <label htmlFor="message" className="block text-xs uppercase tracking-widest font-medium text-stone-900">Message</label>
                 <textarea 
                   id="message"
                   rows={5}
                   className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors resize-none"
                   placeholder="Your message here..."
                 ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-stone-900 text-stone-50 py-4 uppercase tracking-widest text-sm font-medium hover:bg-stone-800 transition-colors mt-4"
              >
                 Submit Message
              </button>
           </form>
        </div>
      </div>
    </div>
  );
}
