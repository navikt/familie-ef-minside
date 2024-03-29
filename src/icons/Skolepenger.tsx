import * as React from 'react';

interface Props {
  height?: number;
  width?: number;
}

export const Skolepenger: React.FC<Props> = ({ height, width }) => {
  const iconHeight = height ? height : 64;
  const iconWidth = width ? width : 64;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 64 64"
      fill="none"
    >
      <path d="M55.9996 46L56 11.3333L8 46L55.9996 46Z" fill="#E0D8E9" />
      <path
        d="M6.33398 34.6641C6.33398 30.7981 9.46799 27.6641 13.334 27.6641H29.334C33.2 27.6641 36.334 30.7981 36.334 34.6641V58.6641C36.334 61.0573 34.3939 62.9974 32.0007 62.9974H10.6673C8.27409 62.9974 6.33398 61.0573 6.33398 58.6641V34.6641Z"
        stroke="#23262A"
        strokeWidth="2"
      />
      <path
        d="M15.2227 26.6654C15.2227 24.2721 17.1628 22.332 19.556 22.332H23.1116C25.5048 22.332 27.4449 24.2721 27.4449 26.6654V27.4431H15.2227V26.6654Z"
        stroke="#23262A"
        strokeWidth="2"
      />
      <path
        d="M1 45.3307C1 44.4103 1.74619 43.6641 2.66667 43.6641H6.33333V57.6641H5.33334C2.9401 57.6641 1 55.724 1 53.3307V45.3307Z"
        stroke="#23262A"
        strokeWidth="2"
      />
      <path
        d="M41.666 45.3307C41.666 44.4103 40.9198 43.6641 39.9993 43.6641H36.3327V57.6641H37.3327C39.7259 57.6641 41.666 55.724 41.666 53.3307V45.3307Z"
        stroke="#23262A"
        strokeWidth="2"
      />
      <path
        d="M11.668 46.6667C11.668 45.7462 12.4142 45 13.3346 45H29.3346C30.2551 45 31.0013 45.7462 31.0013 46.6667V56C31.0013 56.9205 30.2551 57.6667 29.3346 57.6667H13.3346C12.4142 57.6667 11.668 56.9205 11.668 56V46.6667Z"
        stroke="#23262A"
        strokeWidth="2"
      />
      <line
        x1="15"
        y1="37.6641"
        x2="27.6667"
        y2="37.6641"
        stroke="#23262A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M62.6667 0.999999C62.8508 0.999999 63 1.14924 63 1.33333L63 38.6667C63 38.8508 62.8508 39 62.6667 39L51 39L51 0.999994L62.6667 0.999999Z"
        stroke="#23262A"
        strokeWidth="2"
      />
      <path d="M63.334 8.33203L57.334 8.33203" stroke="#23262A" strokeWidth="2" />
      <path d="M63.334 14L59.334 14" stroke="#23262A" strokeWidth="2" />
      <path d="M63.334 19.668L57.334 19.668" stroke="#23262A" strokeWidth="2" />
      <path d="M63.334 25.332L59.334 25.332" stroke="#23262A" strokeWidth="2" />
      <path d="M63.334 31L57.334 31" stroke="#23262A" strokeWidth="2" />
    </svg>
  );
};
