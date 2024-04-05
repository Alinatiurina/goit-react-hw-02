import userData from "./userData.json";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import friends from "./friends.json";
import transactions from "./transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";


export default function App(){
  return (
    <>
        <Profile userData={userData} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
    </>
  );
};