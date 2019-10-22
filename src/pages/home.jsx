import React from "react";
import {
  Page,
  Button,
  Navbar,
  NavTitleLarge,
  Range,
  Toolbar
} from "framework7-react";
import { changeRange } from "../js/functions";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rangeSet: 50,
      newVal: 50,
      colorSet: {
        r: 200,
        g: 30,
        b: 200
      }
    };
  }
  render() {
    return (
      <Page
        name="home"
        style={{
          backgroundColor:
            "rgb(" +
            this.state.colorSet.r +
            "," +
            this.state.colorSet.g +
            "," +
            this.state.colorSet.b +
            ")"
        }}
      >
        {/* Top Navbar */}
        <Navbar sliding={false} large>
          <NavTitleLarge>Colors</NavTitleLarge>
        </Navbar>
        <div>
          <span id="animate" className="dot"></span>

          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <Button bottom large fill>
          Start
        </Button>
        {/* Toolbar */}
        <Toolbar
          bottom
          style={{
            backgroundColor:
              "rgb(" +
              this.state.colorSet.r +
              "," +
              this.state.colorSet.g +
              "," +
              this.state.colorSet.b +
              ")"
          }}
        >
          <Range
            onRangeChange={changeRange.bind(this)}
            min={0}
            max={100}
            step={0.056}
            value={this.state.rangeSet}
          ></Range>
        </Toolbar>
      </Page>
    );
  }
}

function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  elem.style.left = 10 + "px";
  function frame() {
    if (pos == 500) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
    }
  }
}
