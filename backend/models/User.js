module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('investor', 'doer'),
      allowNull: false
    },
    profileInfo: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Project, { foreignKey: 'doerId', as: 'projects' });
    User.hasMany(models.Offer, { foreignKey: 'investorId', as: 'offers' });
  };

  return User;
};
