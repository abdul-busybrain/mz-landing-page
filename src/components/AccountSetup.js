import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";

function AccountSetup() {
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = location.state?.userInfo;

  // State for full name and profile image
  const [fullName, setFullName] = useState(userInfo?.displayName || "");
  const [profileImage, setProfileImage] = useState(null);

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    // Prepare user data to pass to Dashboard
    const userData = {
      email: userInfo?.email,
      displayName: fullName,
      profileImage: profileImage || userInfo?.photoUrl,
    };

    // Navigate to Dashboard with user data
    navigate("/dashboard", { state: { userData } });
  };

  return (
    <section className="mt-28 pl-16">
      <div>
        <h1 className="font-bold text-xl">Welcome to Mozo!</h1>
        <p>You're registering as {userInfo?.email}</p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            {/* Image upload */}
            <div className="flex flex-col">
              <label className="mb-2">Profile picture</label>
              <input
                type="file"
                name="image"
                accept="image/png, image/gif, image/jpeg"
                onChange={handleImageChange}
                className="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold"
              />
              {profileImage && (
                <img
                  src={profileImage}
                  alt="Profile preview"
                  className="mt-2 w-24 h-24 rounded-full object-cover"
                />
              )}
            </div>

            {/* Full name input */}
            <div>
              <label className="block mb-2">
                What's your full name: <br />
              </label>
              <input
                type="text"
                defaultValue={userInfo?.displayName || ""}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="border rounded px-2 py-1 w-full"
              />
            </div>
          </div>
          <Button onClick={handleSubmit} className="w-28">
            Continue
          </Button>

          <div className="text-sm text-gray-600">
            You're signing up as {userInfo?.email}.<br />
            Wrong account? Change account.
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountSetup;
