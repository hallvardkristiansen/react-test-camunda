import React, { Component } from "react";

import BpmnModelerComponent from "../components/bpmn.modeler.component";
import { Row, Col } from "react-bootstrap";

// export a modeler page component
// use the Modeler to instantiate a modeler instance
export default class ModelerPage extends Component {
  render() {
    return (
      <Row>
        <Col className="p-5 mx-3 bg-light">
          <h1>Modeler</h1>
          <div>
            <BpmnModelerComponent />
          </div>
        </Col>
      </Row>
    );
  }
}
