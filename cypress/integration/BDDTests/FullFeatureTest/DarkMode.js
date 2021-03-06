import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I click dark mode', () => {

    cy.intercept("GET", "/api/comments").as("getComments");
    cy.intercept("POST", "/api/comments").as("makeComment");

    cy.visit('https://frontend-342222.uw.r.appspot.com/');
    cy.wait("@getComments");

    cy.get("button:contains(Toggle dark mode)").click();

})

Then('The site will be in dark mode', () => {

    cy.get('body').should('have.class', 'dark-mode')

    cy.get("button:contains(Toggle dark mode)").click();
})
