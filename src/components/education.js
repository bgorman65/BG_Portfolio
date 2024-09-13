import "../styles/education.css";

function Education() {
    return (
        <div className="edParent">
            <div className="edTitle">
                <img src={require("../images/school.png")} alt="Education" className="edImg"/>
                <h3>Education</h3>
            </div>
            <div className="edEntry">
                <h4>Texas Tech University</h4>
                <p>Major: Computer Science</p>
                <p>Minor: Mathematics</p>
                <p>GPA: 3.9</p>
                <p>August 2021 - Expected May 2025</p>
            </div>
        </div>
    );
}

export default Education;