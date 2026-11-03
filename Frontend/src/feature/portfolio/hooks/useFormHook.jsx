import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useHandleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aboutYourProject: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle Input Changes
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submission
  const formHandler = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      const response = await emailjs.send(
        "service_hjt0lvw",
        "template_c8pr79j",
        formData,
        {
          publicKey: "EzydT1HRAtow8KqO_",
        },
      );

      console.log("Email sent successfully!", response);

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        aboutYourProject: "",
      });

    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");

    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    status,
    formHandler,
    changeHandler,
  };
};