import s from '../../src/styles/layoutStyle/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import HeaderMenu from '../headerMenu';
import imgBtn from '../../public/img/img6.svg'
import { raleWay, sora } from '@/pages/_app';
import { motion } from "framer-motion"
import {
  MenuDropDown,
  MenuDropDownBtn,
  headerMenuBtnDropDown,
  headerMenuBtnDropDownSmall,
  headerMenuTitle,
  headerMenuTitleSmall
} from '@/variants';

const Header = () => {
  const [headerSnap, setHeaderSnap] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const dropDownMenuRef = useRef(null as any);
  const AnimatedLink = motion(Link);
  const [shouldAnimate, setShouldAnimate] = useState(false);

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

  const handleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const handleBodyClick = (e: Event) => {
    if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target as Node)) {
      setMenuOpened(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 50 * 16) {
        setHeaderSnap(true);
      } else {
        setHeaderSnap(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', handleBodyClick);
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  return (
    <div
      className={s.headerLayout}
      id='home'
    >
      <div className={s.headerContent}>
        <motion.div
          variants={shouldAnimate ? headerMenuTitle : headerMenuTitleSmall}
          initial='initial'
          animate='animate'
          className={s.headerTitle}>
          <Link href={'https://university-site-six.vercel.app'} className={sora.className}>
            Site Of Homeworks
          </Link>
        </motion.div>
        <div className={s.headerMenu}>
          {!headerSnap && <HeaderMenu />}
          {headerSnap && (
            <motion.button
              variants={shouldAnimate ? headerMenuBtnDropDown : headerMenuBtnDropDownSmall}
              initial='initial'
              animate='animate'
              className={s.dropDownBtn}
              type='button'
            >
              <Image
                src={imgBtn}
                width={50}
                height={50}
                alt='btnMenuImg'
                onClick={handleMenu}
                aria-expanded={menuOpened}
              >
              </Image>
            </motion.button>
          )}
          {menuOpened && (
            <motion.nav
              variants={MenuDropDown}
              initial="hidden"
              animate={menuOpened ? "visible" : "hidden"}
              exit="exit"
              className={s.dropDownMenu}
            >
              <AnimatedLink
                variants={MenuDropDownBtn}
                whileHover="hover"
                whileTap="tap"
                href={'#home'}
                onClick={handleMenu}
                className={raleWay.className}
              >
                Home
              </AnimatedLink>
              <hr />
              <AnimatedLink
                variants={MenuDropDownBtn}
                whileHover="hover"
                whileTap="tap"
                href={'#homework'}
                onClick={handleMenu}
                className={raleWay.className}
              >
                Homeworks
              </AnimatedLink>
              <hr />
              <AnimatedLink
                variants={MenuDropDownBtn}
                whileHover="hover"
                whileTap="tap"
                href={'#contact'}
                onClick={handleMenu}
                className={raleWay.className}>
                Contact Me
              </AnimatedLink>
              <hr />
            </motion.nav>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;
