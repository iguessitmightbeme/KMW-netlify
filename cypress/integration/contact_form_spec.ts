// cypress/integration/contact_form_spec.js

describe('Contact Form', () => {
    beforeEach(() => {
        cy.visit('/'); // Assuming the form is on the homepage.
    });

    it('submits the form successfully', () => {
        // This checks that the "Get in touch" section is rendered.
        cy.get('#contact-us')
            .should('have.text', 'Get in touch');
        
        // Fill out the form.
        cy.get('#name').type('John Doe');
        cy.get('#email').type('john.doe@test.com');
        cy.get('#message').type('This is a test message.');

        // Click the submit button.
        cy.get('input[name="Submit"]').click();

        // Check if the form submission was successful.
        // Adjust the check depending on the actual success message in your application.
        cy.get('#successmessage')
            .should('have.text', 'Thanks for getting in touch!');
    });
});
