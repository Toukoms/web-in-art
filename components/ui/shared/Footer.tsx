import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 p-5 text-center">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="WebInArt logo"
          />
        </Link>
        <p>©2024 WebInArt. All right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
