import { FormSelect, FormCheck, FormLabel, FormControl, Row, Col, Form, Button } from "react-bootstrap";

export default function BootstrapForms () {
    return (
        <div id="wd-css-responsive-forms-2">
        <h3>Responsive forms 2</h3>
        <Form>
            <Row className="mb-3" controlId="formHorizontalEmail">
                <FormLabel column sm={2}> Email </FormLabel>
                <Col sm={10}> <FormControl type="email" placeholder="Email" /> </Col>
            </Row>
            <Row className="mb-3" controlId="formHorizontalPassword">
                <FormLabel column sm={2}> Password </FormLabel>
                <Col sm={10}> <FormControl type="password" placeholder="Password" /> </Col>
            </Row>
            <fieldset>
                <Row className="mb-3">
                    <FormLabel as="legend" column sm={2}> Radios </FormLabel>
                    <Col sm={10}>
                    <FormCheck type="radio" label="First radio" name="formHorizontalRadios" defaultChecked />
                    <FormCheck type="radio" label="Second radio" name="formHorizontalRadios" />
                    <FormCheck type="radio" label="Third radio" name="formHorizontalRadios" />
                    <FormCheck type="radio" label="Remember me" name="formHorizontalRadios" />
                    </Col>
                </Row>
            </fieldset>
            <Col> <Button type="submit">Sign in</Button> </Col>
        </Form>
        </div>
    );
}