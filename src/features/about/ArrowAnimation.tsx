import * as React from "react";

const AboutArrowAnimation: React.FC = () => {
  return (
    <div className="absolute top-0 -left-[20%] md:-left-[7.5%] lg:-left-[5%] opacity-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="270.11"
        height="649.9"
        overflow="visible"
      >
        <style>
          {`

    .geo-arrow {
      fill: none;
      stroke: #fff;
      stroke-width: 2;
      stroke-miterlimit: 10
    }
    `}
        </style>
        <g className="lg:animate-bounce-1 origin-bottom">
          <path
            className="geo-arrow"
            d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z"
          />
        </g>
        <circle
          className="geo-arrow lg:animate-bounce-2"
          cx="194.65"
          cy="69.54"
          r="7.96"
        />
        <circle className="geo-arrow draw-in" cx="194.65" cy="39.5" r="7.96" />
        <circle
          className="geo-arrow item-to lg:animate-bounce-3"
          cx="194.65"
          cy="9.46"
          r="7.96"
        />
        <g className="geo-arrow  lg:animate-bounce-2">
          <path d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552" />
        </g>
      </svg>
    </div>
  );
};

export default AboutArrowAnimation;
