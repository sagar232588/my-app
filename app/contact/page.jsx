"use client";
import { useState } from "react";
import { sendEmail } from "@/lib/resend";
import Navbar from "../navbar/page";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  async function send(event) {
    event.preventDefault(); 
    setStatus(""); 

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      await sendEmail(formData); 
      setStatus("Email sent successfully!"); 
    } catch (error) {
      console.error("Error sending email:", error); 
      setStatus("Failed to send email. Please try again."); 
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
        <form onSubmit={send} className="w-full max-w-md p-4 border rounded-lg shadow">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border rounded-lg p-2"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-lg p-2"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              className="w-full border rounded-lg p-2"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
      </main>
    </>
  );
}
