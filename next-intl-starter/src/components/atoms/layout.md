src/
│
├── app/[locale]/layout.tsx ✅ App Router supports nested locale layout
│ → Works with Next-Intl or custom i18n
│
├── components/
│ ├── atoms/ ✅ For Input, Button, Icon, etc.
│ ├── molecules/ ✅ InputGroup, FieldWithLabel, etc.
│ ├── organisms/ ✅ Sections like Form, Table, CardList
│ └── singleinstances/ ✅ Navbar, Footer – great naming idea!
│
├── services/
│ ├── api/ ✅ Good place for fetch/post logic
│ ├── forms/
│ │ └── brands/
│ │ ├── attributes.ts ✅ For searchable labels/table columns
│ │ └── create.ts ✅ Dynamic form config per language
│ └── translations/ ✅ Optional – great for manual translation fallback
│
├── lib/
│ └── validation/ ✅ Use Zod or Yup schemas per form here
│
├── middleware.ts ✅ Locale detection/redirect is handled here
│
├── i18n/
│ ├── en.json ✅ Static translations with `next-intl`
│ └── es.json
│
└── utils/
└── language.ts ✅ Helpers: getLang(), formatPhone(), etc.
