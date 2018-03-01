import React, {Component} from 'react';
import PersonList from "./People";

class App extends Component {
    state = {
        show: true
    };

    render() {
        return (
            <div>
                <button onClick={() => { this.setState({show: false}) }}>Hide</button>
                {this.state.show && <PersonList/>}
            </div>
        );
    }
}

export default App;
