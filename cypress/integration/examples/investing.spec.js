

describe('yyyy', () => {
    it('Does not do much!', () => {
        cy.visit('https://ng.investing.com/equities/access-bank')
        cy.get('[data-test="news-container"]').scrollIntoView()
        cy.get('[data-test="link-news"]').click()


    })
})