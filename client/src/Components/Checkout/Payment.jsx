import { useState, useEffect, Suspense } from "react";
import { AiFillEdit } from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";
import Loading from "../Other/Loading";

export default function Payment({ setStep, cart, total }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {cart.length == 0 ? (
          <Empty />
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-col sticky px-8 w-full bottom-0 lg:absolute bg-base-200 py-6 md:py-4 z-10">
              <div className="pb-6 self-end">
                <h1 className="text-2xl md:text-4xl font-bold">
                  Total: ${total.toFixed(2)}
                </h1>
              </div>
              <div className="flex">
                <button
                  className="btn btn-outline btn-info w-1/2"
                  onClick={() => setStep(1)}
                >
                  <AiFillEdit />
                  Review Order
                </button>
                <button
                  className="btn btn-outline btn-success w-1/2"
                  onClick={() => setStep(3)}
                >
                  Next
                  <GrFormNextLink />
                </button>
              </div>
            </div>
          </div>
        )}
      </Suspense>
    </>
  );
}
