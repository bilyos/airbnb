import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Modal from "./components/modals/Modal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";


const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  const currentUser = await getCurrentUser(); 
   
  return (
    <html lang="en">
      
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
         <RegisterModal/>
         <RentModal/>
         <LoginModal/>
         <SearchModal/>
          <Navbar currentUser = {currentUser}/>
        </ClientOnly>  
        <div className="pb-28 pt-28">
        {children}
        </div>
      </body>
    </html>
  );
}
