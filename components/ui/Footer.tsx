import { footerLogo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {
  interface FooterTypes {
    text: string;
    url: string;
  }

  const footerLinks: FooterTypes[] = [
    {
      url: "/pickup",
      text: "our services",
    },
    {
      url: "/about",
      text: "about us",
    },
    {
      url: "/faq",
      text: "FAQs",
    },
    {
      url: "/terms",
      text: "terms and conditions",
    },
  ];
  return (
    <footer className="footer">
      <section className="footer__linksWrapper">
        <aside>
          <div style={{ marginBottom: "3rem" }}>
            <Link href={"/"}>
              <Image src={footerLogo} alt="logo" width={64} height={60} />
            </Link>
          </div>
          <aside className="footer__links">
            <h1>socials</h1>
            <div className="footer__links icons">
              <a href="#">
                <RiFacebookFill size={20} />
              </a>
              <a href="#">
                <AiOutlineTwitter size={20} />
              </a>
              <a href="#">
                <AiOutlineInstagram size={20} />
              </a>
              <a href="#">
                <TiSocialLinkedin size={20} />
              </a>
            </div>
          </aside>
        </aside>

        <aside className="footer__links">
          <h1>links</h1>
          <div className="links">
            {footerLinks.map((link, index) => {
              return (
                <div className="footer__links--item" key={index}>
                  <Link href={link.url}>{link.text}</Link>
                </div>
              );
            })}
          </div>
        </aside>

        <aside className="footer__links">
          <h1>contact</h1>
          <div className="footer__links--item">
            <div>07082836846</div>
            <div>hamsaikemefuna@gmail.com</div>
          </div>
        </aside>
        <aside className="footer__links">
          <h1>Business Hours</h1>
          <div className="footer__links--item">
            <div>
              <span>Monday - Saturday</span>
              <span> 7am-7pm</span>
            </div>
            <div>
              <span>Sundays</span>
              <span> 8am- 7pm</span>
            </div>
          </div>
        </aside>
      </section>
      <section className="footer__copyright">
        &copy;2022. All Rights Reserved. Zigara logistics. Made with 💖 by
        Adaeze.
      </section>
    </footer>
  );
}
