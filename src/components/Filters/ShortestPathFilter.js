import React from "react"
import SelectFilter from "./SelectFilter"
import { updateQueryKey, makeSelectQueryKey, selectStartups, selectVC } from "../../modules/vis.js"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

import Select from "react-select"
import { Row, Col } from "react-bootstrap"
const STARTUP_QUERY_KEY = "sp/startup"
const VC_QUERY_KEY = "sp/vc"

const mapStateToProps = createStructuredSelector({
    startups: selectStartups,
    vcs: selectVC,
    startupValue: makeSelectQueryKey(STARTUP_QUERY_KEY),
    vcValue: makeSelectQueryKey(VC_QUERY_KEY)

})

export const ShortestPathFilter = ({ startups, vcs, updateQueryKey, startupValue, vcValue }) =>
    <Row>
        <Col md={5}>
            <SelectFilter
                name="startup-select"
                options={startups.toJS().map((startup) => ({ value: startup, label: startup}))}
                onChange={(value) => updateQueryKey(STARTUP_QUERY_KEY, value ? value.value : value)}
                value={startupValue}
            />
        </Col>
        <Col md={2}>
            to
        </Col>
        <Col md={5}>
            <SelectFilter
                name="startup-select"
                options={vcs.toJS().map((startup) => ({ value: startup, label: startup}))}
                onChange={(value) => updateQueryKey(VC_QUERY_KEY, value ? value.value : value)}
                value={vcValue}
            />
        </Col>
    </Row>

export default connect(mapStateToProps, { updateQueryKey })(ShortestPathFilter)