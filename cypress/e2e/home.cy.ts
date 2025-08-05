describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the hero section with name and title', () => {
    cy.get('h1').should('contain', 'Himanshu Gandhi')
    cy.get('h2').should('contain', 'Cloud & DevOps Professional')
  })

  it('has working navigation links', () => {
    cy.get('nav').within(() => {
      cy.contains('About').click()
      cy.url().should('include', '#about')
    })
  })

  it('toggles theme when theme button is clicked', () => {
    cy.get('[aria-label="Toggle theme"]').click()
    // Theme change should be visible in the DOM
    cy.get('html').should('have.class', 'dark')
  })

  it('scrolls to sections when navigation links are clicked', () => {
    cy.contains('Skills').click()
    cy.get('#skills').should('be.visible')
    
    cy.contains('Projects').click()
    cy.get('#projects').should('be.visible')
  })

  it('displays contact form', () => {
    cy.contains('Contact').click()
    cy.get('#contact').should('be.visible')
    cy.get('form').should('exist')
  })

  it('has responsive design', () => {
    // Test mobile view
    cy.viewport('iphone-x')
    cy.get('[aria-label="Toggle menu"]').should('be.visible')
    
    // Test desktop view
    cy.viewport(1280, 720)
    cy.get('nav').should('be.visible')
  })
}) 