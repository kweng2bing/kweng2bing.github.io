import { Link, useLocation } from "react-router-dom";

/**
 * Navbar — The Global Navigation Element
 * 
 * This component renders a fixed top navigation bar that persists across all pages.
 * It lives outside of the page-level routing in App.tsx, so it's always visible
 * regardless of which page the user is viewing.
 * 
 * Structure:
 * - Left side: Your name/logo, acting as a home link back to the About page.
 * - Right side: Navigation links to Projects and Resume pages.
 * 
 * In a GitHub Pages context, this is the consistent "chrome" of your site —
 * the frame that makes it feel like a cohesive application rather than
 * disconnected HTML pages.
 * */
const Navbar = () => {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors duration-100 ${
      pathname === path
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <Link to="/" className="text-sm font-semibold tracking-tight text-foreground">
          Home
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/projects" className={linkClass("/projects")}>
            Projects
          </Link>
          <Link to="/resume" className={linkClass("/resume")}>
            Resume
          </Link>
          <Link to="/coursework" className={linkClass("/coursework")}>
            Coursework
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
