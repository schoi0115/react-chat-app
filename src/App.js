import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed'
const App = () => {

  return (
    <ChatEngine
      height="100vh"
      projectID="0277c073-9e1d-4916-809d-e8b32b69a78c"
      userName="shawnc"
      userSecret="147852"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App