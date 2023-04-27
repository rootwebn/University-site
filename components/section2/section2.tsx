import s from '../../src/styles/sectionsStyle/section2.module.scss'
import { section2Data } from '../../src/db.js'
import Image from 'next/image'
import Link from 'next/link'
import { raleWay, sora } from '@/pages/_app'
import { motion } from 'framer-motion'
import { section2Title } from '@/variants'
import { useState, useEffect } from 'react'

const Section2 = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    console.log('useEffect called');
    const handleLoad = () => {
      setPageLoaded(true);
    };

    window.addEventListener('load', handleLoad);
    handleLoad();
    console.log('window loaded');
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <motion.div
      initial='initial'
      whileInView={'animate'}
      viewport={{ amount: 0.2, once: true }}
      className={s.section2Container}
      id='homework'
    >
      {pageLoaded && (
        <div className={s.section2Layout}>
          <motion.h1
            variants={section2Title}
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
                variants={item.animation}
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