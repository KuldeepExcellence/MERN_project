import "./widget.css"
import React from 'react'

export default function Widget() {
  return (
    <div className="widget">
        <div className="widgetItem">
            <span className="widgetTitle">Regd users</span>
            <div className="data">8</div>

        </div>
        <div className="widgetItem">
            <span className="widgetTitle">Subject Listed</span>
            <div className="data">8</div>

        </div>
        <div className="widgetItem">
            <span className="widgetTitle">Total Class Listeds</span>
            <div className="data">8</div>


        </div>
        <div className="widgetItem">
            <span className="widgetTitle">Result Declared</span>
            <div className="data">8</div>

        </div>
    </div>
  )
}
