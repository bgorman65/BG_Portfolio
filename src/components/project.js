import "../styles/project.css";
import { useEffect } from "react";

function Project(props) {

    useEffect(() => {
        getListItems();
    }, []);

    
    function getListItems() {
        let list = document.getElementById(props.name);
        let items = props.items;
        items.forEach((item) => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(item));
            list.appendChild(li);
        });
    }

    return (
        <div className="projectParent">
            <div className="projectChild">
                <div className="line">
                    <h3>{props.name}</h3>
                    <p className="pg">{props.stack}</p>
                </div>
                <p className="pd">
                    {props.description}
                </p>
                <ul id={props.name}>
                </ul>
            </div>
        </div>
    );
}

export default Project;