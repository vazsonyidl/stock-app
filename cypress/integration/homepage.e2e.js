describe('Home page e2e test', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: '/api/v1/forex/rates?token=c1178kv48v6t4vh00qt0'
      },
      {
        fixture: 'forex-rates.fixture.json'
      }
    ).as('forexRates');
  });

  it('successfully load home page', () => {
    cy.visit('/');
    cy.wait('@forexRates');
  });

  it('successfully set forex rates', () => {
    cy.get('[data-testid=forex-badge]').first().contains('EUR/CAD');
    cy.get('[data-testid=forex-badge]').last().contains('EUR/USD');
  });
});
