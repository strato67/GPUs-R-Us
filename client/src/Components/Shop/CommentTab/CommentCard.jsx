export default function CommentCard({ comment }) {
  return (
    <>
      <div className=" grid grid-cols-2 grid-rows-2 gap-4">
        <div className="flex h-16">
          <div className="avatar placeholder  w-24">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-16 ">
              <span className="text-3xl">K</span>
            </div>
          </div>{" "}
          <div className="flex flex-col self-center pl-6">
          <p className="text-2xl">{comment.name}</p>
          <p className="text-sm">{comment.postDate}</p>
          </div>

        </div>

        <div className="self-center "></div>
        <div className="col-span-2 ">
          {comment.comment}
        </div>
      </div>

      <div className="divider"></div>
    </>
  );
}
