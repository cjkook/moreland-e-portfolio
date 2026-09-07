import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const TestP5 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Define your p5 sketch inside a function passing the 'p' instance
    const sketch = (p) => {
      let x = 100;
      let y = 100;

      p.setup = () => {
        // Attach the canvas to our react container ref
        p.createCanvas(400, 400).parent(containerRef.current);
      };

      p.draw = () => {
        p.background(30);
        p.fill(255, 0, 150);
        p.ellipse(x, y, 50, 50);

        // Move the circle
        x = (x + 2) % p.width;
      };
    };

    // Instantiate the p5 sketch
    const myP5 = new p5(sketch);

    // CLEANUP: Destroy the canvas when the component unmounts
    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default TestP5;