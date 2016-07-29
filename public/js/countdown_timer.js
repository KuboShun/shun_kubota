

"use strict"


class CountdownTimer extends React.Component {

  constructor() {
    super()
    this.tick = this.tick.bind(this)
    this.state = {
      secondsRemaining: 10,
      isStart: false
    }
  }

  setSeconds(e) {
    this.setState({secondsRemaining: e.target.value})
  }

  tick() {
    this.setState({
      secondsRemaining: this.state.secondsRemaining - 1
    })
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval)
      this.setState({secondsRemaining: 0})
//      document.getElementById("span").innerHTML = "Seconds Remaining: FINISHED"
    }
  }

  start() {
    if (!this.state.isStart) {
      this.interval = setInterval(this.tick, 1000)
      this.setState({
        isStart: true
      })
    }
  }

  stop() {
    console.log("hoge")
    if (this.state.isStart) {
      clearInterval(this.interval)
      this.setState({
        isStart: false
      })
    }
  }

  reset() {
    clearInterval(this.interval)
    this.setState({
      secondsRemaining: 5,
      isStart: false
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
        <div>
          <span id="span">
            Seconds Remaining:<input type="number" value={this.state.secondsRemaining} onChange={this.setSeconds.bind(this)} />
          </span>
          <div>
            <button onClick={this.start.bind(this)}>Start</button>
            <button onClick={this.stop.bind(this)}>Stop</button>
            <button onClick={this.reset.bind(this)}>Reset</button>
          </div>
        </div>
      )
  }
}

ReactDOM.render(<CountdownTimer />, document.getElementById("countdown_timer"))
