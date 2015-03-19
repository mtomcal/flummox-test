var React = require('react');

var Starship = React.createClass({
  propTypes: {

  },
  getInitialState: function () {
    return {name: ""};
  },
  componentWillMount: function () {
    if (typeof window === 'undefined') {
      this.props.flux.getActions('starship').fetch(9);
      return;
    }
  },
  componentDidMount: function () {
    var self = this;
    this.props.flux.getStore('starship').addListener("change", function () {
      self.setState(this.state.starship);
    });
    self.setState(this.props.flux.getStore('starship').get());
  },
  handleClick: function () {
    this.props.flux.getActions('starship').fetch(10);
  },
  render: function() {
    var styles = {};

    return (
      <div>
        <h1>{this.state.name}</h1>
        <a onClick={this.handleClick} href="#">Update</a>
      </div>
    );
  }

});
module.exports = Starship;
