// components/LanguageSwitcher.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = locale === "en" ? "ar" : "en";

  const handleChange = () => {
    const newPath = `/${switchTo}${pathname.replace(`/${locale}`, "")}`;
    router.push(newPath);
  };

  return (
    <button onClick={handleChange}>Switch to {switchTo.toUpperCase()}</button>
  );
}
