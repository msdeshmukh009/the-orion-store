import "./profile.css";
import { useAuth } from "../../context";

const Profile = () => {
  const {
    state: { userName, email },
    logout,
  } = useAuth();

  return (
    <main className="profile-container flex-column">
      <h2 className="text-center">User Profile</h2>

      <div className="profile">
        <div className="profile-info flex-total-center flex-column">
          <div className="avatar avatar-lg-size">
            <img
              className="responsive-img rounded-img"
              src={`https://avatars.dicebear.com/api/identicon/your-custom-seed-${userName}.svg`}
              alt="avatar"
            />
          </div>

          <div className="details flex-total-center flex-column">
            <div className="info">
              <span className="text-bold">Name</span>
              <span>{userName}</span>
            </div>

            <div className="info">
              <span className="text-bold">Email</span>
              <span>{email}</span>
            </div>
          </div>
          <div className="profile-cta">
            <button className="btn btn-primary block-btn" onClick={() => logout()}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Profile };
