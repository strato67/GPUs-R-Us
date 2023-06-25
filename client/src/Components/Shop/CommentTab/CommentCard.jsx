import { Rating } from "primereact/rating";
import { Link } from "react-router-dom";

export default function CommentCard({ comment }) {
  const timeFormat = (time) => {
    const d = new Date(time);
    if (isNaN(d)) {
      return date;
    }

    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className=" grid grid-cols-2 grid-rows-2 gap-4  px-2">
        <div className="flex h-16 ">
          <Link
            className="avatar placeholder  w-24"
            to={`/profile/${comment.name}`}
          >
            <div className="bg-neutral-focus text-neutral-content rounded-full w-16 ">
              <span className="text-3xl select-none">
                {comment.name.charAt(0)}
              </span>
            </div>
          </Link>{" "}
          <div className="flex flex-col self-center pl-2">
            <p className="text-2xl">{comment.name}</p>
            <p className="text-sm w-max">{timeFormat(comment.postDate)}</p>
          </div>
          <div className="w-1 -rotate-90 pl-12 relative">
            <Rating
              value={comment.rating}
              readOnly
              cancel={false}
              className="w-1 rotate-270 absolute left-7 bottom-3  md:top-0"
            />
            <p className="rotate-90 pr-3  absolute left-5 top-16 md:top-20">{`(${comment.rating})`}</p>
          </div>
        </div>

        <div className="self-center "></div>
        <div className="col-span-2 ">{comment.comment}</div>
      </div>

      <div className="divider"></div>
    </>
  );
}
