import Image from "next/image";
import logo from "../assets/logo.png";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";
import telegram from "../assets/telegram.svg";
import styles from "../styles/Header.module.sass";

const Header = () => {
    return (
        <header className={styles.header}>
            <Image src={logo} alt="logo" layout="fixed" />
            <ul className={styles.header__list}>
                <li className={styles.header__list_item}>
                    <a href="#">Wave NFTs</a>
                </li>
                <li className={styles.header__list_item}>
                    <a href="#">Stories</a>
                </li>
                <li className={styles.header__list_item}>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <div className={styles.header__links}>
                <a href="https://twitter.com" className={styles.header__link}>
                    <Image src={twitter} alt="twitter" layout="fixed" />
                </a>
                <a href="https://discord.com" className={styles.header__link}>
                    <Image src={discord} alt="discord" layout="fixed" />
                </a>
                <a href="https://youtube.com" className={styles.header__link}>
                    <Image src={youtube} alt="youtube" layout="fixed" />
                </a>
                <a href="https://telegram.org" className={styles.header__link}>
                    <Image src={telegram} alt="telegram" layout="fixed" />
                </a>
            </div>
        </header>
    );
};

export default Header;
