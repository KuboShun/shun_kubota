var react_sample = document.getElementsByClassName("example")

var Hello = React.createClass({
  render: function() {
    return React.DOM.div({className: 'hello'}, 'Hello ' + this.props.name);
  }
})
/*
ReactDOM.render(
  React.createFactory(Hello)({name: 'React!!!!'}), document.getElementById("example")
);
ReactDOM.render(
  React.createFactory(Hello)({name: 'React!!!!'}), document.getElementById("example2")
);
*/
for (var i = 0; i < react_sample.length; i++) {
  ReactDOM.render(
    React.createFactory(Hello)({name: 'React!!!!'}), react_sample[i]
  );
}

/** React component **/
var Evening = React.createClass({
  render: function() {
    return (
      <div className="sample">Evening {this.props.name}</div>
    );
  }
})
ReactDOM.render(<Evening name="React" />, document.getElementById("app"));
/** End : React component **/

var Timer = React.createClass({
  getInitialState: function() {
    return {
      secondsElapsed: 0,
      isStart: false
    };
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },

  start: function() {
    if(!this.state.isStart) {
      this.interval = setInterval(this.tick, 1000)
      this.setState({isStart: true})
    }
  },
  stop: function() {
    if(this.state.isStart) {
      console.log("hoge")
      clearInterval(this.interval)
      this.setState({isStart: false})
    }
  },
  reset: function() {
    clearInterval(this.interval)
    this.setState({
      secondsElapsed: 0,
      isStart: false
    })
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
    console.log("end")
  },
  render: function() {
    return (
      <div>
        secondsElapsed: {this.state.secondsElapsed}
        <p>
          <button onClick={this.start}>start</button>
          <button onClick={this.stop}>stop</button>
          <button onClick={this.reset}>reset</button>
        </p>
      </div>
    );  }
});

ReactDOM.render(<Timer />, document.getElementById('timer'));












/*

class Timer extends React.Component {

  constructor() {
    super();
    this.tick = this.tick.bind(this);
    this.state = {
      secondsElapsed: 0,
      isStart: false
    };
  }

  tick() {
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1
    });
  }

  start() {
    if(!this.state.isStart) {
      this.interval = setInterval(this.tick, 1000);
      this.setState({
        isStart: true
      });
    }
  }

  stop() {
    if(this.state.isStart){
      clearInterval(this.interval);
      this.setState({
        isStart: false
      });
    }
  }

  reset() {
    clearInterval(this.interval);
    this.setState({
      secondsElapsed: 0,
      isStart: false,
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds Elapsed: {this.state.secondsElapsed}
      <div>
          <button onClick={this.start.bind(this)}>start</button>
          <button onClick={this.stop.bind(this)}>stop</button>
          <button onClick={this.reset.bind(this)}>reset</button>
      </div>
            </div>
    );
  }
}

React.render(<Timer />, document.getElementById('container'));

*/