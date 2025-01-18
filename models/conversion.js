const { DataTypes } = require("sequelize");

const Conversion = (sequelize) => {
  return sequelize.define("Conversion", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    document_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    original_format: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    converted_format: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "processing", "completed", "failed"),
      defaultValue: "pending",
    },
    original_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    converted_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    error_message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
};

module.exports = Conversion;
