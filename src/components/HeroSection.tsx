import heroImage from "@/assets/hero-wedding.jpg";

const PETAL_COUNT = 30;

const petalStyle = (i: number) => {
  const size = 8 + (i % 5) * 6;
  const left = ((i * 37 + 13) % 100);
  const delay = ((i * 3.7) % 12);
  const duration = 8 + (i % 4) * 3;
  const opacity = 0.25 + (i % 4) * 0.12;
  const rotation = (i * 47) % 360;
  const hueShift = i % 3;
  const bg =
    hueShift === 0
      ? "radial-gradient(ellipse at 30% 30%, #e8a0b4 0%, #c76e8d 60%, transparent 100%)"
      : hueShift === 1
        ? "radial-gradient(ellipse at 30% 30%, #f0b8c8 0%, #d4879e 60%, transparent 100%)"
        : "radial-gradient(ellipse at 30% 30%, #f5c6d0 0%, #e09aaa 60%, transparent 100%)";

  return {
    position: "absolute" as const,
    left: `${left}%`,
    top: "-5%",
    width: `${size}px`,
    height: `${size}px`,
    background: bg,
    borderRadius: "50% 0 50% 50%",
    opacity,
    transform: `rotate(${rotation}deg)`,
    animation: `petalFall ${duration}s linear ${delay}s infinite`,
    pointerEvents: "none" as const,
    filter: `blur(${(i % 3) * 1}px)`,
  };
};

const FallingPetals = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {Array.from({ length: PETAL_COUNT }, (_, i) => (
      <div key={i} style={petalStyle(i)} />
    ))}
  </div>
);

const FloralVineLeft = () => (
  <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 pointer-events-none z-10" aria-hidden="true">
    {/* Vine 1 - primary */}
    <svg viewBox="0 0 200 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-30">
      {/* Vine stem */}
      <path d="M40 0 C40 100, 80 150, 60 250 C40 350, 100 400, 70 500 C40 600, 90 650, 60 750 C30 850, 50 900, 50 900" stroke="rgba(212,168,83,0.6)" strokeWidth="2" fill="none" />
      {/* Leaf cluster top */}
      <ellipse cx="70" cy="60" rx="18" ry="12" fill="rgba(180,140,100,0.4)" transform="rotate(-30 70 60)" />
      <ellipse cx="55" cy="90" rx="15" ry="10" fill="rgba(160,120,80,0.35)" transform="rotate(20 55 90)" />
      {/* Rose flowers */}
      <circle cx="80" cy="180" r="14" fill="rgba(232,160,180,0.5)" />
      <circle cx="80" cy="180" r="9" fill="rgba(210,140,160,0.6)" />
      <circle cx="80" cy="180" r="5" fill="rgba(190,120,140,0.7)" />

      <circle cx="30" cy="300" r="12" fill="rgba(240,184,200,0.5)" />
      <circle cx="30" cy="300" r="7" fill="rgba(220,160,180,0.6)" />
      <circle cx="30" cy="300" r="4" fill="rgba(200,140,160,0.7)" />

      <circle cx="90" cy="430" r="16" fill="rgba(232,160,180,0.5)" />
      <circle cx="90" cy="430" r="10" fill="rgba(210,140,160,0.6)" />
      <circle cx="90" cy="430" r="6" fill="rgba(190,120,140,0.7)" />

      <circle cx="45" cy="550" r="11" fill="rgba(240,184,200,0.45)" />
      <circle cx="45" cy="550" r="6" fill="rgba(220,160,180,0.55)" />
      <circle cx="45" cy="550" r="3" fill="rgba(200,140,160,0.65)" />

      <circle cx="75" cy="680" r="13" fill="rgba(232,160,180,0.5)" />
      <circle cx="75" cy="680" r="8" fill="rgba(210,140,160,0.6)" />
      <circle cx="75" cy="680" r="4" fill="rgba(190,120,140,0.7)" />

      {/* Leaves along vine */}
      <ellipse cx="100" cy="240" rx="16" ry="9" fill="rgba(170,130,90,0.35)" transform="rotate(40 100 240)" />
      <ellipse cx="20" cy="370" rx="14" ry="8" fill="rgba(160,120,80,0.3)" transform="rotate(-25 20 370)" />
      <ellipse cx="110" cy="500" rx="15" ry="9" fill="rgba(170,130,90,0.35)" transform="rotate(35 110 500)" />
      <ellipse cx="25" cy="620" rx="13" ry="8" fill="rgba(160,120,80,0.3)" transform="rotate(-30 25 620)" />
      <ellipse cx="95" cy="750" rx="14" ry="8" fill="rgba(170,130,90,0.35)" transform="rotate(45 95 750)" />

      {/* Small buds */}
      <circle cx="60" cy="130" r="4" fill="rgba(240,200,210,0.5)" />
      <circle cx="100" cy="350" r="3.5" fill="rgba(240,200,210,0.45)" />
      <circle cx="40" cy="480" r="4" fill="rgba(240,200,210,0.5)" />
      <circle cx="85" cy="600" r="3" fill="rgba(240,200,210,0.45)" />
      <circle cx="50" cy="800" r="4" fill="rgba(240,200,210,0.5)" />
    </svg>
    {/* Vine 2 - secondary, offset */}
    <svg viewBox="0 0 200 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-20 translate-x-4">
      <path d="M120 0 C120 120, 80 180, 100 280 C120 380, 70 440, 110 540 C150 640, 90 700, 120 800 C150 880, 130 900, 130 900" stroke="rgba(212,168,83,0.5)" strokeWidth="1.5" fill="none" />
      {/* Leaf cluster */}
      <ellipse cx="100" cy="50" rx="16" ry="10" fill="rgba(180,140,100,0.35)" transform="rotate(25 100 50)" />
      <ellipse cx="130" cy="80" rx="13" ry="9" fill="rgba(160,120,80,0.3)" transform="rotate(-15 130 80)" />
      {/* Rose flowers */}
      <circle cx="60" cy="200" r="12" fill="rgba(240,184,200,0.45)" />
      <circle cx="60" cy="200" r="7" fill="rgba(220,160,180,0.55)" />
      <circle cx="60" cy="200" r="4" fill="rgba(200,140,160,0.65)" />

      <circle cx="140" cy="340" r="14" fill="rgba(232,160,180,0.45)" />
      <circle cx="140" cy="340" r="8" fill="rgba(210,140,160,0.55)" />
      <circle cx="140" cy="340" r="5" fill="rgba(190,120,140,0.65)" />

      <circle cx="70" cy="470" r="11" fill="rgba(240,184,200,0.4)" />
      <circle cx="70" cy="470" r="6" fill="rgba(220,160,180,0.5)" />
      <circle cx="70" cy="470" r="3" fill="rgba(200,140,160,0.6)" />

      <circle cx="130" cy="590" r="13" fill="rgba(232,160,180,0.45)" />
      <circle cx="130" cy="590" r="8" fill="rgba(210,140,160,0.55)" />
      <circle cx="130" cy="590" r="4" fill="rgba(190,120,140,0.65)" />

      <circle cx="80" cy="720" r="10" fill="rgba(240,184,200,0.4)" />
      <circle cx="80" cy="720" r="6" fill="rgba(220,160,180,0.5)" />
      <circle cx="80" cy="720" r="3" fill="rgba(200,140,160,0.6)" />

      {/* Leaves */}
      <ellipse cx="60" cy="280" rx="14" ry="8" fill="rgba(170,130,90,0.3)" transform="rotate(-35 60 280)" />
      <ellipse cx="150" cy="400" rx="15" ry="9" fill="rgba(160,120,80,0.28)" transform="rotate(30 150 400)" />
      <ellipse cx="50" cy="520" rx="13" ry="8" fill="rgba(170,130,90,0.3)" transform="rotate(-40 50 520)" />
      <ellipse cx="150" cy="660" rx="14" ry="8" fill="rgba(160,120,80,0.28)" transform="rotate(25 150 660)" />
      <ellipse cx="60" cy="780" rx="12" ry="7" fill="rgba(170,130,90,0.3)" transform="rotate(-20 60 780)" />

      {/* Buds */}
      <circle cx="110" cy="140" r="3.5" fill="rgba(240,200,210,0.45)" />
      <circle cx="50" cy="380" r="4" fill="rgba(240,200,210,0.4)" />
      <circle cx="150" cy="510" r="3" fill="rgba(240,200,210,0.45)" />
      <circle cx="70" cy="650" r="3.5" fill="rgba(240,200,210,0.4)" />
    </svg>
    <svg viewBox="0 0 200 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-20 translate-x-4">
      <path d="M120 0 C120 120, 80 180, 100 280 C120 380, 70 440, 110 540 C150 640, 90 700, 120 800 C150 880, 130 900, 130 900" stroke="rgba(212,168,83,0.5)" strokeWidth="1.5" fill="none" />
      {/* Leaf cluster */}
      <ellipse cx="100" cy="50" rx="16" ry="10" fill="rgba(180,140,100,0.35)" transform="rotate(25 100 50)" />
      <ellipse cx="130" cy="80" rx="13" ry="9" fill="rgba(160,120,80,0.3)" transform="rotate(-15 130 80)" />
      {/* Rose flowers */}
      <circle cx="60" cy="200" r="12" fill="rgba(240,184,200,0.45)" />
      <circle cx="60" cy="200" r="7" fill="rgba(220,160,180,0.55)" />
      <circle cx="60" cy="200" r="4" fill="rgba(200,140,160,0.65)" />

      <circle cx="140" cy="340" r="14" fill="rgba(232,160,180,0.45)" />
      <circle cx="140" cy="340" r="8" fill="rgba(210,140,160,0.55)" />
      <circle cx="140" cy="340" r="5" fill="rgba(190,120,140,0.65)" />

      <circle cx="70" cy="470" r="11" fill="rgba(240,184,200,0.4)" />
      <circle cx="70" cy="470" r="6" fill="rgba(220,160,180,0.5)" />
      <circle cx="70" cy="470" r="3" fill="rgba(200,140,160,0.6)" />

      <circle cx="130" cy="590" r="13" fill="rgba(232,160,180,0.45)" />
      <circle cx="130" cy="590" r="8" fill="rgba(210,140,160,0.55)" />
      <circle cx="130" cy="590" r="4" fill="rgba(190,120,140,0.65)" />

      <circle cx="80" cy="720" r="10" fill="rgba(240,184,200,0.4)" />
      <circle cx="80" cy="720" r="6" fill="rgba(220,160,180,0.5)" />
      <circle cx="80" cy="720" r="3" fill="rgba(200,140,160,0.6)" />

      {/* Leaves */}
      <ellipse cx="60" cy="280" rx="14" ry="8" fill="rgba(170,130,90,0.3)" transform="rotate(-35 60 280)" />
      <ellipse cx="150" cy="400" rx="15" ry="9" fill="rgba(160,120,80,0.28)" transform="rotate(30 150 400)" />
      <ellipse cx="50" cy="520" rx="13" ry="8" fill="rgba(170,130,90,0.3)" transform="rotate(-40 50 520)" />
      <ellipse cx="150" cy="660" rx="14" ry="8" fill="rgba(160,120,80,0.28)" transform="rotate(25 150 660)" />
      <ellipse cx="60" cy="780" rx="12" ry="7" fill="rgba(170,130,90,0.3)" transform="rotate(-20 60 780)" />

      {/* Buds */}
      <circle cx="110" cy="140" r="3.5" fill="rgba(240,200,210,0.45)" />
      <circle cx="50" cy="380" r="4" fill="rgba(240,200,210,0.4)" />
      <circle cx="150" cy="510" r="3" fill="rgba(240,200,210,0.45)" />
      <circle cx="70" cy="650" r="3.5" fill="rgba(240,200,210,0.4)" />
    </svg>
    <svg viewBox="0 0 200 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-20 translate-x-4">
      <path d="M120 0 C120 120, 80 180, 100 280 C120 380, 70 440, 110 540 C150 640, 90 700, 120 800 C150 880, 130 900, 130 900" stroke="rgba(212,168,83,0.5)" strokeWidth="1.5" fill="none" />
      {/* Leaf cluster */}
      <ellipse cx="100" cy="50" rx="16" ry="10" fill="rgba(180,140,100,0.35)" transform="rotate(25 100 50)" />
      <ellipse cx="130" cy="80" rx="13" ry="9" fill="rgba(160,120,80,0.3)" transform="rotate(-15 130 80)" />
      {/* Rose flowers */}
      <circle cx="60" cy="200" r="12" fill="rgba(240,184,200,0.45)" />
      <circle cx="60" cy="200" r="7" fill="rgba(220,160,180,0.55)" />
      <circle cx="60" cy="200" r="4" fill="rgba(200,140,160,0.65)" />

      <circle cx="140" cy="340" r="14" fill="rgba(232,160,180,0.45)" />
      <circle cx="140" cy="340" r="8" fill="rgba(210,140,160,0.55)" />
      <circle cx="140" cy="340" r="5" fill="rgba(190,120,140,0.65)" />

      <circle cx="70" cy="470" r="11" fill="rgba(240,184,200,0.4)" />
      <circle cx="70" cy="470" r="6" fill="rgba(220,160,180,0.5)" />
      <circle cx="70" cy="470" r="3" fill="rgba(200,140,160,0.6)" />

      <circle cx="130" cy="590" r="13" fill="rgba(232,160,180,0.45)" />
      <circle cx="130" cy="590" r="8" fill="rgba(210,140,160,0.55)" />
      <circle cx="130" cy="590" r="4" fill="rgba(190,120,140,0.65)" />

      <circle cx="80" cy="720" r="10" fill="rgba(240,184,200,0.4)" />
      <circle cx="80" cy="720" r="6" fill="rgba(220,160,180,0.5)" />
      <circle cx="80" cy="720" r="3" fill="rgba(200,140,160,0.6)" />

      {/* Leaves */}
      <ellipse cx="60" cy="280" rx="14" ry="8" fill="rgba(170,130,90,0.3)" transform="rotate(-35 60 280)" />
      <ellipse cx="150" cy="400" rx="15" ry="9" fill="rgba(160,120,80,0.28)" transform="rotate(30 150 400)" />
      <ellipse cx="50" cy="520" rx="13" ry="8" fill="rgba(170,130,90,0.3)" transform="rotate(-40 50 520)" />
      <ellipse cx="150" cy="660" rx="14" ry="8" fill="rgba(160,120,80,0.28)" transform="rotate(25 150 660)" />
      <ellipse cx="60" cy="780" rx="12" ry="7" fill="rgba(170,130,90,0.3)" transform="rotate(-20 60 780)" />

      {/* Buds */}
      <circle cx="110" cy="140" r="3.5" fill="rgba(240,200,210,0.45)" />
      <circle cx="50" cy="380" r="4" fill="rgba(240,200,210,0.4)" />
      <circle cx="150" cy="510" r="3" fill="rgba(240,200,210,0.45)" />
      <circle cx="70" cy="650" r="3.5" fill="rgba(240,200,210,0.4)" />
    </svg>
  </div>
);

const FloralVineRight = () => (
  <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 pointer-events-none z-10" aria-hidden="true">
    {/* Vine 1 - primary (mirrored) */}
    <svg viewBox="0 0 200 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-30" style={{ transform: "scaleX(-1)" }}>
      <path d="M40 0 C40 100, 80 150, 60 250 C40 350, 100 400, 70 500 C40 600, 90 650, 60 750 C30 850, 50 900, 50 900" stroke="rgba(212,168,83,0.6)" strokeWidth="2" fill="none" />
      <ellipse cx="70" cy="60" rx="18" ry="12" fill="rgba(180,140,100,0.4)" transform="rotate(-30 70 60)" />
      <ellipse cx="55" cy="90" rx="15" ry="10" fill="rgba(160,120,80,0.35)" transform="rotate(20 55 90)" />
      <circle cx="80" cy="180" r="14" fill="rgba(232,160,180,0.5)" />
      <circle cx="80" cy="180" r="9" fill="rgba(210,140,160,0.6)" />
      <circle cx="80" cy="180" r="5" fill="rgba(190,120,140,0.7)" />

      <circle cx="30" cy="300" r="12" fill="rgba(240,184,200,0.5)" />
      <circle cx="30" cy="300" r="7" fill="rgba(220,160,180,0.6)" />
      <circle cx="30" cy="300" r="4" fill="rgba(200,140,160,0.7)" />

      <circle cx="90" cy="430" r="16" fill="rgba(232,160,180,0.5)" />
      <circle cx="90" cy="430" r="10" fill="rgba(210,140,160,0.6)" />
      <circle cx="90" cy="430" r="6" fill="rgba(190,120,140,0.7)" />

      <circle cx="45" cy="550" r="11" fill="rgba(240,184,200,0.45)" />
      <circle cx="45" cy="550" r="6" fill="rgba(220,160,180,0.55)" />
      <circle cx="45" cy="550" r="3" fill="rgba(200,140,160,0.65)" />

      <circle cx="75" cy="680" r="13" fill="rgba(232,160,180,0.5)" />
      <circle cx="75" cy="680" r="8" fill="rgba(210,140,160,0.6)" />
      <circle cx="75" cy="680" r="4" fill="rgba(190,120,140,0.7)" />

      <ellipse cx="100" cy="240" rx="16" ry="9" fill="rgba(170,130,90,0.35)" transform="rotate(40 100 240)" />
      <ellipse cx="20" cy="370" rx="14" ry="8" fill="rgba(160,120,80,0.3)" transform="rotate(-25 20 370)" />
      <ellipse cx="110" cy="500" rx="15" ry="9" fill="rgba(170,130,90,0.35)" transform="rotate(35 110 500)" />
      <ellipse cx="25" cy="620" rx="13" ry="8" fill="rgba(160,120,80,0.3)" transform="rotate(-30 25 620)" />
      <ellipse cx="95" cy="750" rx="14" ry="8" fill="rgba(170,130,90,0.35)" transform="rotate(45 95 750)" />

      <circle cx="60" cy="130" r="4" fill="rgba(240,200,210,0.5)" />
      <circle cx="100" cy="350" r="3.5" fill="rgba(240,200,210,0.45)" />
      <circle cx="40" cy="480" r="4" fill="rgba(240,200,210,0.5)" />
      <circle cx="85" cy="600" r="3" fill="rgba(240,200,210,0.45)" />
      <circle cx="50" cy="800" r="4" fill="rgba(240,200,210,0.5)" />
    </svg>
    {/* Vine 2 - secondary, offset (mirrored) */}
    <svg viewBox="0 0 200 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-20 -translate-x-4" style={{ transform: "scaleX(-1) translateX(1rem)" }}>
      <path d="M120 0 C120 120, 80 180, 100 280 C120 380, 70 440, 110 540 C150 640, 90 700, 120 800 C150 880, 130 900, 130 900" stroke="rgba(212,168,83,0.5)" strokeWidth="1.5" fill="none" />
      <ellipse cx="100" cy="50" rx="16" ry="10" fill="rgba(180,140,100,0.35)" transform="rotate(25 100 50)" />
      <ellipse cx="130" cy="80" rx="13" ry="9" fill="rgba(160,120,80,0.3)" transform="rotate(-15 130 80)" />
      <circle cx="60" cy="200" r="12" fill="rgba(240,184,200,0.45)" />
      <circle cx="60" cy="200" r="7" fill="rgba(220,160,180,0.55)" />
      <circle cx="60" cy="200" r="4" fill="rgba(200,140,160,0.65)" />

      <circle cx="140" cy="340" r="14" fill="rgba(232,160,180,0.45)" />
      <circle cx="140" cy="340" r="8" fill="rgba(210,140,160,0.55)" />
      <circle cx="140" cy="340" r="5" fill="rgba(190,120,140,0.65)" />

      <circle cx="70" cy="470" r="11" fill="rgba(240,184,200,0.4)" />
      <circle cx="70" cy="470" r="6" fill="rgba(220,160,180,0.5)" />
      <circle cx="70" cy="470" r="3" fill="rgba(200,140,160,0.6)" />

      <circle cx="130" cy="590" r="13" fill="rgba(232,160,180,0.45)" />
      <circle cx="130" cy="590" r="8" fill="rgba(210,140,160,0.55)" />
      <circle cx="130" cy="590" r="4" fill="rgba(190,120,140,0.65)" />

      <circle cx="80" cy="720" r="10" fill="rgba(240,184,200,0.4)" />
      <circle cx="80" cy="720" r="6" fill="rgba(220,160,180,0.5)" />
      <circle cx="80" cy="720" r="3" fill="rgba(200,140,160,0.6)" />

      <ellipse cx="60" cy="280" rx="14" ry="8" fill="rgba(170,130,90,0.3)" transform="rotate(-35 60 280)" />
      <ellipse cx="150" cy="400" rx="15" ry="9" fill="rgba(160,120,80,0.28)" transform="rotate(30 150 400)" />
      <ellipse cx="50" cy="520" rx="13" ry="8" fill="rgba(170,130,90,0.3)" transform="rotate(-40 50 520)" />
      <ellipse cx="150" cy="660" rx="14" ry="8" fill="rgba(160,120,80,0.28)" transform="rotate(25 150 660)" />
      <ellipse cx="60" cy="780" rx="12" ry="7" fill="rgba(170,130,90,0.3)" transform="rotate(-20 60 780)" />

      <circle cx="110" cy="140" r="3.5" fill="rgba(240,200,210,0.45)" />
      <circle cx="50" cy="380" r="4" fill="rgba(240,200,210,0.4)" />
      <circle cx="150" cy="510" r="3" fill="rgba(240,200,210,0.45)" />
      <circle cx="70" cy="650" r="3.5" fill="rgba(240,200,210,0.4)" />
    </svg>
    <svg viewBox="0 0 200 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-20 -translate-x-4" style={{ transform: "scaleX(-1) translateX(1rem)" }}>
      <path d="M120 0 C120 120, 80 180, 100 280 C120 380, 70 440, 110 540 C150 640, 90 700, 120 800 C150 880, 130 900, 130 900" stroke="rgba(212,168,83,0.5)" strokeWidth="1.5" fill="none" />
      <ellipse cx="100" cy="50" rx="16" ry="10" fill="rgba(180,140,100,0.35)" transform="rotate(25 100 50)" />
      <ellipse cx="130" cy="80" rx="13" ry="9" fill="rgba(160,120,80,0.3)" transform="rotate(-15 130 80)" />
      <circle cx="60" cy="200" r="12" fill="rgba(240,184,200,0.45)" />
      <circle cx="60" cy="200" r="7" fill="rgba(220,160,180,0.55)" />
      <circle cx="60" cy="200" r="4" fill="rgba(200,140,160,0.65)" />

      <circle cx="140" cy="340" r="14" fill="rgba(232,160,180,0.45)" />
      <circle cx="140" cy="340" r="8" fill="rgba(210,140,160,0.55)" />
      <circle cx="140" cy="340" r="5" fill="rgba(190,120,140,0.65)" />

      <circle cx="70" cy="470" r="11" fill="rgba(240,184,200,0.4)" />
      <circle cx="70" cy="470" r="6" fill="rgba(220,160,180,0.5)" />
      <circle cx="70" cy="470" r="3" fill="rgba(200,140,160,0.6)" />

      <circle cx="130" cy="590" r="13" fill="rgba(232,160,180,0.45)" />
      <circle cx="130" cy="590" r="8" fill="rgba(210,140,160,0.55)" />
      <circle cx="130" cy="590" r="4" fill="rgba(190,120,140,0.65)" />

      <circle cx="80" cy="720" r="10" fill="rgba(240,184,200,0.4)" />
      <circle cx="80" cy="720" r="6" fill="rgba(220,160,180,0.5)" />
      <circle cx="80" cy="720" r="3" fill="rgba(200,140,160,0.6)" />

      <ellipse cx="60" cy="280" rx="14" ry="8" fill="rgba(170,130,90,0.3)" transform="rotate(-35 60 280)" />
      <ellipse cx="150" cy="400" rx="15" ry="9" fill="rgba(160,120,80,0.28)" transform="rotate(30 150 400)" />
      <ellipse cx="50" cy="520" rx="13" ry="8" fill="rgba(170,130,90,0.3)" transform="rotate(-40 50 520)" />
      <ellipse cx="150" cy="660" rx="14" ry="8" fill="rgba(160,120,80,0.28)" transform="rotate(25 150 660)" />
      <ellipse cx="60" cy="780" rx="12" ry="7" fill="rgba(170,130,90,0.3)" transform="rotate(-20 60 780)" />

      <circle cx="110" cy="140" r="3.5" fill="rgba(240,200,210,0.45)" />
      <circle cx="50" cy="380" r="4" fill="rgba(240,200,210,0.4)" />
      <circle cx="150" cy="510" r="3" fill="rgba(240,200,210,0.45)" />
      <circle cx="70" cy="650" r="3.5" fill="rgba(240,200,210,0.4)" />
    </svg>
    <svg viewBox="0 0 200 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-20 -translate-x-4" style={{ transform: "scaleX(-1) translateX(1rem)" }}>
      <path d="M120 0 C120 120, 80 180, 100 280 C120 380, 70 440, 110 540 C150 640, 90 700, 120 800 C150 880, 130 900, 130 900" stroke="rgba(212,168,83,0.5)" strokeWidth="1.5" fill="none" />
      <ellipse cx="100" cy="50" rx="16" ry="10" fill="rgba(180,140,100,0.35)" transform="rotate(25 100 50)" />
      <ellipse cx="130" cy="80" rx="13" ry="9" fill="rgba(160,120,80,0.3)" transform="rotate(-15 130 80)" />
      <circle cx="60" cy="200" r="12" fill="rgba(240,184,200,0.45)" />
      <circle cx="60" cy="200" r="7" fill="rgba(220,160,180,0.55)" />
      <circle cx="60" cy="200" r="4" fill="rgba(200,140,160,0.65)" />

      <circle cx="140" cy="340" r="14" fill="rgba(232,160,180,0.45)" />
      <circle cx="140" cy="340" r="8" fill="rgba(210,140,160,0.55)" />
      <circle cx="140" cy="340" r="5" fill="rgba(190,120,140,0.65)" />

      <circle cx="70" cy="470" r="11" fill="rgba(240,184,200,0.4)" />
      <circle cx="70" cy="470" r="6" fill="rgba(220,160,180,0.5)" />
      <circle cx="70" cy="470" r="3" fill="rgba(200,140,160,0.6)" />

      <circle cx="130" cy="590" r="13" fill="rgba(232,160,180,0.45)" />
      <circle cx="130" cy="590" r="8" fill="rgba(210,140,160,0.55)" />
      <circle cx="130" cy="590" r="4" fill="rgba(190,120,140,0.65)" />

      <circle cx="80" cy="720" r="10" fill="rgba(240,184,200,0.4)" />
      <circle cx="80" cy="720" r="6" fill="rgba(220,160,180,0.5)" />
      <circle cx="80" cy="720" r="3" fill="rgba(200,140,160,0.6)" />

      <ellipse cx="60" cy="280" rx="14" ry="8" fill="rgba(170,130,90,0.3)" transform="rotate(-35 60 280)" />
      <ellipse cx="150" cy="400" rx="15" ry="9" fill="rgba(160,120,80,0.28)" transform="rotate(30 150 400)" />
      <ellipse cx="50" cy="520" rx="13" ry="8" fill="rgba(170,130,90,0.3)" transform="rotate(-40 50 520)" />
      <ellipse cx="150" cy="660" rx="14" ry="8" fill="rgba(160,120,80,0.28)" transform="rotate(25 150 660)" />
      <ellipse cx="60" cy="780" rx="12" ry="7" fill="rgba(170,130,90,0.3)" transform="rotate(-20 60 780)" />

      <circle cx="110" cy="140" r="3.5" fill="rgba(240,200,210,0.45)" />
      <circle cx="50" cy="380" r="4" fill="rgba(240,200,210,0.4)" />
      <circle cx="150" cy="510" r="3" fill="rgba(240,200,210,0.45)" />
      <circle cx="70" cy="650" r="3.5" fill="rgba(240,200,210,0.4)" />
    </svg>
  </div>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Elegant wedding venue with golden chandeliers and floral arrangements"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30" />
    </div>

    {/* Falling Rose Petals */}
    <FallingPetals />

    {/* Floral Vines on Sides */}
    <FloralVineLeft />
    <FloralVineRight />

    {/* Content */}
    <div className="container relative z-10 py-20 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up">
          Where Every Wedding Becomes{" "}
          <span className="gradient-gold-text">Effortless.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl font-sans leading-relaxed animate-fade-up-delay-1">
          Manage bookings, menus, billing, and guest experiences — all in one
          elegant POS built for wedding venues.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
          <a
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold font-sans rounded-lg bg-accent text-foreground shadow-elegant hover:bg-gold-dark transition-all duration-300 hover:scale-105"
          >
            Book a Free Demo
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold font-sans rounded-lg border-2 border-primary-foreground/30 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
