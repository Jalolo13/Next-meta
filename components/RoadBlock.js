import styles from "../styles/RoadBlock.module.sass";
import Image from "next/image";

const RoadBlock = ({
    card,
    num,
    phase,
    season,
    text,
    texttwo,
    textthree,
    textfour,
}) => {
    return (
        <div className={styles.roadmap_block}>
            <div className={styles.roadmap_block_first}>
                <div className={styles.roadmap_block_first_num}>{num}</div>
                <div className={styles.roadmap_block_first_text}>
                    <p className={styles.roadmap_phase}>Phase {phase}</p>
                    <p className={styles.roadmap_season}>{season}</p>
                </div>
            </div>
            <div className={styles.roadmap_block_second}>
                <div>
                    <p>{text}</p>
                    <p>{texttwo}</p>
                    <p>{textthree}</p>
                    <p>{textfour}</p>
                </div>
                <Image
                    className={styles.roadmap_block_card}
                    src={card}
                    alt="card"
                    layout="fixed"
                />
            </div>
        </div>
    );
};

export default RoadBlock;
