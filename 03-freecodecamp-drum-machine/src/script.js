// component drumPad which takes in the key and audio source
// q81 w87 e69 a65 s83 d68 z90 x88 c67
const keyMap = {
  81: 'Q',
  87: 'W',
  69: 'E',
  65: 'A',
  83: 'S',
  68: 'D',
  90: 'Z',
  88: 'X',
  67: 'C'
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
    //document.getElementById(`${this.props.audioId}`).play();
    document.querySelectorAll(`#${this.props.audioId}`)[1].play();
    this.props.changeDisplayValue(this.props.audioId)
  }
  
  render() {
    return (
      <button id={this.props.audioId} onClick={this.onClick}
        className='drum-pad bg-white font-bold py-2 px-4 rounded-md border border-gray-200 flex justify-center items-center hover:bg-gray-200'>
        <audio class="clip" id={`${this.props.audioId}`} src={this.props.audioSrc}></audio>
        <p className='text-gray-600'>{this.props.audioId}</p>
      </button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: ''
    };
    this.changeDisplayValue = this.changeDisplayValue.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  handleKeyPress = (event) => {
    const audioId = keyMap[event.keyCode];
    if (typeof audioId !== 'undefined') {
      document.querySelectorAll(`#${audioId}`)[1].play();
      this.changeDisplayValue(audioId)
    }
  }
  
  changeDisplayValue = (newValue) => {
    this.setState({
      displayValue: newValue
    });
  }
  
 
  render() {
    return (
      <div className='min-h-screen flex justify-center items-center flex-col'>
        <div id='drum-machine' className='grid grid-cols-3 gap-2 bg-gray-100 p-4 rounded-lg'>
          <p id='display' className='col-span-3 flex justify-center items-center bg-gray-200 h-6 w-full mb-2 rounded-md font-bold text-gray-600'>{this.state.displayValue}</p>
          <DrumPad audioId='Q' changeDisplayValue={this.changeDisplayValue} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'/>
          <DrumPad audioId='W' changeDisplayValue={this.changeDisplayValue} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'/>
          <DrumPad audioId='E' changeDisplayValue={this.changeDisplayValue} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'/>
          <DrumPad audioId='A' changeDisplayValue={this.changeDisplayValue} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'/>
          <DrumPad audioId='S' changeDisplayValue={this.changeDisplayValue} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'/>
          <DrumPad audioId='D' changeDisplayValue={this.changeDisplayValue} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'/>
          <DrumPad audioId='Z' changeDisplayValue={this.changeDisplayValue} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'/>
          <DrumPad audioId='X' changeDisplayValue={this.changeDisplayValue} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'/>
          <DrumPad audioId='C' changeDisplayValue={this.changeDisplayValue} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById("app")
)