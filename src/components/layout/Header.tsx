import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Division", path: "/division" },
  { name: "Blogs", path: "/blogs" },
  { name: "Career", path: "/career" },
  { name: "Contact Us", path: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      window.scrollTo({ top: 0 });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Bar */}
        <div className="hidden lg:block bg-primary text-primary-foreground py-2 overflow-hidden">
          <div className="flex w-max animate-marquee text-sm">
            <div className="flex items-center gap-16 pr-16 whitespace-nowrap">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 94405 84273
              </span>

              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@portaitechnologies.com
              </span>

              <span>
                🚀 Driving Industrial Success Through Engineering Excellence • 14 Months of Trusted Support
              </span>
            </div>

            <div className="flex items-center gap-16 pr-16 whitespace-nowrap" aria-hidden="true">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 94405 84273
              </span>

              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@portaitechnologies.com
              </span>

              <span>
                🚀 Driving Industrial Success Through Engineering Excellence • 14 Months of Trusted Support
              </span>
            </div>
          </div>
        </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-elevated"
            : "bg-card"
          }`}
      >
        <div className="container-industrial">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
              <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-accent/30 shadow-lg group-hover:border-accent transition-colors duration-300">
                <img
                  src={logo}
                  alt="Port AI Technologies"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-primary leading-tight">
                  Port AI
                </span>
                <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${location.pathname === item.path
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-muted"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <Button variant="accent" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-screen" : "max-h-0"
            }`}
        >
          <nav className="container-industrial py-4 border-t border-border">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 text-base font-medium transition-colors ${location.pathname === item.path
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                  }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-border">
              <Button variant="accent" className="w-full" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
