import Profile from "./Profile";
import user from "../user.json"
export const App = () => {
  return (
    <Profile username = {user.username}
    tag = {user.tag}
    avatar = {user.avatar}
    location = {user.location}
    stats = {user.stats}/>
  );
};
