import { raleWay, sora } from '@/pages/_app';
import s from '../../src/styles/sectionsStyle/section1.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import img1 from '../../public/img/img1.png'

const Section1 = () => {
  const btnClassName1 = s.section1Btn + " " + sora.className;

  return (
    <div className={s.section1Container}>
      <div className={s.sectionLayout}>
        <div className={s.sectionDesc}>
          <div className={s.title}>
            <p className={sora.className}>
              On this Site will be published homeworks from university subjects.
            </p>
            <div className={s.titleAdd}>
              <p className={sora.className}>
                Computer Science
              </p>
            </div>
          </div>
          <hr />
          <div className={s.desc}>
            <p className={sora.className}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ab omnis vel et, laboriosam quae repudiandae?
            </p>
            <div>
              <button className={btnClassName1}>
                <Link href={'/'}>Open Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className={s.sectionImg}>
          <Image src={img1} alt='imgSection1' />
        </div>
      </div>
    </div>
  )
}

export default Section1;