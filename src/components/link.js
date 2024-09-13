import "../styles/link.css";

function Link(props) {
    return (
        <div className="link">
            <img src={props.img} alt={props.alt} className="link-img"/>
            <a href={props.link} className="link-txt">{props.info}</a>
        </div>
    );
}

export default Link;