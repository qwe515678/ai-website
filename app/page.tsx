import Hero from "@/components/hero/hero";
import MatrixRain from "@/components/hero/running-letters";

export default function Home() {
  return (
    <div className=" flex flex-col gap-5">
      <section className="h-dvh overflow-hidden"><Hero/></section>
      <div className="h-dvh border-t" />
      <div className="h-dvh" />
      <div className="h-dvh" />
      <div className="h-dvh" />
    </div>
  );
}