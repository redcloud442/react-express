import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";

const Header = () => {
  const handleRedirectToContactUs = () => {
    const el = document.getElementById("hero-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="fixed sm:fixed sm:block hidden top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-4xl text-violet-600 font-bold dark:text-white">
          <Link onClick={handleRedirectToContactUs} to="/">
            B2B
          </Link>
        </h1>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                onClick={handleRedirectToContactUs}
                to="/"
                className="text-sm font-medium hover:underline text-gray-700 "
              >
                Home
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
