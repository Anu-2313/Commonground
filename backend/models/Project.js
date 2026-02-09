module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fundingStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'seeking'
    }
  });

  Project.associate = (models) => {
    Project.belongsTo(models.User, { foreignKey: 'doerId', as: 'doer' });
    Project.hasMany(models.Offer, { foreignKey: 'projectId', as: 'offers' });
  };

  return Project;
};
