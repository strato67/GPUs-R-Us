export default function ProfileCard({ userInfo }) {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span className="text-3xl">{userInfo.user.username}</span>
            </div>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{userInfo.user.username}</h2>
          <p>{`Joined on: ${userInfo.user.joined}`}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
}
