class ChatSwitcher {
  constructor (displayMessage, chatAdapter) {
    this.displayMessage = displayMessage
    this.chatAdapter = chatAdapter(this.dispatch.bind(this))
  }

  sendMessage (message) {
    this.chatAdapter.sendMessage(message);
    console.group()
    console.log(`%cSending the message to the chatAdapter...`, 'color: grey')
    console.groupEnd()
  }

  dispatch (action) {
    console.group()
    console.log(`%cA message from Agent: ${action.message}`, 'color: grey')
    console.log(action)
    this.displayMessage(action.message)
    console.groupEnd()
  }

  enable () {}
  disable () {}
}

export default ChatSwitcher
