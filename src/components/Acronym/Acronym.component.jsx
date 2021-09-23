import "./Acronym.component.scss";

function Acronym(props) {
//   const colors = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
//   const selectedColor = colors[Math.floor(Math.random() * colors.length)];

  const acronym =
    props.name.indexOf(" ") >= 0
      ? props.name.split(" ")[0][0] + props.name.split(" ")[1][0]
      : props.name.substring(0, 2);

  return (
    <>
      <span className="Acronym">{acronym.toUpperCase()}</span> {props.hide ? null : props.name}
    </>
  );
}

export default Acronym;
