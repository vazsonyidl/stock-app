describe('Paginator e2e test', () => {
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

  it('successfully paginate to the next page', () => {
    cy.visit('/');
    cy.wait('@forexRates');
    cy.wait('@cryptoCardData');
    cy.get('[data-testid=crypto-card]').should('have.length', 10);
    cy.get('.mat-paginator-navigation-next').click();
    cy.get('[data-testid=crypto-card]').should('have.length', 1);
  });
});


