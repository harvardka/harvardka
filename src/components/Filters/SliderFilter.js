import React from "react"
import 'rc-slider/assets/index.css'
import Slider, { Range } from "rc-slider"
import Filter from "./Filter"


export default (props) =>
    <Filter>
        <Range {...props}/>
    </Filter>