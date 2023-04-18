import { sora } from '@/pages/_app';
import s from '../../src/styles/sectionsStyle/section3.module.scss'

const Section3 = () => { 
  return(
    <div className={s.section3Container}>
      <div className={s.section3Layout}>
        <h1 className={sora.className}>Contact Me!</h1>
        <div className={s.section3Desc}>
          <div className={s.email}>
            <p className={sora.className}>financestecenko@proton.me</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3;