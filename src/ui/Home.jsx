import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  //read the username from its state to conditionally render form if there is a user alreay
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center">
      <h1 className="font-semiboldz sm:my16 mb-8 text-center text-xl md:text-3xl ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
