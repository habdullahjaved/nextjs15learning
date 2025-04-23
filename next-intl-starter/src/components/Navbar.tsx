'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import React, {useState, ChangeEvent} from 'react';

interface NavbarProps {
  locale: string;
}

const Navbar: React.FC<NavbarProps> = ({locale}) => {
  const t = useTranslations('NavbarLinks');
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const path = pathname?.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);
  };

  const isRTL = locale === 'ar';

  return (
    <nav
      className={`w-full shadow-md bg-white ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href={`/${locale}/`}
              className="text-xl font-bold text-gray-800"
            >
              {t('home')}
            </Link>
          </div>

          {/* Toggle button (mobile) */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div
            className={`md:flex ${
              isOpen ? 'block' : 'hidden'
            } w-full md:w-auto`}
          >
            <ul
              className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-4 md:mt-0 ${
                isRTL ? 'md:ml-auto' : 'md:ml-auto'
              }`}
            >
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about/profile`}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {t('profile')}
                </Link>
              </li>
              <li>
                <select
                  value={locale}
                  onChange={handleLanguageChange}
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="ar">العربية</option>
                  <option value="pt">Português</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
