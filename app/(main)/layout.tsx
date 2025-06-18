
import Navbar from '@/components/landing/common/Navbar';
import Footer from '@/components/landing/common/Footer';




export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

 

  
  return (
    <html lang="en" className="scroll-smooth">
      
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
