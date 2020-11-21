import React from 'react'

export default function About() {
    return (
        <div className="dad">
            <div className="left">
                <h2>About</h2>
                <ul className="info">
                    <li>Occupation:<span>Freelancer Web Developer</span></li>
                    <li>Experience:<span>4 years</span></li>
                    <li>Location:<span>Oujda, Morocco</span></li>
                    <li>Age:<span>20 years old</span></li>
                </ul>
            </div>
            <div className="right">
                <div className="strengths">
                    <div><span>Creative</span></div>
                    <div><span>Passionate</span></div>
                    <div><span>Fresh</span></div>
                    <div><span>Hardworking</span></div>
                </div>
            </div>
            <style jsx>{`
                .dad{
                    background: var(--dark);
                    width: 100%;
                    color: var(--white);
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                }
                h2{
                    margin: 30px;
                    font-size: 2em;
                }
                .left .info li{
                    font-weight: 600;
                    font-size: 1.2em;
                    margin: 12px 0;
                }
                .left .info li>span{
                    font-weight: 300;
                    margin: 7px;
                }
                .right{
                    margin-left: 20px;
                }
                .strengths{
                    height: 300px;
                    width: 300px;
                    display: grid;
                    grid-template-rows: 48% 48%;
                    grid-template-columns: 48% 48%;
                    grid-gap: 4%;
                }
                .strengths>div{
                    background: var(--white); 
                    color: var(--primary);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.2em;
                    font-weight: 400;
                    height: 100%;
                    width: 100%;
                }
                @media screen and (max-width: 669px){
                    .dad{
                        flex-direction: column;
                        align-items: center;
                    }
                    .strengths{
                        margin-top: 20px;
                        max-width: 90vw;
                        max-height: 90vw;
                    }
                    .right{
                        margin-left: 0;
                    }
                }
            `}</style>
        </div>
    )
}
