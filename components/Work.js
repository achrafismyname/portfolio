import React, { useState, useEffect  } from 'react'

const projects = {
    "shopify": [
        {
            "bg": "#dce7f8",
            "color": "#000",
            "image": "images/work1.png",
            "title": "Sleepy Owl Coffee",
            "overview": "Sleepy Owl Coffee is an indian online shopify store, they already had the website built long time ago. But my job was to update it (the look, and new customizations), as it receive consistent updates every week, depending on the requirements sent from the owner. He was very pleased with my work specially with my fast turn-around time.",
            "role": "Liquid / Front-end Developer, Web Designer",
            "technologies": "Shopify, Liquid, JS",
            "time": "3 months",
            "type": "Part-Time",
            "link": "https://sleepyowl.co/"
        },
        {
            "bg": "#dce7f8",
            "color": "#000",
            "image": "images/work2.png",
            "title": "Bymenna",
            "overview": "Bymenna is an ecommerce fashion online store by a woman from U.A.E, the task of building the shopify store was given to me from start to end and it went quite smoothly. I used a theme matching the wanted style from envato, then customized and added section to the code so it's exactly what the owner wanted. She was grateful to have someone take care of the technical stuff for her.",
            "technologies": "Shopify, Liquid, JS",
            "time": "3 weeks",
            "role": "Liquid / Front-end Developer, Web Designer + Shopify Manager",
            "type": "Freelance Job",
            "link": "https://bymenna.com/"
        },
        {
            "bg": "#dce7f8",
            "color": "#000",
            "image": "images/work3.png",
            "title": "Lifenote",
            "overview": "This is not a real store, it's just an example I made and you can access it using the code 'neiwah'",
            "technologies": "Shopify, Liquid, JS",
            "role": "Liquid / Front-end Developer, Web Designer + Shopify Manager",
            "time": "1 week",
            "type": "Portfolio Project",
            "link": "https://lifenotestore.myshopify.com/"
        },
    ],
    "front-end": [
        {
            "bg": "#dce7f8",
            "color": "#000",
            "image": "images/quotify.png",
            "title": "Quotify: A ReactJs application to generate random quotes",
            "overview": "Just a Test webapp",
            "role": "Front-End Developer",
            "technologies": "ReactJs, ES6, REST API",
            "time": "1 day",
            "type": "Learning Purposes",
            "link": "https://afaithraf.github.io/quotify/"
        },
    ],
    "landing pages": [
        {
            "bg": "#dce7f8",
            "color": "#000",
            "image": "images/work4.png",
            "title": "iFlip Real Estate",
            "overview": "iFlip is a SAAS software for real eastate investors. I took the task of designing thier main landing page, including some copywriting. Client saw a good increase at Conversion rate from the previous design and was pleased with results.",
            "role": "Landing Page Designer, copywriter",
            "technologies": "Conversion Focused Design, Copywriting, HTML/CSS/JS",
            "time": "4 days",
            "type": "Freelance Project",
            "link": "https://iflip.surge.sh/"
        },
        {
            "bg": "#dce7f8",
            "color": "#000",
            "image": "images/work5.png",
            "title": "Mentorship Retreat by Real Estate Wealth Network",
            "overview": "",
            "role": "Landing Page Designer",
            "technologies": "Conversion Focused Design, HTML/CSS/JS",
            "time": "5 days",
            "type": "Freelance Project",
            "link": "https://mentorshipretreat.com/"
        },
    ]
};


export default function Work() {

    const [activeCat, setActiveCat] = useState("all");

    useEffect(function mount() {

        const search = window.location.search;
        const params = new URLSearchParams(search);
        const foo = params.get('work');
        if(foo !== "undefined" && projects.hasOwnProperty(foo)){
            setActiveCat(foo);
        }
    
        return function unMount() {
        };
    }, {});

    return (
        <div className="dad">
            <h2>Portfolio</h2>
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
                    margin: 0 auto 40px;
                }
                h2{
                    margin: 10px auto 60px;
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
                <img id="{data.image}" src={data.image} alt={data.title} />
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
                .right {
                    
    margin: 40px;
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