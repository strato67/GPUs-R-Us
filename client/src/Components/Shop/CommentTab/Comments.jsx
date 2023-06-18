import useAuthContext from "../../../Hooks/useAuthContext";
import CommentSection from "./CommentSection";
import NewComment from "./NewComment";
export default function Comments({ productId }) {
  return (
    <>
      <div className="card w-full bg-base-200 ">
        <NewComment />
        <div className="divider"></div>
        <CommentSection productId={productId}/>
      </div>
    </>
  );
}
