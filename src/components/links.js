import Link from "./link";
import "../styles/links.css";

function Links() {
    return (
        <div className="parentLink">
            <Link img={require("../images/github.png")} alt="GitHub" link="https://github.com/bgorman65" info="GitHub"/>
            <Link img={require("../images/leetcode.png")} alt="LeetCode" link="https://leetcode.com/u/bgorman65/" info="LeetCode"/>
            <Link img={require("../images/linkedin.png")} alt="LinkedIn" link="https://www.linkedin.com/in/barry-g-b21375164/" info="LinkedIn"/>
            <Link img={require("../images/leetcode.png")} alt="HackerRank" link="https://www.hackerrank.com/profile/barrydgorman" info="HackerRank"/>
        </div>
    );
}

export default Links;