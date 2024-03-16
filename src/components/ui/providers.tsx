"use client";

import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export interface MouseStateContextProps {
  mouseState: string;
  setMouseState: Dispatch<SetStateAction<string>>;
}
const MouseStateContext = createContext<MouseStateContextProps | undefined>(
  undefined,
);

export interface BgBlurContextProps {
  bgBlur: boolean;
  setBgBlur: Dispatch<SetStateAction<boolean>>;
}
const BgBlurContext = createContext<BgBlurContextProps | undefined>(undefined);

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [mouseState, setMouseState] = useState<string>("normal");
  const [bgBlur, setBgBlur] = useState<boolean>(false);
  return (
    <MouseStateContext.Provider value={{ mouseState, setMouseState }}>
      <BgBlurContext.Provider value={{ bgBlur, setBgBlur }}>
        {children}
      </BgBlurContext.Provider>
    </MouseStateContext.Provider>
  );
}

export { MouseStateContext, BgBlurContext };
