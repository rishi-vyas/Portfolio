import gokuImg from "../assets/img/goku.png";

function Goku() {
  return (
    <img
      src={gokuImg}
      alt="Goku"
      className="goku-figure"
      draggable="false"
    />
  );
}

export default Goku;