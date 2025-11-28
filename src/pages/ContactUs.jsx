import React from "react";
import Hero from "../components/layout/Hero";

function ContactUs() {
  return (
    <>
      <Hero />
      <div className=" bg-white flex items-center justify-center px-6 ">
        <div className="max-w-3xl w-full">
          {/* Title */}
          <h1 className="text-4xl font-semibold text-gray-900 text-center mb-12 tracking-wide mt-20">
            Contact Us
          </h1>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows="6"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F5F0BF]  py-3 rounded-md font-medium hover:bg-yellow-200 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info Section */}
          <div className="my-8 text-center space-y-4 text-gray-700 ">
            <p><span className="font-semibold"> Have questions or need help? </span>We're here for you.</p>

            <span className="mx-2">
              <span className="font-semibold ">Email:</span> support@lunora.com{" "}
            </span>

            <span className="mx-2">
              <span className="font-semibold ">Phone:</span> 010 001 123 456{" "}
            </span>

            <span className="mx-2">
              <span className="font-semibold ">Address:</span> Cairo, Egypt{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
