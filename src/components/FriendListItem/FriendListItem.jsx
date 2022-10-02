import PropTypes from 'prop-types';
export default function FriendListItem({avatar, name, isOnline = false}){
    return(
    <li className="item">
        {isOnline? <span className = "online">online</span> : <span className = "offline">offline</span>}
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
    );
}

FriendListItem.protoTypes  ={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}