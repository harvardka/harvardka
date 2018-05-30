import React from "react"
import SelectFilter from "./SelectFilter"
import { updateQueryKey, makeSelectQueryKey } from "../../modules/vis.js"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

const QUERY_KEY = "round"

const mapStateToProps = createStructuredSelector({
    value: makeSelectQueryKey(QUERY_KEY)
})

const stages = [
    'Angel',
    'Pre-Seed',
    'Seed',
    'Series A',
    'Series B',
    'Series C',
    'Series D',
    'Series E',
    'Series F',
    'Series G',
    'Series H',
]

const options = stages.map((label, value)=> ({ value, label }))


export const RoundFilter = ({ updateQueryKey, value }) =>
    <SelectFilter
        name="round-filter"
        onChange={(value) => updateQueryKey(QUERY_KEY, value ? value.value : value)}
        value={value}
        options={options}
    />

export default connect(mapStateToProps, { updateQueryKey })(RoundFilter)