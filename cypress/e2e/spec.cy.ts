describe('Products Test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/products', { fixture: 'products.json' }).as(
      'getProducts'
    );
  });

  it('Table row has product', () => {
    cy.visit('/');
    cy.get('table tr').should('have.length', 3);
    cy.contains('product 2');
  });
});
