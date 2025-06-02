'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsTo(models.Users, {
        foreignKey: 'userId'
      });
    }
  }
  Orders.init({
    userId: DataTypes.INTEGER,
    saladCount: DataTypes.INTEGER,
    baconCount: DataTypes.INTEGER,
    cheeseCount: DataTypes.INTEGER,
    meatCount: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'Orders',
    timestamps: false,
  });
  return Orders;
};