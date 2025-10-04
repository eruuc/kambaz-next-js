import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
   <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120 }}
              id="wd-kambaz-navigation">
     <ListGroupItem className="bg-black border-0 text-center" as="a"
              target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
       <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
     </ListGroupItem><br />
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none">
         <FaRegCircleUser className="fs-1 text-white" />
         <br />
         Account
       </Link>
     </ListGroupItem><br />
     <ListGroupItem className="border-0 bg-white text-center">
       <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
         <AiOutlineDashboard className="fs-1 text-danger" />
         <br />
         Dashboard
       </Link>
     </ListGroupItem>
      <Link href="/Courses" id="wd-course-link">Courses</Link><br/>
      <Link href="/Calendar" id="wd-calendar-link">Calendar</Link><br/>
      <Link href="/Inbox" id="wd-inbox-link">Inbox</Link><br/>
      <Link href="/Labs" id="wd-labs-link">Labs</Link><br/>
      </ListGroup>
    </div>

);}
