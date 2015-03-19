/* jshint ignore:start */
import { Actions, Store, Flummox } from 'flummox';
import axios from 'axios';
import _ from 'lodash';

class StarshipActions extends Actions {
    async fetch(id) {
        return await axios.get(`http://swapi.co/api/starships/${id}/`);
    }
}

class StarshipStore extends Store {

    static serialize(state) {
        return JSON.stringify(state);
    }
    static deserialize(state) {
        return JSON.parse(state).starship;
    }

    constructor(flux) {
        super();
        const starshipActions = flux.getActions('starship');
        this.register(starshipActions.fetch, this.handleStarship);
        this.state = {};
    }
    handleStarship(res) {
        this.setState({
            starship: res.data
        });
    }
    isEmpty() {
        return _.isEmpty(this.state);
    }
    get() {
        return this.state;
    }
}

class Flux extends Flummox {
    constructor() {
        super();
        this.createActions('starship', StarshipActions);
        this.createStore('starship', StarshipStore, this);
    }
}

//const flux = new Flux();
//
//// perform action
//flux.getActions('messages').newMessage('Hello, world!');

export default Flux;
