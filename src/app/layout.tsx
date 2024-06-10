// app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import Header from "@/app/components/Header";
import { Box } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Box maxWidth={1140} margin={"auto"}>
          <Header />
          <ClerkProvider>
            <Providers>{children}</Providers>
          </ClerkProvider>
        </Box>
      </body>
    </html>
  );
}
