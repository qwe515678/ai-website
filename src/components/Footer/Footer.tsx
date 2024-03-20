import UpBtn from "./UpBtn";

export default function Footer() {
  return (
    <footer className="relative z-[81] mt-2 flex min-h-10 items-center justify-center border-t bg-black">
      <UpBtn />
      <a
        href="https://github.com/qwe515678"
        className="flex-1 bg-black px-2 text-center sm:absolute sm:-top-3.5 sm:left-5"
      >
        made by{" "}
        <span className="border-b-2 border-dashed border-pink-500">him</span>
      </a>
    </footer>
  );
}
