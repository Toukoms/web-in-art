import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({ children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
