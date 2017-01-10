var app = app || {}

app.LiftController = function() {
  this.floor = 0;
  this.goUp = () => {
    this.floor ++;
  }
  this.goDown = () => {
    this.floor --;
  }
  this.zero = () => {
    this.floor = 0;
  }
};
