import React, { useState, useEffect } from 'react'

export default function Login(props) {

    const [value, setValue] = useState("");
    const [pass, setPass] = useState("hello");
    let setAuth = props.setAuth;


    useEffect(function mount() {
        console.log("%cthis application is not intended to be secure, and you can get the password easily if you look", "background: red; color: yellow; font-size: x-large");
        console.log("%cthe password is: " + pass, "background: cyan; color: black; font-size: x-large");

        const savedPassword = localStorage.getItem('password');
        if (savedPassword === pass) {
            setAuth(1);
        }

        const search = window.location.search;
        const params = new URLSearchParams(search);
        const autoPass = params.get('pass');

        if (autoPass === pass) {
            setAuth(1);
            localStorage.setItem('password', pass);
        }

        return function unMount() {
        };
    }, []);

    let handleSubmit = (event) => {
        event.preventDefault();
        if (value === pass) {
            setAuth(1);
            localStorage.setItem('password', value);
        } else {
            alert('Wrong password');
        }
    }


    let handleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);
        if (event.target.value === pass) {
            setAuth(1);
            localStorage.setItem('password', event.target.value);
        }
    }

    return (
        <div className="cooool">
            <form onSubmit={handleSubmit}>
                <input className="tinput" type="text" name="password" placeholder="Enter password" value={value} onChange={handleChange} />
            </form>
            <style jsx>{`
                .cooool {
                    position: fixed;
                    top: 0;        
                    left: 0;        
                    bottom: 0;        
                    right: 0;        
                    background: #dce7f8;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    padding: 3rem 1.6rem;
                    background: #1760CC;
                    border-radius: 7px;
                    border: 1px solid #eee;
                    color: #66594d;
                }
                .tinput {
                    font-size: 1.1em;
                    padding: .8em 1.2em;
                    border-radius: 4px;
                    border: 1px solid #66594d;
                }
                .sinput {
                    padding: .6em 1.2em;
                    font-size: 1.1em;
                    border: 1px solid #66594d;
                    color: #66594d;
                    cursor: pointer;
                    background: #4D4339;
                }
            `}</style>
        </div>
    )
}

