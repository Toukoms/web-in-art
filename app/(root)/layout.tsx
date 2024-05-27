import Footer from "@/components/ui/shared/Footer";
import Header from "@/components/ui/shared/Header";

export default function RootLayout({ children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
