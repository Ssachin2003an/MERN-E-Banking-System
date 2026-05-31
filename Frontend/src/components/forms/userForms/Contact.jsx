import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FcServices } from "react-icons/fc";
import { RiMessageFill } from "react-icons/ri";
import FormButton from "../../shared/FormButton";

export const Contact = () => {
  const form = useRef();

  const [success, setSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_t4911r7",
        "template_t4zskqw",
        form.current,
        "Z44qFKGOZPOFnPRtQ"
      );

      setSuccess(true);

      form.current.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl w-full">
      <h3 className="flex justify-center items-center text-2xl sm:text-3xl mb-10 p-4 text-center font-bold bg-blue-200 text-gray-900 border-b-4 border-blue-800 rounded shadow">
        <FcServices size={55} className="mr-1" />
        Contact Our Support!
      </h3>

      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
          >
            Name
          </label>

          <input
            type="text"
            name="user_name"
            id="name"
            required
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded focus:border-blue-600 focus:outline-none"
            placeholder="Please input Your Name"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
          >
            Email Address
          </label>

          <input
            type="email"
            name="user_email"
            id="email"
            required
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded focus:border-blue-600 focus:outline-none"
            placeholder="Please input Email Address"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
          >
            Message
          </label>

          <textarea
            name="message"
            id="message"
            required
            className="h-36 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded focus:border-blue-600 focus:outline-none resize-none"
          />
        </div>

        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
            Message sent successfully!
          </div>
        )}

        <FormButton
          text={{ default: "Send Message" }}
          icon={<RiMessageFill className="ml-1" size={25} />}
        />
      </form>
    </div>
  );
};