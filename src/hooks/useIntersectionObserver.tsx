import { RefObject, useEffect, useRef, useState, useMemo } from "react";

interface Args extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

function useIntersectionObserver(
    elementRef: RefObject<Element | null>,
    {
        threshold = 0,
        root = null,
        rootMargin = "0%",
        freezeOnceVisible = false,
    }: Args
): boolean {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = useRef<IntersectionObserver | null>(null);

    const options = useMemo(() => {
        return {
            threshold,
            root,
            rootMargin,
        };
    }, [threshold, root, rootMargin]);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
            if (entry.isIntersecting && freezeOnceVisible) {
                observer.current?.disconnect();
            }
        }, options);

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.current.observe(currentElement);
        }

        return () => {
            observer.current?.disconnect();
        };
    }, [elementRef, options, freezeOnceVisible]);

    return isIntersecting;
}

export default useIntersectionObserver;
