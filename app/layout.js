import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ["400", "500", "600"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  );
}

export { fredoka, nunito};
