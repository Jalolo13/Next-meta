import Image from "next/image";
import card from "../assets/card.svg";
import styles from "../styles/SectionAboutCard.module.sass";

const SectionAboutCard = () => {
    return (
        <section className={styles.section__about_card}>
            <div>
                <h2 className={styles.section__about_title}>Wave NFT</h2>
                <h2 className={styles.section__about_title}>
                    Collection of 777
                </h2>
                <Image src={card} alt="card" />
            </div>
            <div>
                <div className={styles.section__about_text}>
                    <p>
                        META WAVE NFT is your pass to Meta Record Label
                        ecosystem. It is your access to our industry experts,
                        established artists, and partners.
                    </p>
                    <p>
                        Hac habitasse platea dictumst vestibulum rhoncus est.
                        Sit amet dictum sit amet justo. Tortor aliquam nulla
                        facilisi cras.
                    </p>
                    <p>
                        Maecenas ultricies mi eget mauris pharetra. Sit amet
                        consectetur adipiscing elit ut aliquam purus. Porta nibh
                        venenatis cras sed felis. Aenean vel elit scelerisque
                        mauris pellentesque pulvinar. Et malesuada fames ac
                        turpis egestas sed tempus. Enim sit amet venenatis urna
                        cursus eget.
                    </p>
                    <p>
                        Maecenas ultricies mi eget mauris pharetra et ultrices.
                        A condimentum vitae sapien pellentesque habitant morbi.
                    </p>
                    <button className={styles.section__about_btn}>
                        Get one on OpenSea
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SectionAboutCard;
