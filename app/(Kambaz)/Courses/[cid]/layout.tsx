import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import { courses } from "../../Database";
export async function CoursesLayout({ children, params }: Readonly<{ children: ReactNode; params: { cid: string }; }>) {
  const { cid } = params;
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses">
    <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name} </h2> <hr />
          <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      Course {cid} </h2> <hr />
    <div className="d-flex">
      <div className="d-none d-md-block">
        <CourseNavigation />
      </div>
      <div className="flex-fill">
        {children}
      </div></div>
  </div>
);}

//  return (
//    <div id="wd-courses">
//      <h2>Courses {cid}</h2>
//      <hr />
//      <table>
//        <tbody>
//          <tr>
//            <td valign="top" width="200"> <CourseNavigation /> </td>
//            <td valign="top" width="100%"> {children} </td>
//          </tr>
//        </tbody>
//      </table>
//    </div>
// );}
