
import React from "react"
import { Form, FormGroup, ControlLabel } from "react-bootstrap"
import AmountRaisedFilter from "./Filters/AmountRaisedFilter"
import RoundFilter from "./Filters/RoundFilter"
import IndustryFilter from "./Filters/IndustryFilter"
import ShortestPathFilter from "./Filters/ShortestPathFilter"

export default () =>
    <Form>
      <FormGroup>
        <ControlLabel>Industry</ControlLabel>
        <IndustryFilter/>
      </FormGroup>
        <FormGroup>
        <ControlLabel>Funding Round/Stage</ControlLabel>
        <RoundFilter/>
      </FormGroup>

      <FormGroup>
        <ControlLabel>Amount Raised</ControlLabel>
        <AmountRaisedFilter/>
      </FormGroup>

      <FormGroup>
        <ControlLabel>Shortest Path</ControlLabel>
        <ShortestPathFilter/>
      </FormGroup>
    </Form>