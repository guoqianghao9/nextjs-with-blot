"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { ThemeProvider } from "@/components/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/manifest.json">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </TonConnectUIProvider>
  );
}