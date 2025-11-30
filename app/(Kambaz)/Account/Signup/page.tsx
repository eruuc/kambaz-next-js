"use client";

import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const signup = async () => {
    setError("");
    if (!user.username || !user.password) {
      setError("Username and password are required");
      return;
    }
    setLoading(true);
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      router.push("/Account/Profile");
    } catch (error: any) {
      console.error(error);
      setError(error.response?.data?.message || error.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      {error && (
        <div className="alert alert-danger mb-2" role="alert">
          {error}
        </div>
      )}
      <FormControl
        value={user.username || ""}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username mb-2"
        placeholder="username"
      />
      <FormControl
        value={user.password || ""}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="wd-password mb-2"
        placeholder="password"
        type="password"
      />
      <Button 
        onClick={signup} 
        variant="primary" 
        className="wd-signup-btn mb-2 w-100"
        type="button"
        disabled={loading}
      >
        {loading ? "Signing up..." : "Sign up"}
      </Button>
      <br />
      <Link href="/Account/Signin" className="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
