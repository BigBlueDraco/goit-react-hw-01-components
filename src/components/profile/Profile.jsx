import PropTypes from 'prop-types';
export default function Profile({username, tag, location, avatar, followers, views, likes}){
   return (
    <div className="profile">
    <div className="description">
        <img
        src={avatar||"https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
        alt="User avatar"
        className="avatar"
        width={200}
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
    </div>

    <ul className="stats">
        <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
        </li>
        <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
        </li>
        <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
        </li>
        </ul>
    </div>
   )  
}

Profile.protoTypes ={
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired, 
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired, 
    likes: PropTypes.number.isRequired,
}
