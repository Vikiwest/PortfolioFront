import { useState } from "react";
import { toast } from "react-toastify";

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
    console.log(formData);

    try {
      // Send form data to backend to send email
      const response = await fetch(
        "https://portfolio-zkup.onrender.com/send-email",
        {
          // Change to your backend URL if different
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        toast.success("Form submitted successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[400px] max-h-auto mx-auto p-6">
      <h2 className="proj-header font-bold text-5xl text-center">Contact</h2>
      <div className="mb-14 mt-5 h-[4px] w-[100px] m-auto bg-brandyellow rounded-full" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="font-medium">
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow-inner mt-1 p-2 block w-full border border-OffWhite bg-OffWhite rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </label>

        <label className="font-medium">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow-inner mt-1 p-2 block w-full border border-OffWhite bg-OffWhite rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </label>

        <label className="font-medium">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow-inner mt-1 p-2 block w-full border border-OffWhite bg-OffWhite rounded-md focus:ring-yellow-500 focus:border-yellow-500 resize-none"
            rows="4"
            required
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-brandyellow ml-auto mt-5 w-[89px] py-2 px-4 text-white font-semibold rounded-md shadow-sm hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
