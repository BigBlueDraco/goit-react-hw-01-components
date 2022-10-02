import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import user from "../user.json"
import statisticsData from "../data.json"
const {username, tag, location, avatar, stats:{followers, views, likes}} = user;
export const App = () => {
  return (
    <>
    <Profile 
    username = {username}
    tag = {tag}
    avatar = {avatar}
    location = {location}
    followers = {followers}
    views = {views}
    likes = {likes}/>

    <Statistics
    title={"Statistics"}
    statistics={statisticsData}/>
    
    </>

  );
};
