import React, { Component } from "react";
import { FormControl, Form, Row, Col } from "react-bootstrap";
import { observable, computed } from "mobx";
import { observer } from "mobx-react";
import items from "../assets/items";

@observer
class OutputResults extends Component {
  searchTerm = "";
  searchResult = observable(items);
  searchList = observable({ content: this.newList });

  handleChange = e => {
    this.searchTerm = e.target.value;
    this.searchResult = this.searchObject;
    this.searchList.content = this.newList;
  };

  get searchObject() {
    var results = [];
    for (var i = 0; i < items.length; i++) {
      for (var key in items[i]) {
        if (items[i][key].indexOf(this.searchTerm) !== -1) {
          results.push(items[i]);
        }
      }
    }
    results = results.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
    if (results.length === 0) {
      results.push({
        title: "No matches",
        description:
          "No content matches the search term, check spelling and capitalization?"
      });
    }
    return results;
  }

  @computed
  get newList() {
    return (
      <ul className="list-unstyled">
        {this.searchResult.map(i => (
          <li key={i.title}>
            <h4>{i.title}</h4>
            <p>{i.description}</p>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <Row>
        <Col className="p-5 mx-3 bg-light">
          <Row>
            <Col>
              <h1>Frameworks</h1>
            </Col>
            <Col>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="ml-auto mr-sm-2"
                  onChange={this.handleChange}
                />
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>{this.searchList.content}</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default class FrameworksPage extends Component {
  render() {
    return <OutputResults />;
  }
}
