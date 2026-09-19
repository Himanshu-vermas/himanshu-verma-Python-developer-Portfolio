import React, { useEffect, useState, useMemo } from 'react';

export default function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle smoothed mouse tracking for the interactive light orb
  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      // Normalize mouse coordinates from -1 to 1
      targetX = (e.clientX / window.innerWidth - 0.5) * 40;
      targetY = (e.clientY / window.innerHeight - 0.5) * 40;
    };

    const updatePosition = () => {
      // Linear interpolation for silky smooth movement
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setMousePos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Generate lightweight particles with varied positions, sizes, and delays
  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, index) => {
      const size = (index % 3) + 2; // 2px to 4px
      const left = (index * 5.5 + 4) % 100;
      const top = (index * 6.2 + 8) % 100;
      const duration = 14 + (index % 6) * 3; // 14s to 29s
      const delay = (index % 5) * 1.8;
      const opacity = 0.15 + (index % 4) * 0.08;
      const isCyan = index % 2 === 0;

      return {
        id: index,
        size,
        left,
        top,
        duration,
        delay,
        opacity,
        color: isCyan ? 'rgba(0, 210, 255, 0.7)' : 'rgba(129, 140, 248, 0.7)'
      };
    });
  }, []);

  return (
    <div className="animated-bg-container" aria-hidden="true">
      {/* 1. Subtle Developer Grid Pattern */}
      <div className="bg-grid-pattern"></div>

      {/* 2. Mouse-Follow Ambient Interactive Glow */}
      <div
        className="bg-mouse-glow"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
        }}
      ></div>

      {/* 3. Large Blurred Glowing Orbs with Organic Float */}
      <div className="glow-orb orb-cyan"></div>
      <div className="glow-orb orb-indigo"></div>
      <div className="glow-orb orb-purple"></div>
      <div className="glow-orb orb-emerald"></div>

      {/* 4. Subtle Floating Micro-Particles */}
      <div className="particles-container">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle-dot"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              backgroundColor: p.color,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
