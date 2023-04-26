import s from '../src/styles/sectionsStyle/index.module.scss'
import Link from 'next/link';
import { raleWay } from '@/pages/_app';
import { motion } from 'framer-motion';
import {
  headerMenuBtns,
  headerMenuBtn1,
  headerMenuBtn2,
  headerMenuBtn3
} from '@/variants';

const HeaderMenu = () => {
  const AnimatedLink = motion(Link);
  return (
    <motion.ul
      variants={headerMenuBtns}
      initial='initial'
      animate='animate'
      className={s.menu}
    >
      <AnimatedLink
        variants={headerMenuBtn1}
        initial='initial'
        animate='animate'
        href={'#home'}
        className={raleWay.className}
      >
        Home
      </AnimatedLink>
      <AnimatedLink
        variants={headerMenuBtn2}
        initial='initial'
        animate='animate'
        href={'#homework'}
        className={raleWay.className}
      >
        Homeworks
      </AnimatedLink>
      <AnimatedLink
        variants={headerMenuBtn3}
        initial='initial'
        animate='animate'
        href={'#contact'}
        className={raleWay.className}
      >
        Contact Me
      </AnimatedLink>
    </motion.ul>
  )
}


export default HeaderMenu;