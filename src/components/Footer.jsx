import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#1d1d1d] text-white py-12">
      <div className="container  mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold">
            {t("footer.footerFront")} <span className="text-primary">®</span>
          </h2>
          <p className="text-sm text-primary mt-2">{t("footer.footerPara")}</p>

          <div className="mt-6">
            <img
              src="/Logo-white.png"
              alt="CFEK Partner"
              width={150}
              height={200}
              className="h-auto w-24"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">
            {t("footer.footerContact")}
          </h3>

          <p className="flex items-center gap-2">
            📧{" "}
            <a href="mailto:contact@cfekpartner.eu" className="hover:underline">
              contact@cfekpartner.eu
            </a>
          </p>
          {/* Social icons */}
          <div className="flex space-x-3 mt-6">
            <a
              rel="noopener noreferrer"
              target="_blank"
              // href="https://www.facebook.com/KayeraPlus"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaFacebookF />
            </a>
            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/karyeraplus01/"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaInstagram />
            </a> */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              // href="https://www.youtube.com/@KaryeraPlus01"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaYoutube />
            </a>
            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.tiktok.com/@cloudkonektion"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaTiktok />
            </a> */}
            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://x.com/KaryeraPlus01"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaXTwitter />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/karyera-plus/"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaLinkedinIn />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.pinterest.com/karyeraplusb2b/"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaPinterest />
            </a> */}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">{t("footer.footertext")}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-primary">
                {t("footer.footerLink1")}
              </Link>
            </li>
            <li>
              <Link href="/employers" className="hover:text-primary">
                {t("footer.footerLink2")}
              </Link>
            </li>
            <li>
              <Link href="/applicants" className="hover:text-primary">
                {t("footer.footerLink3")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                {t("footer.footerLink4")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg font-bold mb-3">{t("footer.footerOffice")}</h3>
          <div className="space-y-3">
            <h4 className="text-[16px] font-bold">
              {t("footer.footerAddress")}
            </h4>
            <p className="flex items-center gap-2">
              <a
                href="https://www.google.com/maps/place/112-116+Whitechapel+Rd,+Greater,+London+E1+1JE,+UK/@51.5179069,-0.0666426,17z/data=!3m1!4b1!4m6!3m5!1s0x48761ccc7c9cb58b:0x837ef31a0b99463!8m2!3d51.5179036!4d-0.0640677!16s%2Fg%2F11y7qkpf90?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] hover:text-primary">
                112-116 Whitechapel Road, London, England, E11JE
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-6 text-sm  text-gray-400 text-center md:text-left container max-w-7xl mx-auto px-6 ">
        <p className="text-sm text-center">Copyright © 2026 CFEK Partner</p>
      </div>
    </footer>
  );
};

export default Footer;
