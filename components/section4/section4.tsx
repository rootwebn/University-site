import { raleWay, sora } from '@/pages/_app';
import { section4Data } from '@/db';
import s from '../../src/styles/sectionsStyle/section4.module.scss'
import { motion } from 'framer-motion';
import { section4Title } from '@/variants';

const Section4 = () => {
  return (
    <div className={s.mainContainer}>
      <motion.div
        initial='initial'
        whileInView={'animate'}
        viewport={{ amount: 0.5, once: true }}
        className={s.layoutContent}
      >
        <motion.p 
        variants={section4Title}
        className={sora.className}>
          Copyright
        </motion.p>
        {section4Data.map((item) => (
          <motion.div 
          variants={item.animation}
          className={s.itemContent} 
          key={item.id}>
            <p className={raleWay.className}>
              {item.pData} <a href={item.aHref}>{item.aData}</a>
            </p>
            <hr />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Section4;