"use client";

import React, { useState } from "react";

export default function useSelectHook() {
  const [selectedOption, setSelectedOption] = useState(null);
  return [selectedOption, setSelectedOption];
}
    