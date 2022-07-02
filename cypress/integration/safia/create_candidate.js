Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Create candidate', () => {
    const file = 'IMG_20220524_184118.jpg';

    beforeEach("", () => {
        cy.visit("https://test.admin.safia.udevs.io/");
        cy.get('#normal_login_username').type('admin1');
        cy.get('#normal_login_password').type('admin1234');
    })

    it("Should fill forms and deny", () => {
        cy.get('.ant-btn-primary').click();
        cy.get('.ant-card-body > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-tabs-nav-wrap > .ant-tabs-nav-list > :nth-child(2)').click();
        cy.get('[style="margin-bottom: 15px;"] > .ant-btn').click();
        cy.get('#name').type('Cypress');
        cy.get('#lastName').type('Automationson');
        cy.get('#father_name').type('James');
        cy.get('#phoneNumber').type('123321123');
        cy.get('input[type="date"]').first().click().wait(2000).type('2002-02-02');
        cy.multiSelect('#branch', 'Алгоритм');
        cy.multiSelect('#position_id', 'Шеф повар');
        cy.get('#gender').click();
        cy.get('#gender_list').next().find('.ant-select-item-option-active').click();
        cy.get('#additional_phone_number').type('+998090995885');
        cy.get('#pin').type('1234567891221');
        cy.get('#doc_series').type('AF');
        cy.get('#doc_number').type('1234567');
        cy.get('#expireDate').type('2026-10-09')
        cy.get('input[type="file"]').then(els => {
            [...els].forEach(el => cy.wrap(el).attachFile(file));
        });
        cy.wait(1000);
        cy.get('#district').click().get('.ant-select-item-option-content').contains('Чиланзарский').click();
        cy.get('#street').type('Ulitsa');
        cy.get('#house').type('123');
        cy.get('#flat').type('no')
        cy.get('.deny-btn').click();
    })

    it("Should fill forms and save", () => {
        cy.get('.ant-btn-primary').click();
        cy.get('.ant-card-body > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-tabs-nav-wrap > .ant-tabs-nav-list > :nth-child(2)').click();
        cy.get('[style="margin-bottom: 15px;"] > .ant-btn').click();
        cy.get('#name').type('Cypress');
        cy.get('#lastName').type('Automationson');
        cy.get('#father_name').type('James');
        cy.get('#phoneNumber').type('123321123');
        cy.get('input[type="date"]').first().click()
        // .type('2002-02-02');
        cy.multiSelect('#branch', 'Алгоритм');
        cy.multiSelect('#position_id', 'Шеф повар');
        cy.get('#gender').click();
        cy.get('#gender_list').next().find('.ant-select-item-option-active').click();
        cy.get('#additional_phone_number').type('+998090995885');
        cy.get('#pin').type('1234567891221');
        cy.get('#doc_series').type('AF');
        cy.get('#doc_number').type('1234567');
        cy.get('#expireDate').type('2026-10-09')
        cy.get('input[type="file"]').then(els => {
            [...els].forEach(el => cy.wrap(el).attachFile(file));
        });
        cy.wait(1000);
        cy.get('#district').click().get('.ant-select-item-option-content').contains('Чиланзарский').click();
        cy.get('#street').type('Ulitsa');
        cy.get('#house').type('123');
        cy.get('#flat').type('no')
        cy.get('.ant-btn-primary').click();
    })
})