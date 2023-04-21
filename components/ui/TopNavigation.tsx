import Image from "next/image";
import Link from "next/link";
import { ZigaraLogo } from "../../public";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdClose,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import ServicesModal from "../modals/servicesModal";
import SupportModal from "../modals/supportModal";

interface Modals {
  handleServices: () => void;
  handleSupport: () => void;
  services: Boolean;
  support: Boolean;
  serviceArrow: Boolean;
  supportArrow: Boolean;
}

export default function TopNavigation({
  handleServices,
  handleSupport,
  services,
  support,
  serviceArrow,
  supportArrow,
}: Modals) {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const showNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="navigation">
      <section className="navigation__wrapper">
        <aside className="navigation__wrapper--left">
          <Link href={"/"}>
            <Image
              src={ZigaraLogo}
              alt="logo"
              width={100}
              height={100}
              onClick={() => setActiveLink("")}
            />
          </Link>
        </aside>
        <aside className="navigation__wrapper--right">
          <Link
            href={"#"}
            onClick={() => {
              handleServices();
            }}
            className="modal"
          >
            our services
            <div className="arrow-icon">
              {serviceArrow ? (
                <MdKeyboardArrowUp size={22} />
              ) : (
                <MdKeyboardArrowDown size={22} />
              )}
            </div>
            {services && <ServicesModal />}
          </Link>
          <Link
            href={"/about"}
            onClick={() => setActiveLink("about")}
            className={activeLink === "about" ? "activeLink" : ""}
          >
            about us
          </Link>
          <Link
            href={"#"}
            onClick={() => {
              handleSupport();
            }}
            className="modal"
          >
            support
            <div className="arrow-icon">
              {supportArrow ? (
                <MdKeyboardArrowUp size={22} />
              ) : (
                <MdKeyboardArrowDown size={22} />
              )}
            </div>
            {support && <SupportModal />}
          </Link>
          <a href="#" id="login">
            Login
          </a>
          <a href="#" id="signup">
            Sign up
          </a>
        </aside>
        {/* Mobile navigation */}
        <aside className="navigation__wrapper--right__mobile">
          {!isOpen && (
            <GiHamburgerMenu
              style={{ cursor: "pointer" }}
              onClick={showNav}
              size={22}
            />
          )}
          {isOpen && (
            <MdClose
              style={{ cursor: "pointer" }}
              onClick={showNav}
              size={25}
            />
          )}
        </aside>
      </section>
      <div
        className={
          isOpen
            ? "navigation__mobile--links"
            : "navigation__mobile--links--none"
        }
      >
        <Link
          href={"#"}
          onClick={() => {
            handleServices();
          }}
          className="modal"
        >
          our services
          <div className="arrow-icon">
            {serviceArrow ? (
              <MdKeyboardArrowUp size={22} />
            ) : (
              <MdKeyboardArrowDown size={22} />
            )}
          </div>
          {services && <ServicesModal />}
        </Link>
        <Link
          href={"/about"}
          onClick={() => setActiveLink("about")}
          className={activeLink === "about" ? "activeLink" : ""}
        >
          about us
        </Link>
        <Link
          href={"#"}
          onClick={() => {
            handleSupport();
          }}
          className="modal"
        >
          support
          <div className="arrow-icon">
            {supportArrow ? (
              <MdKeyboardArrowUp size={22} />
            ) : (
              <MdKeyboardArrowDown size={22} />
            )}
          </div>
          {support && <SupportModal />}
        </Link>

        <a href="#" id="login-mobile">
          Login
        </a>
        <a href="#" id="register-mobile">
          Create an account
        </a>
      </div>
    </section>
  );
}
