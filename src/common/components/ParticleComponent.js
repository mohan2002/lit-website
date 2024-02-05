import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleComponent() {
  const particlesInit = async (main) => {
    try {
      await loadFull(main);
    } catch (error) {
      console.error("Error loading particles:", error);
    }
  };

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  return (
    <div id="particles-js">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            color: {
              value: "#fff",
            },
            move: {
              direction: "bottom",
              enable: true,
              outModes: "out",
              speed: 2,
              gravity: {
                enable: true,
                acceleration: 0.5,
              },
            },
            number: {
              density: {
                enable: true,
                area: 1400,
              },
              value: 400,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 5, // Adjust the size of the snowflakes
            },
            wobble: {
              enable: true,
              distance: 10,
              speed: 10,
            },
            zIndex: {
              value: {
                min: 0,
                max: 100,
              },
            },
          },
        }}
      />
    </div>
  );
}
