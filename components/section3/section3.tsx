import { raleWay, sora } from '@/pages/_app';
import s from '../../src/styles/sectionsStyle/section3.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import imgBtn from '../../public/img/img7.svg'
import { motion } from 'framer-motion';
import { section3Item, section3Title } from '@/variants';

const Section3 = () => {
  return (
    <div className={s.section3Container}>
      <motion.div
        initial='initial'
        whileInView={'animate'}
        viewport={{ amount: 0.8, once: true }}
        className={s.section3Layout}
        id='contact'
      >
        <motion.h1
          variants={section3Title}
          className={sora.className}
        >
          Contact Me!
        </motion.h1>
        <div className={s.section3Desc}>
          <motion.div
            variants={section3Item}
            className={s.email}
          >
            <Image src={imgBtn} alt={'imgBtn'} height={30} width={30}></Image>
            <Link href={'mailto:financestecenko@proton.me'} className={raleWay.className}>
              Email
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Section3;