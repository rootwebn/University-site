import s from '../../src/styles/layoutStyle/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import HeaderMenu from '../headerMenu';
import imgBtn from '../../public/img/img6.svg'
import { fauna, montsserat, raleWay, sora } from '@/pages/_app';

const Header = () => {
  const [headerSnap, setHeaderSnap] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

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

  const handleMenu = () => {
    setMenuOpened(!menuOpened);
  }

  return (
    <div className={s.headerLayout} id='home'>
      <div className={s.headerContent}>
        <div className={s.headerTitle}>
          <p className={sora.className}>Site Of Homeworks</p>
        </div>
        <div className={s.headerMenu}>
          {!headerSnap && <HeaderMenu />} 
          {headerSnap && (
            <button className={s.dropDownBtn}>
              <Image
                src={imgBtn}
                width={50}
                height={50}
                alt='btnMenuImg'
                onClick={handleMenu}
                aria-expanded={menuOpened}
              >
              </Image>
            </button>
          )}
          {menuOpened && (
            <nav className={s.dropDownMenu}>
              <Link href={'#home'} className={raleWay.className}>
                Home
              </Link>
              <hr />
              <Link href={'#homework'} className={raleWay.className}>
                Homeworks
              </Link>
              <hr />
              <Link href={'#contact'} className={raleWay.className}>
                Contact Me
              </Link>
              <hr />
            </nav>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;
