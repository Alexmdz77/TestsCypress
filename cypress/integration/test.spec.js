
describe('My First Test', () => {

    const username = "Alex";
    const email = "alext77165@gmail.com";
    const password = "123456";
    const tooShortPassword = "123";

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

    const project_name = "Nouveau Projet";
    const column_name = "Nouvelle colonne";
    const task_name = "Nouvelle tâche";

    it('Fill mandatory fields for create a new project', () => {
        cy.visit('/mes_projets')

        cy.get('[data-cy="new-project"]').click()
        cy.get('[data-cy="project-name"]').type(`${project_name}`)
        cy.get('[aria-label="Increment"]').click()
        cy.get('[data-cy="column-1"]').type(`${column_name}`)
        cy.get('[data-cy="date-picker"]').click()
        cy.get('[data-date="2022-02-27"]').click()
        
        cy.get('#modal-prevent-closing___BV_modal_footer_').contains('OK').click()
    })
    it('Fill mandatory fields for add a new card', () => {
        cy.visit('/mes_projets')
        
        cy.get('[data-cy="view-project-62421e4a2906bd32605ca2c1"]').click()
        cy.get('[data-cy="input-task-0"]').type(`${task_name}`)
        cy.get(':nth-child(1) > .input-group > .btn').click()
        cy.get(':nth-child(1) > .drag-inner-list > :nth-child(1)').drag(':nth-child(2) > .drag-inner-list')
    })
})