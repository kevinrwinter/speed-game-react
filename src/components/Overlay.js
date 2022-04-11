export default function Overlay(props) {
  return (
    <div className="overlay">
      <div className="modal">
        <button type="button" className="btn close">
          Close
        </button>
        <p>
          <span className="final-score"></span>
        </p>
      </div>
    </div>
  );
}
