import { fauna, montsserat, raleWay, sora } from '@/pages/_app';
import s from '../../src/styles/layoutStyle/Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={s.headerLayout}>
      <div className={s.headerContent}>
        <div className={s.headerTitle}>
          <p className={sora.className}>Site Of Homeworks</p>
        </div>
        <div className={s.headerMenu}>
          <ul className={s.menu}>
            <Link href={'/'}>
              <li className={raleWay.className}>Home</li>
            </Link>
            <Link href={'#homework'}>
              <li className={raleWay.className}>Homeworks</li>
            </Link>
            <Link href={'#contact'}>
              <li className={raleWay.className}>Contact Me</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;