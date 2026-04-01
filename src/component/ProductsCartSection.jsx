const tagStyles = {
  popular: "bg-violet-100 text-violet-600",
  new: "bg-green-100 text-green-600",
  "best-seller": "bg-amber-100 text-amber-600",
};

const ProductsCartSection = ({
  activeTab,
  setActiveTab,
  products,
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  onCheckout,
  addedProductId,
}) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <section id="products" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Premium Digital Tools
          </h2>
          <p className="mt-4 text-gray-500">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("products")}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                activeTab === "products"
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                  : "text-gray-700"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                activeTab === "cart"
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                  : "text-gray-700"
              }`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {activeTab === "products" ? (
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
                    <img
                      src={product.icon}
                      alt={product.name}
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      tagStyles[product.tagType]
                    }`}
                  >
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {product.name}
                </h3>

                <p className="mt-4 min-h-[72px] text-gray-500">
                  {product.description}
                </p>

                <div className="mt-5">
                  <span className="text-4xl font-extrabold text-slate-900">
                    ${product.price}
                  </span>
                  <span className="ml-1 text-lg text-gray-400">
                    /{product.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <span className="text-lg text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onAddToCart(product)}
                  className="mt-8 w-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
                >
                  {addedProductId === product.id ? "Added to cart" : "Buy Now"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-14 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Your Cart</h3>

            {cartItems.length === 0 ? (
              <div className="py-16 text-center text-lg text-gray-500">
                Your cart is empty.
              </div>
            ) : (
              <>
                <div className="mt-8 space-y-4">
                  {cartItems.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="flex flex-col gap-4 rounded-xl bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="h-8 w-8 object-contain"
                          />
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-slate-900">
                            {item.name}
                          </h4>
                          <p className="text-gray-500">${item.price}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveFromCart(index)}
                        className="text-sm font-semibold text-pink-500 hover:text-pink-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <p className="text-lg text-gray-500">Total:</p>
                  <p className="text-3xl font-extrabold text-slate-900">
                    ${totalPrice}
                  </p>
                </div>

                <button
                  onClick={onCheckout}
                  className="mt-8 w-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-4 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
                >
                  Proceed To Checkout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsCartSection;
