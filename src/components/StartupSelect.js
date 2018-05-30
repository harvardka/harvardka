import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectStartups } from "../modules/vis.js"
import Select from "react-select"

const QUERY_KEY = "startup"

const mapStateToProps = createStructuredSelector({
    startups: selectStartups
})

export const StartupSelect = ({ startups }) =>
    <Select
        name="startup-select"
        options={startups.toJS().map((startup) => ({ value: startup, label: startup}))}
    />


export default connect(mapStateToProps, {})(StartupSelect)