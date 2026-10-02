import type { Metadata } from "next";
// @ts-expect-error Next.js loads this global stylesheet as a side effect.
import "./globals.css";
import StyledComponentsRegistry from "@/src/utils/SCRegistery";
import { PoppinsFont } from "@/src/statics/fonts";

export const metadata: Metadata = {
  title: "Open Router chatbot",
  description:
    "Open Router chatbot built with Next.js, TypeScript, and Styled Components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div id="chatbot-root" className={PoppinsFont.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
