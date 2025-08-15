import React from "react";
import PortfolioHeader from "../../src/components/PortfolioHeader";

describe("PortfolioHeader", () => {
  beforeEach(() => {
    cy.mount(<PortfolioHeader />);
  });

  it("renders a download link to the static CV PDF", () => {
    cy.contains("a", "Download CV")
      .should("have.attr", "href", "/cv/Gal-K-Jones-CV-2025.pdf")
      .and("have.attr", "download");
  });
});
