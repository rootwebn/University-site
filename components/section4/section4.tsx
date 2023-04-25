import { raleWay } from '@/pages/_app';
import { section4Data } from '@/db';
import s from '../../src/styles/sectionsStyle/section4.module.scss'

const Section4 = () => {
  return (
    <div className={s.mainContainer}>
      <div className={s.layoutContent}>
        <p className={raleWay.className}>
          Copyright
        </p>
        {section4Data.map((item)=>(
          <div className={s.itemContent} key={item.id}>
            <p className={raleWay.className}>
              {item.pData} <a href={item.aHref}>{item.aData}</a>
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section4;