/// <reference types="cypress" />

context("Login", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/signin");
  });

  it("enter email into input field", () => {
    // https://on.cypress.io/type
    cy.get(".email-input")
      .type("fake@email.com")
      .should("have.value", "fake@email.com")

      // .type() with special character sequences
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")

      // .type() with key modifiers
      .type("{alt}{option}") //these are equivalent
      .type("{ctrl}{control}") //these are equivalent
      .type("{meta}{command}{cmd}") //these are equivalent
      .type("{shift}")

      // Delay each keypress by 0.1 sec
      .type("slow.typing@email.com", { delay: 100 })
      .should("have.value", "slow.typing@email.com");
  });

  it("should enter password into email field", () => {
    cy.get(".password-input").type("fakepassword").should("have.text", "");
  });
});
