import { useState } from "react";

function useInputValidation() {
  const [errors, setErrors] = useState({});

  const validateInput = (name, value) => {
    let newErrors = { ...errors };
    if (name === "phoneNumber" && value.length !== 11) {
      newErrors[name] = "Please enter a valid number";
    } else if (name === "quoteInfo" && value.length < 10) {
      newErrors[name] = "The information provided is not sufficient";
    } else if (name === "firstName" && value.trim() === "") {
      newErrors[name] = "Name cannot be empty";
    } else if (name === "lastName" && value.trim() ==="") {
      newErrors[name] ="Name cannot be empty";
    } else if (name === "email" && value.trim() === "") {
      newErrors[name] = "Please enter a valid email address";
    } else if(name === "quoteInfo" && value.length < 10) {
      newErrors[name] = "This field requires more information"
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);
  };

  return { errors, validateInput };
}

export default useInputValidation;
