import Image from "next/image";
import imageroad from "../assets/image-roadmap.png";
import styles from "../styles/SectionRoadMap.module.sass";
import RoadBlock from "./RoadBlock";
import card from "../assets/card-one.png";
import cardTwo from "../assets/card-two.png";
import cardThree from "../assets/card-three.png";

const SectionRoadMap = () => {
    return (
        <section className={styles.section__road_map}>
            <Image src={imageroad} alt="image" layout="responsive" />
            <div className={styles.section__road_map_inner}>
                <h2 className={styles.section__road_map_title}>Roadmap</h2>
                <RoadBlock
                    card={card}
                    num="1"
                    phase="1 completed"
                    season="Spring 2022 - pre launch"
                    text="Website 1.2"
                    texttwo="Discord community promotion"
                    textthree="MINTING WAVE NFTs"
                    textfour="WAVE NFTs will be 100% pre-minted and launched as an OpenOcean collection"
                />
                <RoadBlock
                    card={cardTwo}
                    num="2"
                    phase="2"
                    season="Summer 2022 - growth"
                    text="Hiring for 10 positions in"
                    texttwo="Partnerships with main Metaverse players"
                    textthree="Partnerships with WEB 2.0 music destribution channels"
                    textfour="Onboarding 100 new artists. META Record Labels is holding the first screening of aspiring artists from the list of WAVE NFT holders"
                />
                <RoadBlock
                    card={cardThree}
                    num="3"
                    phase="3"
                    season="Summer 2022 - YOuR new stage"
                    text="Onboarding new partners"
                    texttwo="First live concert in Sandjar"
                    textthree="Live concert in Decentrafield"
                    textfour="We secured dates for out artists to peform in front of the live audience of Metaverse. Check the concert schedule in our"
                />
            </div>
        </section>
    );
};

export default SectionRoadMap;
