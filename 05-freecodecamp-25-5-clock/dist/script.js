function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "toggleTimer",
















    () => {
      if (!this.state.timerStarted) {
        this.setState({
          timerStarted: true,
          interval: setInterval(() => {
            this.updateTimer();
          }, 1000) });

      } else {
        clearInterval(this.state.interval);
        this.setState({ timerStarted: false });
      }
    });_defineProperty(this, "updateTimer",
    () => {
      const newValue = this.state.timerValue - 1;
      if (newValue == -1) {
        document.getElementById('beep').play();
        if (this.state.timerType == 'Session') {
          this.calculateAndSetNewTimer(this.state.breakLength);
          this.setState({ timerType: 'Break' });
        } else {
          this.calculateAndSetNewTimer(this.state.sessionLength);
          this.setState({ timerType: 'Session' });
        }

      } else {
        this.setState({ timerValue: newValue });
      }
    });_defineProperty(this, "reset",
    () => {
      if (this.state.timerStarted) {
        clearInterval(this.state.interval);
      }
      this.setState({
        breakLength: 5,
        sessionLength: 25,
        timerValue: 1500,
        timerStarted: false,
        interval: 0,
        timerType: 'Session' });

      var audio = document.getElementById('beep');
      audio.pause();
      audio.currentTime = 0;
    });_defineProperty(this, "calculateAndSetNewTimer",
    newValue => {
      const timerValue = newValue * 60;
      this.setState({ timerValue: timerValue });
    });_defineProperty(this, "sessionDecrement",
    () => {
      if (!this.state.timerStarted && this.state.sessionLength > 1) {
        const newSessionLength = this.state.sessionLength - 1;
        this.setState({ sessionLength: newSessionLength });
        this.calculateAndSetNewTimer(newSessionLength);
      }
    });_defineProperty(this, "sessionIncrement",
    () => {
      if (!this.state.timerStarted && this.state.sessionLength < 60) {
        const newSessionLength = this.state.sessionLength + 1;
        this.setState({ sessionLength: newSessionLength });
        this.calculateAndSetNewTimer(newSessionLength);
      }
    });_defineProperty(this, "breakDecrement",
    () => {
      if (!this.state.timerStarted && this.state.breakLength > 1) {
        const newLength = this.state.breakLength - 1;
        this.setState({ breakLength: newLength });
      }
    });_defineProperty(this, "breakIncrement",
    () => {
      if (!this.state.timerStarted && this.state.breakLength < 60) {
        const newLength = this.state.breakLength + 1;
        this.setState({ breakLength: newLength });
      }
    });_defineProperty(this, "parseTimer",
    () => {
      var minutes = Math.floor(this.state.timerValue / 60);
      var seconds = this.state.timerValue - minutes * 60;
      if (minutes < 10) {
        minutes = '0' + minutes.toString();
      }
      if (seconds < 10) {
        seconds = '0' + seconds.toString();
      }
      return `${minutes}:${seconds}`;
    });this.state = { breakLength: 5, sessionLength: 25, timerValue: 1500, timerStarted: false, interval: 0, timerType: 'Session' };this.toggleTimer = this.toggleTimer.bind(this);this.reset = this.reset.bind(this);this.sessionDecrement = this.sessionDecrement.bind(this);this.sessionIncrement = this.sessionIncrement.bind(this);this.breakDecrement = this.breakDecrement.bind(this);this.breakIncrement = this.breakIncrement.bind(this);this.parseTimer = this.parseTimer.bind(this);}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "min-h-screen flex justify-center items-center flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "gap-2 bg-gray-100 p-4 rounded-lg flex justify-center items-center flex-col" }, /*#__PURE__*/
      React.createElement("h1", { className: "text-lg font-bold" }, "Session Timer"), /*#__PURE__*/
      React.createElement("h2", { id: "break-label" }, "Break Length"), /*#__PURE__*/
      React.createElement("p", { id: "break-length", className: "flex justify-center items-center bg-gray-200 h-6 w-full mb-2 rounded-md" }, this.state.breakLength), /*#__PURE__*/
      React.createElement("div", { className: "flex" }, /*#__PURE__*/
      React.createElement("button", { id: "break-decrement", onClick: this.breakDecrement, className: "bg-white font-bold w-8 h-8 rounded-md border border-gray-200 flex justify-center items-center hover:bg-gray-200" }, "-"), /*#__PURE__*/
      React.createElement("button", { id: "break-increment", onClick: this.breakIncrement, className: "bg-white font-bold w-8 h-8 rounded-md border border-gray-200 flex justify-center items-center hover:bg-gray-200" }, "+")), /*#__PURE__*/


      React.createElement("h2", { id: "session-label" }, "Session Length"), /*#__PURE__*/
      React.createElement("p", { id: "session-length", className: "flex justify-center items-center bg-gray-200 h-6 w-full mb-2 rounded-md" }, this.state.sessionLength), /*#__PURE__*/
      React.createElement("div", { className: "flex" }, /*#__PURE__*/
      React.createElement("button", { id: "session-decrement", onClick: this.sessionDecrement, className: "bg-white font-bold w-8 h-8 rounded-md border border-gray-200 flex justify-center items-center hover:bg-gray-200" }, "-"), /*#__PURE__*/
      React.createElement("button", { id: "session-increment", onClick: this.sessionIncrement, className: "bg-white font-bold w-8 h-8 rounded-md border border-gray-200 flex justify-center items-center hover:bg-gray-200" }, "+")), /*#__PURE__*/


      React.createElement("p", { id: "timer-label" }, this.state.timerType), /*#__PURE__*/
      React.createElement("p", { id: "time-left", className: "flex justify-center items-center bg-gray-200 h-6 w-full mb-2 rounded-md" }, this.parseTimer()), /*#__PURE__*/
      React.createElement("button", { id: "start_stop", onClick: this.toggleTimer, className: "text-xs bg-white py-2 px-4 rounded-md border border-gray-200 flex justify-center items-center hover:bg-gray-200" }, "Start/Stop"), /*#__PURE__*/
      React.createElement("button", { id: "reset", onClick: this.reset, className: "text-xs bg-white py-2 px-4 rounded-md border border-gray-200 flex justify-center items-center hover:bg-gray-200" }, "Reset")), /*#__PURE__*/

      React.createElement("audio", {
        id: "beep",
        preload: "auto",
        ref: audio => {
          this.audioBeep = audio;
        },
        src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" })));



  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById("app"));