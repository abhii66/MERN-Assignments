/**
 * Shopping Cart Module
 * Manages the state and operations of the user's active cart.
 */

import { getProductById, checkStock } from './product.js';

let cartItems = [];

// Adds or updates a product in the cart.
export function addToCart(productId, quantity) {
    const product = getProductById(productId);
    
    // 1. Validation: Stock availability
    if (!checkStock(productId, quantity)) {
        return "Operation failed: Insufficient stock.";
    }

    // 2. Logic: Update existing item or add new entry
    const existingItem = cartItems.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
        return `Updated: ${product.name} quantity increased.`;
    }

    cartItems.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity
    });

    return `Success: ${product.name} added to cart.`;
}

/**
 * Removes a specific product from the cart entirely.
 */
export function removeFromCart(productId) {
    const initialLength = cartItems.length;
    cartItems = cartItems.filter(item => item.productId !== productId);

    return cartItems.length < initialLength 
        ? "Item removed from cart." 
        : "Error: Item not found in cart.";
}

/**
 * Overwrites the quantity of an existing cart item.
 */
export function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) return removeFromCart(productId);

    const item = cartItems.find(item => item.productId === productId);
    if (!item) return "Error: Item not in cart.";

    if (!checkStock(productId, newQuantity)) {
        return "Error: Insufficient stock for update.";
    }

    item.quantity = newQuantity;
    return "Quantity updated successfully.";
}

/**
 * Returns the current state of the cart.
 */
export function getCartItems() {
    return [...cartItems]; // Return a copy to protect the original array
}

/**
 * Calculates the grand total using an accumulator.
 */
export function getCartTotal() {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Resets the cart to an empty state.
 */
export function clearCart() {
    cartItems = [];
    return "Cart has been emptied.";
}
