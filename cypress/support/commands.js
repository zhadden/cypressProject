/// <reference types="cypress"/>

Cypress.Commands.add('getAndWriteApiData' , ({method = 'GET' , url = '' , body = null , pathFile = '' }) => {
    cy.request({method:method ,
        url: url //,
       // retryOnNetworkFailure: true
    }).then(response => {
        expect(response.status).to.be.at.greaterThan(199).and.lessThan(300)
        expect(response.body.data).to.not.be.null;
        cy.writeFile(pathFile , response.body)
    })
})