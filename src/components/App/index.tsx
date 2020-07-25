import React from "react";
import "./styles.css";
import { Avatar } from "antd";

class App extends React.Component<any, any> {
    render() {
        return (
            <div className="main-content">
                <div className="content">
                    <span className="title">Welcome to Hell</span><br/>
                    <span className="text">Sign in with</span><br/>
                    <Avatar className="avatar" size={100} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" /><br/>
                    <span className="text">to get access to our <br/> new hot lava tub</span><br/>
                </div>
            </div>
        );
    }
}

export default App;
