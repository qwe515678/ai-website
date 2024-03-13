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

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [mouseState, setMouseState] = useState<string>("normal");
  return (
    <MouseStateContext.Provider value={{ mouseState, setMouseState }}>
      {children}
    </MouseStateContext.Provider>
  );
}

export { MouseStateContext };
