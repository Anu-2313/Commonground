module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    amount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending'
    },
    milestones: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  });

  Offer.associate = (models) => {
    Offer.belongsTo(models.User, { foreignKey: 'investorId', as: 'investor' });
    Offer.belongsTo(models.Project, { foreignKey: 'projectId', as: 'project' });
  };

  return Offer;
};
