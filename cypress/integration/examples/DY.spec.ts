describe('DY QA task ', () => {
    it('Open cocktailale site and log-in', () => {
        cy.visit('https://cocktailale.web.app/getStarted')

        cy.get('#email').type("inter@gmail.com")
        cy.get('#password').type("Aa123123")
        cy.get('*[class^="btn btn-primary prim align-center pr-5 pl-5 pt-2 pb-2 "]').click()

        cy.intercept('POST', 'https://cocktailale.web.app/getStarted', {
            statusCode: 200,
            body: 'it worked!',

        })
        cy.request('https://cocktailale.web.app/getStarted').should((response) => {
        })



    })
})