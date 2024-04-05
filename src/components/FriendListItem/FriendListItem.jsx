import css from "./FriendListItem.module.css"
import clsx from "clsx";

export default function FriendListItem({
    friends: {
        id,
        avatar,
        name,
        isOnline
    },
}) {
    return (
        <div>
            <img className={css.friendsImg} src={avatar} alt="Avatar" width="48" />
			<p className={css.friendsName}>{name}</p>
			<p className={clsx(css.friendsStat, isOnline ? css.isOnline: css.isOfline)}>{isOnline ? "online" : "ofline"}</p>
        </div>
    );
}