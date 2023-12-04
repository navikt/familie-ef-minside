import * as React from 'react';

interface Props {
  height?: number;
  width?: number;
}

export const Barnetilsyn: React.FC<Props> = ({ width, height }) => {
  const iconHeight = height ? height : 64;
  const iconWidth = width ? width : 64;
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="32"
        height="32"
        transform="translate(31.9609 9.66797) rotate(45)"
        fill="#E0D8E9"
      />
      <mask id="path-1-inside-1_3174_9619" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.0147 10.5175C27.1466 7.89182 28.6165 5.06749 31.2651 4.27198L35.8454 2.89621C40.4469 1.51411 45.0508 4.26544 46.295 8.57354L46.3662 8.5566L46.4004 8.9762C46.563 9.66834 46.6399 10.397 46.6182 11.1522L46.6075 11.5227L46.9588 15.8417L53.335 17.5502C57.256 18.6008 59.5828 22.6311 58.5322 26.5521C57.4816 30.4731 53.4513 32.8 49.5303 31.7494L40.8583 29.4257C36.1616 28.1672 33.1803 23.7023 33.6385 19.0173L33.5056 19.0014L34.8467 13.9966L32.4434 13.8817C30.4133 13.7847 28.6526 12.4472 28.0147 10.5175Z"
        />
      </mask>
      <path
        d="M31.2651 4.27198L31.8404 6.18744L31.2651 4.27198ZM28.0147 10.5175L26.1157 11.1452L26.1157 11.1452L28.0147 10.5175ZM35.8454 2.89621L35.2701 0.980743L35.2701 0.980743L35.8454 2.89621ZM46.295 8.57354L44.3735 9.12849L44.9027 10.9605L46.7578 10.5193L46.295 8.57354ZM46.3662 8.5566L48.3596 8.39446L48.1707 6.07157L45.9034 6.61089L46.3662 8.5566ZM46.4004 8.9762L44.4069 9.13833L44.4191 9.28769L44.4534 9.43357L46.4004 8.9762ZM46.6182 11.1522L44.619 11.0946L44.619 11.0946L46.6182 11.1522ZM46.6075 11.5227L44.6083 11.4651L44.6051 11.5751L44.6141 11.6848L46.6075 11.5227ZM46.9588 15.8417L44.9654 16.0039L45.0796 17.4088L46.4412 17.7736L46.9588 15.8417ZM53.335 17.5502L52.8173 19.4821L53.335 17.5502ZM49.5303 31.7494L49.0127 33.6812L49.5303 31.7494ZM40.8583 29.4257L41.3759 27.4939L40.8583 29.4257ZM33.6385 19.0173L35.629 19.2119L35.8196 17.2638L33.876 17.0314L33.6385 19.0173ZM33.5056 19.0014L31.5738 18.4837L30.9764 20.7132L33.2682 20.9872L33.5056 19.0014ZM34.8467 13.9966L36.7785 14.5143L37.4207 12.1174L34.9422 11.9989L34.8467 13.9966ZM32.4434 13.8817L32.3479 15.8795L32.3479 15.8795L32.4434 13.8817ZM30.6897 2.35651C26.9627 3.47597 24.8943 7.45039 26.1157 11.1452L29.9136 9.88972C29.399 8.33325 30.2704 6.65901 31.8404 6.18744L30.6897 2.35651ZM35.2701 0.980743L30.6897 2.35651L31.8404 6.18744L36.4208 4.81167L35.2701 0.980743ZM48.2165 8.01859C46.6756 2.68345 40.9789 -0.733958 35.2701 0.980743L36.4208 4.81167C39.9148 3.76219 43.4259 5.84743 44.3735 9.12849L48.2165 8.01859ZM45.9034 6.61089L45.8322 6.62783L46.7578 10.5193L46.8291 10.5023L45.9034 6.61089ZM48.3938 8.81406L48.3596 8.39446L44.3728 8.71874L44.4069 9.13833L48.3938 8.81406ZM48.6173 11.2098C48.6441 10.281 48.5495 9.37921 48.3474 8.51882L44.4534 9.43357C44.5764 9.95747 44.6357 10.5131 44.619 11.0946L48.6173 11.2098ZM48.6067 11.5803L48.6173 11.2098L44.619 11.0946L44.6083 11.4651L48.6067 11.5803ZM48.9522 15.6796L48.6009 11.3605L44.6141 11.6848L44.9654 16.0039L48.9522 15.6796ZM46.4412 17.7736L52.8173 19.4821L53.8526 15.6184L47.4764 13.9099L46.4412 17.7736ZM52.8173 19.4821C55.6714 20.2468 57.3651 23.1804 56.6004 26.0345L60.4641 27.0698C61.8006 22.0818 58.8405 16.9549 53.8526 15.6184L52.8173 19.4821ZM56.6004 26.0345C55.8356 28.8886 52.902 30.5823 50.0479 29.8175L49.0127 33.6812C54.0006 35.0177 59.1276 32.0577 60.4641 27.0698L56.6004 26.0345ZM50.0479 29.8175L41.3759 27.4939L40.3406 31.3576L49.0127 33.6812L50.0479 29.8175ZM41.3759 27.4939C37.6396 26.4927 35.2645 22.9393 35.629 19.2119L31.648 18.8226C31.0961 24.4654 34.6835 29.8418 40.3406 31.3576L41.3759 27.4939ZM33.2682 20.9872L33.4011 21.0031L33.876 17.0314L33.7431 17.0155L33.2682 20.9872ZM32.9148 13.479L31.5738 18.4837L35.4375 19.519L36.7785 14.5143L32.9148 13.479ZM32.3479 15.8795L34.7512 15.9943L34.9422 11.9989L32.5389 11.884L32.3479 15.8795ZM26.1157 11.1452C27.0135 13.8608 29.4911 15.7429 32.3479 15.8795L32.5389 11.884C31.3354 11.8265 30.2917 11.0337 29.9136 9.88972L26.1157 11.1452Z"
        fill="#23262A"
        mask="url(#path-1-inside-1_3174_9619)"
      />
      <path
        d="M56.9393 38.807C52.9391 41.117 46.5326 41.0914 41.4749 39.7361C36.4171 38.3809 30.8561 35.1999 28.5469 31.1992"
        stroke="#23262A"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M38.1238 27.0022L32.0769 36.2844"
        stroke="#23262A"
        stroke-width="2"
      />
      <path
        d="M50.5767 30.3365L51.1723 41.3986"
        stroke="#23262A"
        stroke-width="2"
      />
      <path
        d="M61.8131 24.4801C62.4419 25.0311 62.7405 25.9103 62.5095 26.7725L60.7145 33.4715C60.0857 32.9205 59.7871 32.0413 60.0181 31.1791L61.8131 24.4801Z"
        stroke="#23262A"
        stroke-width="2"
      />
      <path
        d="M44.1463 2.42938C44.6178 2.91036 44.83 3.62091 44.6431 4.31855L44.3011 5.59478C43.817 5.19168 43.5835 4.53009 43.7572 3.88168L44.1463 2.42938Z"
        stroke="#23262A"
        stroke-width="2"
      />
      <rect
        x="58.5891"
        y="23.1836"
        width="1.633"
        height="1.63368"
        transform="rotate(15 58.5891 23.1836)"
        stroke="#23262A"
        stroke-width="1.633"
      />
      <path
        d="M18.6667 43C24.9465 43 30.7412 46.1348 36.0539 52.6667C30.7412 59.1986 24.9465 62.3333 18.6667 62.3333C12.3869 62.3333 6.59215 59.1986 1.27944 52.6667C6.59215 46.1348 12.3869 43 18.6667 43Z"
        stroke="#23262A"
        stroke-width="2"
      />
      <circle cx="18.666" cy="52.668" r="7" stroke="#23262A" stroke-width="2" />
    </svg>
  );
};
