export const BotonTriangulo = ({ onClick, className }) => (
  <button onClick={onClick} className={className} title="Aumentar cantidad">
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://w3.org">
      <circle cx="256" cy="256" r="256" fill="#2D3748"/>
      <polygon points="256,106 406,366 106,366" stroke="#4FD1C5" strokeWidth="32" strokeLinejoin="round" fill="none"/>
    </svg>
  </button>
);
