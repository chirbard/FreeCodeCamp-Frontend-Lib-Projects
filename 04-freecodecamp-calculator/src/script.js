class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
    this.props.onClick(this.props.text);
  }
  
  render() {
    return (
      <button id={this.props.buttonId} onClick={this.onClick}
        className={`py-2 px-4 rounded-md flex justify-center items-center hover:bg-[#7baaff] text-[#7b90fd] hover:text-white shadow-[0.25rem_0.25rem_0.875rem_0_rgb(225,226,228),-0.25rem_-0.25rem_0.875rem_0_rgb(255,255,255)] ${this.props.addClasses}`}>
        <p>{this.props.text}</p>
      </button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: ['0']
    };
    this.update = this.update.bind(this);
  }
  
  update = (pressedKey) => {
    const lastValue = this.state.displayValue;
    var lastNumber = lastValue.at(-1);
    var newValue = ['0'];
    if (pressedKey == '.' && lastNumber.indexOf('.') > -1) {
      return
    }
    if (pressedKey == 'C') {
      newValue = ['0'];
    } else if (pressedKey == '=') {
      const product = math.evaluate(lastValue.join(''));
      newValue = [product]
    } else if ('+/*'.indexOf(lastNumber) > -1 && pressedKey == '-') {
      newValue = [...lastValue, pressedKey];
    } else if ('+-/*'.indexOf(pressedKey) > -1) {
      const secondToLastNumber = lastValue.at(-2);
      if ('+/*-'.indexOf(secondToLastNumber) > -1 && lastNumber == '-') {
        const withoutLastTwoNumbers = lastValue.slice(0, -2)
        newValue = [...withoutLastTwoNumbers, pressedKey];
      } else if ('+/*-'.indexOf(lastNumber) > -1) {
        const withoutLastNumber = lastValue.slice(0, -1)
        newValue = [...withoutLastNumber, pressedKey];
      } else {
        newValue = [...lastValue, pressedKey];
      }
    } else {
      if ('+-/*'.indexOf(lastNumber) > -1) {
        if (pressedKey == '.') pressedKey = '0.'
        newValue = [...lastValue, pressedKey];
      } else {
        lastNumber += pressedKey;
        if (lastNumber.at(0) == '0') {
          lastNumber = parseFloat(lastNumber)
          lastNumber = lastNumber.toString()
        }
        const withoutLastNumber = lastValue.slice(0, -1)
        newValue = [...withoutLastNumber, lastNumber];
      }
    }
    this.setState({
      displayValue: newValue
    });
  }
  
  
  render() {
    return (
      <div className='min-h-screen flex justify-center items-center flex-col bg-[#f2f3f9]'>
        <h1 className='mb-16 font-extrabold text-3xl text-center'>Neumorphic Calculator<br />with <span className="text-[#7b90fd]">TailwindCSS</span></h1>
        <div id='calculator' className='grid grid-cols-4 gap-2 p-4 rounded-lg shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]'>
          <p id='display' className='col-span-4 flex justify-center items-center h-8 w-full mb-2 rounded-md bg-[#e6e9f3] shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'>{this.state.displayValue}</p>
          <CalcButton onClick={this.update} buttonId='clear' text='C' addClasses='col-span-2 bg-[#7b90fd] text-white'/>
          <CalcButton onClick={this.update} buttonId='divide' text='/'/>
          <CalcButton onClick={this.update} buttonId='multiply' text='*'/>
          
          <CalcButton onClick={this.update} buttonId='seven' text='7'/>
          <CalcButton onClick={this.update} buttonId='eight' text='8'/>
          <CalcButton onClick={this.update} buttonId='nine' text='9'/>
          <CalcButton onClick={this.update} buttonId='add' text='+'/>
          
          <CalcButton onClick={this.update} buttonId='four' text='4'/>
          <CalcButton onClick={this.update} buttonId='five' text='5'/>
          <CalcButton onClick={this.update} buttonId='six' text='6'/>
          <CalcButton onClick={this.update} buttonId='subtract' text='-'/>
          
          <CalcButton onClick={this.update} buttonId='one' text='1'/>
          <CalcButton onClick={this.update} buttonId='two' text='2'/>
          <CalcButton onClick={this.update} buttonId='three' text='3'/>
          <CalcButton onClick={this.update} buttonId='equals' text='=' addClasses='row-span-2 bg-[#7b90fd] text-white'/>
          
          <CalcButton onClick={this.update} buttonId='zero' text='0' addClasses='col-span-2'/>
          <CalcButton onClick={this.update} buttonId='decimal' text='.'/>
          
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <App />, 
  document.getElementById("app")
)