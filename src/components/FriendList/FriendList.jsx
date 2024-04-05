import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

export default function FriendList ({
	friends}) {
	return (
		<ul className={css.friendsList}>{
			friends.map((friends) => (
			<li key={friends.id} className={css.friendsItem}>
				<FriendListItem friends={friends} />
			</li>))}
		</ul>
	);
}