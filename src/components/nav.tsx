import { ThemeMode } from "./theme-mode";
import MenuNavigation from "./menu-navigation";

export default function Nav() {
  return (
    <div className="flex justify-between items-center p-4 ">
      <div>
        <MenuNavigation />
      </div>
      <div>
        <ThemeMode />
      </div>
    </div>
  );
}
