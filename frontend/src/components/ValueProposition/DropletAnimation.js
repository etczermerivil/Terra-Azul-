import { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const DropletAnimation = () => {
  useEffect(() => {
    const checkSVGExists = setInterval(() => {
      const circles = document.querySelectorAll('circle[data-group]');
      if (circles.length > 0) {
        clearInterval(checkSVGExists);

        // Start animations
        gsap.to('#Droplet-boundingShape', {
          y: -15,
          yoyo: true,
          repeat: -1,
          duration: 3,
        });

        gsap.to('.Droplet-shadow', {
          scale: 0.85,
          yoyo: true,
          repeat: -1,
          transformOrigin: 'center center',
          duration: 3,
        });

        const dropletDimensions = {
          1: {
            opacity: {
              delay1: 1.85,
              value: 0.15,
              delay2: 2.85,
            },
            speed: 5,
            curviness: 0.5,
            values: [
              { x: 46, y: -8 },
              { x: 0, y: -16 },
              { x: -46, y: -8 },
              { x: 0, y: 0 },
            ],
          },
          2: {
            opacity: {
              delay1: 3.4,
              value: 0.2,
              delay2: 6.25,
            },
            speed: 10,
            curviness: 0.65,
            values: [
              { x: 93.25, y: -18.5 },
              { x: 0, y: -38.25 },
              { x: -93.25, y: -18.5 },
              { x: 0, y: 0 },
            ],
          },
          3: {
            opacity: {
              delay1: 3.75,
              value: 0.25,
              delay2: 7.8,
            },
            speed: 12,
            curviness: 0.65,
            values: [
              { x: 132, y: -26 },
              { x: 0, y: -52 },
              { x: -132, y: -26 },
              { x: 0, y: 0 },
            ],
          },
          4: {
            opacity: {
              delay1: 4,
              value: 0.35,
              delay2: 9.65,
            },
            speed: 14,
            curviness: 0.6,
            values: [
              { x: 140.5, y: -26 },
              { x: 0, y: -52 },
              { x: -140.5, y: -26 },
              { x: 0, y: 0 },
            ],
          },
          5: {
            opacity: {
              delay1: 2.2,
              value: 0.5,
              delay2: 5.5,
            },
            speed: 8,
            curviness: 0.65,
            values: [
              { x: 110, y: -21 },
              { x: 0, y: -41 },
              { x: -110, y: -21 },
              { x: 0, y: 0 },
            ],
          },
        };

        for (let i = 1; i <= 5; i++) {
          const tlPath = gsap.timeline({ repeat: -1 });
          const dot = `circle[data-group="${i}"]`;
          const timeDelay = i * Math.random();

          tlPath.to(dot, {
            motionPath: {
              path: dropletDimensions[i].values,
              curviness: dropletDimensions[i].curviness,
            },
            duration: dropletDimensions[i].speed,
            ease: 'none',
          }, 0) // 0 = start of timeline

          // Change opacity part-way through, but keep it inside that same duration.
          tlPath.to(dot, {
            opacity: 0.2,
            duration: 0.25,
            // e.g. wait 2 seconds into the path for the fade
            delay: 2,
            ease: 'none',
          }, 0 /* or a label */)

          // And then return to opacity:1 before the path finishes.
          tlPath.to(dot, {
            opacity: 1,
            duration: 0.25,
            delay: 3,
            ease: 'none',
          }, 0 /* or a label */);


        tlPath.time(timeDelay);
        }
      }
    }, 100);

    // Clean up interval
    return () => clearInterval(checkSVGExists);
  }, []);

  return null; // The component does not render visible DOM
};

export default DropletAnimation;
