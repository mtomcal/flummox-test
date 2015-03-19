/* jshint esnext: true */
import { Actions, Store, Flummox } from 'flummox';

class StarshipActions extends Actions {
    newMessage(content) {
        return content; // automatically dispatched
    }
}

class MessageStore extends Store {
    constructor(flux) {
        super();
        const messageActions = flux.getActions('messages');
        this.register(messageActions.newMessage, this.handleNewMessage);
        this.messageCounter = 0;

        this.state = {};
    }

    handleNewMessage(content) {
        const id = this.messageCounter++;

        this.setState({
            [id]: {
                content,
                id,
            },
        });
    }
}

class Flux extends Flummox {
    constructor() {
        super();
        this.createActions('messages', MessageActions);
        this.createStore('messages', MessageStore, this);
    }
}

//const flux = new Flux();
//
//// perform action
//flux.getActions('messages').newMessage('Hello, world!');

export default Flux;
