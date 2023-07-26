// actions.js
export const addToCart = (course) => ({
  type: 'ADD_TO_CART',
  payload: course,
});

export const removeFromCart = (courseId) => ({
  type: 'REMOVE_FROM_CART',
  payload: courseId,
});

export const increaseQuantity = (courseId) => ({
  type: 'INCREASE_QUANTITY',
  payload: courseId,
});

export const decreaseQuantity = (courseId) => ({
  type: 'DECREASE_QUANTITY',
  payload: courseId,
});
