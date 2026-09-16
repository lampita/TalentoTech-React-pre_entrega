export const BotonEquis = ({ onClick, className }) => (
  <button onClick={onClick} className={className} title="Disminuir cantidad">
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://w3.org">
      <circle cx="256" cy="256" r="256" fill="#2D3748"/>
      <path d="M150 150 L362 362 M362 150 L150 362" stroke="#63B3ED" strokeWidth="40" strokeLinecap="round"/>
    </svg>
  </button>
);
