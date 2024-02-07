describe('Products Test', () => {
  const currentTime = new Date().toLocaleTimeString().replace(/:/g, '_');
  const testName = `GetProducts at ${currentTime}`;

  beforeEach(() => {
    cy.intercept('GET', '/api/products', { fixture: 'products.json' }).as(
      'getProducts'
    );
  });

  it(testName, () => {
    cy.visit('/');

    cy.get('table tr').should('have.length', 3);

    cy.contains('product 2');
  });
});
