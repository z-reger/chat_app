import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';



const App = () => {
if (!localStorage.getItem('username')) return <LoginForm />;

return (
<ChatEngine
    height="100vh"
    projectID="3cd43076-730d-4b67-bd2c-1639da3d8361"
    userName="ZachReger"
    userSecret="123123"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
/>
);
};

// infinite scroll, logout, more customizations...

export default App;