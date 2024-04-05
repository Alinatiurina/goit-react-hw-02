import css from "./Profile.module.css";

export default function Profile(
  {
    userData: {
      name,
      tag,
      location,
      avatar,
      stats,
    }
  }
){
  return (
<div className={css.container}>
  <div>
        <img
      className={css.avatar}
      src={avatar}
      alt="User avatar"
    />
    <p className={css.usernsme}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}> {location}</p>
  </div>

  <ul className={css.status}>
    <li className={css.statusList}>
      <span className={css.statusListTitle}>Followers</span>
      <span className={css.statusListInfo}>{stats.followers}</span>
    </li>
    <li className={css.statusListBorder}>
      <span className={css.statusListTitle}>Views</span>
      <span className={css.statusListInfo}>{stats.views}</span>
    </li>
    <li className={css.statusList}>
      <span className={css.statusListTitle}>Likes</span>
      <span className={css.statusListInfo}>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
}