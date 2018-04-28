
import React from "react"
import SelectFilter from "./SelectFilter"
import { updateQueryKey, makeSelectQueryKey } from "../../modules/vis.js"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

const QUERY_KEY = "industry"

const mapStateToProps = createStructuredSelector({
    value: makeSelectQueryKey(QUERY_KEY)
})

const industries = [
    'Aerospace',
    'Buildings',
    'zzzz'
]

const options = industries.map((label, value) => ({ value, label }))

export const IndustryFilter = ({ value, updateQueryKey }) =>
    <SelectFilter
        name="industry-filter"
        onChange={(value) => updateQueryKey(QUERY_KEY, value ? value.value : value)}
        value={value}
        options={options}
    />


export default connect(mapStateToProps, { updateQueryKey })(IndustryFilter)