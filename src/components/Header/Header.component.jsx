const Header = (props) => {
    return <div>
        <h1>{props.title}</h1>
        {props.children ? <p>{props.children}</p> : ''}
    </div>
}

export default Header;