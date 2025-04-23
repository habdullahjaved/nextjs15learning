import {useLocale, useTranslations} from 'next-intl';

export default function Index() {
  const t = useTranslations('HomePage');
  const locale = useLocale();

  return (
    <>
      <div className="flex flex-col p-2 mt-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">{t('title')}</h1>
        </div>
        <p className="text-lg mt-4">{t('description')}</p>

        <p className="text-lg mt-4">{t('currentLocale', {locale})}</p>
      </div>
    </>
  );
}
