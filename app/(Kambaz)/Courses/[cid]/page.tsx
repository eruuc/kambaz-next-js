import { redirect } from "next/navigation";


export default function CoursesPage({ params }: { params: { cid: string }; }) {
 const { cid } = params;
 redirect(`/Courses/1001/Home`);
}
