import React from "react";
import "./styles.css";
import { Avatar } from "antd";
import {SignInWithGoogle} from "../../service/firebase/firebase.utils";
import firebase from "firebase";

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoggedIn: false,
            currentUser: null,
        }
    }

    componentDidMount() {
        firebase.app().auth().onAuthStateChanged((user: any) => {
            this.setState({isLoggedIn: !!user, currentUser: user});
            console.log(user);
        });
    }

    signOut = () => {
        firebase.app().auth().signOut();
    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn?
                    (
                        <div className="main-content-logged-in">
                            <div className="content">
                                <h1 className="title">Welcome to hell</h1>
                                <Avatar className="profile-pic" size={100} src={this.state.currentUser.photoURL} />
                                <h2 className="text">{this.state.currentUser.displayName} is in sweet hot lava</h2>
                                <span className="logout-text" onClick={ this.signOut }>Ouch! it burns, Let me out</span>
                            </div>
                        </div>
                    )
                    : (
                        <div className="main-content">
                            <div className="content">
                                <h1 className="title">Welcome to hell</h1>
                                <span className="text">Sign in with</span><br/>
                                <div onClick={ SignInWithGoogle }>
                                    <Avatar className="google-avatar" size={100} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" />
                                </div>
                                <span className="text">to get access to our <br/> new hot lava tub</span><br/>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;
