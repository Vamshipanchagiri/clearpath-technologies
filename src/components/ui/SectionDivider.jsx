import React from 'react';

const SectionDivider = ({ type = 'wave', className = '', flip = false }) => {
  const getPath = () => {
    switch (type) {
      case 'wave':
        return "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
      case 'slope':
        return "M0,160L1440,32L1440,320L0,320Z";
      case 'curve':
        return "M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,202.7C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z";
      default:
        return "";
    }
  };

  return (
    <div className={`relative w-full overflow-hidden leading-[0] transform ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d={getPath()}
          className="text-slate-50"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;