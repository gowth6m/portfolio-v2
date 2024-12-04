"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const SCREEN_SIZE_LIMIT = 768;
const SPEED_MAX = 0.6;
const SPEED_MIN = 0.05;
const SIZE = 2;

interface BackgroundAnimationProps {
    color?: string | null;
}

interface WindowSize {
    innerWidth: number;
    innerHeight: number;
}

interface Box {
    x: number;
    y: number;
    vy: number;
    size: number;
}

export default function BackgroundAnimation({
    color,
}: BackgroundAnimationProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const boxColor = useMemo(() => color ?? "white", [color]);

    const [windowSize, setWindowSize] = useState<WindowSize>({
        innerWidth: 0,
        innerHeight: 0,
    });

    const handleResize = useCallback(() => {
        setWindowSize({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
        });
    }, []);

    useEffect(() => {
        handleResize();
        const debounceResize = debounce(handleResize, 100);
        window.addEventListener("resize", debounceResize);
        return () => window.removeEventListener("resize", debounceResize);
    }, [handleResize]);

    const boxes = useMemo(
        () =>
            makeBoxes(
                windowSize.innerWidth > SCREEN_SIZE_LIMIT ? 100 : 20,
                windowSize
            ),
        [windowSize]
    );

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const c = canvas.getContext("2d");
        if (!c) return;

        let animationFrameId: number;

        const draw = () => {
            c.clearRect(0, 0, windowSize.innerWidth, windowSize.innerHeight);

            for (const box of boxes) {
                c.fillStyle = boxColor;
                c.fillRect(box.x, box.y, box.size, box.size);

                box.y += box.vy;

                if (box.y < 0) {
                    box.y = windowSize.innerHeight;
                    box.vy = -(Math.random() * SPEED_MAX + SPEED_MIN);
                    box.size = Math.random() * SIZE;
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        animationFrameId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [boxColor, boxes, windowSize]);

    return (
        <canvas
            id="homeCanvas"
            className="w-full h-full fixed top-0 left-0 z-[-1]"
            ref={canvasRef}
            width={windowSize.innerWidth}
            height={windowSize.innerHeight}
        ></canvas>
    );
}

const makeBoxes = (count: number, windowSize: WindowSize): Box[] => {
    const boxes: Box[] = [];
    for (let i = 0; i < count; i++) {
        const box: Box = {
            x: Math.random() * windowSize.innerWidth,
            y: Math.random() * windowSize.innerHeight,
            vy: -(Math.random() * SPEED_MAX + SPEED_MIN),
            size: Math.random() * SIZE,
        };
        boxes.push(box);
    }
    return boxes;
};

const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};
