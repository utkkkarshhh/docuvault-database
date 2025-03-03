"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("document", "name", "unique_name");

    await queryInterface.addColumn("document", "upload_name", {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addIndex("document", {
      fields: ["upload_name"],
      unique: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex("document", ["upload_name"]);
    await queryInterface.removeColumn("document", "upload_name");
    await queryInterface.renameColumn("document", "unique_name", "name");
  },
};
