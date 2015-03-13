var React = require('react');
var List = require('./List.jsx');


var ListContainer = React.createClass({
  mixins : [],
  propTypes: {

  },
  render: function() {
    var styles = {};

    return (
      <div>
        <List />
      </div>
    );
  }

});
module.exports = ListContainer;
