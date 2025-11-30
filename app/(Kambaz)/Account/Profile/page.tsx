"use client";

import Link from "next/link";
import { FormControl, FormLabel, FormSelect, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  useEffect(() => {
    if (currentUser) {
      setProfile(currentUser);
    }
  }, [currentUser]);

  const updateProfile = async () => {
    try {
      const updatedProfile = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedProfile));
    } catch (error) {
      console.error(error);
    }
  };

  const signout = async () => {
    try {
      await client.signout();
      dispatch(setCurrentUser(null));
      router.push("/Account/Signin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <>
          <FormLabel>Username</FormLabel>
          <FormControl
            value={profile.username || ""}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            placeholder="username"
            className="wd-username mb-2"
          />
          <br />
          <FormLabel>Password</FormLabel>
          <FormControl
            value={profile.password || ""}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            placeholder="password"
            type="password"
            className="wd-password mb-2"
          />
          <br />
          <FormLabel>First Name</FormLabel>
          <FormControl
            value={profile.firstName || ""}
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            placeholder="First Name"
            id="wd-firstname"
            className="mb-2"
          />
          <br />
          <FormLabel>Last Name</FormLabel>
          <FormControl
            value={profile.lastName || ""}
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            placeholder="Last Name"
            id="wd-lastname"
            className="mb-2"
          />
          <br />
          <div>
            <button onClick={updateProfile} className="btn btn-primary w-100 mb-2">
              Update
            </button>
            <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
              Sign out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
