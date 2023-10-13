import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useInputValidation from '../../hooks/use-input';

const Form = () => {
  const firstNameInputRef = useRef("");
  const lastNameInputRef = useRef("");
  const phoneNumberRef = useRef();
  const emailInputRef = useRef("");
  const quoteBodyRef = useRef("");

  const [loading, setLoading] = useState(false);
  const { errors, validateInput } = useInputValidation();

  useEffect(() => {
    emailjs.init("QHP0nHj3ZRD_OMuYP");
  }, []);

  async function formSubmissionHandler(event) {
    event.preventDefault();
    setLoading(true);

    try {
      if (Object.keys(errors).length > 0) {
        setLoading(false)
        return;
      }
      await emailjs.send("Decorating Service", "template_nh6cb48", {
        firstName: firstNameInputRef.current.value,
        lastName: lastNameInputRef.current.value,
        quoteInfo: quoteBodyRef.current.value,
        phoneNumber: phoneNumberRef.current.value
      });
      console.log("success");
      alert("Form sent successfully!");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const loadingButtonClasses = `h-16 w-40 bg-sky-400 rounded-md hover:bg-sky-300 ${
    loading ? "cursor-not-allowed color" : ""
  }`;

  return (
    <form onSubmit={formSubmissionHandler} className="p-4 w-2/3">
      <div className="mb-4">
        <label htmlFor="firstName" className="mr-4 ">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First name"
          ref={firstNameInputRef}
          className="mr-4 rounded-md p-1 block w-full"
          required
          onBlur={(e) => validateInput("firstName", e.target.value)}
        />
        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="mr-4 ">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Last name"
          ref={lastNameInputRef}
          className="rounded-md p-1 block w-full"
          required
          onBlur={(e) => validateInput("lastName", e.target.value)}
        />
        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="mr-4 ">
          Phone Number
        </label>
        <input
          type="number"
          required
          id="phoneNumber"
          placeholder="Enter your phone number"
          ref={phoneNumberRef}
          className="rounded-md p-1 w-full"
          onBlur={(e) => validateInput("phoneNumber", e.target.value)}
        />
        {errors.phoneNumber && (
          <p className="text-red-500">{errors.phoneNumber}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="mr-4 ">
          Email
        </label>
        <input
          type="email"
          required
          id="email"
          placeholder="Email"
          ref={emailInputRef}
          className="rounded-md p-1 w-full"
          onBlur={(e) => validateInput("email", e.target.value)}
        />
        {errors.email && <p className="text-red-500">
            {errors.email}
          </p>}
      </div>
      <div className="flex flex-col mb-12">
        <label htmlFor="quoteinfo" className="mb-4">
          Quote Information
        </label>
        <textarea
          type="text"
          required
          id="quoteInfo"
          ref={quoteBodyRef}
          placeholder="Enter your quote information here, please be as descriptive as possible"
          className="rounded-md p-1"
        />
        {errors.quoteInfo && (
          <p className="text-red-500">
            {errors.quoteInfo}
          </p>
        )}
      </div>
      <button disabled={loading} className={loadingButtonClasses}>
        Submit
      </button>
    </form>
  );
};

export default Form;
