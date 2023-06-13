export default function CommentSection() {
  return (
    <>
      <div className="flex flex-col">
        <div className=" grid grid-rows-3 grid-flow-col gap-4">
          <div className="avatar placeholder row-span-3">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
              <span className="text-3xl">K</span>
            </div>
          </div>{" "}
        </div>
        <div className="col-span-2"><p>Name</p></div>
        <div class="row-span-2 col-span-2 ">comment</div>
      </div>
    </>
  );
}
