import Footer from "./common/Footer";
import Header from "./common/Header";
import "./globals.css";


export const metadata = {
  title: "FitStick",
  description: "FitStick is a fitness app that helps you stay fit and healthy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1920px] bg-black text-white mx-auto">
        <Header/>
        {children}
        <Footer/>
        
      </body>
    </html>
  );
}
