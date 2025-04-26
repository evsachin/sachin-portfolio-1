// src/components/ParticlesBackground.jsx
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        fullScreen: { enable: true }, // full screen particles
        background: {
          color: {
            value: "#0d47a1", // change background color here
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            value: 50,
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
      }}
    />
  );
}
