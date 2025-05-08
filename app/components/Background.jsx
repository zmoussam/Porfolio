"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme(); // Get the current theme

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 70;
    const maxDistance = 120;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = Math.random() * 0.8 - 0.4;
        this.vy = Math.random() * 0.8 - 0.4;
        this.radius = 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        // Use light blue for dark mode and dark gray for light mode
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = theme === "dark" ? "#38bdf8" : "#4b5563"; // light blue for dark mode, gray for light mode
        ctx.fill();
      }
    }

    const initParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Darker line for light mode
            ctx.strokeStyle =
              theme === "dark"
                ? `rgba(37, 99, 235, ${1 - distance / maxDistance})` // dark blue for dark mode
                : `rgba(107, 114, 128, ${1 - distance / maxDistance})`; // gray for light mode
            ctx.lineWidth = 1.5; // Increase line width for better visibility
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]); // Re-run effect when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] opacity-30 pointer-events-none"
    />
  );
};

export default NetworkBackground;
