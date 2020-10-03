/// <reference types="cypress" />

context('ENTER_TEXT_HERE', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  describe('My First Test', function () {
    it('Should pass!', function () {
      expect(true).to.equal(true);
    });
  });
});
