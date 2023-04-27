import s from '../src/styles/sectionsStyle/section1.module.scss'
import { raleWay, sora } from '@/pages/_app';
import Link from 'next/link';
import Image from 'next/image';
import img1 from '../public/img/img1.png'
import { motion } from 'framer-motion';
import {
  animationTitle,
  animationDesc,
  animationSubTitle,
  animationImg,
  animationDescSmall
} from '@/variants';

const Section1LayoutSmall = () => {
  const btnClassName1 = s.section1Btn + " " + sora.className;

  return (
    <div className={s.sectionLayout}>
      <motion.div
        variants={animationTitle}
        initial='initial'
        animate='animate'
        className={s.sectionDesc}
      >
        <div className={s.title}>
          <p className={sora.className}>
            On this Site will be published homeworks from university subjects.
          </p>
          <p className={sora.className}>
            Computer Science
          </p>
        </div>
        <hr />
        <div className={s.desc}>
          <motion.p
            variants={animationDescSmall}
            initial='initial'
            animate='animate'
            className={sora.className}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ab omnis vel et, laboriosam quae repudiandae?
          </motion.p>
        </div>
      </motion.div>
      <motion.button
        variants={animationTitle}
        initial='initial'
        animate='animate'
        className={btnClassName1}
      >
        <Link href={'#homework'}>Open Now</Link>
      </motion.button>
      <motion.div
        variants={animationImg}
        initial='initial'
        animate='animate'
        className={s.sectionImg}>
        <Image src={img1} alt='imgSection1' />
      </motion.div>
    </div>
  )
}

export default Section1LayoutSmall;