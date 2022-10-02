import Profile from "./Profile/Profile";
import user from "../user.json"
const {username, tag, location, avatar, stats:{followers, views, likes}} = user;
export const App = () => {
  return (
    <Profile 
    username = {username}
    tag = {tag}
    avatar = {avatar}
    location = {location}
    followers = {followers}
    views = {views}
    likes = {likes}/>
  );
};
