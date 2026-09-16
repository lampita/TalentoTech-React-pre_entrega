export const BotonCirculo = ({ onClick, className }) => (
  <button onClick={onClick} className={className} title="Volver a la tienda">
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://w3.org">
      <circle cx="256" cy="256" r="256" fill="#2D3748"/>
      <circle cx="256" cy="256" r="120" stroke="#F56565" strokeWidth="32" fill="none"/>
    </svg>
  </button>
);
