/*jshint esnext: true */
import React from 'react';
import Flux from './Data.jsx';
import FluxComponent from 'flummox/component';
import Starship from './Starship.jsx';

var Body = React.createClass({
  mixins : [],
  propTypes: {

  },
  componentWillMount: function () {
    if (typeof window !== 'undefined') {
      this.flux = new Flux();
      this.flux.deserialize(window.asyncProps);
      return;
    }
    this.flux = new Flux();
  },
  render: function() {
    var styles = {};
    return (
      <div>
        <FluxComponent flux={this.flux}>
            <Starship />
        </FluxComponent>
      </div>
    );
  }

});
module.exports = Body;
