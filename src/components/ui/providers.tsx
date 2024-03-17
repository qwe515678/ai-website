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
  mouseTitle: string | ReactNode;
  setMouseTitle: Dispatch<SetStateAction<string | ReactNode>>;
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
  const [mouseTitle, setMouseTitle] = useState<string | ReactNode>("");
  const [bgBlur, setBgBlur] = useState<boolean>(false);
  return (
    <MouseStateContext.Provider
      value={{ mouseState, setMouseState, mouseTitle, setMouseTitle }}
    >
      <BgBlurContext.Provider value={{ bgBlur, setBgBlur }}>
        {children}
      </BgBlurContext.Provider>
    </MouseStateContext.Provider>
  );
}

export { MouseStateContext, BgBlurContext };
