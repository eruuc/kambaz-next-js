"use client";

import Link from "next/link";
import { Row, Col, Card, CardTitle, Button, CardText, CardBody, CardImg, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../store";
import { setCourses } from "../Courses/reducer";
import * as client from "../Courses/client";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    name: "New Course",
    number: "NEW123",
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    department: "D123",
    credits: 3,
    description: "New Course Description",
  });

  const fetchCourses = async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser]);

  const onAddNewCourse = async () => {
    try {
      const newCourse = await client.createCourse(course);
      dispatch(setCourses([...courses, newCourse]));
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteCourse = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId);
      dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
    } catch (error) {
      console.error(error);
    }
  };

  const onUpdateCourse = async () => {
    try {
      await client.updateCourse(course);
      dispatch(
        setCourses(
          courses.map((c) => {
            if (c._id === course._id) {
              return course;
            } else {
              return c;
            }
          })
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>
                    <Button variant="primary"> Go </Button>
                  </CardBody>
                </Link>
                <Button
                  className="btn btn-danger"
                  onClick={(event) => {
                    event.preventDefault();
                    onDeleteCourse(course._id);
                  }}
                >
                  Delete
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <hr />
      <h5>Add New Course</h5>
      <FormControl
        placeholder="Course Name"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        className="mb-2"
      />
      <FormControl
        placeholder="Course Number"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        className="mb-2"
      />
      <FormControl
        placeholder="Description"
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        className="mb-2"
      />
      <button onClick={onAddNewCourse} className="btn btn-primary float-end" id="wd-add-new-course-click">
        Add
      </button>
      <button onClick={onUpdateCourse} className="btn btn-secondary float-end me-2" id="wd-update-course-click">
        Update
      </button>
    </div>
  );
}
