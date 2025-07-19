import "./globals.css";
import Header from "@/component/header";
import Footer from "@/component/footer";
export const metadata = {
  title: "Salvation Azuh | Software Developer",
  description: "Explore Salvation Azuh’s portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
