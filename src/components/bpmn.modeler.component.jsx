import React, { Component } from "react";
import BpmnModeler from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-font/dist/css/bpmn-embedded.css";
import { emptyBpmn } from "../assets/empty.bpmn";
import camundaModdleDescriptor from "camunda-bpmn-moddle/resources/camunda";

class BpmnModelerComponent extends Component {
  modeler = null;

  componentDidMount = () => {
    this.modeler = new BpmnModeler({
      container: "#bpmnview",
      keyboard: {
        bindTo: window
      },
      moddleExtensions: {
        camunda: camundaModdleDescriptor
      }
    });

    this.newBpmnDiagram();
  };

  newBpmnDiagram = () => {
    this.openBpmnDiagram(emptyBpmn);
  };

  openBpmnDiagram = xml => {
    this.modeler.importXML(xml, error => {
      if (error) {
        return console.log("fail import xml");
      }

      var canvas = this.modeler.get("canvas");

      canvas.zoom("fit-viewport");
    });
  };

  render = () => {
    return (
      <div id="bpmncontainer">
        <div
          id="bpmnview"
          style={{ width: "100%", height: "98vh", float: "left" }}
        />
      </div>
    );
  };
}

export default BpmnModelerComponent;
