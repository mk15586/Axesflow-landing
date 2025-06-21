import React, { useEffect, useState } from "react";

const SocialLinksDiagram: React.FC = () => {
  // Responsive: use small layout for mobile screens
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sizes for desktop and mobile
  const ICON_SIZE = isMobile ? 40 : 96;
  const ICON_RADIUS = isMobile ? 10 : 20;
  const CENTER_SIZE = isMobile ? 40 : 96;
  const SVG_WIDTH = isMobile ? 320 : 900;
  const SVG_HEIGHT = isMobile ? 180 : 478;

  const iconBoxStyle: React.CSSProperties = {
    width: ICON_SIZE,
    height: ICON_SIZE,
    background: "#F6FBFF",
    borderRadius: ICON_RADIUS,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "rgba(141, 194, 235, 0.25) 0px -3px 0px 2px inset, rgba(16, 49, 77, 0.208) 0px 0.7px 0.7px -0.58px, rgba(16, 49, 77, 0.204) 0px 1.8px 1.8px -1.17px, rgba(16, 49, 77, 0.196) 0px 3.6px 3.6px -1.75px, rgba(16, 49, 77, 0.184) 0px 6.9px 6.9px -2.33px, rgba(16, 49, 77, 0.157) 0px 13.6px 13.6px -2.92px, rgba(16, 49, 77, 0.09) 0px 30px 30px -3.5px",
    position: "absolute",
    zIndex: 2
  };

  // Vertical positions for the icon boxes
  const VERTICAL_SPACING = (SVG_HEIGHT - ICON_SIZE * 3) / 4;
  const iconPositions = [
    { x: isMobile ? -10 : -40, y: VERTICAL_SPACING },
    { x: isMobile ? -10 : -40, y: VERTICAL_SPACING * 2 + ICON_SIZE },
    { x: isMobile ? -10 : -40, y: VERTICAL_SPACING * 3 + ICON_SIZE * 2 },
    { x: SVG_WIDTH - ICON_SIZE + (isMobile ? 10 : 40), y: VERTICAL_SPACING },
    { x: SVG_WIDTH - ICON_SIZE + (isMobile ? 10 : 40), y: VERTICAL_SPACING * 2 + ICON_SIZE },
    { x: SVG_WIDTH - ICON_SIZE + (isMobile ? 10 : 40), y: VERTICAL_SPACING * 3 + ICON_SIZE * 2 },
  ];

  const centerBlock = {
    x: SVG_WIDTH / 2 - CENTER_SIZE / 2,
    y: SVG_HEIGHT / 2 - CENTER_SIZE / 2,
    size: CENTER_SIZE
  };

  const iconCenters = iconPositions.map(pos => ({
    x: pos.x + ICON_SIZE / 2,
    y: pos.y + ICON_SIZE / 2
  }));
  const center = {
    x: SVG_WIDTH / 2,
    y: SVG_HEIGHT / 2
  };

  const DOTTED = {
    stroke: "#3b647a",
    strokeWidth: isMobile ? 0.7 : 1,
    strokeDasharray: "6,6",
    fill: "none"
  };

  // Horizontal distance from icon to vertical bend
  const BEND_X = isMobile ? 60 : 220;
  const BEND_X_RIGHT = SVG_WIDTH - BEND_X;
  // Where the top/bottom lines should stop (move further from center block)
  const STOP_LEFT = centerBlock.x - (isMobile ? 16 : 64);
  const STOP_RIGHT = centerBlock.x + centerBlock.size + (isMobile ? 16 : 64);

  // Only connect to center block on mobile
  const renderLines = () => {
    if (isMobile) {
      return (
        <>
          {/* Left icons to center */}
          {iconCenters.slice(0, 3).map((icon, idx) => (
            <polyline key={"l-"+idx} points={`
              ${icon.x},${icon.y}
              ${center.x},${center.y}
            `} {...DOTTED} />
          ))}
          {/* Right icons to center */}
          {iconCenters.slice(3).map((icon, idx) => (
            <polyline key={"r-"+idx} points={`
              ${icon.x},${icon.y}
              ${center.x},${center.y}
            `} {...DOTTED} />
          ))}
        </>
      );
    }
    return (
      <>
        {/* Left connectors */}
        <polyline points={`
          ${iconCenters[0].x},${iconCenters[0].y} 
          ${BEND_X},${iconCenters[0].y} 
          ${BEND_X},${centerBlock.y} 
          ${STOP_LEFT},${centerBlock.y} 
          ${STOP_LEFT},${center.y}
        `} {...DOTTED} />
        <polyline points={`
          ${iconCenters[1].x},${iconCenters[1].y} 
          ${BEND_X},${iconCenters[1].y} 
          ${BEND_X},${center.y} 
          ${center.x},${center.y}
        `} {...DOTTED} />
        <polyline points={`
          ${iconCenters[2].x},${iconCenters[2].y} 
          ${BEND_X},${iconCenters[2].y} 
          ${BEND_X},${centerBlock.y + CENTER_SIZE} 
          ${STOP_LEFT},${centerBlock.y + CENTER_SIZE} 
          ${STOP_LEFT},${center.y}
        `} {...DOTTED} />
        {/* Right connectors */}
        <polyline points={`
          ${iconCenters[3].x},${iconCenters[3].y} 
          ${BEND_X_RIGHT},${iconCenters[3].y} 
          ${BEND_X_RIGHT},${centerBlock.y} 
          ${STOP_RIGHT},${centerBlock.y} 
          ${STOP_RIGHT},${center.y}
        `} {...DOTTED} />
        <polyline points={`
          ${iconCenters[4].x},${iconCenters[4].y} 
          ${BEND_X_RIGHT},${iconCenters[4].y} 
          ${BEND_X_RIGHT},${center.y} 
          ${center.x},${center.y}
        `} {...DOTTED} />
        <polyline points={`
          ${iconCenters[5].x},${iconCenters[5].y} 
          ${BEND_X_RIGHT},${iconCenters[5].y} 
          ${BEND_X_RIGHT},${centerBlock.y + CENTER_SIZE} 
          ${STOP_RIGHT},${centerBlock.y + CENTER_SIZE} 
          ${STOP_RIGHT},${center.y}
        `} {...DOTTED} />
      </>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        minHeight: SVG_HEIGHT
      }}
    >
      <div style={{ width: SVG_WIDTH, height: SVG_HEIGHT, position: "relative", borderRadius: 8, margin: "0 auto" }}>
        {/* SVG Dotted Lines */}
        <svg width={SVG_WIDTH} height={SVG_HEIGHT} style={{ position: "absolute", left: 0, top: 0, zIndex: 1, pointerEvents: "none" }}>
          {renderLines()}
        </svg>
        {/* Left Icons */}
        {iconPositions.slice(0, 3).map((pos, idx) => (
          <div
            key={`left-icon-${idx}`}
            style={{
              ...iconBoxStyle,
              left: pos.x,
              top: pos.y
            }}
          >
            {/* Put icon here */}
            {idx === 0 && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={isMobile ? 20 : 50} height={isMobile ? 20 : 50} style={{ display: 'inline-block' }}>
                <g color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))">
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </g>
              </svg>
            )}
            {idx === 1 && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={isMobile ? 20 : 50} height={isMobile ? 20 : 50} style={{ display: 'inline-block' }}>
                <g color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                </g>
              </svg>
            )}
            {idx === 2 && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={isMobile ? 20 : 50} height={isMobile ? 20 : 50} style={{ display: 'inline-block' }}>
                <g color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))">
                  <path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path>
                </g>
              </svg>
            )}
          </div>
        ))}
        {/* Right Icons */}
        {iconPositions.slice(3).map((pos, idx) => (
          <div
            key={`right-icon-${idx}`}
            style={{
              ...iconBoxStyle,
              left: pos.x,
              top: pos.y
            }}
          >
            {/* Put icon here */}
            {idx === 0 && (
              <img src="/icons/twitter.svg" alt="Twitter" width={isMobile ? 20 : 50} height={isMobile ? 20 : 50} style={{ display: 'inline-block' }} />
            )}
            {idx === 1 && (
              <img src="/icons/tiktok.svg" alt="Tiktok" width={isMobile ? 20 : 50} height={isMobile ? 20 : 50} style={{ display: 'inline-block' }} />
            )}
            {idx === 2 && (
              <img src="/icons/github.svg" alt="Github" width={isMobile ? 20 : 50} height={isMobile ? 20 : 50} style={{ display: 'inline-block' }} />
            )}
          </div>
        ))}
        {/* Center Logo */}
        <div
          style={{
            ...iconBoxStyle,
            left: centerBlock.x,
            top: centerBlock.y,
            zIndex: 3,
            background: "#fff",
            boxShadow:
              "rgba(16, 49, 77, 0.235) 0px 0.7px 0.7px -0.67px, rgba(16, 49, 77, 0.227) 0px 1.8px 1.8px -1.33px, rgba(16, 49, 77, 0.22) 0px 3.6px 3.6px -2px, rgba(16, 49, 77, 0.2) 0px 6.9px 6.9px -2.67px, rgba(16, 49, 77, 0.157) 0px 13.6px 13.6px -3.33px, rgba(16, 49, 77, 0.06) 0px 30px 30px -4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              width: isMobile ? 32 : 80,
              height: isMobile ? 32 : 80,
              background: "#0E1C29",
              borderRadius: isMobile ? 8 : 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px 0 rgba(16, 28, 41, 0.35)"
            }}
          >
            <img src="/icons/middle.webp" alt="Middle" width={isMobile ? 18 : 48} height={isMobile ? 18 : 48} style={{ display: 'inline-block' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinksDiagram;