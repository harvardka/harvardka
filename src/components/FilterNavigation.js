import React from "react"
import { Nav, NavItem } from "react-bootstrap"

export default (props) =>
 <Nav
          bsStyle="tabs"
          justified={false}
          activeKey={1}
          onSelect={key => this.handleSelect(key)}
        >
          <NavItem eventKey={1} href="/home">
            Companies
          </NavItem>
          <NavItem eventKey={2} title="Item">
            People
          </NavItem>
        </Nav>