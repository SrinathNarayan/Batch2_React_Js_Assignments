import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Messageservices } from './Messageservice'
import ComponentB from './ComponentB';

class ComponentA  extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        // subscribe to home component messages
        this.subscription = Messageservices.getMessage().subscribe(message => {
            if (message) {
                // add message to local state if not empty
                this.setState({ messages: [...this.state.messages, message] });
            } else {
                // clear messages when empty message received
                this.setState({ messages: [] });
            }
        });
    }

    componentWillUnmount() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    render() {
        const { messages } = this.state;
        return (
                <div>
                    <div className="jumbotron">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-sm-8 offset-sm-2">
                                    {messages.map((message, index) =>
                                        <div key={index} className="alert alert-success">{message.text}</div>
                                    )}
                                    <ComponentB/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ComponentA


