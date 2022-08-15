import styles from "../styles/SectionCards.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper";
import card from "../assets/card.svg";

import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

const SectionCards = () => {
    return (
        <section className={styles.section__cards}>
            <div className={styles.section__cards_inner}>
                <h2 className={styles.section__cards_title}>
                    Meta Record Label
                </h2>
                <p className={styles.section__cards_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                </p>
                <button className={styles.section__cards_btn}>
                    Learn More
                </button>
            </div>
            <div className={styles.section__cards_swiper}>
                <Swiper
                    effect={"cards"}
                    modules={[Autoplay, EffectCards]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image src={card} alt="card" layout="fixed" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={card} alt="card" layout="fixed" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={card} alt="card" layout="fixed" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default SectionCards;
