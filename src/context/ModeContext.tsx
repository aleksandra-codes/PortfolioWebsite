import { createContext } from "react";

interface Mode {
    darkMode: boolean;
    setMode: any;
  }
  
export const ModeContext = createContext<Mode>({darkMode: false, setMode: undefined})