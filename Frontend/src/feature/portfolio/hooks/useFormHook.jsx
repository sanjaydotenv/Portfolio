import { useRef, useState } from "react";

export const useHandleForm = () => {
  const [formData, setformData] = useState({});

  const formHandler = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const changeHandler = (data) => {
    setformData((prev) => ({ ...prev, [data.target.name]: data.target.value }));
  };

  return {
    formHandler,
    changeHandler,
  };
};
