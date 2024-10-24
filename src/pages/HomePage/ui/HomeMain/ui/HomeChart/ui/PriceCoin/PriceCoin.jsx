import styled from "./PriceCoin.module.scss";

const PriceCoin = ({ price, icon, color }) => {
  return (
    <div className={styled.info}>
      <div className={styled["chart-bg"]}>
        <svg
          width="353"
          height="48"
          viewBox="0 0 353 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_bi_2250_2265)">
            <path
              d="M0 48H353V0L175.5 13L0 0V48Z"
              fill="white"
              fill-opacity="0.2"
              style="mix-blend-mode:soft-light"
            />
            <path
              d="M175.463 13.4986L0.5 0.538406V47.5H352.5V0.53796L175.537 13.4987L175.5 13.5014L175.463 13.4986Z"
              stroke="#413160"
            />
          </g>
          <defs>
            <filter
              id="filter0_bi_2250_2265"
              x="-50"
              y="-50"
              width="453"
              height="148"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_2250_2265"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_2250_2265"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_2250_2265"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={styled["button-left"]}>
        <img src="/icon/rows.svg" alt="" />
      </div>
      <span style={{ color: color[0] }}>
        {icon !== "" && <img src={icon} alt="coin" />}
        {icon !== "" && price}
      </span>
      <div className={styled["button-right"]}>
        <img src="/icon/rows.svg" alt="" />
      </div>
    </div>
  );
};

export default PriceCoin;
