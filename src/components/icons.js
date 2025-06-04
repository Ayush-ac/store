// components/icons/ClockIcon.js

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <mask id="mask0" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
      <path d="M9.99739 18.3346C14.5999 18.3346 18.3307 14.6038 18.3307 10.0013C18.3307 5.3988 14.5999 1.66797 9.99739 1.66797C5.3949 1.66797 1.66406 5.3988 1.66406 10.0013C1.66406 14.6038 5.3949 18.3346 9.99739 18.3346Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 5V10.0042L13.5329 13.5375" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </mask>
    <g mask="url(#mask0)">
      <rect width="20" height="20" fill="#3F78E0" />
    </g>
  </svg>
);

export default ClockIcon;

