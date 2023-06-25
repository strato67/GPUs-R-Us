export default function ProfileCard({ userInfo }) {
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
      <div className="card bg-base-100 shadow-xl py-5 min-w-fit w-72 md:w-96">
        <figure>
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
              <span className="text-6xl select-none">
                {userInfo.user.username.charAt(0)}
              </span>
            </div>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="text-center text-5xl font-bold">
            {userInfo.user.username}
          </h2>
          <p className="text-lg text-center">{`Joined on: ${timeFormat(
            userInfo.user.joined
          )}`}</p>
        </div>
      </div>
    </>
  );
}
