import Avatar from "../../assets/Profile_avatar.png";
import Address from "../address/Address";
function Profile() {
  const LunoraUserName = localStorage.getItem("LunoraUserName");
  const LunoraUserEmail = localStorage.getItem("LunoraUserEmail");

  return (
    <div className=" mt-36 w-10/12 mx-auto flex gap-6">
      <div className="flex flex-col items-center md:w-1/4">
        <img
          src={Avatar}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-stone-50"
        />
        <h2 className="text-3xl font-bold mb-4">{LunoraUserName}</h2>

        <ul className="font-medium">
          <li className=" px-2 py-1 rounded cursor-pointer">Orders</li>
          <li className=" px-2 py-1 rounded cursor-pointer">Order History</li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 bg-slate-50 rounded-lg shadow p-4">
            <h3 className="text-gray-600 font-medium mb-1">User name</h3>
            <p>{LunoraUserName}</p>
          </div>

          <div className="flex-1 bg-slate-50 rounded-lg shadow p-4">
            <h3 className="text-gray-600 font-medium mb-1">User email</h3>
            <p>{LunoraUserEmail}</p>
          </div>

          <div className="flex-1 bg-slate-50 rounded-lg shadow p-4 ">
            <h3 className="text-gray-600 font-medium mb-2">Change password</h3>

            <input
              type="password"
              placeholder="CurrentPassword"
              className="w-full px-3 py-2 border border-stone-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-stone-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-stone-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400"
            />

            <button className="mt-2 w-full bg-slate-500 hover:bg-stone-600 text-white py-2 rounded-md font-semibold transition-colors">
              Update Password
            </button>
          </div>
        </div>
        <Address />
      </div>
    </div>
  );
}

export default Profile;
