import s from '../../src/styles/sectionsStyle/section2.module.scss'
import { section2Data } from '../../src/db.js'
import Image from 'next/image'
import Link from 'next/link'
import { raleWay, sora } from '@/pages/_app'


const Section2 = () => {
  return (
    <div className={s.section2Container} id='homework'>
      <h1 className={sora.className}>
        Homeworks
      </h1>
      <div className={s.section2Layout}>
        <div className={s.containerItems}>
          {section2Data.map((item) => (
            <div
              key={item.id}
              className={s.item}
            >
              <Image
                className={s.itemImage}
                src={item.imgSrc}
                alt='imgItem'
                width={1000}
                height={1000}
              />
              <div className={s.itemHeader}>
                <p className={sora.className}>{item.header}</p>
              </div>
              <div className={s.itemDesc}>
                <div className={s.itemTagLayout}>
                  <div className={s.itemTag}>
                    <p className={sora.className}>{item.tagName}</p>
                  </div>
                </div>
                <div className={s.itemBtn}>
                  <button>
                    <Link
                      target='_blank'
                      rel="noopener noreferrer"
                      href={item.linkWork}
                      className={sora.className}
                    >
                      Open Now!
                    </Link>
                  </button>
                </div>
                <div className={s.itemAuthorName}>
                  <p className={sora.className}>{item.authorName}</p>
                </div>
                <div className={s.itemDate}>
                  <p className={sora.className}>{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
console.log(section2Data);

export default Section2;