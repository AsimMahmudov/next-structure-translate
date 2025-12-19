// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LayoutPage } from "@/components/layout/LayoutPage";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; // ← await обязателен!
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LayoutPage>{children}</LayoutPage>
    </NextIntlClientProvider>
  );
}