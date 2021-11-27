describe('Hulu page test', function () {
  it('test page', function () {
    cy.visit('/hulu-webpage/index.html');
    cy.get('nav .login-btn').should('contain', 'Log In');
  });
});
