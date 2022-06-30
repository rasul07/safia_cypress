describe('', ()=>{

    it("", ()=> {
        cy.visit("https://test.app.delever.uz/user/login");
        /* cy.wait(1000);
        cy.get('#login').type("bootcamp");
        cy.get('#password').type("bootcamp123");
        cy.get('.login-button').click(); */
        cy.wait(8000);
        cy.get(':nth-child(1) > .ant-notification-notice-close > .ant-notification-close-x > .anticon > svg').click();
        cy.wait(1000);
        //cy.get('.ant-notification-close-x > .anticon > svg').click();
        cy.get('.ant-menu > :nth-child(3) > a').click();
        cy.get('[href="/orders/create"] > .ant-btn').click();
        cy.wait(1000);
        cy.get('.ant-spin-container > [style="display: flex; width: 100%; height: 32px;"] > .ant-select > .ant-select-selection > .ant-select-selection__rendered > ul > .ant-select-search > .ant-select-search__field__wrap > .ant-input').type(Math.floor((99999999 + Math.random() * (1000000000 - 99999999))))
        cy.get('[data-v-3f7d5292=""] > .ant-select > .ant-select-selection > .ant-select-selection__rendered > ul > .ant-select-search > .ant-select-search__field__wrap > .ant-input').type('Chilonzor metro');
        cy.get('.ant-select-dropdown-menu-item-group-list .ant-select-dropdown-menu-item:first-child').click();
        cy.get('.ant-col-18 > div > .ant-input').type('Kliyent');
        cy.get('.ant-col-18 > .ant-input').type('Mazza qilib yidigan bo\'sin, rahmat!');
        cy.get('.ant-row > :nth-child(1) > .ant-input').type('12');
        cy.get('.ant-row > :nth-child(2) > .ant-input').type('3');
        cy.get(':nth-child(3) > .ant-input').type('4');
        cy.get(':nth-child(9) > .ant-col-18 > .ant-select > .ant-select-selection > .ant-select-arrow > .anticon > svg').click();
        cy.contains('.ant-select-dropdown-menu-item', 'ilkhombek').click();
        cy.get('.ant-time-picker-input').type('18:50');
        cy.contains('.ant-time-picker-panel-select li', '23').click();
        cy.contains('.ant-time-picker-panel-select li', '55').click();
        cy.get(':nth-child(1) > [style="padding-right: 5px;"] > :nth-child(1) > .ant-select > .ant-select-selection').click();
        cy.contains('.ant-select-dropdown-menu-item', 'Хот Дог').click();
        cy.get('.ant-col-19 > .ant-btn').click();
        cy.get(':nth-child(7) > :nth-child(3)').click();
        cy.get('.ant-tabs-nav > :nth-child(1)').contains('Предзаказ').click({force: true});
        cy.get('.ant-table-body-inner > .ant-table-fixed > .ant-table-tbody > .ant-table-row > .ant-table-row-cell-break-word > .ant-btn-danger').click();
    })
})