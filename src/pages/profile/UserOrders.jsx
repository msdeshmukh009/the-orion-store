import { Order } from "../../components";
import { useOrder } from "../../context";
import { ProfileOptionsList } from "./ProfileOptionsList";

const UserOrders = () => {
  const {
    orderState: { orders },
  } = useOrder();
  return (
    <main className="profile-container flex-column">
      <h2 className="text-center">User Profile</h2>

      <div className="profile">
        <ProfileOptionsList />
        <div className="address-info flex-total-center flex-column">
          {!orders.length && <h3 className="text-center">No orders available</h3>}
          {orders.map(order => (
            <Order key={order._id} order={order} />
          ))}
        </div>
      </div>
    </main>
  );
};
export { UserOrders };
