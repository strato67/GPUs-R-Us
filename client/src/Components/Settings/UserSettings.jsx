import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorFormMessage from "../Other/ErrorFormMessage";
import SuccessNotification from "../Other/Success";
import Loading from "../Other/Loading";
import useAuthContext from "../../Hooks/useAuthContext";
import useSettings from "../../Hooks/useSettings";

export default function UserSettings() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { error, emailSuccess, changeEmail } = useSettings();
  const [userInfo, setUserInfo] = useState(null);
  const [newEmail, setNewEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleEmailChange = async (e) => {
    const nextState = {
      ...newEmail,
      username: user.username,
      [e.target.name]: e.target.value,
    };
    setNewEmail(nextState);
  };

  const emailSubmit = async (e) => {
    e.preventDefault();
    await changeEmail(newEmail);
  };

  useEffect(() => {
    if (user) {
      (async () => {
        const response = await fetch(`/api/user/${user.username}`);
        const data = await response.json();
        if (!response.ok) {
          setLoading(false);
          navigate("/404");
        }
        setUserInfo(data.user);
        setLoading(false);
      })();
    }
  }, [user]);

  return (
    <>
      {emailSuccess && (
        <SuccessNotification message="Email successfully updated!" />
      )}
      {loading && <Loading />}
      {user && userInfo && !loading && (
        <>
          <div className="flex flex-col min-h-screen bg-base-200 items-center py-16 ">
            <div className="card flex-shrink w-full md:max-w-xl max-w-sm shadow-2xl bg-base-100 py-6">
              <h1 className="card-title text-4xl font-bold self-center">
                User Settings
              </h1>
              <div className="card-body">
                <details className="collapse bg-base-200 collapse-arrow shadow-xl">
                  <summary className="collapse-title text-xl font-bold bg-primary text-primary-content">
                    Change Email
                  </summary>
                  <div className="collapse-content py-4">
                    <div className="form-control pb-4">
                      <label className="label">
                        <span className="label-text">Current Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="current email"
                        className="input input-bordered"
                        name="currentEmail"
                        value={userInfo.email}
                        readOnly={true}
                      />
                    </div>
                    <form onSubmit={emailSubmit} method="post">
                      <div className="form-control pb-2">
                        <label className="label">
                          <span className="label-text">New Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="enter new email"
                          className="input input-bordered"
                          required={true}
                          name="newEmail"
                          onChange={handleEmailChange}
                        />
                      </div>
                      {error && <ErrorFormMessage message={error} />}
                      <div className="form-control mt-6 pb-2">
                        <button
                          className="btn btn-outline btn-secondary"
                          disabled={false}
                        >
                          Update Email
                        </button>
                      </div>
                    </form>
                  </div>
                </details>
                <details className="collapse bg-base-200 collapse-arrow shadow-xl">
                  <summary className="collapse-title text-xl font-bold bg-primary text-primary-content">
                    Change Password
                  </summary>
                  <div className="collapse-content">
                    <form onSubmit={console.log("")} method="post">
                      <div className="form-control py-2">
                        <label className="label">
                          <span className="label-text">Current Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="enter current password"
                          className="input input-bordered"
                          required={true}
                          name="currentPass"
                          onChange={console.log("")}
                        />
                      </div>
                      <div className="form-control py-2">
                        <label className="label">
                          <span className="label-text">New Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="enter new password"
                          className="input input-bordered"
                          required={true}
                          name="newPass"
                          onChange={console.log("")}
                        />
                      </div>
                      <div className="form-control py-2">
                        <label className="label">
                          <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="confirm password"
                          className="input input-bordered"
                          required={true}
                          name="confirmPass"
                          onChange={console.log("")}
                        />
                      </div>
                      <div className="form-control mt-6 pb-2">
                        <button
                          className="btn btn-outline btn-secondary"
                          disabled={false}
                        >
                          Update Password
                        </button>
                      </div>
                    </form>
                  </div>
                </details>
                <details className="collapse bg-base-200 collapse-arrow shadow-xl">
                  <summary className="collapse-title text-xl font-bold bg-primary text-primary-content">
                    Delete Account
                  </summary>
                  <div className="collapse-content py-6">
                    <p className="text-md">
                      If you proceed, your account will be permanently deleted
                      and all unfulfilled orders will be cancelled. Please
                      confirm your decision.
                    </p>
                    <div className="form-control mt-6 pb-2">
                      <button
                        className="btn btn-outline btn-error"
                        onClick={() => window.confirmAccountDelete.showModal()}
                      >
                        Delete Account
                      </button>
                    </div>
                  </div>
                </details>
                <dialog
                  id="confirmAccountDelete"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Delete Account</h3>
                    <p className="py-4">
                      Are you sure you want to delete your account?
                    </p>
                    <div className="flex justify-center gap-3">
                      <button
                        className="btn w-1/2 btn-outline btn-error"
                        onClick={() => {}}
                      >
                        Delete Account
                      </button>
                      <button className="btn w-1/2">Cancel</button>
                    </div>
                  </form>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
