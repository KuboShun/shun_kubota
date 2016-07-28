/*
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
*/

var react_sample = document.getElementsByClassName("example")

var Hello = React.createClass({
  render: function() {
    return React.DOM.div({className: 'hello'}, 'Hello ' + this.props.name);
  }
})

ReactDOM.render(
  React.createFactory(Hello)({name: 'React!!!!'}), document.getElementById("example")
);
ReactDOM.render(
  React.createFactory(Hello)({name: 'React!!!!'}), document.getElementById("example2")
);

for (var i = 0; i < react_sample.length; i++) {
  ReactDOM.render(
    React.createFactory(Hello)({name: 'React!!!!'}), react_sample[i]
  );
}



var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>secondsElapsed: {this.state.secondsElapsed}</div>
    );  }
});

ReactDOM.render(<Timer />, document.getElementById('timer'));