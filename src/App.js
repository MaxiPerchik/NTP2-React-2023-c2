import UserList from "./components/User/UserList";
import './App.css';

//TODO: Lo ideal es que cuando utilice el componente UserList
//  Le pase como props el array de usuarios <UserList Users=array />

function App() {
  return (
    <div>
      <UserList />
    </div>
  );
}

export default App;
