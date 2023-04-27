import s from '../../src/styles/sectionsStyle/section1.module.scss'
import { useState, useEffect } from 'react';
import Section1Layout from '../section1Layout';
import Section1LayoutSmall from '../section1LayoutForSmallScreen';

const Section1 = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
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

  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };
    handleLoad();
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };

    window.addEventListener('load', handleLoad);
    handleLoad();
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className={s.section1Container}>
      {pageLoaded && shouldAnimate ?(
        <Section1LayoutSmall/>
      ):(
        <Section1Layout/>
      )}
    </div>
  )
}

export default Section1;