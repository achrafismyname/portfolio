import React from 'react'
import Image from 'next/image'

const links = [
    {
        "title": "github",
        "icon": "i-github",
        "link": "https://github.com/afaithraf",
        "color": "#333"
    },
    {
        "title": "linkedin",
        "icon": "i-linkedin",
        "link": "https://www.linkedin.com/in/afaithraf/",
        "color": "#0e76a8"
    },
    {
        "title": "instagram",
        "icon": "i-instagram",
        "link": "https://www.instagram.com/afaithraf/",
        "color": "#C13584"
    },
    {
        "title": "facebook",
        "icon": "i-facebook2",
        "link": "https://www.facebook.com/afaithraf",
        "color": "#3b5998"
    },
    {
        "title": "twitter",
        "icon": "i-twitter",
        "link": "https://twitter.com/afaithraf",
        "color": "#1DA1F2"
    },
    {
        "title": "dribbble",
        "icon": "i-dribbble",
        "link": "https://dribbble.com/afaithraf",
        "color": "#ea4c89"
    }
];
const otherLinks = [
    {
        "title": "achraf.org",
        "link": "//achraf.org"
    },
    {
        "title": "afaithraf@gmail.com",
        "link": "mailto:afaithraf@gmail.com"
    },
    {
        "title": "+212-634516342",
        "link": "tel:+212634516342"
    }
];
export default function Sidebar() {
    return (
        <div className="dad">
            <div className="portrait">
                <Image height="400" width="400" alt="achraf's portrait" src="/images/me.jpg" />
            </div>
            <h1>Achraf El Ghinoussi</h1>
            <h2>Front-end / Full-Stack Developer </h2>
            <p className="para">
                "I don't just build websites, I build websites that IMPRESS."
            </p>
            <div className="links">
                {links.map((e, i) =>
                    <a key={i} target="_blank" href={e.link} title={e.title} style={{ ['--color']: e.color }}>
                        <span className={e.icon}></span>
                    </a>
                )}
            </div>
            <div className="other-links">
                {otherLinks.map((e, i) =>
                    <a key={i} target="_blank" href={e.link} title={e.title}>
                        {e.title}
                    </a>
                )}
            </div>
            <style jsx>{`
                .dad{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .portrait{
                    padding-right: 0;
                    width: 100%;
                }
                h1 {
                    margin: 0;
                    margin-top: 20px;
                    color: var(--primary);
                    font-weight: 600;
                    font-size: 2em;
                }
                h2 {
                    margin: 14px 0;
                    color: var(--primary);
                    font-weight: 400;
                    font-size: 1.3em;
                }
                .para{
                    margin: 30px 0;
                    font-size: 1.2em;
                }
                .links{
                    margin: 6px 10px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .links a{
                    margin: 10px 10px;
                    color: var(--black);
                    opacity: .9;
                    text-decoration: none;
                    font-size: 30px;
                    transition: 200ms ease;
                }
                .links a:hover{
                    opacity: 1;
                    color: var(--primary);
                    color: var(--color);
                }
                .other-links {
                    display: flex;
                    flex-direction: column;
                    margin: 20px 0;
                }
                .other-links a{
                    margin: 6px 0;
                    color: #010101;
                    text-decoration: none;
                    font-size: 1.2em;
                }
                .other-links a:hover{
                    text-decoration: underline;
                }
            `}</style>
        </div>
    )
}
