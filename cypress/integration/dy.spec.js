
describe('DY QA task ', () => {
    // it('Open cocktailale site and log-in', () => {
    //     cy.visit('https://cocktailale.web.app/getStarted')
    //
    //     cy.get('#email').type("inter@gmail.com")
    //     cy.get('#password').type("Aa123123")
    //     cy.get('*[class^="btn btn-primary prim align-center pr-5 pl-5 pt-2 pb-2 "]').click()
    //    // cy.get('*[class^="col-12 mt-4"] ').should('have.attr', 'h1')
    //     cy.get('h1').should('have.', 'h1')
    //
    // })

     //  it('response', () => {
       // cy.request('https://cocktailale.web.app/getStarted')
         //   .should((response) => {
        //        expect(response.status).to.eq(200)
       //     })

   //     })

    it('walla site', () => {
        cy.visit('  https://www.walla.co.il/')
        cy.get(`a[href="https://finance.walla.co.il"]`).click()
        cy.get(`*[class^="css-1mhodj0"]`).scrollIntoView()


        cy.get(`*[class^="css-1mhodj0"]`).contains('דולר $').next().should('have.text' , "3.24")

        })




})