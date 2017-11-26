export default (defaultSwitcher) => {
  let switcher = null
  return {
    displayMessage (data) {
      console.group()
      console.log(`%cdisplayMessage from state`, 'color: red')
      console.log(`%c${data}`, 'color: red')
      console.groupEnd()
    },
    sendMessage (message) {
      switcher.sendMessage(message)
    },
    setSwitcher (newSwitcher) {
      switcher = newSwitcher
    }
  }
}
