import React from 'react';

export class UserInfo extends React.Component {

    render() {
        return (
            <div>
                <div id="user-bar">
                    <img src={"https://user-images.githubusercontent.com/56237004/82163472-091f6400-9871-11ea-9f1d-54595344fc11.png"}
                    alt={"DreamWorks Trolls Logo"} className="logo" />
            
                    <div className="button-box">
                    <button type="button" className="tgl-register">Register</button>
                    <button type="button" className="tgl-login">Login</button>
                    </div>
                </div>
        
                <div id="form-container">
                    <div id="register-box" className="form-box">
                    <form className="input-group">
                        <input type="text" id="username-input" className="input-field" placeholder="username" required />
                        <input type="password" id="password-input" className="input-field" placeholder="password" required />
                        <button type="button" className="register-enter">Register</button>
                    </form>
                    </div>
                    <div id="login-box" className="form-box">
                    <form className="input-group">
                        <input type="text" className="input-field" placeholder="username" required />
                        <input type="password" className="input-field" placeholder="password" required />
                        <button type="button" className="login-enter">Login</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}