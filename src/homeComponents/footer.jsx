import React from 'react';
import GitHubButton from 'react-github-btn';
import "./style.css";

const Footer = () => {
    return (
        <footer className="page-footer font-small special-color-dark pt-4">
            <div className='flex-wrap' style={{textAlign: "center"}}>
                <div className='m-2'>
                    <GitHubButton
                        href="https://github.com/mp858"
                        data-show-count="true"
                        aria-label="Follow @mp858 on GitHub"
                    >
                        Follow @mp858
                    </GitHubButton>
                </div>
                <GitHubButton
                    href="https://github.com/mp858/Algolive"
                    data-icon="octicon-star"
                    data-show-count="true"
                    aria-label="Star MdAqib184/Pathfinder-2.0 on GitHub"
                >
                    Star
                </GitHubButton>
                &nbsp;
                <GitHubButton
                    //href="https://github.com/MdAqib184/Pathfinder-2.0/fork"
                    href="https://github.com/mp858/Algolive/fork"
                    data-icon="octicon-repo-forked"
                    data-show-count="true"
                    aria-label="Fork mp858/Pathfinder-2.0 on GitHub"
                >
                    Fork
                </GitHubButton>
                &nbsp;
                <img
                    
                    src="https://visitor-badge.laobi.icu/badge?page_id=mp858.Algolive"
                    alt="Hits"
                />
            </div>
            <div className="footer-copyright text-center py-3">
                © 2024 Copyright:
                <a
                    href="https://github.com/mp858"
                    style={{color: "#65b6f0"}}
                >
                    Mudassir Parvez
                </a>
            </div>
        </footer>
    );
};

export default Footer;
