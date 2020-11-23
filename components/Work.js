import React, { useState } from 'react'

const projects = {
    "Full-Stack": [
        {
            "bg": "#b9d2c5",
            "color": "#000",
            "image": "images/yonayn.png",
            "title": "Yonayn: the web design studio",
            "overview": "Yonayn is my new web design studio, still under construction with a goal to be one of the best web developing agencies",
            "role": " UX Design, UI Design and Full-Stack Developer",
            "technologies": "NuxtJs, JavaScript",
            "time": "4 weeks",
            "type": "Website For My Brand",
            "link": "https://yonayn.com/"
        },
        {
            "bg": "#efe6d8",
            "color": "#010101",
            "image": "https://storage.googleapis.com/uxfolio/5da08d792b56810004cda5da/5da7396af4db040004fcad7d/bDoKgnj5KuaRczr5.png",
            "title": "Designing a Responsive E-commerce website",
            "overview": "Mirror, a global retail store offering to good quality clothing at a reasonable price for everyone. Mirror's main purpose is to make affordable and good quality clothing that is accessible to everyone.",
            "role": "Full-Stack Developer",
            "technologies": "Wordpress, Html5, Sass, JavaScript",
            "time": "3 weeks",
            "type": "Freelance Job",
            "link": "#"
        },
        {
            "bg": "#252525",
            "color": "#fff",
            "image": "images/work2.jpg",
            "title": "Industrious - Visitors Self Check-In system",
            "overview": "Industrious is a premium flexible workspace provider that redefines the workplace experience. Industrious is a premium workplace platform, blending five-star service, and stunning design to provide unparalleled workplace experience for established professionals. Industrious is a workplace experience that helps teams of all sizes transform ideas into action, with the flexibility to scale on their own terms.",
            "role": " UX Design, UI Design and Full-Stack Developer",
            "technologies": "Wordpress, VuesJs, JavaScript",
            "time": "4 weeks",
            "type": "Freelance Job",
            "link": "#"
        },
    ],
    "Front-end": [
        {
            "bg": "#23317a",
            "color": "#fffdfd",
            "image": "images/quotify.png",
            "title": "Quotify: A ReactJs application to generate random quotes",
            "overview": "Mirror, a global retail store offering to good quality clothing at a reasonable price for everyone. Mirror's main purpose is to make affordable and good quality clothing that is accessible to everyone.",
            "role": "Front-End Developer",
            "technologies": "ReactJs, ES6, REST API",
            "time": "1 day",
            "type": "Learning Purposes",
            "link": "https://afaithraf.github.io/quotify/"
        },
        "3",
        "3",
        "4"
    ],
    "UI/UX design": [
        "5",
        "6"
    ]
};

export default function Work() {
    const [activeCat, setActiveCat] = useState("all");
    return (
        <div className="dad">
            <h2>Work</h2>
            <div className="cat-select">
                <div
                    className={"cat " + ("all" == activeCat ? "active" : null)}
                    onClick={() => setActiveCat("all")}
                >
                    <h4>{"all"}</h4>
                </div>
                {Object.keys(projects).map((e, i) =>
                    <div
                        className={"cat " + (e == activeCat ? "active" : null)}
                        key={i}
                        onClick={() => setActiveCat(e)}
                    >
                        <h4>{e}</h4>
                    </div>
                )}
            </div>
            {
                (activeCat == "all" ?
                    Object.keys(projects).map((e, i) =>
                        Object.keys(projects[e]).map((k, j)=><WorkCard data={projects[e][k]} key={j} />)
                    )
                    :
                    Object.keys(projects[activeCat]).map((e, i) => <WorkCard data={projects[activeCat][i]} key={i} />)
                )
            }
            <style jsx>{`
                .dad{
                    margin: 40px auto;
                }
                h2{
                    margin: 30px auto;
                    font-size: 2.2em;
                    text-align: center;
                }
                .cat-select {
                    margin: 20px 0;
                    display: flex;
                    flex-wrap: wrap;
                }
                h4{
                    margin: 0;
                }
                .cat-select .cat {
                    flex: 1;
                    border: 1px solid transparent;
                    opacity: .9;
                    margin: 4px;
                    text-align: center;
                    font-size: 1.4em;
                    text-transform: capitalize;
                    cursor: pointer;
                    transition-duration: 300ms;
                    padding: 30px 20px;
                    color: var(--dark);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 140px;
                }
                .cat-select .cat:hover {
                    transform: scale(1.1);
                }
                .cat-select .cat.active {
                    opacity: 1;
                    transition-duration: 0ms;
                    transform: scale(1);
                    border-color: var(--primary);
                    color: var(--primary);
                }
            `}</style>
        </div>
    )
}


const WorkCard = (props) => {
    let data = props.data;
    return (
        <a href={data.link} className="card" target="_blank">
            <div className="left">
                <div className="top">
                    <h3>{data.title}</h3>
                    <p>{data.overview}</p>
                </div>
                <div className="bot">
                    <ul className="info">
                        <li>My Role:<span>{data.role}</span></li>
                        <li>Technologies:<span>{data.technologies}</span></li>
                        <li>Project Type:<span>{data.type}</span></li>
                        <li>Project Scope:<span>{data.time}</span></li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <img src={data.image} alt={data.title} />
            </div>
            <style jsx>{`
                .card{
                    width: 100%;
                    min-height: 400px;
                    max-height: 600px;
                    margin: 0;
                    margin-bottom: 40px;
                    background: ${data.bg};
                    color: ${data.color};
                    display: flex;
                    text-decoration: none;
                    transition-duration: 200ms;
                }
                .card:hover{
                    transform: scale(.95);
                }
                .left, .right{
                    flex: 1;
                }
                .left {
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    font-size: 1.1em;
                    line-height: 1.4em;
                }
                h3{
                    margin-top: 10px;
                    font-size: 1.7em;
                    font-weight: 600;
                    line-height: 1.5em;
                }
                .right img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
                .info{
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    text-transform: capitalize;
                }
                .info li{
                    font-weight: 600;
                    font-size: 1em;
                    margin: 12px 0;
                }
                .info li>span{
                    font-weight: 400;
                    opacity: 0.9;
                    margin: 7px;
                }
                @media screen and (max-width: 800px){
                    .card{
                        flex-direction: column-reverse;
                        max-height: none;
                    }
                    .right img{
                        height: 100%;
                        max-height: 600px;
                    }
                }
            `}</style>
        </a>
    );
}