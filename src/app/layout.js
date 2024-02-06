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
      <body className=" bg-black text-white mx-auto ">
        <section className="max-w-[1320px] mx-auto px-2">
          <Header/>
          {children}
        </section>
        <Footer/>
        
      </body>
    </html>
  );
}
