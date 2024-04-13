const { useState } = React;

// https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json
const quotes = [
{ "quote": "Life isn’t about getting and having, it’s about giving and being.", "author": "Kevin Kruse" },
{ "quote": "Whatever the mind of man can conceive and believe, it can achieve.", "author": "Napoleon Hill" },
{ "quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein" },
{ "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "author": "Robert Frost" },
{ "quote": "I attribute my success to this: I never gave or took any excuse.", "author": "Florence Nightingale" },
{ "quote": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky" },
{ "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "author": "Michael Jordan" },
{ "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.", "author": "Amelia Earhart" },
{ "quote": "Every strike brings me closer to the next home run.", "author": "Babe Ruth" },
{ "quote": "Definiteness of purpose is the starting point of all achievement.", "author": "W. Clement Stone" },
{ "quote": "We must balance conspicuous consumption with conscious capitalism.", "author": "Kevin Kruse" },
{ "quote": "Life is what happens to you while you’re busy making other plans.", "author": "John Lennon" }];

const numOfQuotes = quotes.length;


class App extends React.Component {
  constructor(props) {
    super(props);
    const newIndex = Math.floor(Math.random() * numOfQuotes);
    this.state = {
      quoteIndex: newIndex };

    this.newQuote = this.newQuote.bind(this);
  }
  newQuote() {
    const newIndex = Math.floor(Math.random() * numOfQuotes);
    this.setState({
      quoteIndex: newIndex });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "min-h-screen flex justify-center items-center add-background" }, /*#__PURE__*/
      React.createElement("div", { id: "quote-box", className: "flex-col flex items-center justify-center rounded-xl p-8 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-200" }, /*#__PURE__*/
      React.createElement("p", { id: "text", className: "text-white max-w-md text-lg" }, quotes[this.state.quoteIndex]['quote']), /*#__PURE__*/
      React.createElement("p", { id: "author", className: " my-2 text-white " },

      quotes[this.state.quoteIndex]['author']), /*#__PURE__*/
      React.createElement("div", { className: "flex row place-content-between w-full" }, /*#__PURE__*/
      React.createElement("button", { id: "new-quote", onClick: this.newQuote, className: " bg-opacity-0 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-lg border border-gray-200 " }, "New Quote"), /*#__PURE__*/


      React.createElement("a", { id: "tweet-quote", href: `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quotes[this.state.quoteIndex]['quote']}-${quotes[this.state.quoteIndex]['author']}`, className: " bg-opacity-0 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-lg border border-gray-200 " }, "Tweet")))));






  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById("app"));