import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ className }) => {
  return (
    <footer className={`footer py-7  ${className}`}>
      <div className="container __className_f6fa1f">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Link target="blank" href={"https://facebook.com"}>
              <Image alt="facebook" width={50} height={50} src={"/footer/facebook.png"} />
            </Link>
            <Link target="blank" href={"https://instagram.com"}>
              <Image alt="instagram" width={50} height={50} src={"/footer/instagram.png"} />
            </Link>
            <Link target="blank" href={"https://twitter.com"}>
              <Image alt="twitter" width={50} height={50} src={"/footer/twitter.png"} />
            </Link>
          </div>
          <h5>GG Sports LTD</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
