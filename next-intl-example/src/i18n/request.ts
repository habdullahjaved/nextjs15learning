import fs from 'fs';
import path from 'path';
import {hasLocale} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

function loadTranslations(dir: string, prefix = ''): Record<string, any> {
  const messages: Record<string, any> = {};
  const entries = fs.readdirSync(dir, {withFileTypes: true});

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      Object.assign(
        messages,
        loadTranslations(
          fullPath,
          prefix ? `${prefix}/${entry.name}` : entry.name
        )
      );
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      try {
        const parsed = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));

        // If common.json is at root, spread its contents directly
        if (entry.name === 'common.json' && !prefix) {
          Object.assign(messages, parsed);
        } else {
          const key = prefix
            ? `${prefix}/${entry.name.replace(/\.json$/, '')}`
            : entry.name.replace(/\.json$/, '');
          messages[key] = parsed;
        }
      } catch (e) {
        console.error(`❌ Failed to parse ${fullPath}`, e);
      }
    }
  }

  return messages;
}

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const dir = path.resolve(process.cwd(), 'messages', locale);
  const messages = loadTranslations(dir);

  return {
    locale,
    messages
  };
});

// import {hasLocale} from 'next-intl';
// import {getRequestConfig} from 'next-intl/server';
// import {routing} from './routing';

// export default getRequestConfig(async ({requestLocale}) => {
//   // Typically corresponds to the `[locale]` segment
//   const requested = await requestLocale;
//   const locale = hasLocale(routing.locales, requested)
//     ? requested
//     : routing.defaultLocale;

//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default
//   };
// });
