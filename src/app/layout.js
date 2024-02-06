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
      <body className=" bg-black text-white mx-auto max-w-[1920px]">
        <section className="max-w-[1320px] mx-auto md:px-[5px] px-[3px]">
          <Header/>
          {children}
        </section>
        <Footer/>
        
      </body>
    </html>
  );
}
