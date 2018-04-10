'use strict'

module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define('Submission', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    value: {
      type: DataTypes.TEXT
    }
  })

  Submission.associate = (models) => {
    Submission.belongsTo(models.User)
  }

  return Submission
}