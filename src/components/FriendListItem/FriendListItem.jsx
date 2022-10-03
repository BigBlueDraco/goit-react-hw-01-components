import PropTypes from 'prop-types';
import css from "./friend-list-item.module.css"
export default function FriendListItem({avatar, name, isOnline = false}){
    return(
    <li className={css.item}>
        {isOnline? <span className = {`${css.online} ${css.avatarFrame}`}><img className="avatar" src={avatar} alt="User avatar" width="48" /></span>
        : <span className = {`${css.offline} ${css.avatarFrame}`}><img className="avatar" src={avatar} alt="User avatar" width="48" /></span>}
        <p className={css.name}>{name}</p>
    </li>
    );
}

FriendListItem.protoTypes  ={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}