export function changeRange(value) {
  if (value <= 20) {
    //100
    //110
    this.setState({
      colorSet: {
        r: 255,
        g: (255 * value) / 20,
        b: 0
      }
    });
  }
  if (value <= 40 && value > 20) {
    // 010
    this.setState({
      colorSet: {
        r: (255 * -value) / 20 + 510,
        g: 255,
        b: 0
      }
    });
  }
  if (value <= 60 && value > 40) {
    //011
    this.setState({
      colorSet: {
        r: 0,
        g: 255,
        b: (255 * value) / 20 - 510
      }
    });
  }
  if (value <= 80 && value > 60) {
    //001
    this.setState({
      colorSet: {
        r: 0,
        g: (255 * -value) / 20 + 1020,
        b: 255
      }
    });
  }
  if (value <= 100 && value > 80) {
    // 101
    this.setState({
      colorSet: {
        r: (255 * value) / 20 - 1020,
        g: 0,
        b: 255
      }
    });
  }
  this.setState({
    newVal: value
  });
}

export function randomColor(val) {
    
}
