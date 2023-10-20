// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

import OrderItem from "./OrderItem";
import { useEffect } from "react";
import UpdateOrder from "../order/UpdateOrder";
function Order() {
  const order = useLoaderData();

  //useFetch hook: is used for advance route management whereby data can be fetched from a component to another without user necessarily moving to the component.
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu"); //to fetch data from menu component
    },
    [fetcher],
  );

  console.log(fetcher.data);

  // Everyone can search for all orders, so for privacy reasons we're gonna  exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order ID: #{id} </h2>

        <div className="space-x-2">
          <span className="space-6 font-semibold"> Status:</span>
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm font-medium text-stone-600">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher.data?.find((el) => el.id === item.pizzaId)?.ingredients ??
              []
            }
          />
        ))}
      </ul>
      <div className="flex items-center justify-between space-y-2 bg-stone-200 px-6 py-5">
        <div>
          <p className="text-sm font-medium text-stone-600">
            Price pizza: {formatCurrency(orderPrice)}
          </p>
          {priority && (
            <p className="text-sm font-medium text-stone-600">
              Price priority: {formatCurrency(priorityPrice)}
            </p>
          )}
          <p className="font-bold">
            To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
          </p>
        </div>

        <div> {!priority && <UpdateOrder order={order} />}</div>
      </div>
    </div>
  );
}

//function to fetch order using a loader function as a rule to react router loader with param to pick the order id from url
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
