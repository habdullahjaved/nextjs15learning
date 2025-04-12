public function deleteFromCart(Request $request)
{
$validator = Validator::make($request->all(), [
'uuid' => 'required|string|exists:carts,uuid',
'tour_id' => 'nullable|integer|exists:tours,id',
'cartItem_id' => 'nullable|integer|exists:cart_items,id',
]);

if ($validator->fails()) {
return response()->json([
"status" => 0,
"error_code" => 400,
"error_message" => $validator->errors()->first()
], 400);
}

$cart = Cart::where('uuid', $request->input('uuid'))->first();

if (!$cart) {
return response()->json(['status' => 0, 'message' => 'Cart not found'], 404);
}

// If 'tour_id' is provided, attempt to delete the specific item
if ($request->has('tour_id')) {
$cartItem = CartItem::where('cart_id', $cart->id)
->where('tour_id', $request->input('tour_id'))
->where('id', $request->input('cartItem_id'))
->first();

if (!$cartItem) {
return response()->json([
'status' => 0,
'message' => 'Item not found in cart',
], 404);
}

$cartItem->delete();

// Refresh cart items count before deciding to delete the cart
if (!$cart->cartItems()->exists()) {
$cart->delete();
return response()->json([
'status' => 1,
'message' => 'Item deleted successfully. Since no items remained, the cart was deleted.'
]);
}

return response()->json([
'status' => 1,
'message' => 'Item deleted successfully',
'remaining_cart' => $cart->fresh()->cartItems,
]);
}

// If no 'tour_id' provided, delete the entire cart
$cart->cartItems()->delete(); // Ensures all items are deleted
$cart->delete();

return response()->json([
'status' => 1,
'message' => 'Cart cleared successfully'
]);
}