import s from '../src/styles/sectionsStyle/index.module.scss'
import Link from 'next/link';
import { raleWay } from '@/pages/_app';

const HeaderMenu = () => {
  return (
    <ul className={s.menu}>
      <Link href={'#home'} className={raleWay.className}>
        Home
      </Link>
      <Link href={'#homework'} className={raleWay.className}>
        Homeworks
      </Link>
      <Link href={'#contact'} className={raleWay.className}>
        Contact Me
      </Link>
    </ul>
  )
}


export default HeaderMenu;