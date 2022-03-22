'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Contacts', [{
            name: 'John Doe',
            number: '89099099900',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            name: 'Maxim',
            number: '88889998877',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            name: 'Jane',
            number: '89998889988',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Contacts', null, {});
    }
};
