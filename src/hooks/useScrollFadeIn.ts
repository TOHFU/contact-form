import { useRef, useEffect, useCallback } from 'react';

const useScrollFadeIn = () => {
  const dom = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(([entry]: Array<IntersectionObserverEntry>) => {
    const { current } = dom;

    if (current && entry.isIntersecting) {
      current.style.transitionProperty = 'opacity transform';
      current.style.transitionDuration = '600ms';
      current.style.transitionTimingFunction = 'ease';
      current.style.transitionDelay = '0s';
      current.style.opacity = '1';
      current.style.transform = 'translateY(0)';
    }
  }, []);

  useEffect(() => {
    const { current } = dom;

    if (current) {
      const observer: IntersectionObserver = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: '0',
      transform: 'translateY(10%)',
    },
  };
};

export default useScrollFadeIn;
