import "../styles/work.css";

function Work() {
    return (
        <div className="workParent">
            <div className="workHeader">
                <img src={require("../images/work.png")} alt="Work" className="workImg"/>
                <h4>Work</h4>    
            </div>
            <div className="workEntry">
                <div className="workLine">
                    <img src={require("../images/keyboard.png")} alt="Work" className="workIcon"/>
                    <p>Undergraduate Teaching Assistant @</p>
                    <p className="pDif">&nbsp;Texas Tech University</p>
                    <img src={require("../images/apartment.png")} alt="Building" className="workIcon"/>
                </div>
                <div className="workLine">
                    <img src={require("../images/calender.png")} alt="Calender" className="workIcon"/>
                    <p className="pLight">08/2024 - Present • Lubbock, Texas</p>
                    <img src={require("../images/pin.png")} alt="pin" className="workIcon"/>
                </div>
            </div>
            <div className="workEntry">
                <div className="workLine">
                    <img src={require("../images/rodeo.png")} alt="Work" className="workIcon"/>
                    <p>Arena Hand @</p>
                    <p className="pDif">&nbsp;Stockyards Championship Rodeo</p>
                    <img src={require("../images/apartment.png")} alt="Building" className="workIcon"/>
                </div>
                <div className="workLine">
                    <img src={require("../images/calender.png")} alt="Calender" className="workIcon"/>
                    <p className="pLight">08/2019 - Present • Fort Worth, Texas</p>
                    <img src={require("../images/pin.png")} alt="pin" className="workIcon"/>
                </div>
            </div>
        </div>
    );
}

export default Work;