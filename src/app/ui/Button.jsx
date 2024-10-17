"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Button({ name }) {
  const router = useRouter();
  const handleBack = () => {
    router.back(-1);
  };

  return <button onClick={handleBack}>{name}</button>;
}

export default Button;
