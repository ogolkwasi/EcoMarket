import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  const categories = [
    "Home",
    "Marketplace",
    "Be kind",
    "Partners",
    "My Profile",
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" passHref>
        
            <Image
              className={styles.logo}
              src="/logo.png"
              width="60"
              height="60"
              alt="Logo"
            />
       
        </Link>
      </div>
      <nav>
        <ul className={styles.menu}>
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={category === "Home" ? "/" : `/${category.toLowerCase().replace(" ", "-")}`}
                passHref
              >
                {category}
              </Link>
            </li>
          ))}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ConnectButton showBalance={{ smallScreen: true, largeScreen: false }} />
          </div>
        </ul>
      </nav>
    </header>
  );
}
