import { useSelector } from "react-redux";

function UserName() {
  //useSelctor hook to use the state varibleas from hook
  const username = useSelector((state) => state.user.username);
  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">
      <p>{username}</p>
    </div>
  );
}

export default UserName;
