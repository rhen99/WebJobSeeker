import React, { useState } from "react";

export function useForm(values) {
  const [formData, setFormData] = useState(values);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return { handleChange, formData };
}
