import Logo from "../image/logo.png";
function Header(props) {
    //const {title} = props;
    return (
            <nav>
                <img src={Logo} alt="logo"/>
                <a href="/">{props.title}</a> 
            </nav>
    );
}

export default Header;