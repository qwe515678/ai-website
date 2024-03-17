import Menu from "./Menu/MenuServer";
import SwitchTranslations from "./SwitchTranslations";

export default function Header() {
  return (
    <div className="fixed left-0 right-0 top-2 z-[90] mx-auto flex w-fit items-center justify-center gap-2">
      <Menu />
      <SwitchTranslations />
    </div>
  );
}
