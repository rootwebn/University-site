import s from '../../src/styles/sectionsStyle/section2.module.scss'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { sora } from '@/pages/_app';
import { section2Data } from '@/db';
import Image from 'next/image';
import Link from 'next/link';
import { section2Title, section2TitleSmallScreen } from '@/variants';

const Section2 = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const animVariant1 = section2TitleSmallScreen;
  const animVariant2 = section2Title;

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth <= 760) {
        setShouldAnimate(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };
    handleLoad();
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <motion.div
      initial='initial'
      whileInView={'animate'}
      viewport={{ amount: 0.3, once: true }}
      className={s.section2Container}
      id='homework'
    >
      {pageLoaded && (
        <div className={s.section2Layout}>
          <motion.h1
            variants={shouldAnimate ? animVariant1 : animVariant2}
            className={sora.className}>
            Homeworks
          </motion.h1>
          <motion.div
            initial='initial'
            whileInView={'animate'}
            viewport={{ amount: 0.4, once: true }}
            className={s.containerItems}>
            {section2Data.map((item) => (
              <motion.div
                variants={shouldAnimate ? item.animationSmallScreen : item.animation}
                key={item.id}
                className={s.item}
              >
                <div className={s.itemImageContainer}>
                  <Image
                    className={s.itemImage}
                    src={item.imgSrc}
                    alt='imgItem'
                    width={1200}
                    height={800}
                  />
                </div>
                <div className={s.itemHeader}>
                  <p className={sora.className}>{item.header}</p>
                </div>
                <div className={s.itemDesc}>
                  <div className={s.itemTagLayout}>
                    <div className={s.itemTag}>
                      <p className={sora.className}>{item.tagName}</p>
                    </div>
                  </div>
                  <div className={s.itemBtn}>
                    <button>
                      <Link
                        target='_blank'
                        rel="noopener noreferrer"
                        href={item.linkWork}
                        className={sora.className}
                      >
                        Open Now!
                      </Link>
                    </button>
                  </div>
                  <div className={s.itemAuthorName}>
                    <p className={sora.className}>{item.authorName}</p>
                  </div>
                  <div className={s.itemDate}>
                    <p className={sora.className}>{item.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}

export default Section2;