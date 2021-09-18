import "./PageHeader.component.scss";

function PageHeader(props) {
  return (
    <>
      <div className="container">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default PageHeader;
