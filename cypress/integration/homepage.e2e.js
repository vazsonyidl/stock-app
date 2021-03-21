describe('Home page e2e test', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: '/api/v1/forex/rates',
      query: {
        token: 'c1178kv48v6t4vh00qt0'
      }
    }, {
      fixture: 'forex-rates.fixture.json'
    }).as('forexRates');

    cy.intercept({
      method: 'GET',
      url: '/api/v3/coins/markets',
      query: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: '100',
        page: '1',
        sparkline: 'false'
      }
    }, {
      fixture: 'crypto-card.fixture.json'
    }).as('cryptoCardData');
  });

  it('successfully load home page with fixtures', () => {
    cy.visit('/');
    cy.wait('@forexRates');
    cy.wait('@cryptoCardData');
  });

  it('successfully set forex rates with fixtures', () => {
    cy.get('[data-testid=forex-badge]').should('have.length', 3);
    cy.get('[data-testid=forex-badge]').first().contains('1');
    cy.get('[data-testid=forex-badge]').last().contains('EUR/USD');
  });

  it('successfully set crypto cards with fixtures', () => {
    cy.visit('/');
    cy.wait('@forexRates');
    cy.wait('@cryptoCardData');

    cy.get('[data-testid=crypto-card]').should('have.length', 10);
    cy.get('[data-testid=crypto-card-name]').contains('Bitcoin');
  });
});

describe('Home page e2e test - without fixtures', () => {
  it('successfully set forex badges', () => {
    cy.visit('/');
    cy.get('[data-testid=forex-badge]').should('have.length', 3);
    cy.get('[data-testid=forex-badge]').last().contains('EUR/USD');
  });

  it('successfully set set crypto cards', () => {
    cy.visit('/');
    cy.get('[data-testid=crypto-card]').should('have.length', 10);
  });
});
