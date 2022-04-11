export default function Buttons(props) {
  return (
    <div className="buttons">
      <button onClick={props.start} type="button" className="btn start">
        Start game
      </button>
      <button onClick={props.stop} type="button" className="btn stop">
        Stop game
      </button>
    </div>
  );
}
