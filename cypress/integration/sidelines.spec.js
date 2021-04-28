describe('sidelines task', function () {

    before(function () {
        cy.fixture('sidelines.json').then(function (data) {
            this.data = data;
        })
    })

    it('task', function () {
        for (let i = 0 ; i < 5 ; i++) {
            let leagueName = this.data.data[i].league_name
            let homeTeamName = this.data.data[i].home_team_name
            let awayTeamName = this.data.data[i].away_team_name

            cy.visit('https://www.sidelines.io/' + leagueName + '/odds/' + homeTeamName + '-vs-' + awayTeamName)
            let countRows = 0;
            if (cy.get(`*[class^="table-holder"]`).should("be.visible")) {
                cy.get(`*[class^="table-holder"]`).find('tr').each(() => {
                    countRows++;
                    cy.log(`count = ${countRows}`)
                })
            }
        else {
            cy.log("ZERO LINES ")
        }
        }
    })
})