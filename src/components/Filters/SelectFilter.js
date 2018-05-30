import React from "react"
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Filter from "./Filter"

export default (props) =>
    <Filter>
    <Select {...props} />
    </Filter>