Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Create candidate', () => {
    const file = 'IMG_20220524_184118.jpg';
    const newFile = 'download.jpeg';

    beforeEach("", () => {
        cy.visit("https://test.admin.safia.udevs.io/");
        cy.get('#normal_login_username').type('admin1');
        cy.get('#normal_login_password').type('admin1234');
        cy.get('.ant-btn-primary').click();
        cy.wait(3000)
        cy.viewport(1490, 800)
    })
    var phoneNum;
    phoneNum = Math.floor((99999999 + Math.random() * (1000000000 - 99999999)));
    it("Should fill forms and save", () => {
        cy.get('.ant-card-body > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-tabs-nav-wrap > .ant-tabs-nav-list > :nth-child(2)').click();
        cy.get('[style="margin-bottom: 15px;"] > .ant-btn').click();
        cy.get('#name').type('Cypress');
        cy.get('#lastName').type('Automationson');
        cy.get('#father_name').type('Father');
        cy.get('#phoneNumber').type(phoneNum);
        cy.get('input[type="date"]')
           .first().click()
           .wait(6000);
        cy.multiSelect('#branch', 'Алгоритм');
        cy.multiSelect('#position_id', 'Шеф повар');
        cy.get('#gender').click();
        cy.get('#gender_list').next().find('.ant-select-item-option-active').click();
        cy.get('#additional_phone_number').type('+998090995885');
        cy.get('#pin').type('1234567891221');
        cy.get('#doc_series').type('AF');
        cy.get('#doc_number').type('1234567');
        cy.get('input[type="file"]').then(els => {
            [...els].forEach(el => cy.wrap(el).attachFile(file));
        });
        cy.wait(6000);
        cy.get('#district').click().get('.ant-select-item-option-content').contains('Чиланзарский').click();
        cy.get('#street').type('Ulitsa');
        cy.get('#house').type('123');
        cy.get('#flat').type('no')
        cy.get('.ant-btn-primary').click();
        cy.wait(4000);
    })

    it('Should find and edit candidate', () => {
        cy.get('.ant-card-body > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-tabs-nav-wrap > .ant-tabs-nav-list > :nth-child(2)').click();
        cy.get('.ant-input').type(phoneNum);
        cy.get('.ant-table-row > :nth-child(2)').click();
        cy.get('.ant-table-row > :nth-child(3)').first().click();
        cy.get('[style="display: flex; gap: 12px; justify-content: flex-end;"] > :nth-child(1)').click();
        cy.get('#name').clear().type('NewName');
        cy.get('#lastName').clear().type('Edited');
        phoneNum = Math.floor((99999999 + Math.random() * (1000000000 - 99999999)));
        cy.get('#phoneNumber').clear().type('+998').type(phoneNum);
        cy.get('input[type="date"]')
           .first().click()
           .wait(6000);
        cy.get('#additional_phone_number').clear().type('+998090995885');
        cy.get('#pin').clear().type('123123213');
        cy.get('#doc_series').clear().type('AB');
        cy.get('#doc_number').clear().type('7654321');
        cy.get('input[type="file"]').then(els => {
            [...els].forEach(el => cy.wrap(el).attachFile(newFile));
        });
        cy.wait(4000);
        cy.get('#street').clear().type('Negde');
        cy.get('#house').clear().type('21');
        cy.get('#flat').clear().type('yes')
        cy.get('.ant-btn-primary').click();
        cy.wait(2000);
    })

    it('Should archive and then unarchive to 1 step', () => {
        cy.get('.ant-card-body > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-tabs-nav-wrap > .ant-tabs-nav-list > :nth-child(2)').click();
        cy.get('.ant-input').type(phoneNum);
        cy.get('.ant-table-row > :nth-child(2)').click();
        cy.get('.ant-table-row > :nth-child(3)').first().click();
        cy.get('.archive-btn').click();
        cy.get('.ant-popover-buttons > .ant-btn-primary').click();
        cy.wait(2000);
        cy.get('.ant-tabs-nav-list > :nth-child(7)').click();
        cy.get('.ant-input').type('newname');
        cy.get('.ant-table-row > :nth-child(3)').first().click();
        cy.get('.create-edit > .ant-btn').click();
        cy.get('.ant-radio-group > :nth-child(1)').click();
        cy.get('.ant-modal-footer > .ant-btn').click();
    })

    it('Should reject and then invite to 1 step', () => {
        cy.get('.ant-card-body > :nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-tabs-nav-wrap > .ant-tabs-nav-list > :nth-child(3)').click();
        cy.get('.ant-input').type(phoneNum);
        cy.get('.ant-table-row > :nth-child(3)').first().click();
        cy.get('.deny-btn').click();
        cy.get('.ant-radio-group > :nth-child(1)').click();
        cy.get('.ant-modal-footer > .ant-btn').click();
        cy.get('.ant-tabs-nav-list > :nth-child(8)').click();
        cy.get('.ant-input').type('newname');
        cy.get('.ant-table-row > :nth-child(3)').first().click();
        cy.get('.create-edit > .ant-btn').click();
        cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click();
        cy.get('.ant-picker-footer').click();
        cy.get('#time').click();
        cy.get('.ant-picker-now').click();
        cy.get('#full_name').type('Mrear');
        cy.get('#phone').type(Math.floor((99999999 + Math.random() * (1000000000 - 99999999))));
        cy.multiSelect('#location', 'Sebzor');
        cy.multiSelect('#branch', 'Sebzor');
        cy.get('.save-edit > .ant-btn-primary').click();
    })
})