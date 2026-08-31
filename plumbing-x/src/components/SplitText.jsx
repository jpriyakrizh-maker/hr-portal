import React, { useEffect, useRef, useState } from 'react';
import './SplitText.css';

/**
 * SplitText component inspired by React Bits
 * Animates text character by character or word by word with staggered CSS transitions.
 */
const SplitText = ({
  text = '',
  className = '',
  delay = 45,
  animationFrom = { opacity: 0, transform: 'translate3d(0, 35px, 0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  easing = 'cubic-bezier(0.2, 0.65, 0.3, 0.9)',
  threshold = 0.1,
  rootMargin = '-30px',
  textAlign = 'left',
  onLetterAnimationComplete,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const words = text.split(' ');
  let letterIndexCount = 0;

  return (
    <span
      ref={ref}
      className={`split-text-container ${className}`}
      style={{ textAlign, display: 'inline-block' }}
    >
      {words.map((word, wordIndex) => {
        const letters = word.split('');
        return (
          <span
            key={wordIndex}
            className="split-word"
            style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.28em' }}
          >
            {letters.map((letter, letterIndex) => {
              const currentGlobalIndex = letterIndexCount++;
              return (
                <span
                  key={letterIndex}
                  className="split-char"
                  style={{
                    display: 'inline-block',
                    transition: `transform 0.65s ${easing}, opacity 0.65s ${easing}`,
                    transitionDelay: `${currentGlobalIndex * delay}ms`,
                    transform: inView ? animationTo.transform : animationFrom.transform,
                    opacity: inView ? animationTo.opacity : animationFrom.opacity,
                    willChange: 'transform, opacity',
                  }}
                  onTransitionEnd={
                    letterIndexCount === text.replace(/\s/g, '').length
                      ? onLetterAnimationComplete
                      : undefined
                  }
                >
                  {letter}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;
