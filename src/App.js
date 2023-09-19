import UserList from "./components/User/UserList";
import './App.css';
import UserPage from "./components/User/UserPage";

//TODO: Lo ideal es que cuando utilice el componente UserList
//  Le pase como props el array de usuarios <UserList Users=array />

function App() {
  return (
    <div>
      <UserPage />
    </div>
  );
}

export default App;
