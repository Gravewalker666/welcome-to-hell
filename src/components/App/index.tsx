import React from "react";
import "./styles.css";
import {Avatar, Button} from "antd";
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
            <div className="main-content">
                <div className="content">
                    {this.state.isLoggedIn?
                        (
                            <div>
                                <div onClick={ SignInWithGoogle }>
                                    <Avatar size={100} src={this.state.currentUser.photoURL} />
                                </div>
                                <h2 className="text">{this.state.currentUser.displayName}</h2>
                                <Button type="primary" onClick={ this.signOut }>I wanna get the hell outta this lava tub</Button>
                            </div>
                        )
                        : (
                            <div>
                                <span className="text">Sign in with</span><br/>
                                <div onClick={ SignInWithGoogle }>
                                    <Avatar className="google-avatar" size={100} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" />
                                </div>
                                <span className="text">to get access to our <br/> new hot lava tub</span><br/>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default App;
