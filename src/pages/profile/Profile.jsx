import { Link } from "react-router-dom";
import Avatar from "../../assets/user (2).png";
import EditProfile from "./EditProfile";
import EditPassword from "./EditPassword"
function Profile() {
  const LunoraUserName = localStorage.getItem("LunoraUserName");
  const LunoraUserEmail = localStorage.getItem("LunoraUserEmail");

  return (
    <div className="mt-48 w-10/12 mx-auto flex flex-col md:flex-row gap-6">
      {/* Left Side */}
      <aside className="flex flex-col items-center md:w-1/4 bg-white rounded-2xl shadow-lg p-6">
        <img
          src={Avatar}
          alt="Profile"
          className="w-44 h-44 rounded-full object-cover mb-4 border-4 border-stone-50"
        />
        <h2 className="text-2xl font-bold mb-2">{LunoraUserName}</h2>
        <p className="text-gray-600">{LunoraUserEmail}</p>

        <nav className="mt-6 space-y-3 w-full text-center">
          <ul>
            <li className="py-2">
              <Link
                to="/address"
                className="text-md font-semibold hover:underline block"
              >
                Manage Address
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/userOrder"
                className="text-md font-semibold hover:underline block"
              >
                My Orders
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Right Side Forms */}
      <main className="flex-1 grid gap-6 md:grid-cols-2">
        {/* Edit Profile Card */}
       <EditProfile />

        {/* Change Password Card */}
        <EditPassword />
      </main>
    </div>
  );
}

export default Profile;
