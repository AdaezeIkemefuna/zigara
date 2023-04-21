import Link from "next/link";

export default function ServicesModal() {
  return (
    <ul className="navModals">
      <li>
        <Link href={"/pickup"}>Pick up and Delivery</Link>
      </li>
      <li>
        <Link href={"/relocation"}>Packing and moving (Relocation)</Link>
      </li>
    </ul>
  );
}
