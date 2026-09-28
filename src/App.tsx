import { useState, type FormEvent } from "react"

const assetRoot = "/assets/western-clothes"

type Product = {
  name: string
  price: string
  image: string
  alt: string
}

const products = {
  floral: {
    name: "Floral Midi Dress",
    price: "₹ 1,499",
    image: `${assetRoot}/product-floral-dress.jpg`,
    alt: "Woman wearing a floral midi dress",
  },
  denim: {
    name: "Denim Jacket",
    price: "₹ 2,199",
    image: `${assetRoot}/product-denim-jacket.jpg`,
    alt: "Classic button-front denim jacket",
  },
  boho: {
    name: "Boho Top",
    price: "₹ 799",
    image: `${assetRoot}/product-boho-top.jpg`,
    alt: "Woman in a western-inspired boho outfit",
  },
  jeans: {
    name: "Straight-Cut Jeans",
    price: "₹ 1,699",
    image: `${assetRoot}/product-jeans.jpg`,
    alt: "Denim jeans styled in a neutral flat lay",
  },
  belt: {
    name: "Leather Belt Bag",
    price: "₹ 999",
    image: `${assetRoot}/product-belt-accessory.jpg`,
    alt: "Western leather belt and denim styling",
  },
  plaid: {
    name: "Plaid Skirt",
    price: "₹ 1,099",
    image: `${assetRoot}/product-plaid.jpg`,
    alt: "Western apparel arranged in a neutral flat lay",
  },
  boots: {
    name: "Cowboy Boots",
    price: "₹ 1,299",
    image: `${assetRoot}/product-boots.jpg`,
    alt: "Pair of classic cowboy boots",
  },
} satisfies Record<string, Product>

const categoryImages = [
  {
    name: "Women",
    image: `${assetRoot}/category-women.jpg`,
    alt: "Woman in a floral western-style dress",
  },
  {
    name: "Men",
    image: `${assetRoot}/category-men.jpg`,
    alt: "Man wearing a denim jacket",
  },
  {
    name: "New Arrivals",
    image: `${assetRoot}/category-new-arrivals.jpg`,
    alt: "New season coats on a clothing rack",
  },
  {
    name: "Sale",
    image: `${assetRoot}/category-sale.jpg`,
    alt: "Cowboy boots and hat",
  },
]

const floralGallery = [
  products.floral.image,
  `${assetRoot}/product-floral-dress-detail-1.jpg`,
  `${assetRoot}/product-floral-dress-detail-2.jpg`,
  `${assetRoot}/product-floral-dress-detail-3.jpg`,
]

export default function App() {
  const customerLogin = useFormValidation(validateCustomerLogin)
  const checkout = useFormValidation(validateCheckout)
  const register = useFormValidation(validateRegister)
  const contact = useFormValidation(validateContact)
  const adminLogin = useFormValidation(validateAdminLogin)

  return (
    <div className="min-h-screen bg-gray-100 px-3 py-6 sm:px-6 sm:py-10">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 text-center sm:mb-10">
          <BrandLogo variant="stacked" className="mx-auto" />
          <p className="text-sm text-gray-500 mt-1">
            Mid-Fidelity Website Wireframe — 11 Screens
          </p>
          <div className="mt-2 h-px bg-gray-300" />
        </div>

        <div className="space-y-8 sm:space-y-12">
          {/* ── SCREEN 1: LOGIN PAGE ─────────────────────────────────── */}
          <Screen number={1} title="LOGIN PAGE">
            <div className="flex flex-col items-center px-4 py-8 sm:px-6 sm:py-10">
              <BrandLogo variant="stacked" tagline className="mb-7" />
              <form
                className="w-full max-w-sm space-y-3"
                noValidate
                onSubmit={customerLogin.handleSubmit}
              >
                <InputField
                  label="Email / Username"
                  name="identity"
                  placeholder="Enter your email or username"
                  error={customerLogin.errors.identity}
                />
                <InputField
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  error={customerLogin.errors.password}
                />
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <CheckBox /> Remember Me
                  </label>
                  <span className="underline cursor-pointer text-gray-500">
                    Forgot Password?
                  </span>
                </div>
                <WireButton label="LOGIN" />
                <ValidationSuccess
                  message="Login details validated successfully."
                  visible={customerLogin.success}
                />
                <p className="text-center text-xs text-gray-500 mt-2">
                  {"Don't have an account? "}
                  <span className="underline cursor-pointer text-gray-700 font-medium">
                    Register here
                  </span>
                </p>
              </form>
            </div>
          </Screen>

          {/* ── SCREEN 2: HOME PAGE ──────────────────────────────────── */}
          <Screen number={2} title="HOME PAGE">
            <NavBar />
            <div className="space-y-5 px-4 py-4 sm:px-6">
              <div className="relative">
                <WireImage
                  src={`${assetRoot}/hero-western-fashion.jpg`}
                  alt="Woman wearing a western-inspired denim outfit"
                  w="w-full"
                  h="h-56 sm:h-52"
                  eager
                  objectPosition="center 42%"
                />
                <div className="absolute inset-0 bg-gray-900/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="mx-3 border border-gray-300 bg-white/90 px-4 py-3 text-center sm:px-6">
                    <p className="text-xs text-gray-500 uppercase tracking-widest">
                      New Collection 2026
                    </p>
                    <h2 className="my-1 text-xl font-bold text-gray-800 sm:text-2xl">
                      New Styles, New You
                    </h2>
                    <p className="text-xs text-gray-600 mb-3">
                      Explore the latest western fashion trends
                    </p>
                    <button className="bg-gray-800 text-white text-xs px-5 py-2 border border-gray-800 hover:bg-gray-700">
                      SHOP NOW →
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <SectionLabel>Shop by Category</SectionLabel>
                <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {categoryImages.map((category) => (
                    <div
                      key={category.name}
                      className="border border-gray-300 text-center p-3 bg-white"
                    >
                      <WireImage
                        src={category.image}
                        alt={category.alt}
                        w="w-full"
                        h="h-24"
                      />
                      <p className="text-xs font-semibold text-gray-700 mt-2 uppercase tracking-wide">
                        {category.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionLabel>Featured Products</SectionLabel>
                <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {[
                    products.denim,
                    products.floral,
                    products.boots,
                    products.plaid,
                  ].map((product) => (
                    <MiniProductCard key={product.name} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 3: PRODUCT / CATEGORY PAGE ───────────────────── */}
          <Screen number={3} title="PRODUCT / CATEGORY PAGE">
            <NavBar />
            <div className="px-4 py-4 sm:px-6">
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-base font-bold text-gray-800">
                  {"Women's Collection"}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Sort by:</span>
                  <select className="border border-gray-300 text-xs px-2 py-1 bg-white text-gray-700">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full space-y-4 md:w-44 md:flex-shrink-0">
                  <FilterGroup title="Category">
                    {[
                      "Dresses",
                      "Tops",
                      "Jeans",
                      "Jackets",
                      "Skirts",
                      "Shorts",
                    ].map((i) => (
                      <FilterItem key={i} label={i} />
                    ))}
                  </FilterGroup>
                  <FilterGroup title="Price Range">
                    <div className="space-y-1 mb-1">
                      <div className="text-xs text-gray-500">₹ 0 — ₹ 5,000</div>
                      <div className="h-1.5 bg-gray-200 rounded relative">
                        <div className="absolute left-1/4 right-1/4 h-full bg-gray-600 rounded" />
                      </div>
                    </div>
                    {[
                      "Under ₹500",
                      "₹500–₹1000",
                      "₹1000–₹2000",
                      "Above ₹2000",
                    ].map((i) => (
                      <FilterItem key={i} label={i} />
                    ))}
                  </FilterGroup>
                  <FilterGroup title="Size">
                    <div className="flex flex-wrap gap-1 mt-1">
                      {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
                        <span
                          key={s}
                          className="border border-gray-400 text-xs px-2 py-0.5 text-gray-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </FilterGroup>
                  <FilterGroup title="Color">
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {["Black", "White", "Grey", "Navy", "Brown", "Beige"].map(
                        (c) => (
                          <span
                            key={c}
                            className="text-xs text-gray-600 border border-gray-300 px-1.5 py-0.5"
                          >
                            {c}
                          </span>
                        ),
                      )}
                    </div>
                  </FilterGroup>
                  <button className="w-full border border-gray-400 text-xs py-1.5 text-gray-600 mt-1">
                    Clear Filters
                  </button>
                </div>
                <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    products.floral,
                    products.denim,
                    products.boho,
                    products.jeans,
                    products.belt,
                    products.plaid,
                  ].map((product) => (
                    <ProductCard key={product.name} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 4: PRODUCT DETAILS PAGE ──────────────────────── */}
          <Screen number={4} title="PRODUCT DETAILS PAGE">
            <NavBar />
            <div className="px-4 py-4 sm:px-6">
              <div className="text-xs text-gray-500 mb-4">
                Home &rsaquo; Women &rsaquo; Dresses &rsaquo;{" "}
                <span className="text-gray-800 font-medium">
                  Floral Midi Dress
                </span>
              </div>
              <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                <div className="flex min-w-0 flex-col gap-2">
                  <WireImage
                    src={products.floral.image}
                    alt={products.floral.alt}
                    w="w-full sm:w-64"
                    h="h-80"
                    objectPosition="center 30%"
                  />
                  <div className="flex gap-2">
                    {floralGallery.map((image, index) => (
                      <WireImage
                        key={image}
                        src={image}
                        alt={`Floral midi dress view ${index + 1}`}
                        w="w-[calc((100%-1.5rem)/4)] sm:w-14"
                        h="h-14"
                        objectPosition="center 30%"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      Floral Midi Dress
                    </h2>
                    <div className="text-xs text-gray-500 mt-0.5">
                      SKU: WC-DR-2026-001
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    ₹ 1,499
                    <span className="text-sm font-normal text-gray-400 line-through ml-2">
                      ₹ 2,000
                    </span>
                    <span className="text-xs text-gray-600 ml-2 bg-gray-200 px-2 py-0.5">
                      25% OFF
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-5">
                    A stunning floral midi dress perfect for any occasion. Made
                    with premium breathable fabric, this versatile piece can be
                    styled for casual outings or semi-formal events. Available
                    in multiple sizes and colors.
                  </p>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide block mb-1">
                      Select Size
                    </label>
                    <div className="flex gap-2">
                      {["XS", "S", "M", "L", "XL"].map((s) => (
                        <div
                          key={s}
                          className="border border-gray-400 text-xs w-9 h-9 flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100"
                        >
                          {s}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-1 underline cursor-pointer">
                      Size Guide
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide block mb-1">
                      Select Color
                    </label>
                    <div className="flex gap-2">
                      {[
                        "bg-gray-200",
                        "bg-gray-400",
                        "bg-gray-600",
                        "bg-gray-800",
                      ].map((c, i) => (
                        <div
                          key={i}
                          className={`w-7 h-7 rounded-full border-2 border-gray-400 ${c}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide block mb-1">
                      Quantity
                    </label>
                    <div className="flex items-center">
                      <button className="border border-gray-400 text-gray-700 w-8 h-8 text-base">
                        −
                      </button>
                      <div className="border-t border-b border-gray-400 w-10 h-8 flex items-center justify-center text-xs text-gray-700">
                        1
                      </div>
                      <button className="border border-gray-400 text-gray-700 w-8 h-8 text-base">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 bg-gray-800 text-white text-xs py-2.5 border border-gray-800 hover:bg-gray-700 font-medium tracking-wide uppercase">
                      Add to Cart
                    </button>
                    <button className="flex-1 border border-gray-800 text-gray-800 text-xs py-2.5 hover:bg-gray-100 font-medium tracking-wide uppercase">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 5: SHOPPING CART PAGE ─────────────────────────── */}
          <Screen number={5} title="SHOPPING CART PAGE">
            <NavBar />
            <div className="px-4 py-4 sm:px-6">
              <h2 className="text-base font-bold text-gray-800 mb-4">
                Shopping Cart{" "}
                <span className="text-sm font-normal text-gray-500">
                  (3 items)
                </span>
              </h2>
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="min-w-0 flex-1 overflow-x-auto">
                  <div className="min-w-[600px] space-y-3">
                    <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 border-b border-gray-200 pb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                      <span className="w-16">Product</span>
                      <span>Details</span>
                      <span>Price</span>
                      <span>Qty</span>
                      <span>Remove</span>
                    </div>
                    {[
                      {
                        name: "Floral Midi Dress",
                        size: "M",
                        color: "Grey",
                        price: "₹ 1,499",
                        qty: 1,
                        image: products.floral.image,
                        alt: products.floral.alt,
                      },
                      {
                        name: "Denim Jacket",
                        size: "L",
                        color: "Black",
                        price: "₹ 2,199",
                        qty: 2,
                        image: products.denim.image,
                        alt: products.denim.alt,
                      },
                      {
                        name: "Boho Top",
                        size: "S",
                        color: "White",
                        price: "₹ 799",
                        qty: 1,
                        image: products.boho.image,
                        alt: products.boho.alt,
                      },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 items-center py-3 border-b border-gray-100"
                      >
                        <WireImage
                          src={item.image}
                          alt={item.alt}
                          w="w-16"
                          h="h-20"
                        />
                        <div>
                          <p className="text-xs font-semibold text-gray-800">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Size: {item.size} | Color: {item.color}
                          </p>
                        </div>
                        <div className="text-xs font-semibold text-gray-800 whitespace-nowrap">
                          {item.price}
                        </div>
                        <div className="flex items-center">
                          <button className="border border-gray-300 text-gray-600 w-6 h-6 text-sm">
                            −
                          </button>
                          <span className="border-t border-b border-gray-300 w-8 h-6 flex items-center justify-center text-xs text-gray-700">
                            {item.qty}
                          </span>
                          <button className="border border-gray-300 text-gray-600 w-6 h-6 text-sm">
                            +
                          </button>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 text-xs border border-gray-300 w-6 h-6 flex items-center justify-center">
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-fit w-full border border-gray-300 p-4 lg:w-60 lg:flex-shrink-0">
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-gray-800 border-b border-gray-200 pb-2">
                      Order Summary
                    </h3>
                    <SummaryRow label="Subtotal (3 items)" value="₹ 6,496" />
                    <SummaryRow label="Shipping" value="FREE" />
                    <SummaryRow label="Discount" value="− ₹ 500" />
                    <div className="border-t border-gray-300 pt-2">
                      <SummaryRow label="Total" value="₹ 5,996" bold />
                    </div>
                    <button className="w-full bg-gray-800 text-white text-xs py-2.5 border border-gray-800 hover:bg-gray-700 font-medium uppercase tracking-wide mt-2">
                      Proceed to Checkout →
                    </button>
                    <p className="text-xs text-center text-gray-400 underline cursor-pointer">
                      Continue Shopping
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 6: CHECKOUT PAGE ──────────────────────────────── */}
          <Screen number={6} title="CHECKOUT PAGE">
            <NavBar />
            <form
              className="px-4 py-4 sm:px-6"
              noValidate
              onSubmit={checkout.handleSubmit}
            >
              <h2 className="text-base font-bold text-gray-800 mb-4">
                Checkout
              </h2>
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex-1 space-y-5">
                  <div className="border border-gray-300 p-4">
                    <h3 className="text-sm font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                      1. Delivery Address
                    </h3>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <InputField
                        label="Full Name"
                        name="fullName"
                        placeholder="e.g. Priya Sharma"
                        error={checkout.errors.fullName}
                      />
                      <InputField
                        label="Mobile Number"
                        name="mobile"
                        placeholder="10-digit mobile number"
                        error={checkout.errors.mobile}
                      />
                      <div className="sm:col-span-2">
                        <InputField
                          label="Address (House No., Street, Area)"
                          name="address"
                          placeholder="Enter full address"
                          error={checkout.errors.address}
                        />
                      </div>
                      <InputField
                        label="City"
                        name="city"
                        placeholder="City"
                        error={checkout.errors.city}
                      />
                      <InputField
                        label="State"
                        name="state"
                        placeholder="State"
                        error={checkout.errors.state}
                      />
                      <InputField
                        label="Pincode"
                        name="pincode"
                        placeholder="6-digit pincode"
                        error={checkout.errors.pincode}
                      />
                      <InputField
                        label="Landmark (Optional)"
                        name="landmark"
                        placeholder="Near landmark"
                      />
                    </div>
                  </div>
                  <div className="border border-gray-300 p-4">
                    <h3 className="text-sm font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                      2. Payment Method
                    </h3>
                    <div className="space-y-2">
                      {[
                        {
                          id: "cod",
                          label: "Cash on Delivery (COD)",
                          desc: "Pay when your order arrives",
                        },
                        {
                          id: "upi",
                          label: "UPI / QR Code",
                          desc: "PhonePe, GPay, Paytm, BHIM",
                        },
                        {
                          id: "card",
                          label: "Credit / Debit Card",
                          desc: "Visa, Mastercard, RuPay",
                        },
                        {
                          id: "net",
                          label: "Net Banking",
                          desc: "All major Indian banks",
                        },
                      ].map((pm) => (
                        <label
                          key={pm.id}
                          className="flex items-start gap-3 p-3 border border-gray-300 cursor-pointer hover:bg-gray-50"
                        >
                          <input
                            type="radio"
                            name="payment"
                            className="mt-0.5"
                            defaultChecked={pm.id === "cod"}
                          />
                          <div>
                            <p className="text-xs font-semibold text-gray-800">
                              {pm.label}
                            </p>
                            <p className="text-xs text-gray-500">{pm.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-64 lg:flex-shrink-0">
                  <div className="border border-gray-300 p-4 space-y-3">
                    <h3 className="text-sm font-bold text-gray-800 border-b border-gray-200 pb-2">
                      3. Order Summary
                    </h3>
                    {[
                      {
                        name: "Floral Midi Dress × 1",
                        price: "₹ 1,499",
                        image: products.floral.image,
                        alt: products.floral.alt,
                      },
                      {
                        name: "Denim Jacket × 2",
                        price: "₹ 4,398",
                        image: products.denim.image,
                        alt: products.denim.alt,
                      },
                      {
                        name: "Boho Top × 1",
                        price: "₹ 799",
                        image: products.boho.image,
                        alt: products.boho.alt,
                      },
                    ].map((it) => (
                      <div
                        key={it.name}
                        className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-2 text-xs text-gray-700"
                      >
                        <WireImage
                          src={it.image}
                          alt={it.alt}
                          w="w-10"
                          h="h-12"
                        />
                        <span>{it.name}</span>
                        <span className="font-medium">{it.price}</span>
                      </div>
                    ))}
                    <div className="border-t border-gray-200 pt-2 space-y-1">
                      <SummaryRow label="Subtotal" value="₹ 6,696" />
                      <SummaryRow label="Shipping" value="FREE" />
                      <SummaryRow label="Discount" value="− ₹ 500" />
                      <div className="border-t border-gray-300 pt-2">
                        <SummaryRow label="Grand Total" value="₹ 6,196" bold />
                      </div>
                    </div>
                    <button className="w-full bg-gray-800 text-white text-xs py-2.5 border border-gray-800 hover:bg-gray-700 font-medium uppercase tracking-wide mt-2">
                      Place Order →
                    </button>
                    <ValidationSuccess
                      message="Checkout details validated successfully."
                      visible={checkout.success}
                    />
                  </div>
                </div>
              </div>
            </form>
          </Screen>

          {/* ── SCREEN 7: REGISTER PAGE ──────────────────────────────── */}
          <Screen number={7} title="REGISTER PAGE">
            <div className="flex flex-col items-center px-4 py-8 sm:px-6 sm:py-10">
              <div className="mb-5 text-center">
                <BrandLogo variant="stacked" className="mx-auto" />
                <h2 className="text-base font-semibold text-gray-700 mt-2">
                  Create an Account
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Join us and explore the latest western styles
                </p>
              </div>
              <form
                className="w-full max-w-sm space-y-3"
                noValidate
                onSubmit={register.handleSubmit}
              >
                <InputField
                  label="Full Name"
                  name="fullName"
                  placeholder="Enter your full name"
                  error={register.errors.fullName}
                />
                <InputField
                  label="Email Address"
                  name="email"
                  placeholder="Enter your email address"
                  type="email"
                  error={register.errors.email}
                />
                <InputField
                  label="Mobile Number"
                  name="mobile"
                  placeholder="10-digit mobile number"
                  error={register.errors.mobile}
                />
                <InputField
                  label="Password"
                  name="password"
                  placeholder="Create a password (min. 8 characters)"
                  type="password"
                  error={register.errors.password}
                />
                <InputField
                  label="Confirm Password"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  type="password"
                  error={register.errors.confirmPassword}
                />
                <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
                  <CheckBox name="terms" />
                  <span>
                    {"I agree to the "}
                    <span className="underline">Terms & Conditions</span>
                    {" and "}
                    <span className="underline">Privacy Policy</span>
                  </span>
                </label>
                <ValidationMessage message={register.errors.terms} />
                <WireButton label="REGISTER" />
                <ValidationSuccess
                  message="Registration details validated successfully."
                  visible={register.success}
                />
                <p className="text-center text-xs text-gray-500 mt-2">
                  {"Already have an account? "}
                  <span className="underline cursor-pointer text-gray-700 font-medium">
                    Login here
                  </span>
                </p>
              </form>
            </div>
          </Screen>

          {/* ── SCREEN 8: ABOUT US PAGE ──────────────────────────────── */}
          <Screen number={8} title="ABOUT US PAGE">
            <NavBar />
            <div className="space-y-6 px-4 py-6 sm:px-6">
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">
                  About Western Clothes
                </h2>
                <div className="w-16 h-0.5 bg-gray-400 mx-auto mt-2" />
              </div>
              <div className="flex flex-col items-start gap-6 md:flex-row md:gap-8">
                <WireImage
                  src={`${assetRoot}/about-boutique.jpg`}
                  alt="Interior of a clothing boutique with garments on display"
                  w="w-full sm:w-64"
                  h="h-44"
                  className="sm:flex-shrink-0"
                  objectPosition="center"
                />
                <div className="space-y-3">
                  <p className="text-xs text-gray-600 leading-5">
                    Western Clothes is a premier e-commerce destination for
                    authentic western-style fashion. Founded in 2020, we bring
                    you carefully curated collections of denim, plaid, boots,
                    and everything in between. Our mission is to make western
                    fashion accessible, affordable, and trendsetting for
                    everyone across India.
                  </p>
                  <p className="text-xs text-gray-600 leading-5">
                    We partner directly with trusted manufacturers and designers
                    to ensure every product meets our high standards of quality,
                    comfort, and style. From casual everyday wear to statement
                    pieces, Western Clothes is your one-stop shop for all things
                    western.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Quality Products",
                    desc: "Premium fabrics and craftsmanship in every item",
                  },
                  {
                    title: "Affordable Prices",
                    desc: "Best prices without compromising on quality",
                  },
                  {
                    title: "Happy Customers",
                    desc: "10,000+ satisfied customers across India",
                  },
                  {
                    title: "Trusted Brand",
                    desc: "Verified seller with a 4.8/5 average rating",
                  },
                ].map((f, index) => (
                  <div
                    key={f.title}
                    className="border border-gray-300 p-4 text-center space-y-2"
                  >
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-200 text-xs font-bold text-gray-600">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                      {f.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-4">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 9: CONTACT US PAGE ────────────────────────────── */}
          <Screen number={9} title="CONTACT US PAGE">
            <NavBar />
            <div className="space-y-4 px-4 py-6 sm:px-6">
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">
                  Contact Us
                </h2>
                <div className="w-16 h-0.5 bg-gray-400 mx-auto mt-2" />
                <p className="text-xs text-gray-500 mt-2">
                  {"We'd love to hear from you. Reach out any time!"}
                </p>
              </div>
              <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                <div className="w-full space-y-4 md:w-64 md:flex-shrink-0">
                  <h3 className="text-sm font-bold text-gray-700 border-b border-gray-200 pb-1">
                    Get in Touch
                  </h3>
                  {[
                    {
                      icon: "AD",
                      label: "Address",
                      val: "123, Fashion Street, Connaught Place, New Delhi — 110001",
                    },
                    { icon: "PH", label: "Phone", val: "+91 98765 43210" },
                    {
                      icon: "EM",
                      label: "Email",
                      val: "support@westernclothes.in",
                    },
                    {
                      icon: "WB",
                      label: "Website",
                      val: "www.westernclothes.in",
                    },
                  ].map((c) => (
                    <div key={c.label} className="flex gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-gray-300 bg-gray-200 text-[10px] font-bold text-gray-600">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-700">
                          {c.label}
                        </p>
                        <p className="text-xs text-gray-500 leading-4">
                          {c.val}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="border border-gray-200 p-3 mt-2">
                    <p className="text-xs font-semibold text-gray-700 mb-1">
                      Business Hours
                    </p>
                    <p className="text-xs text-gray-500">
                      Mon – Sat: 9:00 AM – 6:00 PM
                    </p>
                    <p className="text-xs text-gray-500">Sunday: Closed</p>
                  </div>
                </div>
                <form
                  className="min-w-0 flex-1 space-y-3 border border-gray-300 p-4 sm:p-5"
                  noValidate
                  onSubmit={contact.handleSubmit}
                >
                  <h3 className="text-sm font-bold text-gray-700 border-b border-gray-200 pb-2">
                    Send Us a Message
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <InputField
                      label="Your Name"
                      name="name"
                      placeholder="Enter your name"
                      error={contact.errors.name}
                    />
                    <InputField
                      label="Email Address"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      error={contact.errors.email}
                    />
                  </div>
                  <InputField
                    label="Subject"
                    name="subject"
                    placeholder="Enter subject"
                    error={contact.errors.subject}
                  />
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      aria-invalid={Boolean(contact.errors.message)}
                      className={`h-28 w-full resize-none border bg-white px-3 py-2 text-xs text-gray-700 outline-none placeholder-gray-400 ${
                        contact.errors.message
                          ? "border-gray-800"
                          : "border-gray-300"
                      }`}
                      placeholder="Write your message here..."
                    />
                    <ValidationMessage message={contact.errors.message} />
                  </div>
                  <button
                    type="submit"
                    className="bg-gray-800 text-white text-xs px-6 py-2.5 border border-gray-800 hover:bg-gray-700 font-medium uppercase tracking-wide"
                  >
                    Send Message →
                  </button>
                  <ValidationSuccess
                    message="Message details validated successfully."
                    visible={contact.success}
                  />
                </form>
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 10: ADMIN LOGIN PAGE ──────────────────────────── */}
          <Screen number={10} title="ADMIN LOGIN PAGE">
            <div className="flex flex-col items-center px-4 py-8 sm:px-6 sm:py-10">
              <div className="mb-6 text-center">
                <BrandLogo variant="stacked" className="mx-auto" />
                <div className="text-xs text-gray-500 tracking-widest uppercase border border-gray-300 px-3 py-0.5 inline-block mt-2">
                  Admin Portal
                </div>
              </div>
              <form
                className="w-full max-w-xs space-y-4 border border-gray-300 bg-white p-5 sm:p-6"
                noValidate
                onSubmit={adminLogin.handleSubmit}
              >
                <h2 className="text-sm font-bold text-gray-800 text-center uppercase tracking-widest border-b border-gray-200 pb-3">
                  Admin Login
                </h2>
                <InputField
                  label="Username"
                  name="username"
                  placeholder="Enter admin username"
                  error={adminLogin.errors.username}
                />
                <InputField
                  label="Password"
                  name="password"
                  placeholder="Enter admin password"
                  type="password"
                  error={adminLogin.errors.password}
                />
                <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                  <CheckBox /> Remember Me
                </label>
                <WireButton label="LOGIN" />
                <ValidationSuccess
                  message="Admin credentials validated successfully."
                  visible={adminLogin.success}
                />
                <p className="text-center text-xs text-gray-400 mt-1">
                  Authorized personnel only
                </p>
              </form>
            </div>
          </Screen>

          {/* ── SCREEN 11: ADMIN DASHBOARD PAGE ─────────────────────── */}
          <Screen number={11} title="ADMIN DASHBOARD PAGE">
            <div className="flex min-h-96 flex-col md:flex-row">
              <div className="flex w-full flex-col bg-gray-800 text-white md:w-44 md:flex-shrink-0">
                <div className="px-4 py-4 border-b border-gray-600">
                  <BrandLogo inverse variant="sidebar" />
                  <div className="text-xs text-gray-400 mt-0.5">
                    Admin Panel
                  </div>
                </div>
                <nav className="grid flex-1 grid-cols-2 py-2 sm:grid-cols-4 md:block md:py-3">
                  {[
                    { icon: "DB", label: "Dashboard", active: true },
                    { icon: "PR", label: "Products", active: false },
                    { icon: "OR", label: "Orders", active: false },
                    { icon: "CU", label: "Customers", active: false },
                    { icon: "CA", label: "Categories", active: false },
                    { icon: "CP", label: "Coupons", active: false },
                    { icon: "RP", label: "Reports", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2.5 px-4 py-2.5 text-xs cursor-pointer ${
                        item.active
                          ? "bg-gray-600 font-semibold"
                          : "text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      <span className="w-5 text-[9px] font-bold text-gray-300">
                        {item.icon}
                      </span>
                      {item.label}
                    </div>
                  ))}
                </nav>
                <div className="px-4 py-3 border-t border-gray-600">
                  <div className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer hover:text-white">
                    <span>↩</span> Logout
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1 space-y-5 bg-gray-50 p-3 sm:p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-base font-bold text-gray-800">
                    Dashboard Overview
                  </h2>
                  <div className="text-xs text-gray-500">
                    Last updated: 14 Aug 2026, 10:30 AM
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                  {[
                    {
                      label: "Total Orders",
                      value: "1,284",
                      sub: "+12% this month",
                    },
                    {
                      label: "Total Customers",
                      value: "4,670",
                      sub: "+8% this month",
                    },
                    {
                      label: "Total Products",
                      value: "342",
                      sub: "18 new this week",
                    },
                    {
                      label: "Total Revenue",
                      value: "₹ 8,42,500",
                      sub: "+15% this month",
                    },
                  ].map((c) => (
                    <div
                      key={c.label}
                      className="border border-gray-300 bg-white p-4 space-y-1"
                    >
                      <div className="w-8 h-8 bg-gray-200 mb-2" />
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        {c.label}
                      </p>
                      <p className="text-lg font-bold text-gray-800">
                        {c.value}
                      </p>
                      <p className="text-xs text-gray-400">{c.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="border border-gray-300 bg-white">
                  <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                      Recent Orders
                    </h3>
                    <span className="text-xs text-gray-500 underline cursor-pointer">
                      View All
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-[720px] w-full text-xs">
                      <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          {[
                            "Order ID",
                            "Customer",
                            "Items",
                            "Date",
                            "Amount",
                            "Status",
                          ].map((h) => (
                            <th
                              key={h}
                              className="text-left px-4 py-2.5 text-gray-500 font-semibold uppercase tracking-wide text-xs"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            id: "#ORD-1052",
                            name: "Priya Sharma",
                            items: "3 items",
                            date: "14 Aug 2026",
                            amount: "₹ 3,497",
                            status: "Delivered",
                          },
                          {
                            id: "#ORD-1051",
                            name: "Rohan Mehta",
                            items: "1 item",
                            date: "13 Aug 2026",
                            amount: "₹ 1,499",
                            status: "Shipped",
                          },
                          {
                            id: "#ORD-1050",
                            name: "Anjali Nair",
                            items: "2 items",
                            date: "13 Aug 2026",
                            amount: "₹ 2,998",
                            status: "Processing",
                          },
                          {
                            id: "#ORD-1049",
                            name: "Vikram Singh",
                            items: "4 items",
                            date: "12 Aug 2026",
                            amount: "₹ 5,196",
                            status: "Pending",
                          },
                          {
                            id: "#ORD-1048",
                            name: "Neha Gupta",
                            items: "1 item",
                            date: "11 Aug 2026",
                            amount: "₹ 799",
                            status: "Delivered",
                          },
                        ].map((row) => (
                          <tr
                            key={row.id}
                            className="border-b border-gray-100 hover:bg-gray-50"
                          >
                            <td className="px-4 py-2.5 font-medium text-gray-800">
                              {row.id}
                            </td>
                            <td className="px-4 py-2.5 text-gray-700">
                              {row.name}
                            </td>
                            <td className="px-4 py-2.5 text-gray-500">
                              {row.items}
                            </td>
                            <td className="px-4 py-2.5 text-gray-500">
                              {row.date}
                            </td>
                            <td className="px-4 py-2.5 font-medium text-gray-800">
                              {row.amount}
                            </td>
                            <td className="px-4 py-2.5">
                              <span
                                className={`px-2 py-0.5 text-xs border ${
                                  row.status === "Delivered"
                                    ? "border-gray-400 text-gray-600 bg-gray-100"
                                    : row.status === "Shipped"
                                      ? "border-gray-500 text-gray-700"
                                      : row.status === "Processing"
                                        ? "border-gray-400 text-gray-600"
                                        : "border-gray-300 text-gray-400"
                                }`}
                              >
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="border border-gray-300 bg-white">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                      Sales Overview — Last 6 Months
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-50 border border-dashed border-gray-300 h-40 flex flex-col items-center justify-end pb-3 gap-2">
                      <div className="flex items-end gap-4 h-28 px-6">
                        {[
                          { month: "Mar", pct: 60 },
                          { month: "Apr", pct: 45 },
                          { month: "May", pct: 80 },
                          { month: "Jun", pct: 55 },
                          { month: "Jul", pct: 90 },
                          { month: "Aug", pct: 70 },
                        ].map((b) => (
                          <div
                            key={b.month}
                            className="flex flex-col items-center gap-1 flex-1"
                          >
                            <div
                              className="w-full bg-gray-400 border border-gray-500"
                              style={{ height: `${b.pct}%` }}
                            />
                            <span className="text-xs text-gray-400">
                              {b.month}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400">
                        [ Sales Chart Placeholder ]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Screen>
        </div>

        <div className="text-center mt-16 py-6 border-t border-gray-300">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            WESTERN CLOTHES — Mid-Fidelity Website Wireframe
          </p>
          <p className="text-xs text-gray-400 mt-1">
            College Project | 11 Screens | 2026
          </p>
        </div>
      </div>
    </div>
  )
}

/* ───── Shared wireframe components ───────────────────────────────── */

function Screen({
  number,
  title,
  children,
}: {
  number: number
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="border border-gray-400 bg-white shadow-sm overflow-hidden">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 bg-gray-800 px-3 py-2 sm:px-4">
        <span className="text-white text-xs font-bold tracking-widest">
          SCREEN {number}
        </span>
        <span className="text-gray-300 text-xs">—</span>
        <span className="text-gray-200 text-xs uppercase tracking-widest">
          {title}
        </span>
      </div>
      {children}
    </section>
  )
}

function NavBar() {
  return (
    <div className="border-b border-gray-300 px-4 sm:px-6">
      <div className="flex flex-col gap-3 border-b border-gray-200 py-3 md:flex-row md:items-center md:justify-between">
        <BrandLogo className="justify-center md:justify-start" />
        <div className="min-w-0 flex-1 md:mx-6">
          <div className="flex items-center border border-gray-300 bg-gray-50">
            <input
              className="flex-1 text-xs px-3 py-1.5 bg-transparent text-gray-700 placeholder-gray-400 outline-none"
              placeholder="Search for products, brands and more..."
            />
            <button
              aria-label="Search"
              className="border-l border-gray-300 bg-gray-800 px-3 py-1.5 text-[10px] font-bold text-white"
            >
              GO
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 text-xs text-gray-700 md:justify-end">
          <div className="flex flex-col items-center cursor-pointer">
            <span className="flex h-5 w-5 items-center justify-center border border-gray-400 text-[8px] font-bold">
              AC
            </span>
            <span className="text-xs">Account</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer relative">
            <span className="flex h-5 w-5 items-center justify-center border border-gray-400 text-[8px] font-bold">
              CT
            </span>
            <span className="text-xs">Cart</span>
            <span className="absolute -top-1 -right-1 bg-gray-800 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <span className="flex h-5 w-5 items-center justify-center border border-gray-400 text-[8px] font-bold">
              WL
            </span>
            <span className="text-xs">Wishlist</span>
          </div>
        </div>
      </div>
      <nav className="flex items-center gap-5 overflow-x-auto py-2 text-xs font-medium text-gray-600 sm:gap-6">
        {[
          "Home",
          "Women",
          "Men",
          "New Arrivals",
          "Sale",
          "About Us",
          "Contact Us",
        ].map((link) => (
          <span
            key={link}
            className={`cursor-pointer whitespace-nowrap uppercase tracking-wide ${
              link === "Home"
                ? "text-gray-900 border-b-2 border-gray-800 pb-0.5"
                : "hover:text-gray-900"
            }`}
          >
            {link}
          </span>
        ))}
      </nav>
    </div>
  )
}

function BrandLogo({
  variant = "compact",
  inverse = false,
  tagline = false,
  className = "",
}: {
  variant?: "compact" | "stacked" | "sidebar"
  inverse?: boolean
  tagline?: boolean
  className?: string
}) {
  const stacked = variant === "stacked"
  const sidebar = variant === "sidebar"
  const vertical = stacked || sidebar
  const markSize = stacked
    ? "h-14 w-[4.5rem]"
    : sidebar
      ? "h-8 w-10"
      : "h-9 w-11"
  const wordmarkSize = stacked
    ? "text-lg sm:text-xl"
    : sidebar
      ? "text-[10px]"
      : "text-xs"
  const foreground = inverse ? "text-white" : "text-gray-800"
  const secondary = inverse ? "text-gray-400" : "text-gray-500"

  return (
    <div
      className={`flex ${
        vertical ? "flex-col text-center" : "flex-row text-left"
      } items-center gap-2 ${className}`}
    >
      <svg
        viewBox="0 0 64 48"
        aria-hidden="true"
        className={`${markSize} flex-shrink-0 ${foreground}`}
      >
        <rect
          x="1.5"
          y="1.5"
          width="61"
          height="45"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M8 12l5 24 8-14 8 14 5-24"
          fill="none"
          stroke={inverse ? "#1f2937" : "#ffffff"}
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="4"
        />
        <path
          d="M55 15c-2.5-2.5-5.2-3.5-8-3.5-6.8 0-11 5-11 12.5s4.2 12.5 11 12.5c2.8 0 5.5-1 8-3.5"
          fill="none"
          stroke={inverse ? "#1f2937" : "#ffffff"}
          strokeLinecap="square"
          strokeWidth="4"
        />
      </svg>
      <div>
        <div
          className={`${wordmarkSize} whitespace-nowrap font-bold uppercase leading-none tracking-[0.16em] ${foreground}`}
        >
          Western Clothes
        </div>
        {tagline && (
          <div className={`mt-1 text-xs ${secondary}`}>
            Your Western Style Destination
          </div>
        )}
      </div>
    </div>
  )
}

function WireImage({
  src,
  alt,
  w,
  h,
  className = "",
  objectPosition = "center",
  eager = false,
}: {
  src: string
  alt: string
  w: string
  h: string
  className?: string
  objectPosition?: string
  eager?: boolean
}) {
  return (
    <div
      className={`${w} ${h} flex-shrink-0 overflow-hidden border border-gray-300 bg-gray-200 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        style={{ objectPosition }}
        className="h-full w-full object-cover grayscale contrast-[.9]"
      />
    </div>
  )
}

function InputField({
  label,
  name,
  placeholder,
  type = "text",
  error,
}: {
  label: string
  name?: string
  placeholder: string
  type?: string
  error?: string
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={`w-full border px-3 py-2 text-xs text-gray-700 bg-white placeholder-gray-400 outline-none ${
          error ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <ValidationMessage message={error} />
    </div>
  )
}

function WireButton({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className="w-full bg-gray-800 text-white text-xs py-2.5 border border-gray-800 hover:bg-gray-700 font-semibold uppercase tracking-widest"
    >
      {label}
    </button>
  )
}

function CheckBox({ name }: { name?: string }) {
  return (
    <input
      type="checkbox"
      name={name}
      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 accent-gray-800"
    />
  )
}

function ValidationMessage({ message }: { message?: string }) {
  if (!message) return null

  return (
    <p role="alert" className="mt-1 text-xs font-medium text-gray-700">
      {message}
    </p>
  )
}

function ValidationSuccess({
  message,
  visible,
}: {
  message: string
  visible: boolean
}) {
  if (!visible) return null

  return (
    <p
      role="status"
      className="border border-gray-400 bg-gray-100 px-3 py-2 text-center text-xs font-medium text-gray-700"
    >
      {message}
    </p>
  )
}

function FilterGroup({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide border-b border-gray-200 pb-1 mb-2">
        {title}
      </h4>
      <div className="space-y-1">{children}</div>
    </div>
  )
}

function FilterItem({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
      <CheckBox /> {label}
    </label>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-gray-300 bg-white">
      <WireImage
        src={product.image}
        alt={product.alt}
        w="w-full"
        h="h-36"
        objectPosition="center 30%"
      />
      <div className="p-3 space-y-1.5">
        <p className="text-xs font-semibold text-gray-800 leading-tight">
          {product.name}
        </p>
        <p className="text-xs font-bold text-gray-800">{product.price}</p>
        <div className="flex items-center gap-1" aria-label="Rated 4 out of 5">
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              className={`h-2 w-2 border border-gray-400 ${
                s <= 4 ? "bg-gray-600" : "bg-gray-100"
              }`}
            />
          ))}
          <span className="text-xs text-gray-400">(24)</span>
        </div>
        <button className="w-full border border-gray-400 text-gray-700 text-xs py-1.5 hover:bg-gray-100 uppercase tracking-wide mt-1">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

function MiniProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-gray-300 bg-white">
      <WireImage
        src={product.image}
        alt={product.alt}
        w="w-full"
        h="h-28"
        objectPosition="center 30%"
      />
      <div className="p-2 space-y-1">
        <p className="text-xs font-semibold text-gray-800 truncate">
          {product.name}
        </p>
        <p className="text-xs text-gray-700">{product.price}</p>
        <button className="w-full border border-gray-300 text-gray-600 text-xs py-1 hover:bg-gray-50">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide border-b border-gray-200 pb-1">
      {children}
    </h3>
  )
}

function SummaryRow({
  label,
  value,
  bold = false,
}: {
  label: string
  value: string
  bold?: boolean
}) {
  return (
    <div
      className={`flex justify-between text-xs ${
        bold ? "font-bold text-gray-800" : "text-gray-700"
      }`}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}

type FormErrors = Record<string, string>

function useFormValidation(validate: (data: FormData) => FormErrors) {
  const [errors, setErrors] = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(new FormData(event.currentTarget))

    setErrors(nextErrors)
    setSuccess(Object.keys(nextErrors).length === 0)
  }

  return { errors, success, handleSubmit }
}

function field(data: FormData, name: string) {
  return String(data.get(name) ?? "").trim()
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function validateCustomerLogin(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!field(data, "identity")) {
    errors.identity = "Enter your email address or username."
  }
  if (field(data, "password").length < 6) {
    errors.password = "Password must contain at least 6 characters."
  }

  return errors
}

function validateCheckout(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (field(data, "fullName").length < 2) {
    errors.fullName = "Enter your full name."
  }
  if (!/^\d{10}$/.test(field(data, "mobile"))) {
    errors.mobile = "Enter a valid 10-digit mobile number."
  }
  if (field(data, "address").length < 8) {
    errors.address = "Enter a complete delivery address."
  }
  if (!field(data, "city")) errors.city = "Enter your city."
  if (!field(data, "state")) errors.state = "Enter your state."
  if (!/^\d{6}$/.test(field(data, "pincode"))) {
    errors.pincode = "Enter a valid 6-digit pincode."
  }

  return errors
}

function validateRegister(data: FormData): FormErrors {
  const errors: FormErrors = {}
  const email = field(data, "email")
  const password = field(data, "password")

  if (field(data, "fullName").length < 2) {
    errors.fullName = "Enter your full name."
  }
  if (!isEmail(email)) errors.email = "Enter a valid email address."
  if (!/^\d{10}$/.test(field(data, "mobile"))) {
    errors.mobile = "Enter a valid 10-digit mobile number."
  }
  if (password.length < 8) {
    errors.password = "Password must contain at least 8 characters."
  }
  if (field(data, "confirmPassword") !== password) {
    errors.confirmPassword = "Passwords do not match."
  }
  if (!data.has("terms")) {
    errors.terms = "Accept the terms and privacy policy to continue."
  }

  return errors
}

function validateContact(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (field(data, "name").length < 2) errors.name = "Enter your name."
  if (!isEmail(field(data, "email"))) {
    errors.email = "Enter a valid email address."
  }
  if (field(data, "subject").length < 3) {
    errors.subject = "Enter a message subject."
  }
  if (field(data, "message").length < 10) {
    errors.message = "Message must contain at least 10 characters."
  }

  return errors
}

function validateAdminLogin(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!field(data, "username")) errors.username = "Enter the admin username."
  if (field(data, "password").length < 6) {
    errors.password = "Password must contain at least 6 characters."
  }

  return errors
}
