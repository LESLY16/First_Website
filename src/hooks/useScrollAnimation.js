import { useEffect, useRef } from 'react';

const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    // Observe the element and all children with animate-on-scroll class
    observer.observe(element);
    const children = element.querySelectorAll(
      '.animate-on-scroll, .animate-slide-left, .animate-slide-right'
    );
    children.forEach((child) => observer.observe(child));

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return ref;
};

export default useScrollAnimation;
