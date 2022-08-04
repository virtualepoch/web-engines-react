export default function Cgi() {
  // const circle = {
  //   radius: 1,
  //   location: {
  //     x: 1,
  //     y: 1,
  //   },
  //   draw: function () {
  //     console.log("draw");
  //   },
  // };

  // circle.draw();

  // function createCircle(radius) {
  //   return {
  //     radius,
  //     draw: function () {
  //       console.log("factory function");
  //     },
  //   };
  // }
  // const circle = createCircle(1);
  // circle.draw();

function Circle(radius) {
  this.radius = radius;
  this.draw = function(){
    console.log('constructor function')
  }
}

const another = new Circle(1);
another.draw()

  return (
    <div className="page-updating">
      <h1>CGI Tutorials</h1>
      <p>This section is currently being updated. Thanks for your patience.</p>
    </div>
  );
}
