import Link from "next/link";

export default function SupportModal() {
  return (
    <ul className="navModals">
      <li>
        <Link href={"/contact"}>Contact Us </Link>
      </li>
      <li>
        <Link href={"/faqs"}>FAQs</Link>
      </li>
    </ul>
  );
}
