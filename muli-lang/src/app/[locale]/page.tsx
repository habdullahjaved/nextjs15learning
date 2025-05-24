import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Home");
  console.log(t("hello"));
  return (
    <div>
      <h1>{t("hello")}</h1>
      <div>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
