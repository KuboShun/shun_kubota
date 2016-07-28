var React = require("react")
var react_sample = document.getElementsByClassName("react_sample")

var Hello = React.createClass({
  render: function() {
    return React.DOM.div({className: 'hello'}, 'Hello ' + this.props.name);
  }
})

React.render(
  React.createFactory(Hello)({name: 'World!!!!'}), document.getElementById("react_sample2")
  React.createFactory(Hello)({name: 'React!!!!'}), document.getElementById("react_sample")
);
React.render(
  React.createFactory(Hello)({name: 'React!!!!'}), document.getElementsByClassName("react_sample")[0]
/*
  for (var i = 0; i <= react_sample.length; i++) {
    React.createFactory(Hello)({name: 'React!!!!'}), react_sample[i]
  }
  */
);
