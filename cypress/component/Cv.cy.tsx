import React from 'react';
import Cv from '../../src/components/Cv';
import { cvData } from '../../src/data/cvData';

describe('Cv Component', () => {
  beforeEach(() => {
    cy.mount(<Cv />);
  });

  it('displays contact info', () => {
    cy.contains(cvData.contactInfo.email).should('exist');
    cy.contains(cvData.contactInfo.linkedin).should('exist');
    cy.contains(cvData.contactInfo.github).should('exist');
    cy.contains(cvData.contactInfo.location).should('exist');
  });

  it('displays profile section', () => {
    cy.get('[data-testid="profile-section"]').should('exist');
    cy.contains('Profile').should('exist');
    cy.contains('Promoted to Junior Full-Stack App Developer').should('exist');
    cy.contains(cvData.profile.boldText).should('exist');
  });

  it('displays professional experience section', () => {
    cy.get('[data-testid="experience-section"]').should('exist');
    cy.contains('Professional Experience').should('exist');
    cy.contains(cvData.experience.title).should('exist');
    cy.contains(
      `${cvData.experience.company} — ${cvData.experience.period}`
    ).should('exist');
    cy.contains(cvData.experience.responsibilities[0].title).should('exist');
    cy.get('[data-testid="experience-title"]').should(
      'contain',
      cvData.experience.title
    );
    cy.get('[data-testid="experience-company-period"]').should(
      'contain',
      `${cvData.experience.company} — ${cvData.experience.period}`
    );
  });

  it('displays technical skills section', () => {
    cy.get('[data-testid="technical-skills-section"]').should('exist');
    cy.contains('Technical Skills').should('exist');
    cy.contains('Languages & Frameworks').should('exist');
    cy.contains('Testing').should('exist');
    cy.contains('AI & Automation').should('exist');
  });

  it('displays education section', () => {
    cy.get('[data-testid="education-section"]').should('exist');
    cy.contains('Education').should('exist');
    cy.contains(cvData.education[0].degree).should('exist');
    cy.contains(cvData.education[0].institution).should('exist');
    cy.get('[data-testid="education-degree"]').should(
      'contain',
      cvData.education[0].degree
    );
    cy.get('[data-testid="education-institution-period"]').should(
      'contain',
      `${cvData.education[0].institution} - ${cvData.education[0].period}`
    );
  });

  it('displays additional information', () => {
    cy.get('[data-testid="additional-info-section"]').should('exist');
    cy.contains('Additional Information').should('exist');
    cy.contains('Side Projects').should('exist');
    cy.contains('Previous careers').should('exist');
    cy.get('[data-testid="side-projects-header"]').should('exist');
    cy.get('[data-testid="previous-careers-header"]').should('exist');
  });
});
