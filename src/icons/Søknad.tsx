import * as React from 'react';

interface Props {
  farge: 'rød' | 'grønn';
}

export const Søknad: React.FC<Props> = ({ farge }) => {
  const color = farge === 'rød' ? '#FFE6E6' : '#99DEAD';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
    >
      <rect x="20" y="21" width="24" height="8" fill={color} />
      <rect x="20" y="34" width="24" height="8" fill={color} />
      <circle cx="32" cy="32" r="19" fill={color} />
      <path
        d="M21.1271 4.8947L26.7741 10.5262M1.33398 29.9987H30.6673M23.5301 2.49835L9.41242 16.577L8.00065 23.6164L15.0595 22.2085L29.1771 8.12982C30.7365 6.57473 30.7365 4.05344 29.1771 2.49835C27.6177 0.943259 25.0895 0.943259 23.5301 2.49835Z"
        stroke="#23262A"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M50 39.332L56.6667 39.332"
        stroke="#262626"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M50 46.6641L56.6667 46.6641"
        stroke="#262626"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M50 54L56.6667 54"
        stroke="#262626"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.666 46.6641L45.3327 46.6641"
        stroke="#262626"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.666 46.6641L45.3327 46.6641"
        stroke="#262626"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.666 39.332L45.3327 39.332"
        stroke="#262626"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.666 39.332L45.3327 39.332"
        stroke="#262626"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.666 54L45.3327 54"
        stroke="#262626"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.666 54L45.3327 54"
        stroke="#262626"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="36.666"
        y="29.332"
        width="26"
        height="33.3333"
        stroke="#262626"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
