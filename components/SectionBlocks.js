import Image from "next/image";
import { useState } from "react";
import imageBlock from "../assets/image-block.png";
import styles from "../styles/SectionBlocks.module.sass";

const SectionBlocks = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const arrList = ["Our founders", "Partners", "The future"];
    const arrCont = [
        {
            id: 0,
            title: "META WAVE NFT is your pass to Meta Record Label ecosystem. It is your access to our industry experts, established artists, and partners.",
            text: "Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras. Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta, nibh enatis cras sed felis. Aenean vel elit",
        },
        {
            id: 1,
            title: "META WAVE NFT is your pfafsaffaawass to Meta aRecord Label ecosystem. It is your access to our industry experts, established artists, and partners.",
            text: "Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi crasfsafafwfwafaw. Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta, nibh enatis cras sed felis. Aenean vel elit",
        },
        {
            id: 2,
            title: "META WAVEfwaafwwaf NFT is your pass to Meta Record Labeawffawfafawfwl ecosystem. It is your access to our industry experts, established artists, and partners.",
            text: "Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras. Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta, nibh enatis cras sfsafawfwafawfwafwafwafwafwafwafwed felis. Aenean vel elit",
        },
    ];

    return (
        <section className={styles.section__blocks}>
            <div>
                <h2 className={styles.section__blocks_title}>MRL.</h2>
                <h2 className={styles.section__blocks_title}>The story</h2>
            </div>
            <div className={styles.section__blocks_inner}>
                <ul>
                    {arrList.map((li, i) => (
                        <li
                            key={i}
                            className={
                                activeIdx === i
                                    ? styles.section__blocks_list_item +
                                      " " +
                                      styles.active
                                    : styles.section__blocks_list_item
                            }
                            onClick={() => setActiveIdx(i)}
                        >
                            {li}
                        </li>
                    ))}
                </ul>
                {arrCont.map(({ id, title, text }) => (
                    <div
                        key={id}
                        className={
                            activeIdx === id
                                ? styles.section__blocks_content +
                                  " " +
                                  styles.activeBlock
                                : styles.section__blocks_content
                        }
                    >
                        <Image src={imageBlock} alt="imgBlock" layout="fixed" />
                        <div className={styles.section__blocks_content_text}>
                            <p>{title}</p>
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionBlocks;
