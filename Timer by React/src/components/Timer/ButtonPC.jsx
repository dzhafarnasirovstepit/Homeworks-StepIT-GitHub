const ButtonPC = ({ isRunning, onClick }) => (
  <button onClick={onClick}>{isRunning ? 'Pause' : 'Continue'}</button>
);

export default ButtonPC;