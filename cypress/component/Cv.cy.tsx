import React from "react";
import Cv from "../../src/components/Cv";

describe("Cv Component", () => {
  beforeEach(() => {
    cy.mount(<Cv />);
  });

  it("displays contact info", () => {
    cy.contains("+44 7782 382384").should("exist");
    cy.contains("galkjones@gmail.com").should("exist");
    cy.contains("LinkedIn").should("exist");
    cy.contains("GitHub").should("exist");
    cy.contains("London, UK").should("exist");
  });

  it("displays profile section", () => {
    cy.get('[data-testid="profile-section"]').should("exist");
    cy.contains("logical problem solver").should("exist");
  });

  it("displays professional experience section", () => {
    cy.get('[data-testid="experience-section"]').should("exist");
    cy.contains("Professional Experience").should("exist");
    cy.contains("Junior Full-Stack App Developer").should("exist");
    cy.contains("Citizen Ticket").should("exist");
    cy.contains("Jan 2024 – Present").should("exist");
  });

  it("displays technical skills section", () => {
    cy.get('[data-testid="skills-section"]').should("exist");
    cy.contains("Technical Skills").should("exist");
    cy.contains("Languages/Frameworks").should("exist");
    cy.contains("Tools").should("exist");
    cy.contains("Methodologies").should("exist");
    cy.contains("JavaScript/TypeScript").should("exist");
    cy.contains("React/React Native").should("exist");
  });

  it("displays education section", () => {
    cy.get('[data-testid="qualifications-section"]').should("exist");
    cy.contains("Qualifications").should("exist");
    cy.contains("Founders & Coders").should("exist");
  });

  it("displays additional information", () => {
    cy.get('[data-testid="interests-section"]').should("exist");
    cy.contains("Interests").should("exist");
    cy.contains("Programming").should("exist");
  });
});
