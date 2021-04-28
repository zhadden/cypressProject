import user from '../fixtures/sidelines.json'
/// <reference types="cypress"/>


describe('sidelines task', function () {

    before(function () {
        cy.fixture('sidelines.json').then(function (data) {
            this.data = data;
        })
    })

    it('task', function () {
        cy.visit('https://www.sidelines.io/' + this.data.data.league_name)

    })
    })
//
//     before(() => {
//     // cy. getAndWriteApiData({
//     //     method: 'GET',
//     //     url : "https://sql-api.sidelines.io/games/upcoming",
//     //     pathFile: './cypress/fixtures/sidelines.json'
//     // })
//     cy.request({method:'GET' ,
//         url: "https://sql-api.sidelines.io/games/upcoming" ,
//         // retryOnNetworkFailure: true
//     }).then(response => {
//         expect(response.status).to.be.at.greaterThan(199).and.lessThan(300)
//         expect(response.body.data).to.not.be.null;
//         cy.writeFile('', response.body)
//     })
//     cy.fixture("sidelines.json").as('sidelinesGamesData')
// });
// describe('SideLines QA task', () => {
//
//     it("open urls", () => {
//         const len = sidelinesGamesData.data.length;
//         cy.log('The len ' , len)
//         //cy.visit('https://www.sidelines.io/' + sidelinesGames.data[0].league_name + 'odds/' + sidelinesGamesData.data.home_team_name + '-vs-' + sidelinesGamesData.data.home_team_name )
//
//     });
//
//
//
// })