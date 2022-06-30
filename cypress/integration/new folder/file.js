describe('', ()=>{


    it("", ()=> {
        let access_token = "";
        cy.intercept('**/login').as('getAccessToken');

        cy.visit("test.app.delever.uz");
        cy.wait(2000);
        cy.get('#login').type("oybek");
        cy.get('#password').type("oybek1024");
        cy.get('.login-button').click()
        .wait('@getAccessToken', {timout: 5000})
        .then((xhr) => {
            access_token = JSON.stringify(xhr.response.body.access_token);
            alert(access_token);
        })
        
        // cy.wait(2000);
        // cy.get(':nth-child(1) > .ant-notification-notice-close > .ant-notification-close-x > .anticon > svg').click();
        // cy.wait(1000);
        // cy.get('.ant-notification-close-x > .anticon > svg').click();
        // cy.contains(':nth-child(4) > .ant-menu-submenu-title', 'Каталог').click();
        // cy.get('.ant-menu-submenu-open > .ant-menu > :nth-child(1)').click();
        // cy.wait(1000);
        // cy.contains('div > a > .ant-btn', 'Добавить').click({force: true} );
        // cy.wait(1500);
        // cy.get('#coordinated_name').type('Shorva');
        // cy.get('#coordinated_description').type('Suyakli Shorva');
        // cy.get(':nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('1');
        // //cy.get('.vue-treeselect__control-arrow-container').click();
        // //cy.contains('.vue-treeselect__label', 'Chuchvara').click();
        // cy.get('#buttonSubmit').click();
        // cy.wait(3000);
        // cy.get('.ant-table-row > #buttonUpdate').contains('Shorva').click();
    })

})