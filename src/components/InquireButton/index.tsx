"use client";
// components/InquireButton.tsx
import { useState } from "react";
import {MoveRight} from 'lucide-react'
import { useModal } from "@/components/ModalContext";


const InquireButton = () => {
  const { openModal } = useModal();
  return (
    <button onClick={openModal} className="flex inline-block rounded-sm bg-primary px-5 lg:px-16 py-2 lg:py-4 text-base lg:text-xl font-semibold text-white duration-300 ease-in-out hover:bg-black/90 mt-3">
      Enquire Now <span><MoveRight className="text-lg text-white ml-3" /></span>
    </button>
  );
};

export default InquireButton;
