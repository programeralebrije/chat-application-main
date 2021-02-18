import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';



const App = () => {

    return (
        <ChatEngine
          height="100vh"
          projectID= "7c32c9bf-f078-4deb-a39b-e77b8214f903"
          userName=  "Ruben"
          userSecret= "sancho"
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          />
    )
   }  // infinite scroll, logout, more customizations...

export default App;