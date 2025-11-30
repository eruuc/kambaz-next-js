"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a: any) => a._id === aid);
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue={assignment?.title || "A1 - ENV + HTML"} /><br /><br />
      <label htmlFor="wd-description">Description</label>
      <textarea id="wd-description">
        {assignment?.description || "The assignment is available online Submit a link to the landing page of"}
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={assignment?.points || 100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Points</option>
                <option>Letter Grade</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>Offline</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label>Online Entry Options</label>
            </td>
            <td>
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label><br />
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label><br />
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Upload</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" defaultValue={assignment?.dueDate || "2024-12-31"} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" defaultValue={assignment?.availableFrom || "2024-01-01"} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input type="date" id="wd-available-until" defaultValue={assignment?.availableUntil || "2024-12-31"} />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
      <Link href={`/Courses/${cid}/Assignments`} className="btn btn-primary">Save</Link>
    </div>
  );
}

