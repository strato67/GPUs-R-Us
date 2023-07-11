import Empty from "./Empty";
import CartCard from "./CartCard";

export default function Cart() {
  return (
    <>
      {false && <Empty />}
      <div className="flex flex-col bg-base-200 py-8 justify-center gap-6 px-8">
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
    </>
  );
}
