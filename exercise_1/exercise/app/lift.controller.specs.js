describe('app', () => {
  describe('liftController', () => {
    var liftController;
    beforeEach(() => {
      liftController = new app.LiftController()
    });

    it("should have a floor", () => {
      expect( liftController.floor ).toBeDefined();
    });

    it("can go up", () => {
      var initialValue = liftController.floor;
      liftController.goUp();
      expect( liftController.floor ).toBe( initialValue + 1 );
    });

    it("can go down", () => {
      var initialValue = liftController.floor;
      liftController.goDown();
      expect( liftController.floor ).toBe( initialValue - 1 );
    })

  })
});
