import React from 'react';
import OrderCell from './OrderCell';

const OrderCellList = ({
  menuList,
  onPlus,
  onMinus,
  onDel,
}) => {
  const ordercells = menuList.map(w => (
    <OrderCell
      key={w.id}
      name={w.name}
      price={w.price}
      options={w.options}
      count={w.count}
      id={w.id}
      onPlus={() => onPlus(w.id)}
      onMinus={() => onMinus(w.id)}
      onDel={() => onDel(w.id)}
    />
  ));
  return (
    <ul>{ordercells}</ul>
  );
};

export default OrderCellList;