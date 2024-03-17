import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="mx-auto w-full max-w-6xl px-2 py-1 ">
        {children}
        <Footer />
      </div>
    </div>
  );
}
