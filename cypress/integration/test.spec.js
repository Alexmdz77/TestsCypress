
describe('My First Test', () => {

    const username = "Alex";
    const email = "alext77165@gmail.com";
    const password = "123456";
    const tooShortPassword = "123";

    before( async () => {
        console.log(await cy.task('clearUsers'))
    })

    it('Check too short password for register', () => {
        cy.visit('/inscription')

        cy.get('[data-cy=username]').type(`${username}`)
        cy.get('[data-cy=email]').type(`${email}`)
        cy.get('[data-cy=password]').type(`${tooShortPassword}`)
        cy.get('[data-cy=password2]').type(`${tooShortPassword}`)

        cy.get('[data-cy=submit]').should('be.disabled')
        // cy.get('#input-passwordFirst')
    })

    it('Fill mandatory fields for register', () => {
        cy.visit('/inscription')

        cy.get('[data-cy=username]').type(`${username}`)
        cy.get('[data-cy=email]').type(`${email}`)
        cy.get('[data-cy=password]').type(`${password}`)
        cy.get('[data-cy=password2]').type(`${password}`)

        cy.get('[data-cy=submit]').should('not.be.disabled').click()
        cy.location('pathname').should('eq', '/connexion')
    })

    
    it('Fill mandatory fields for Connexion', () => {
        cy.visit('/connexion')

        cy.get('[data-cy=email]').type(`${email}`)
        cy.get('[data-cy=password]').type(`${password}`)

        cy.get('[data-cy=submit]').click()
        cy.location('pathname').should('eq', '/')
    })

    const project_name = ""

    it('Fill mandatory fields for create a new project', () => {
        cy.visit('/mes_projets')

        cy.get('[data-cy="new-project"]').click()
        cy.get('[data-cy="project-name"]').type(`${project_name}`)
        cy.get('[data-cy="new-project"]').click()
        cy.get('[data-cy="new-project"]').click()
        cy.get('[data-cy=password]').type(`${password}`)

        cy.get('[data-cy=submit]').click()
    })
    it('Fill mandatory fields for add a new card', () => {
        cy.visit('/connexion')

        cy.get('[data-cy=email]').type(`${email}`)
        cy.get('[data-cy=password]').type(`${password}`)

        cy.get('[data-cy=submit]').click()
    })
})