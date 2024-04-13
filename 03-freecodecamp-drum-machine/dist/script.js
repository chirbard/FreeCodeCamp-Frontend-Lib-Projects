function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // component drumPad which takes in the key and audio source
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
  67: 'C' };


class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    //document.getElementById(`${this.props.audioId}`).play();
    document.querySelectorAll(`#${this.props.audioId}`)[1].play();
    this.props.changeDisplayValue(this.props.audioId);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("button", { id: this.props.audioId, onClick: this.onClick,
        className: "drum-pad bg-white font-bold py-2 px-4 rounded-md border border-gray-200 flex justify-center items-center hover:bg-gray-200" }, /*#__PURE__*/
      React.createElement("audio", { class: "clip", id: `${this.props.audioId}`, src: this.props.audioSrc }), /*#__PURE__*/
      React.createElement("p", { className: "text-gray-600" }, this.props.audioId)));


  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleKeyPress",













    event => {
      const audioId = keyMap[event.keyCode];
      if (typeof audioId !== 'undefined') {
        document.querySelectorAll(`#${audioId}`)[1].play();
        this.changeDisplayValue(audioId);
      }
    });_defineProperty(this, "changeDisplayValue",

    newValue => {
      this.setState({
        displayValue: newValue });

    });this.state = { displayValue: '' };this.changeDisplayValue = this.changeDisplayValue.bind(this);}componentDidMount() {document.addEventListener('keydown', this.handleKeyPress);}componentWillUnmount() {document.removeEventListener('keydown', this.handleKeyPress);}


  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "min-h-screen flex justify-center items-center flex-col" }, /*#__PURE__*/
      React.createElement("div", { id: "drum-machine", className: "grid grid-cols-3 gap-2 bg-gray-100 p-4 rounded-lg" }, /*#__PURE__*/
      React.createElement("p", { id: "display", className: "col-span-3 flex justify-center items-center bg-gray-200 h-6 w-full mb-2 rounded-md font-bold text-gray-600" }, this.state.displayValue), /*#__PURE__*/
      React.createElement(DrumPad, { audioId: "Q", changeDisplayValue: this.changeDisplayValue, audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }), /*#__PURE__*/
      React.createElement(DrumPad, { audioId: "W", changeDisplayValue: this.changeDisplayValue, audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" }), /*#__PURE__*/
      React.createElement(DrumPad, { audioId: "E", changeDisplayValue: this.changeDisplayValue, audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" }), /*#__PURE__*/
      React.createElement(DrumPad, { audioId: "A", changeDisplayValue: this.changeDisplayValue, audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" }), /*#__PURE__*/
      React.createElement(DrumPad, { audioId: "S", changeDisplayValue: this.changeDisplayValue, audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" }), /*#__PURE__*/
      React.createElement(DrumPad, { audioId: "D", changeDisplayValue: this.changeDisplayValue, audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" }), /*#__PURE__*/
      React.createElement(DrumPad, { audioId: "Z", changeDisplayValue: this.changeDisplayValue, audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" }), /*#__PURE__*/
      React.createElement(DrumPad, { audioId: "X", changeDisplayValue: this.changeDisplayValue, audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" }), /*#__PURE__*/
      React.createElement(DrumPad, { audioId: "C", changeDisplayValue: this.changeDisplayValue, audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }))));



  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById("app"));