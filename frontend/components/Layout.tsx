import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";


interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    return (
        <html lang="en"> 
        <>
        <link
      rel="stylesheet"
      href="https://widget.co2nsensus.com/css/app.css"
      crossOrigin="anonymous"
    />
    <script
      src="https://widget.co2nsensus.com/js/app.js"
      charSet="utf-8"
      crossOrigin="anonymous"
      async
    ></script>
            <div className="bg-gypsum overflow-hidden flex flex-col min-h-screen">
                <Header />
                <div className="py-16 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8">
                    {children}
                </div>
                <Footer />
            </div>
        </>
        </html>
    );
};

export default Layout;
