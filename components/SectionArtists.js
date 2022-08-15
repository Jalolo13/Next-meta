import Image from "next/image";
import artist1 from "../assets/IMAGE.png";
import artist2 from "../assets/IMAGE-1.png";
import artist3 from "../assets/IMAGE-2.png";
import artist4 from "../assets/IMAGE-3.png";
import artist5 from "../assets/IMAGE-4.png";
import artist6 from "../assets/IMAGE-5.png";
import artist7 from "../assets/IMAGE-6.png";
import styles from "../styles/SectionArtists.module.sass";

const SectionArtists = () => {
    const artists = [
        {
            id: 1,
            name: "Mark Popson",
            img: artist1,
        },
        {
            id: 2,
            name: "Pete Bentz",
            img: artist2,
        },
        {
            id: 3,
            name: "Daniela Youth",
            img: artist3,
        },
        {
            id: 4,
            name: "Roman Gore",
            img: artist4,
        },
        {
            id: 5,
            name: "Tonya",
            img: artist5,
        },
        {
            id: 6,
            name: "Ivor",
            img: artist6,
        },
        {
            id: 7,
            name: "Somae Petit",
            img: artist7,
        },
    ];
    return (
        <section className={styles.section__artists}>
            <div className={styles.section__artists_titles}>
                <h2 className={styles.section__artists_title}>Artists</h2>
                <h2 className={styles.section__artists_title}>Artists</h2>
                <h2 className={styles.section__artists_title}>Artists</h2>
            </div>
            <div className={styles.section__artists_inner}>
                {artists.map(({ img, id, name }) => (
                    <div key={id} className={styles.secion__artists_artist}>
                        <Image src={img} alt="artist" />
                        <p>{name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionArtists;
