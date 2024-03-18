import UpBtn from "./UpBtn";

export default function Footer() {
  return (
    <footer className="min-h-10 border-t relative flex items-center justify-center mt-2 z-[81]">
      <UpBtn />
      <a href="https://github.com/qwe515678" className="sm:absolute sm:-top-3.5 sm:left-5 bg-black px-2 flex-1 text-center">made by <span className="border-b-2 border-dashed border-pink-500">him</span></a>
    </footer>
  );
}
