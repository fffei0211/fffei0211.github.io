import { useEffect, useRef, useState } from 'react';

export default function Reveal({
  as: Component = 'div',
  className = '',
  delay = 0,
  children,
  style,
  ...props
}) {
  const elementRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return undefined;

    if (!('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsRevealed(true);
        observer.unobserve(entry.target);
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const classes = ['reveal', isRevealed ? 'is-revealed' : '', className]
    .filter(Boolean)
    .join(' ');
  const revealDelay = typeof delay === 'number' ? `${delay}ms` : delay;

  return (
    <Component
      ref={elementRef}
      className={classes}
      data-reveal=""
      data-revealed={isRevealed ? 'true' : 'false'}
      style={{ ...style, '--reveal-delay': revealDelay }}
      {...props}
    >
      {children}
    </Component>
  );
}
