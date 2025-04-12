import { useState } from "react";
import Link from "next/link";

const NavbarClaude = () => {
  // Track which megamenu is currently open
  const [openMegaMenu, setOpenMegaMenu] = useState(null);

  // Toggle function for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Data for megamenus
  const megaMenus = {
    products: {
      title: "Products",
      columns: [
        {
          title: "Categories",
          links: [
            { label: "Electronics", href: "/products/electronics" },
            { label: "Clothing", href: "/products/clothing" },
            { label: "Home & Garden", href: "/products/home-garden" },
            { label: "Sports", href: "/products/sports" },
          ],
        },
        {
          title: "Featured",
          links: [
            { label: "New Arrivals", href: "/products/new" },
            { label: "Best Sellers", href: "/products/best-sellers" },
            { label: "Sale Items", href: "/products/sale" },
          ],
        },
        {
          title: "Collections",
          links: [
            { label: "Summer 2025", href: "/collections/summer-2025" },
            { label: "Eco-Friendly", href: "/collections/eco-friendly" },
            { label: "Handcrafted", href: "/collections/handcrafted" },
          ],
        },
      ],
    },
    services: {
      title: "Services",
      columns: [
        {
          title: "Business Services",
          links: [
            { label: "Consulting", href: "/services/consulting" },
            { label: "Marketing", href: "/services/marketing" },
            { label: "Design", href: "/services/design" },
          ],
        },
        {
          title: "Personal Services",
          links: [
            { label: "Coaching", href: "/services/coaching" },
            { label: "Training", href: "/services/training" },
            { label: "Support", href: "/services/support" },
          ],
        },
      ],
    },
  };

  // Regular dropdown menus
  const dropdownMenus = {
    resources: {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Guides", href: "/guides" },
        { label: "Webinars", href: "/webinars" },
        { label: "Podcasts", href: "/podcasts" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
  };

  // Handle mouse enter for megamenu
  const handleMouseEnter = (menuKey) => {
    setOpenMegaMenu(menuKey);
  };

  // Handle mouse leave for entire navbar
  const handleMouseLeave = () => {
    setOpenMegaMenu(null);
  };

  return (
    <nav className="bg-white shadow-md" onMouseLeave={handleMouseLeave}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              YourBrand
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* Mega Menus */}
            {Object.keys(megaMenus).map((menuKey) => (
              <div
                key={menuKey}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menuKey)}
              >
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    openMegaMenu === menuKey
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                  } transition duration-150 ease-in-out`}
                >
                  {megaMenus[menuKey].title}
                </button>

                {/* Mega Menu Dropdown */}
                {openMegaMenu === menuKey && (
                  <div className="absolute left-0 mt-0 w-screen max-w-5xl bg-white border border-gray-200 rounded-b-lg shadow-lg z-50">
                    <div className="grid grid-cols-3 gap-8 p-6">
                      {megaMenus[menuKey].columns.map((column, idx) => (
                        <div key={idx}>
                          <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-3">
                            {column.title}
                          </h3>
                          <ul className="space-y-2">
                            {column.links.map((link, linkIdx) => (
                              <li key={linkIdx}>
                                <Link
                                  href={link.href}
                                  className="text-base text-gray-600 hover:text-blue-700"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Regular Dropdown Menus */}
            {Object.keys(dropdownMenus).map((menuKey) => (
              <div
                key={menuKey}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menuKey)}
              >
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    openMegaMenu === menuKey
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                  } transition duration-150 ease-in-out`}
                >
                  {dropdownMenus[menuKey].title}
                </button>

                {/* Standard Dropdown */}
                {openMegaMenu === menuKey && (
                  <div className="absolute right-0 mt-0 w-48 bg-white border border-gray-200 rounded-b-lg shadow-lg z-50">
                    <div className="py-2">
                      {dropdownMenus[menuKey].links.map((link, linkIdx) => (
                        <Link
                          key={linkIdx}
                          href={link.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {Object.keys(megaMenus).map((menuKey) => (
              <Link
                key={menuKey}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50"
              >
                {megaMenus[menuKey].title}
              </Link>
            ))}

            {Object.keys(dropdownMenus).map((menuKey) => (
              <Link
                key={menuKey}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50"
              >
                {dropdownMenus[menuKey].title}
              </Link>
            ))}

            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarClaude;
