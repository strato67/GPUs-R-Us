export default function CommentSection() {
  return (
    <>
      <div className="flex flex-col">
        <div className=" grid grid-cols-2 grid-rows-2 gap-4 ">
          <div className="flex h-16">
            <div className="avatar placeholder  w-24">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-16 ">
                <span className="text-3xl">K</span>
              </div>
            </div>{" "}
            <p className="text-2xl self-center pl-6">Name</p>
          </div>

          <div className="self-center "></div>
          <div className="col-span-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            nulla hic explicabo non quos aut placeat incidunt. Rerum nam
            voluptatibus tempora quisquam temporibus rem
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
}
