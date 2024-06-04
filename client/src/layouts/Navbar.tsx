import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Context } from "@/contexts/ThemeProvider";
import { useAuth } from "@/features/user-login/hooks/useAuth";
import { Menu, Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, setTheme, setSystemTheme } = useContext(Context);
  const { user } = useAuth();
  console.log(user);
  return (
    <nav className="sticky top-0 z-10 border-b p-4 bg-white dark:bg-slate-950">
      <div className="container flex items-center justify-between gap-4">
        <div className="left-section">
          <span className="text-lg">WDS App</span>
        </div>
        <div className="right-section flex items-center justify-evenly gap-4 ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {theme === "dark" ? <Moon /> : <Sun />}
                <span className="sr-only">Toggle Theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSystemTheme()}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="hidden sm:flex">
            <NavItem to="/" label="Task Board" />
            <NavItem to="/" label="Job Lisitng" />
            {user !== undefined ? (
              <NavItem to="/" label={user.email} />
            ) : (
              <NavItem to="/login" label="Login" />
            )}
          </div>
          <div className="block sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Toggle Theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <NavItem to="/" label="Task Board" />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavItem to="/" label="Job Lisitng" />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavItem to="/" label="test@test.com" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label }) => {
  return (
    <Button asChild variant="ghost">
      <Link to={to}>{label}</Link>
    </Button>
  );
};

export default Navbar;
