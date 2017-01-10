# Part 2 - Unit Testing Angular Controllers

Source can be found at: http://www.forwardadvance.com/courses/unit-testing-angular/simple-controller-testing

In Angular, a controller is just a newable function. We can unit test it very simply, just by creating an instance of the controller and checking it does what we expect it to do.

Here is a simple controller, stored in `lift.controller.js`:

```
var app = app || {}

app.LiftController = function() {
  this.floor = 0;
  this.goUp = () => {
    this.floor ++;
  }
  this.countDown = () => {
    this.val --;
  }
};
```

It has methods to go up, and methods to go down. We can create our own instance of it very easily:

```
var liftController = new app.LiftController()
```

We can now call methods on it directly:

```
liftController.countUp();
```

No magic is required. 

## Mocking Dependencies

If it needs injections, we can just make them manually:

```
app.appController = function($scope) {
  $scope.x = 'Exploding Kittens';
}

var mockScope = {};
var appController = new app.appController(mockScope);
```

## Writing a test

Testing this is now very simple. We make a test, called `lift.controller.spec.js` and save it next to `lift.controller.js`, something like the following:

```
describe('app', () => {
  describe('liftController', () => {

    var liftController;
    beforeEach(() => {
      liftController = new app.LiftController()
    });

    it("should have a val", () => {
      expect( liftController.val ).toBeDefined();
    });

    it("can count up", () => {
      var initialValue = liftController.val;
      liftController.countUp();
      expect( liftController.val ).toBe( initialValue + 1 );
    });

    it("can count down", () => {
      var initialValue = liftController.val;
      liftController.countDown();
      expect( liftController.val ).toBe( initialValue - 1 );
    });

  });
});
```

We simply instantiate the controller manually, call its methods, and check they work.

## Running the test

Just as with out last example, the easiest way to run this test is in the browser. We have a file called `specs.html`, that looks like this:

```
<!DOCTYPE html>
<html>
<head>
  <title>Simple Controller Testing Spec</title>
  <link rel="stylesheet" href="jasmine-core/jasmine.css">
  <script src="jasmine-core/jasmine.js"></script>
  <script src="jasmine-core/jasmine-html.js"></script>
  <script src="jasmine-core/boot.js"></script>
  <script src="app/lift.controller.js"></script>
  <script src="app/lift.controller.specs.js"></script>
</head>
<body>

</body>
</html>
```

Run this, and you'll see some nice green.

## What about ngMocks?

Angular mocks tends to encourage magical thinking in newer testers. It is important, and we will get to it next, but it's not the only way to test Angular.

## Exercise 1 - Crash the lift

Open up exercise 1. You'll find the controller above.

Use TDD (test first development) to create a reset button that sets val back to zero.

The client (in their infinite wisdom) has decided that the lift isn't fast enough for the busy executives. Change things so that the up and down buttons change `floor` by 10. Change the test first, get red, then change the controller.

Now add a zero function that returns the floor to zero. Write the test first, then write the code to make it green.

## Exercise 2 - Calculator

Open up Exercise 2. You'll find a small calculator app, which doesn't work because nobody has written the controller yet. Use your best TDD/BDD to write a controller using red/green refactoring.

## Exercise 3 - Pirate Exercise

Take your pirate code from before and pop it into a controller. 

*If you know about factories, you might want to make a simple pirate factory. Otherwise, just leave it as app.pirate.*

Make a simple front end for it with buttons that will let you navigate. use BDD to verify that the pirate does in fact move around.
