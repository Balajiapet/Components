import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import Notifications from './Components/Notifications';
import Messages from './Components/Messages';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Profile />
      <Settings />
      <Notifications />
      <Messages />
    </div>
  );
}

export default App;