"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as db from "../Database";
import { v4 as uuidv4 } from "uuid";

import { Row, Col, Card, CardTitle, Button, CardText, CardBody, CardImg, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
export default function Dashboard() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => dispatch(addNewCourse(course))} > Add </button>
      </h5><hr /><br />
      <FormControl value={course.name} className="mb-2"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl value={course.description}
                   onChange={(e) => setCourse({ ...course, description: e.target.value }) } />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
            <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
              Full Stack software developer</CardText>
            <Button variant="primary">Go</Button>
            <button onClick={(event) => {
                  event.preventDefault();
                  dispatch(deleteCourse(course._id));
                }}  className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            </button>
            <button id="wd-edit-course-click"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
              className="btn btn-warning me-2 float-end" >
              Edit
            </button>

            <button className="btn btn-warning float-end me-2"
                    onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
              Update </button>

            </CardBody>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Link href="/Courses/1101" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React logo"/>
            <div>
              <h5> JPNS1101 Intro to Japanese </h5>
              <p className="wd-dashboard-course-title">
                Introductory Japanese
              </p>
              <button> Go </button>
            </div>
          </Link>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Link href="/Courses/4530" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React logo"/>
            <div>
              <h5> CS4530 Software Engineering </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Software Engineering
              </p>
              <button> Go </button>
            </div>
          </Link>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Link href="/Courses/1000" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React logo"/>
            <div>
              <h5> MSCR1000 Intro to Film </h5>
              <p className="wd-dashboard-course-title">
                Introduction to Film Studies
              </p>
              <button> Go </button>
            </div>
          </Link>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Link href="/Courses/2500" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React logo"/>
            <div>
              <h5> CS2500 Fundies 1 </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science
              </p>
              <button> Go </button>
            </div>
          </Link>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Link href="/Courses/2550" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React logo"/>
            <div>
              <h5> CS2550 Fundies 2 </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science 2
              </p>
              <button> Go </button>
            </div>
          </Link>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Link href="/Courses/1001" className="wd-dashboard-course-link">
            {/* <Image src="/images/reactjs.jpg" width={200} height={150} alt="React logo"/> */}
            <div>
              <h5> KORE1001 Intro to Korean </h5>
              <p className="wd-dashboard-course-title">
                Intro to Korean
              </p>
              <button> Go </button>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
    </div>
);}
