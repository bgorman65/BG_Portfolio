import "../styles/tech.css";

function Tech() {
    return (
        <div className="techParent">
            <div className="techTitle">
                <img src={require("../images/keyboard.png")} alt="Tech" className="techImg"/>
                <h3>Technical Skills</h3>
            </div>
            <div className="languages">
                <h4>Languages</h4>
                <div className="entries">
                    <p>Python</p>
                    <p>Java</p>
                    <p>C</p>
                    <p>C++</p>
                    <p>JavaScript</p>
                    <p>TypeScript</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>MatLab</p>
                </div>
            </div>
            <div className="languages">
                <h4>Technologies</h4>
                <div className="entries">
                    <p>React</p>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>MongoDB</p>
                    <p>SQL</p>
                    <p>Google Cloud Platform</p>
                    <p>Git</p>
                    <p>Linux</p>
                    <p>Windows</p>
                </div>
            </div>
        </div>
    );
}

export default Tech;