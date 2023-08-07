import useAuthContext from "../../Hooks/useAuthContext";
import CartDiv from "./CartDiv";
import Empty from "./Empty";

export default function Cart() {
  const { user } = useAuthContext();

  return (
    <>
      <div className="flex flex-col bg-base-200 py-6 justify-center gap-6 px-8">
        {!user && <Empty />}
        {user && <CartDiv user={user} />}
      </div>
    </>
  );
}
