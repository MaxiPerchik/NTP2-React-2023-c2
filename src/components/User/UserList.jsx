import "./User.css";
import User from "./User";
import users from "./MocUsers.js";

export default function UserList(props){
    return (
       <ul className="users-list">
            {users.map(user => {
                return (
                    <User 
                        UserName = {user["Display name"]}
                        Title = {user.Title}
                        Picture = {user["Display name"] + ".jpg"}                        
                    />
                );
            })}
       </ul> 
    );
}