"use client";

import SetMouseState from "../ui/SetMouseState";
import { FaArrowUp } from "react-icons/fa";
export default function UpBtn() {
  return (
    <div className="absolute right-0 mx-auto bg-black px-2 sm:-top-3.5 sm:right-3">
      <SetMouseState>
        <button
          className="cursor-pointer border-none text-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp />
        </button>
      </SetMouseState>
    </div>
  );
}
