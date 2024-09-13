import React, { useEffect, useState } from 'react';
import "../styles/footer.css";

// Define the fetchLeetCodeStats function outside the component
async function fetchLeetCodeStats() {
    const url = `https://leetcode-stats-api.herokuapp.com/bgorman65`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        return null;
    }
}

function Footer() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        async function getStats() {
            const data = await fetchLeetCodeStats();
            setStats(data);
        }
        getStats();
    }, []);

    return (
        <div className="footerParent">
            <div className="lc">
                {stats ? (
                    <>
                        <p className="b">{stats.easySolved}</p>
                        <p className="b">/</p>
                        <p className="b">{stats.totalEasy}</p>
                        <p className="b">&nbsp;easy</p>
                        <p>,</p>
                        <p className="y">&nbsp;{stats.mediumSolved}</p>
                        <p className="y">/</p>
                        <p className="y">{stats.totalMedium}</p>
                        <p className="y">&nbsp;medium</p>
                        <p>&nbsp;and</p>
                        <p className="r">&nbsp;{stats.hardSolved}</p>
                        <p className="r">/</p>
                        <p className="r">{stats.totalHard}</p>
                        <p className="r">&nbsp;hard</p>
                        <p>&nbsp;on LeetCode</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className="lc">
                <p>Made with React, Barry Gorman @ 2024</p>
            </div>
        </div>
    );
}

export default Footer;