import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-zinc-800 text-gray-300 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Customer Service</h3>
            <p className="text-gray-300">
              For customer service inquiries, please call us at: 1-800-123-4567
            </p>
            <p className="text-gray-300">
              Email us at: customerservice@tsfbank.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Branch Locations</h3>
            <p className="text-gray-300">Visit one of our branch locations:</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Main Branch: 123 Main St, Lahore City</li>
              <li>Downtown Branch: 456 Elm St, Burewala City</li>
              <li>Westside Branch: 789 Oak St, Sahiwal City</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
