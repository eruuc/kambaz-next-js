"use client";
import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import CourseNavigation from "./Navigation";
export default async function CoursesLayout({ children }: { children: ReactNode }){
  //   { children, params }: Readonly<{ children: ReactNode; params: { cid: string }; }>) {
//  const { cid } = params;
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  return (
    <div id="wd-courses">
    <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name} </h2> <hr />
    <div className="d-flex">
      <div className="d-none d-md-block">
        <CourseNavigation />
      </div>
      <div className="flex-fill">
        
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