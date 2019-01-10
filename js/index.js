var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));_this.






































































    playSound = function (e) {
      document.getElementById(e).currentTime = 0;
      document.getElementById(e).play();
    };_this.

    handleKeyDown = function (e) {
      var ourKey = _this.state.keyPad.find(function (x) {return x.keyCode === e.keyCode;});
      if (ourKey != null) {
        _this.playSound(String.fromCharCode(e.keyCode));
        _this.setState({ display: ourKey.audioID });
      }
    };_this.

    handleClick = function (e) {
      console.log(e);
      _this.playSound(e.target.innerText);
      _this.setState({ display: e.target.id });
    };_this.state = { keyPad: [{ keyCode: 81, key: "Q", audioID: "Sound Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }, { keyCode: 87, key: "W", audioID: "Sound W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }, { keyCode: 69, key: "E", audioID: "Sound E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }, { keyCode: 65, key: "A", audioID: "Sound A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }, { keyCode: 83, key: "S", audioID: "Sound S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }, { keyCode: 68, key: "D", audioID: "Sound D", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }, { keyCode: 90, key: "Z", audioID: "Sound Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }, { keyCode: 88, key: "X", audioID: "Sound X", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }, { keyCode: 67, key: "C", audioID: "Sound C", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }], display: "Press Key or click the button" };return _this;}_createClass(App, [{ key: "componentDidMount", value: function componentDidMount()

    {
      document.addEventListener("keydown", this.handleKeyDown);
    } }, { key: "render", value: function render()

    {var _this2 = this;
      return (
        React.createElement("div", null,
          React.createElement("h1", null, "The most simple Drum Machine on earth"),
          React.createElement("div", { className: "drum-machine row justify-content-center", id: "drum-machine" },
            React.createElement("div", { className: "border border-success keyPad " },
              this.state.keyPad.map(function (x) {return (
                  React.createElement("button", { className: "btn btn-success drum-pad col-md-4 border border-dark", key: x.keyCode, id: x.audioID, onClick: _this2.handleClick },
                    x.key,
                    React.createElement("audio", { className: "clip", id: x.key, src: x.src })));}))),





          React.createElement("div", { className: "justify-content-center row" },
            React.createElement("div", null,
              React.createElement("p", { id: "display", className: "settings-display" },
                this.state.display))),



          React.createElement("footer", null,
            React.createElement("p", { className: "text-center" }, "Written by ", React.createElement("a", { href: "https://github.com/londonjob", target: "_blank" }, "londonjob")))));



    } }]);return App;}(React.Component);



ReactDOM.render(React.createElement(App, null), document.getElementById('root'));