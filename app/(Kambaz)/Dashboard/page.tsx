import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, CardTitle, Button, CardText, CardBody, CardImg } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
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
