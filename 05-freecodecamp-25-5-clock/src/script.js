class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerValue: 1500,
      timerStarted: false,
      interval: 0,
      timerType: 'Session'
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.reset = this.reset.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.parseTimer = this.parseTimer.bind(this);
  }
  toggleTimer = () => {
    if (!this.state.timerStarted) {
      this.setState({
        timerStarted: true,
        interval: setInterval(() => {
          this.updateTimer()
        }, 1000)
      });
    } else {
      clearInterval(this.state.interval);
      this.setState({ timerStarted: false });
    }
  }
  updateTimer = () => {
    const newValue = this.state.timerValue - 1;
    if (newValue == -1) {
      document.getElementById('beep').play();
      if (this.state.timerType == 'Session') {
        this.calculateAndSetNewTimer(this.state.breakLength);
        this.setState({ timerType: 'Break'});
      } else {
        this.calculateAndSetNewTimer(this.state.sessionLength);
        this.setState({ timerType: 'Session'});
      }
      
    } else {
      this.setState({ timerValue: newValue });
    }
  }
  reset = () => {
    if (this.state.timerStarted) {
      clearInterval(this.state.interval);
    }
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timerValue: 1500,
      timerStarted: false,
      interval: 0,
      timerType: 'Session'
    })
    var audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  }
  calculateAndSetNewTimer = (newValue) => {
    const timerValue = newValue * 60;
    this.setState({ timerValue: timerValue });
  }
  sessionDecrement = () => {
    if (!this.state.timerStarted && this.state.sessionLength > 1) {
      const newSessionLength = this.state.sessionLength - 1;
      this.setState({ sessionLength: newSessionLength });
      this.calculateAndSetNewTimer(newSessionLength);
    }
  }
  sessionIncrement = () => {
    if (!this.state.timerStarted && this.state.sessionLength < 60) {
      const newSessionLength = this.state.sessionLength + 1;
      this.setState({ sessionLength: newSessionLength });
      this.calculateAndSetNewTimer(newSessionLength);
    }
  }
  breakDecrement = () => {
    if (!this.state.timerStarted && this.state.breakLength > 1) {
      const newLength = this.state.breakLength - 1;
      this.setState({ breakLength: newLength });
    }
  }
  breakIncrement = () => {
    if (!this.state.timerStarted && this.state.breakLength < 60) {
      const newLength = this.state.breakLength + 1;
      this.setState({ breakLength: newLength });
    }
  }
  parseTimer = () => {
    var minutes = Math.floor(this.state.timerValue / 60);
    var seconds = this.state.timerValue - minutes * 60;
    if (minutes < 10) {
      minutes = '0' + minutes.toString()
    }
    if (seconds < 10) {
      seconds = '0' + seconds.toString()
    }
    return `${minutes}:${seconds}`
  }

  render() {
    return (
      <div className='min-h-screen flex justify-center items-center flex-col bg-[#bbbffe]'>
        <h1 className='mb-8 font-extrabold text-3xl text-center leading-loose'><span className="bg-[#7a1a85] inline-block transform -rotate-3 text-white px-4 py-1 leading-8 border-black border-2 shadow-[0.25rem_0.25rem_0rem_0_rgb(0,0,0)]">Neo-Brutalism</span> Clock <br /> with <span className="bg-[#8f58fc] inline-block transform rotate-2 text-white px-4 py-1 leading-8 border-black border-2 shadow-[0.25rem_0.25rem_0rem_0_rgb(0,0,0)]">TailwindCSS</span></h1>
        
        <div className='gap-2 bg-white border-black border-2 shadow-[0.25rem_0.25rem_0rem_0_rgb(0,0,0)] '>
          <div className='bg-[#571b57] w-full pt-4 pl-2 pb-2'>
            <h1 className='text-lg font-bold text-white'>Session Timer</h1>
          </div>
          
          <div className='p-8 grid grid-cols-2 gap-4'>
            <div className='w-32'>
              <h2 id="break-label" className='text-xs font-bold'>Break Length</h2>
              <p id="break-length" className='flex justify-center items-center bg-white h-6 w-full mb-4 border-black border-2 shadow-[0.125rem_0.125rem_0rem_0_rgb(0,0,0)]'>{this.state.breakLength}</p>
              
              <div className='flex justify-center gap-2'>
                <button id="break-decrement" onClick={this.breakDecrement} className="bg-black">
                  <span className="block -translate-x-1 -translate-y-1 border-2 border-black bg-yellow-500 py-1 w-7 hover:-translate-y-1.5 active:translate-x-0 active:translate-y-0 transition-all text-xs font-bold"> - </span>
                </button>

                <button id="break-increment" onClick={this.breakIncrement}className="bg-black">
                  <span className="block -translate-x-1 -translate-y-1 border-2 border-black bg-yellow-500 py-1 w-7 hover:-translate-y-1.5 active:translate-x-0 active:translate-y-0 transition-all text-xs font-bold"> + </span>
                </button>
              </div>
            </div>
            
          
            <div>
              <h2 id="session-label" className='text-xs font-bold'>Session Length</h2>
              <p id="session-length" className='flex justify-center items-center bg-white h-6 w-full mb-4 border-black border-2 shadow-[0.125rem_0.125rem_0rem_0_rgb(0,0,0)]'>{this.state.sessionLength}</p>
              
              <div className='flex justify-center gap-2'>
                <button id="session-decrement" onClick={this.sessionDecrement} className="bg-black">
                  <span className="block -translate-x-1 -translate-y-1 border-2 border-black bg-yellow-500 py-1 w-7 hover:-translate-y-1.5 active:translate-x-0 active:translate-y-0 transition-all text-xs font-bold"> - </span>
                </button>

                <button id="session-increment" onClick={this.sessionIncrement}className="bg-black">
                  <span className="block -translate-x-1 -translate-y-1 border-2 border-black bg-yellow-500 py-1 w-7 hover:-translate-y-1.5 active:translate-x-0 active:translate-y-0 transition-all text-xs font-bold"> + </span>
                </button>
              </div>
            </div>
          
            
            <div className='col-span-2'>
              <p id="timer-label" className='text-xs font-bold'>{this.state.timerType}</p>
              <p id="time-left" className='flex justify-center items-center bg-white h-6 w-full mb-4 border-black border-2 shadow-[0.125rem_0.125rem_0rem_0_rgb(0,0,0)]'>{this.parseTimer()}</p>
              
              <div className='flex justify-center gap-4'>
                <button id="start_stop" onClick={this.toggleTimer} className="bg-black">
                  <span className="block -translate-x-1 -translate-y-1 border-2 border-black bg-yellow-500 py-1 px-4 hover:-translate-y-1.5 active:translate-x-0 active:translate-y-0 transition-all text-xs font-bold"> Start/Stop </span>
                </button>

                <button id="reset" onClick={this.reset} className="bg-black">
                  <span className="block -translate-x-1 -translate-y-1 border-2 border-black bg-yellow-500 py-1 px-4 hover:-translate-y-1.5 active:translate-x-0 active:translate-y-0 transition-all text-xs font-bold"> Reset </span>
                </button>
              </div>
            </div>
          
          
          </div>
          
        </div>
        <audio
          id='beep'
          preload='auto'
          ref={(audio) => {
            this.audioBeep = audio;
          }}
          src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById("app")
)