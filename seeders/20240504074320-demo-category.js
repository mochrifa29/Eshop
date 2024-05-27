'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Categories', 
      [
        {
          id: 1,
          name: 'Iphone',
          description: 'jsdvhjgsahjgjhsgjhg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          id: 2,
          name: 'Android',
          description: 'jsdvhjgsahjgjhsgjhg',
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          id: 3,
          name: 'MacBook',
          description: null,
          createdAt : new Date,
          updatedAt : new Date
        }
    ]);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {

    return await queryInterface.bulkDelete('Categories', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
