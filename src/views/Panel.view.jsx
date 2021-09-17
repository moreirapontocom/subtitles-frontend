import Navbar from "../components/Navbar/Navbar.component";

function Panel(props) {
  const { breadcrumb } = props;

  return (
    <>
      <Navbar authenticated={true} />

      <div className="container">
        <h1>{props.title}</h1>
        <p>{props.description}</p>

        {props.children}
      </div>
    </>
  );
}

export default Panel;
