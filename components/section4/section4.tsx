import { raleWay } from '@/pages/_app';
import s from '../../src/styles/sectionsStyle/section4.module.scss'

const Section4 = () => {
  return (
    <div className={s.mainContainer}>
      <div className={s.layoutContent}>
        <p className={raleWay.className}>
          Copyright
        </p>
        <div className={s.itemContent}>
          <p className={raleWay.className}>
            Vectors and icons by <a href="https://www.svgrepo.com" target="_blank">SVG Repo</a>
          </p>
        </div>
        <hr />
        <div className={s.itemContent}>
          <p className={raleWay.className}>
            <a href="https://www.vecteezy.com/vector-art/560307-happy-businessman-working-on-a-personal-computer-sitting-on-a-brown-leather-chair-behind-the-office-desk-vector-flat-style-illustration">Vector Flat style Illustration. Vectors by Vecteezy</a>
          </p>
        </div>
        <hr />
        <div className={s.itemContent}>
          <p className={raleWay.className}>
            <a href="https://www.pinterest.com.mx/pin/31736372359977462/">Images from Pinterest</a>
          </p>
        </div>
        <hr />
        <div className={s.itemContent}>
          <p className={raleWay.className}>
            <a href="https://github.com/rootwebn/University-site">Source code site</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section4;