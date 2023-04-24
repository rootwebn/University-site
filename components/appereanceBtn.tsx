import { useState, useEffect } from 'react';
import s from '../src/styles/sectionsStyle/index.module.scss';
import imgBtn from '../public/img/img5.svg'
import Image from 'next/image';

const AppearanceButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const breakpoint = 300; 
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(currentPosition > breakpoint);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a className={`${s.appearanceBtn} ${isVisible ? s.visible : ''}`}
    href='#home'
    >
      <Image
        src={imgBtn}
        alt='imgBtn'                                                                               
        width={40}
        height={40}
      />
    </a>
  );
};

export default AppearanceButton;