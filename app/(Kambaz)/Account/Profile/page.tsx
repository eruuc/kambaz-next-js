import Link from "next/link";
import { FormControl, FormLabel, FormSelect, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormLabel>Username</FormLabel>
      <FormControl defaultValue="alice" placeholder="username" className="wd-username mb-2" />
      <br />
      <FormLabel>Password</FormLabel>
      <FormControl defaultValue="123" placeholder="password" type="password"
                   className="wd-password mb-2" />
      <br />
      <FormLabel>First Name</FormLabel>
      <FormControl defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="mb-2" />
      <br />
      <FormLabel>Last Name</FormLabel>
      <FormControl defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="mb-2" />
      <br />
      <FormLabel>Date of Birth</FormLabel>
      <FormControl defaultValue="2000-01-01" type="date" id="wd-dob" className="mb-2" />
      <br />
      <FormLabel>Email</FormLabel>
      <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" className="mb-2" />
      <br />
      <FormLabel>Role</FormLabel>
      <FormSelect defaultValue="FACULTY" id="wd-role" className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormSelect>
      <br />
      <Link href="/Account/Signin" className="btn btn-primary">
        Sign out
      </Link>
    </div>
  );
}
