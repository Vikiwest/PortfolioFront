import { useState } from "react";
import { toast } from "react-toastify";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration - YOU NEED TO GET THESE FROM EMAILJS DASHBOARD
  // EmailJS configuration - SECURE VERSION
  const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendNotificationEmail = async () => {
    try {
      // Send notification to yourself via EmailJS
      const emailjsResult = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
          to_email: "chidiolorunda@gmail.com",
        },
        EMAILJS_CONFIG.publicKey
      );

      console.log("✅ EmailJS notification sent:", emailjsResult);
      return true;
    } catch (emailjsError) {
      console.error("❌ EmailJS failed:", emailjsError);
      // Don't fail the entire process if EmailJS fails
      return false;
    }
  };

  const sendAutoReply = async () => {
    try {
      // Send auto-reply via your backend
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch(
        "https://portfolio-zkup.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Backend responded with status: ${response.status}`);
      }

      const result = await response.json();
      console.log("✅ Backend auto-reply sent:", result);
      return true;
    } catch (backendError) {
      console.error("❌ Backend auto-reply failed:", backendError);
      // Don't fail the entire process if backend fails
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Starting hybrid email process...");

      // Step 1: Send notification to yourself via EmailJS
      const emailjsSuccess = await sendNotificationEmail();

      // Step 2: Send auto-reply to user via your backend
      const backendSuccess = await sendAutoReply();

      if (emailjsSuccess || backendSuccess) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        if (emailjsSuccess && backendSuccess) {
          toast.success(
            "🎉 Message sent successfully! You'll receive a confirmation email shortly."
          );
        } else if (emailjsSuccess) {
          toast.success(" Message received! I'll get back to you soon.");
        } else if (backendSuccess) {
          toast.success(" Message sent! Check your email for confirmation.");
        }
      } else {
        throw new Error("Both email services failed");
      }
    } catch (error) {
      console.error("Hybrid approach error:", error);

      if (error.name === "AbortError") {
        toast.error("⏰ Request timeout. Please try again in 30 seconds.");
      } else if (error.message.includes("Failed to fetch")) {
        toast.error("🌐 Network error. Please check your connection.");
      } else {
        toast.error(
          "❌ Failed to send message. Please try emailing directly: chidiolorunda@gmail.com"
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brandyellow to-orange-400 rounded-full mx-auto mb-6" />
          <p className="text-xl text-white max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
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
                  maxLength={100}
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
                  maxLength={2000}
                />
                <div className="text-right text-sm text-gray-400 mt-2">
                  {formData.message.length}/2000
                </div>
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
                <p className="text-white mb-4">Prefer direct contact?</p>
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
              <p className="text-white/10 text-lg font-semibold ">
                ✅ Thank you for your message! You should receive a confirmation
                email shortly.
              </p>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-brandyellow mb-2">20h</div>
            <div className="text-white">Response Time</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-brandyellow mb-2">100%</div>
            <div className="text-white">Project Discussion</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-brandyellow mb-2">Free</div>
            <div className="text-white">Initial Consultation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
