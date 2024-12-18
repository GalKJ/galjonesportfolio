import PortfolioHeader from "../../src/components/PortfolioHeader";

describe("PortfolioHeader", () => {
  beforeEach(() => {
    cy.mount(<PortfolioHeader />);
  });

  it("renders the header with correct text", () => {
    cy.get("h1").should("have.text", "Gal K Jones");
    cy.get("h2").should("have.text", "Junior Full Stack Application Developer");
  });
});
