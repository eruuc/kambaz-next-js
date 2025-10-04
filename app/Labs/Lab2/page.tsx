import "./index.css";
import { Container } from "react-bootstrap";
export default function Lab2() {
  return (
    <Container>
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel
        right on the element. Although its very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p className="wd-class-selector">
Instead of changing the look and feel of all the 
elements of the same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p className="wd-class-selector">
Heres another paragraph using a different ID and a different look and
          feel
        </p>
      </div>
      <div id="wd-css-document-structure">
      <div className="wd-selector-1">
        <h3>Document structure selectors</h3>
        <div className="wd-selector-2">
          Selectors can be combined to refer elements in particular
          places in the document
          <p className="wd-selector-3">
            This paragraphs red background is referenced as
            <br />
            .selector-2 .selector3<br />
            meaning the descendant of some ancestor.<br />
            <span className="wd-selector-4">
              Whereas this span is a direct child of its parent
            </span><br />
              You can combine these relationships to create specific 
              styles depending on the document structure
          </p>
        </div>
      </div>
    </div>
  </Container>);}