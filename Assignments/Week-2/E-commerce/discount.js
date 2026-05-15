// Discount & Coupon Module
// Handles validation and calculation of promotional offers

// Coupon data structured as a registry for O(1) lookup efficiency
const COUPON_REGISTRY = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// Validates if a coupon can be applied to the current cart
export function validateCoupon(couponCode, cartTotal, cartItems) {
  const coupon = COUPON_REGISTRY[couponCode];

  // 1. Check existence
  if (!coupon) {
    return { valid: false, message: 'Invalid coupon code.' };
  }

  // 2. Check minimum amount requirement
  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: `Minimum amount of ${coupon.minAmount} required.` };
  }

  // 3. Check category requirement
  if (coupon.category) {
    const hasCategoryItem = cartItems.some(item => item.category === coupon.category);
    if (!hasCategoryItem) {
      return { valid: false, message: `Coupon only applies to ${coupon.category} category.` };
    }
  }

  return { valid: true, coupon };
}

// Calculates the numerical discount value
export function calculateDiscount(coupon, cartTotal) {
  if (coupon.type === 'percentage') {
    return (cartTotal * coupon.value) / 100;
  }
  
  if (coupon.type === 'flat') {
    // Ensure discount doesn't exceed the cart total
    return Math.min(coupon.value, cartTotal);
  }

  return 0;
}

// Orchestrates validation and application to return final summary
export function applyDiscount(cartTotal, couponCode, cartItems) {
  const validation = validateCoupon(couponCode, cartTotal, cartItems);

  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }

  const discountAmount = calculateDiscount(validation.coupon, cartTotal);
  
  return {
    originalTotal: cartTotal,
    discount: discountAmount,
    finalTotal: cartTotal - discountAmount,
    message: 'Discount applied successfully.'
  };
}
