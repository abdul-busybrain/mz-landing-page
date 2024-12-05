import { useLocation } from "react-router-dom";
import { Button } from "./Button";

function AccountSetup() {
  const location = useLocation();
  const userInfo = location.state?.userInfo;

  return (
    <section className="mt-28 pl-16">
      <div>
        <h1 className="font-bold text-xl">Welcome to Mozo!</h1>
        <p>You're registering as {userInfo?.email}</p>
        <div className="flex flex-col">
          <div className="flex">
            <input
              type="file"
              name="image"
              accept="image/png, image/gif, image/jpeg"
            />
            <div>
              <label>
                What's your full name: <br />
              </label>
              <input
                type="text"
                defaultValue={userInfo?.displayName || ""}
                required
                className="border"
              />
            </div>
          </div>
          <Button className="w-28">Submit</Button>

          <div>
            You're signing up as {userInfo?.email}.<br />
            Wrong account? Change account.
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountSetup;
