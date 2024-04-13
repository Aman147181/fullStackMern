import React, { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Newsletter from "../components/Newsletter";
const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const FAQ = [
    {
      title: "How to buy a product?",
      content:
        "To buy a product, simply browse our website, choose the desired item, and click on the 'Add to Cart' button. Follow the checkout process to complete your purchase. For detailed instructions, you can refer to our user guide.",
    },
    {
      title: "How can I make a refund from the website?",
      content:
        "If you need to request a refund, please visit our 'Refund Policy' page for detailed information on our refund process. Follow the provided instructions to initiate a refund request. Our customer support team is also available to assist you throughout the process.",
    },
    {
      title: "Why can't I select next day delivery?",
      content:
        "Next day delivery may not be available for all products or in certain locations. Please check the delivery options during the checkout process. If next day delivery is not available, it could be due to product availability, your location, or other factors. Feel free to contact our support team for assistance and alternative delivery options.",
    },
    {
      title: "How do I track my order?",
      content:
        "Once your order is dispatched, you will receive a confirmation email with a tracking number. You can use this tracking number on our website to monitor the real-time status and expected delivery date of your order. If you encounter any issues or have questions about tracking, our customer support team is here to help.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-5">
      <div className="flex w-full items-center flex-col justify-center">
        <h1 className="text-black font-volkhov font-medium px-2  text-5xl">Get in Touch</h1>
        <h1 className="text-xl font-roboto font-normal px-5 pt-2 pb-5">If you have any questions, comments, or inquiries, feel free to reach out to us.
          Our dedicated team is ready to assist you in any way we can.</h1>
      </div>
      <div className="grid customsm:grid-cols-2 grid-cols-1 w-full mt-20 px-5 sm:px-12 md:px-16 lg:px-20 customsm:gap-10  sm:gap-16">
        <div className="col-span-1 text-[#062338] font-roboto ">
          <h1 className="  font-semibold  text-2xl">
            Frequently Asked Questions
          </h1>
          <Accordion>
            {FAQ.map((el, index) => (
              <AccordionItem key={index} title={el.title}>
                {el.content}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="col-span-1 font-roboto">
          <h1 className="text-2xl font-semibold pb-3">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="col-span-1">
                <label className="block mb-2" htmlFor="name">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className=" w-full p-2 mb-4 border border-[#878888]  rounded-md"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block mb-2" htmlFor="email">
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 mb-4 border border-[#878888]  rounded-md"
                  required
                />
              </div>
            </div>

            <label className="block mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-[#878888] rounded-md"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[#092635] text-white px-8 py-2 rounded-sm hover:text-[#092635] hover:text-medium hover:bg-slate-200 border-[#092635] border-[1px] duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
