import React from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/ContactExperience'
import { useState,useRef } from 'react';
import emailjs from "@emailjs/browser";

function Contact() {

    const formRef = useRef(null);
      
      const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
      });

      const [loading, setLoading] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
    
        try {
          await emailjs.sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
          );
    
          
          setForm({ name: "", email: "", message: "" });
        } catch (error) {
          console.error("EmailJS Error:", error); 
        } finally {
          setLoading(false); 
        }
      };


  return (
    <section id="contact" className='flex-center section-padding scroll-mt-28'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
                title="Get In Touch With Me"
                sub="📧 Contact Information"
            />

            <div className='grid-12-cols mt-16'>
                {/* Left side */}
                    <div className='xl:col-span-5'>
                        <div className='flex-center card-border rounded-xl p-10'>
                            <form 
                            onSubmit={handleSubmit} 
                            className='w-full flex flex-col gap-7' 
                            ref={formRef}
                            >
                            <div>
                                <label htmlFor='name'>Name</label>
                                <input 
                                type='text' 
                                id='name' 
                                name="name"
                                placeholder="What's your good name" 
                                value={form.name} 
                                onChange={handleChange} 
                                required />
                            </div>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input 
                                type='email' 
                                id='email' 
                                name="email"
                                placeholder='Your Email Address' 
                                value={form.email} 
                                onChange={handleChange} 
                                required />
                            </div>
                            <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                   </div>
                        </button>
                    </form>
                        </div>
                </div>
                

                {/* Right side */}
                <div className='xl:col-span-7 min-h-96'>
                    <div className='bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden'>
                        <ContactExperience />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact