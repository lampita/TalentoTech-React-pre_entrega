export const BotonCuadrado = ({ onClick, className }) => (
  <button onClick={onClick} className={className} title="Eliminar juego">
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://w3.org">
      <circle cx="256" cy="256" r="256" fill="#2D3748"/>
      <rect x="136" y="136" width="240" height="240" rx="20" stroke="#F687B3" strokeWidth="32" fill="none"/>
    </svg>
  </button>
);
