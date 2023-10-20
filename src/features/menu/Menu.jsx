import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  //3. provide the data on the page using useLoaderData hook
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//function to fetch menu using a loader function as a rule to react router loader
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
