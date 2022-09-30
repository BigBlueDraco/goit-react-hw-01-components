import Profile from "./profile/Profile";
import user from "../user.json"
export const App = () => {
  const {username, tag, location, avatar, stats:{followers, views, likes}} = user;
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
