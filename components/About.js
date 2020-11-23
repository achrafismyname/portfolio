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
            <div className="mid">
                <h2>Strengths</h2>
                <div className="strengths">
                    <div><span>Trustworthy</span></div>
                    <div><span>Creative</span></div>
                    <div><span>Dedication</span></div>
                    <div><span>Versatility</span></div>
                </div>
            </div>
            <div className="right">
                <h2>Weaknesses</h2>
                <div className="strengths">
                    <div><span>Perfectionist</span></div>
                    <div><span>Lone Wolf</span></div>
                    <div><span>Bad at Explaining</span></div>
                    <div><span>Lazy</span></div>
                </div>
            </div>
            <style jsx>{`
                .dad{
                    background: var(--dark);
                    width: 100%;
                    color: var(--white);
                    padding: 20px;
                    padding-bottom: 40px;
                    display: flex;
                    justify-content: space-between;
                }
                h2{
                    margin-top: 20px;
                    margin-bottom: 30px;
                    font-size: 2em;
                    text-align: center;
                }
                .left,.mid,.right{
                    flex: 1;
                    align-items: center;
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
                .mid{
                    margin: 0 20px;
                }
                .strengths{
                    height: 300px;
                    width: 300px;
                    margin: 0 auto;
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
                    font-size: 1.25em;
                    font-weight: 600;
                    height: 100%;
                    width: 100%;
                    text-align: center;
                }
                @media screen and (max-width: 669px){
                    .dad{
                        flex-direction: column;
                        align-items: center;
                    }
                    h2{
                        margin-top: 50px;
                    }
                    .strengths{
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
