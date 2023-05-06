import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Transition({ children, className, threshold = 0.2, rootMargin = '0px', ...props }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting || entry.intersectionRatio > 0);
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin, threshold]);

  return (
    <div ref={ref} className={`transition ${className || ''} ${isVisible ? 'visible' : ''}`} {...props}>
      {children}
    </div>
  );
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
};

export default Transition;