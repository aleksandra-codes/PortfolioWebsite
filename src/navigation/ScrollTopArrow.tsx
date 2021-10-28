import React, {useState} from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './css/ScrollTopArrow.scss'


const ScrollTopArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <ArrowUpwardIcon className="scrollTop" onClick={scrollTop} style={{height: 30, display: showScroll ? 'inline' : 'none'}}/>
  );
}

export default ScrollTopArrow;