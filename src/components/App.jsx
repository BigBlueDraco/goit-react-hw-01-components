import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/FriendList/FriendList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";
import user from "../user.json"
import statisticsData from "../data.json"
import friends from "../friends.json"
import transactionData from "../transactions.json"
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
    
    <FriendList
    friends={friends}/>

    <TransactionHistory transactions = {transactionData}/>
    </>

  );
};
