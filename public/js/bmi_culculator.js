"use strict"

var bmi_culculator = document.getElementById("bmi_culculator")
var result;


class BMICulculator extends React.Component {
  constructor() {
    super();
    this.bmijudge = this.bmijudge.bind(this);
    this.calculate = this.calculate.bind(this);
    this.state = {
      weight: "initial weight",
      height: "initial height",
      bmi: 0,
      judge: 0
    }
  }

  calculate() {
    console.log("hoge")
    result = this.state.weight / (this.state.height*this.state.height) * 10000
    this.setState({bmi: result})
    this.bmijudge(result)
  }


  bmijudge(result) {
    console.log(result)
    if (result < 18.5) {this.setState({judge: "Under Weight"})}
    else if(result < 24.9) {this.setState({judge: "Nomal Weight"})}
    else if(result < 30.0) {this.setState({judge: "Over Weight"})}
    else {this.setState({judge: "Obese"})}
  }

  setWeight(e) {
    this.setState({weight: e.target.value})
  }
  setHeight(e) {
    this.setState({height: e.target.value})
  }

  render() {
    return(
      <div>
        <input type="number" value={this.state.weight} onChange={this.setWeight.bind(this)} /> kg
        <br />
        <input type="number" value={this.state.height} onChange={this.setHeight.bind(this)} /> cm
        <br />
        <button type="submit" onClick={this.calculate.bind(this)} >Judge</button>
        <br />
        BMI: {Math.round(this.state.bmi*10)/10}
        <br />
        Judge: {this.state.judge}
      </div>
    )
  }
}

ReactDOM.render(<BMICulculator />, bmi_culculator)


