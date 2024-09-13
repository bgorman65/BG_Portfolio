import "../styles/header.css";

function Header() {
  return (
    <div className="parent">
        <div className="profile">
            <img src={require("../images/IMG_8519.jpg")} alt="Profile Picture" className="profileImg"/>
        </div>
        <div className="profileinfo">
            <div className="line">
                <h1 className="name">Barry Gorman</h1>
            </div>
            <div className = "contatiner">
                <div className="line">
                    <img src={require("../images/email.png")} alt="Email" className="icon"/>
                    <a href="mailto:barrydgorman@gmail.com" className="emailTxt">barrydgorman@gmail.com</a>
                </div>
                <div className="line">
                    <img src={require("../images/download.png")} alt="Resume" className="icon"/>
                    <a href="/Resume_2024.pdf" download="Barry_Gorman_Resume.pdf" className="resumeTxt">Resume - may not be availablr</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
