import React from 'react';

import { Messageservices } from './Messageservice';

const ComponentB = () => {
    const sendMessage=()=>{
        // send message to subscribers via observable subject
        return Messageservices.sendMessage('Message  Component A to  Component B!');
    }

    const clearMessages = ()=> {
        // clear messages
        return Messageservices.clearMessage();
    }

        return (
            <div>
                <h2>Sending Message</h2>
                <h2> From Component A to  Component B</h2>
                <br/>
                <button onClick={sendMessage} className="btn btn-primary mr-2">Send Message</button>
                <button onClick={clearMessages} className="btn btn-secondary mr-2">Clear Messages</button>                
            </div>
        );
}

export default ComponentB;