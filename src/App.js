import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Navigationbar from "./Navigationbar";

function App() {
  return (
    <div className="app">
      <Navigationbar />
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
