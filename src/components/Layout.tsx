import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Confirmation", path: "/about" },
    { name: "Quiz", path: "/quiz" },
    { name: "Ministries", path: "/ministries" },
    { name: "Candidates", path: "/candidates" },
    { name: "Events", path: "/events" },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-semibold">
                Holy Redeemer Catholic Church
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-primary/10"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">{children}</main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/holy-redeemer.PNG" // Reference the image directly from the public folder
              alt="Holy Redeemer Church Logo"
              className="h-18 w-auto object-contain mr-4 glass p-2 rounded-lg" // Added glass effect
            />
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Holy Redeemer Catholic Church.
              <br>Developed by Liam De Wet. All rights reserved.</br>
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="https://www.vatican.va" // Example external link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Vatican Website
            </a>
            <a
              href="https://www.catholic.org" // Example external link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Catholic Resources
            </a>
            <a
              href="https://www.holyredeemer.co.za" // Replace with your contact page
              className="hover:text-primary transition-colors"
            >
              Church Website
            </a>
              <a
              href="https://journey-through-sainthood.netlify.app" // Replace with your contact page
              className="hover:text-primary transition-colors"
            >
              My Saints Website
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
