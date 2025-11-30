"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((assignment: any) => assignment.course === cid);
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        {assignments.map((assignment: any) => (
          <li key={assignment._id} className="wd-assignment-list-item">
            <Link href={`/Courses/${cid}/Assignments/${assignment._id}`}
               className="wd-assignment-link" >
              {assignment.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

