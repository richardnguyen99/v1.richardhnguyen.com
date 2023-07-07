import React, { useRef, useEffect, useState } from "react";

interface IUseInViewportOptions {
  threshold?: number;
  rootMargin?: string;
}

const useInViewport = <E = HTMLElement>(
  options: IUseInViewportOptions = {}
): [boolean, React.RefObject<E>] => {
  const { threshold = 0, rootMargin = "0px" } = options;
  const [inViewport, setInViewport] = useState(false);
  const targetRef = useRef<E>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    const target = targetRef.current;
    if (target) {
      observer.observe(target as Element);
    }

    return () => {
      if (target) {
        observer.unobserve(target as Element);
      }
    };
  }, [threshold, rootMargin]);

  return [inViewport, targetRef];
};

export default useInViewport;
