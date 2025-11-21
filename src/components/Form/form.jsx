import { useState } from "react";
import { toast } from "react-toastify";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://portfolio-zkup.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        toast.success("🎉 Message sent successfully! I'll get back to you soon.");
      } else {
        toast.error("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("❌ Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-white/10 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brandyellow to-orange-400 rounded-full mx-auto mb-6" />
          <p className="text-xl text-white/10 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="group">
                <label className="flex items-center gap-3 text-white font-semibold text-lg mb-4">
                  <FaUser className="w-5 h-5 text-brandyellow" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-brandyellow/50 focus:bg-white/10 transition-all duration-300 focus:scale-[1.02]"
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="flex items-center gap-3 text-white font-semibold text-lg mb-4">
                  <FaEnvelope className="w-5 h-5 text-brandyellow" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-brandyellow/50 focus:bg-white/10 transition-all duration-300 focus:scale-[1.02]"
                  placeholder="Enter your email address"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label className="flex items-center gap-3 text-white font-semibold text-lg mb-4">
                  <FaComment className="w-5 h-5 text-brandyellow" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-brandyellow/50 focus:bg-white/10 transition-all duration-300 focus:scale-[1.02] resize-none"
                  placeholder="Tell me about your project, ideas, or anything you'd like to discuss..."
                  rows="6"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-brandyellow to-orange-500 hover:from-orange-500 hover:to-brandyellow text-black font-bold py-5 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brandyellow/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Alternative Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-gray-400 mb-4">Prefer direct contact?</p>
                <a 
                  href="mailto:chidiolorunda@gmail.com" 
                  className="text-brandyellow hover:text-orange-400 font-semibold text-lg transition-colors duration-300"
                >
                  chidiolorunda@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-2xl text-center">
              <p className="text-green-400 text-lg font-semibold">
                ✅ Thank you for your message! I'll get back to you within 24 hours.
              </p>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-brandyellow mb-2">24h</div>
            <div className="text-gray-300">Response Time</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-brandyellow mb-2">100%</div>
            <div className="text-gray-300">Project Discussion</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-brandyellow mb-2">Free</div>
            <div className="text-gray-300">Initial Consultation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;