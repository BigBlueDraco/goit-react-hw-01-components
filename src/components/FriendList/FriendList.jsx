import PropTypes from 'prop-types';
import css from "./friend-list.module.css"
import FriendListItem from 'components/FriendListItem/FriendListItem';
export default function FriendList({friends}){
    return(
        <ul className={css.friendList}>
            {friends.map(({avatar, name, isOnline, id})=>(
                <FriendListItem key={id}
                avatar={avatar}
                name = {name}
                isOnline = {isOnline}/>
            ))}
        </ul>
    )
}
FriendList.protoTypes  ={
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}