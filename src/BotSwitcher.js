class BotSwitcher {
  constructor (displayMessage, api) {
    this.displayMessage = displayMessage
    this.api = api
  }

  sendMessage (message) {
    console.group();
    this.api.sendQuery(message).then((data) => {
      console.log('%cWaiting the answer for the user query from KB...', 'color: green');
      console.groupEnd();
      this.displayMessage(data.answer)
    })
  }

  enable () {}
  disable () {}
}

export default BotSwitcher
