import Vue from 'vue'
import App from './App'
import BotSwitcher from './BotSwitcher';
import ChatSwitcher from './ChatSwitcher';
import State from './state';

const apiClient = {
  sendQuery(uq) {
    const timeout = 50 + Math.random() * 2000;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({answer: `This is the answer for the query ${uq}`});
      }, timeout)
    })
  }
}

const chatAdapter = (dispatch) => {
  const adapter = {
    sendMessage(message) {
      const timeout = 50 + Math.random() * 2000;
      setTimeout(() => {
        console.log(`%csendMessage from chatAdapter`, 'color: blue');
        console.group();
        console.log(`%cThe agent has received: ${message}`, 'color: blue')
        console.groupEnd();
      }, timeout)
    },
    simulateAgentMessage(message) {
      dispatch({type: 'message', message});
    }
  }
  global.simulateAgentMessage = adapter.simulateAgentMessage;
  return adapter;
}

const state = State();
const botSwitcher = new BotSwitcher(state.displayMessage, apiClient);
const chatSwitcher = new ChatSwitcher(state.displayMessage, chatAdapter);
state.setSwitcher(botSwitcher)
global.escalate = () => state.setSwitcher(chatSwitcher)
global.closeChat = () => state.setSwitcher(botSwitcher)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.prototype.$state = state;

const vm = new Vue({
  el: '#app',
  render: h => h(App),
  
})
