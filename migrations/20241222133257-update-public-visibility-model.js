"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("public_visibility", "public_visibility", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });

    await queryInterface.changeColumn("public_visibility", "public_password", {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert changes (optional)
    await queryInterface.changeColumn("public_visibility", "public_visibility", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    });

    await queryInterface.changeColumn("public_visibility", "public_password", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
