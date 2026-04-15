'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const GoodAttributeModel = app.model.define(
    'GoodAttributeModel',
    {
      id: { type: INTEGER, autoIncrement: true, primaryKey: true },
      goods_id: Number,
      attr_id: Number,
      attr_value: String,
      add_price: Number,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'sp_goods_attr',
    },
  );

  return GoodAttributeModel;
};

