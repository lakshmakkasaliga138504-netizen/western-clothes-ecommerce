export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-gray-800 tracking-widest uppercase">
            WESTERN CLOTHES
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Mid-Fidelity Website Wireframe — 11 Screens
          </p>
          <div className="mt-2 h-px bg-gray-300" />
        </div>

        <div className="space-y-12">

          {/* ── SCREEN 1: LOGIN PAGE ─────────────────────────────────── */}
          <Screen number={1} title="LOGIN PAGE">
            <div className="flex flex-col items-center py-10 px-6">
              <div className="mb-6 text-center">
                <div className="text-xl font-bold tracking-widest text-gray-800 uppercase border-b-2 border-gray-800 pb-1">
                  WESTERN CLOTHES
                </div>
                <div className="text-xs text-gray-500 mt-1">Your Western Style Destination</div>
              </div>
              <ImgBox w="w-48" h="h-32" label="Brand Image" className="mb-6" />
              <div className="w-full max-w-sm space-y-3">
                <InputField label="Email / Username" placeholder="Enter your email or username" />
                <InputField label="Password" placeholder="Enter your password" type="password" />
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <CheckBox /> Remember Me
                  </label>
                  <span className="underline cursor-pointer text-gray-500">Forgot Password?</span>
                </div>
                <WireButton label="LOGIN" />
                <p className="text-center text-xs text-gray-500 mt-2">
                  {"Don't have an account? "}
                  <span className="underline cursor-pointer text-gray-700 font-medium">Register here</span>
                </p>
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 2: HOME PAGE ──────────────────────────────────── */}
          <Screen number={2} title="HOME PAGE">
            <NavBar />
            <div className="px-6 py-4 space-y-5">
              <div className="relative">
                <ImgBox w="w-full" h="h-52" label="Hero Banner — New Arrivals" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="bg-white/90 px-6 py-3 text-center border border-gray-300">
                    <p className="text-xs text-gray-500 uppercase tracking-widest">New Collection 2026</p>
                    <h2 className="text-2xl font-bold text-gray-800 my-1">New Styles, New You</h2>
                    <p className="text-xs text-gray-600 mb-3">Explore the latest western fashion trends</p>
                    <button className="bg-gray-800 text-white text-xs px-5 py-2 border border-gray-800 hover:bg-gray-700">
                      SHOP NOW →
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <SectionLabel>Shop by Category</SectionLabel>
                <div className="grid grid-cols-4 gap-3 mt-2">
                  {["Women", "Men", "New Arrivals", "Sale"].map((cat) => (
                    <div key={cat} className="border border-gray-300 text-center p-3 bg-white">
                      <ImgBox w="w-full" h="h-24" label={cat} />
                      <p className="text-xs font-semibold text-gray-700 mt-2 uppercase tracking-wide">{cat}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionLabel>Featured Products</SectionLabel>
                <div className="grid grid-cols-4 gap-3 mt-2">
                  {["Denim Jacket", "Floral Dress", "Boots", "Plaid Shirt"].map((p) => (
                    <MiniProductCard key={p} name={p} price="₹ 1,299" />
                  ))}
                </div>
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 3: PRODUCT / CATEGORY PAGE ───────────────────── */}
          <Screen number={3} title="PRODUCT / CATEGORY PAGE">
            <NavBar />
            <div className="px-6 py-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold text-gray-800">{"Women's Collection"}</h2>
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
              <div className="flex gap-5">
                <div className="w-44 flex-shrink-0 space-y-4">
                  <FilterGroup title="Category">
                    {["Dresses", "Tops", "Jeans", "Jackets", "Skirts", "Shorts"].map((i) => (
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
                    {["Under ₹500", "₹500–₹1000", "₹1000–₹2000", "Above ₹2000"].map((i) => (
                      <FilterItem key={i} label={i} />
                    ))}
                  </FilterGroup>
                  <FilterGroup title="Size">
                    <div className="flex flex-wrap gap-1 mt-1">
                      {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
                        <span key={s} className="border border-gray-400 text-xs px-2 py-0.5 text-gray-700">{s}</span>
                      ))}
                    </div>
                  </FilterGroup>
                  <FilterGroup title="Color">
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {["Black", "White", "Grey", "Navy", "Brown", "Beige"].map((c) => (
                        <span key={c} className="text-xs text-gray-600 border border-gray-300 px-1.5 py-0.5">{c}</span>
                      ))}
                    </div>
                  </FilterGroup>
                  <button className="w-full border border-gray-400 text-xs py-1.5 text-gray-600 mt-1">
                    Clear Filters
                  </button>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-4">
                  {[
                    { name: "Floral Midi Dress", price: "₹ 1,499" },
                    { name: "Denim Jacket", price: "₹ 2,199" },
                    { name: "Boho Top", price: "₹ 799" },
                    { name: "Straight-Cut Jeans", price: "₹ 1,699" },
                    { name: "Leather Belt Bag", price: "₹ 999" },
                    { name: "Plaid Skirt", price: "₹ 1,099" },
                  ].map((p) => (
                    <ProductCard key={p.name} name={p.name} price={p.price} />
                  ))}
                </div>
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 4: PRODUCT DETAILS PAGE ──────────────────────── */}
          <Screen number={4} title="PRODUCT DETAILS PAGE">
            <NavBar />
            <div className="px-6 py-4">
              <div className="text-xs text-gray-500 mb-4">
                Home &rsaquo; Women &rsaquo; Dresses &rsaquo;{" "}
                <span className="text-gray-800 font-medium">Floral Midi Dress</span>
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                  <ImgBox w="w-64" h="h-80" label="Product Image" />
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((t) => (
                      <ImgBox key={t} w="w-14" h="h-14" label={`View ${t}`} />
                    ))}
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Floral Midi Dress</h2>
                    <div className="text-xs text-gray-500 mt-0.5">SKU: WC-DR-2026-001</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    ₹ 1,499
                    <span className="text-sm font-normal text-gray-400 line-through ml-2">₹ 2,000</span>
                    <span className="text-xs text-gray-600 ml-2 bg-gray-200 px-2 py-0.5">25% OFF</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-5">
                    A stunning floral midi dress perfect for any occasion. Made with premium breathable fabric,
                    this versatile piece can be styled for casual outings or semi-formal events.
                    Available in multiple sizes and colors.
                  </p>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide block mb-1">Select Size</label>
                    <div className="flex gap-2">
                      {["XS", "S", "M", "L", "XL"].map((s) => (
                        <div key={s} className="border border-gray-400 text-xs w-9 h-9 flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100">
                          {s}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-1 underline cursor-pointer">Size Guide</p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide block mb-1">Select Color</label>
                    <div className="flex gap-2">
                      {["bg-gray-200", "bg-gray-400", "bg-gray-600", "bg-gray-800"].map((c, i) => (
                        <div key={i} className={`w-7 h-7 rounded-full border-2 border-gray-400 ${c}`} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide block mb-1">Quantity</label>
                    <div className="flex items-center">
                      <button className="border border-gray-400 text-gray-700 w-8 h-8 text-base">−</button>
                      <div className="border-t border-b border-gray-400 w-10 h-8 flex items-center justify-center text-xs text-gray-700">1</div>
                      <button className="border border-gray-400 text-gray-700 w-8 h-8 text-base">+</button>
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
            <div className="px-6 py-4">
              <h2 className="text-base font-bold text-gray-800 mb-4">
                Shopping Cart <span className="text-sm font-normal text-gray-500">(3 items)</span>
              </h2>
              <div className="flex gap-6">
                <div className="flex-1 space-y-3">
                  <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 pb-2">
                    <span className="w-16">Product</span>
                    <span>Details</span>
                    <span>Price</span>
                    <span>Qty</span>
                    <span>Remove</span>
                  </div>
                  {[
                    { name: "Floral Midi Dress", size: "M", color: "Grey", price: "₹ 1,499", qty: 1 },
                    { name: "Denim Jacket", size: "L", color: "Black", price: "₹ 2,199", qty: 2 },
                    { name: "Boho Top", size: "S", color: "White", price: "₹ 799", qty: 1 },
                  ].map((item) => (
                    <div key={item.name} className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 items-center py-3 border-b border-gray-100">
                      <ImgBox w="w-16" h="h-20" label="Img" />
                      <div>
                        <p className="text-xs font-semibold text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">Size: {item.size} | Color: {item.color}</p>
                      </div>
                      <div className="text-xs font-semibold text-gray-800 whitespace-nowrap">{item.price}</div>
                      <div className="flex items-center">
                        <button className="border border-gray-300 text-gray-600 w-6 h-6 text-sm">−</button>
                        <span className="border-t border-b border-gray-300 w-8 h-6 flex items-center justify-center text-xs text-gray-700">{item.qty}</span>
                        <button className="border border-gray-300 text-gray-600 w-6 h-6 text-sm">+</button>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 text-xs border border-gray-300 w-6 h-6 flex items-center justify-center">✕</button>
                    </div>
                  ))}
                </div>
                <div className="w-60 flex-shrink-0 border border-gray-300 p-4 h-fit space-y-3">
                  <h3 className="text-sm font-bold text-gray-800 border-b border-gray-200 pb-2">Order Summary</h3>
                  <SummaryRow label="Subtotal (3 items)" value="₹ 6,496" />
                  <SummaryRow label="Shipping" value="FREE" />
                  <SummaryRow label="Discount" value="− ₹ 500" />
                  <div className="border-t border-gray-300 pt-2">
                    <SummaryRow label="Total" value="₹ 5,996" bold />
                  </div>
                  <button className="w-full bg-gray-800 text-white text-xs py-2.5 border border-gray-800 hover:bg-gray-700 font-medium uppercase tracking-wide mt-2">
                    Proceed to Checkout →
                  </button>
                  <p className="text-xs text-center text-gray-400 underline cursor-pointer">Continue Shopping</p>
                </div>
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 6: CHECKOUT PAGE ──────────────────────────────── */}
          <Screen number={6} title="CHECKOUT PAGE">
            <NavBar />
            <div className="px-6 py-4">
              <h2 className="text-base font-bold text-gray-800 mb-4">Checkout</h2>
              <div className="flex gap-6">
                <div className="flex-1 space-y-5">
                  <div className="border border-gray-300 p-4">
                    <h3 className="text-sm font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                      1. Delivery Address
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <InputField label="Full Name" placeholder="e.g. Priya Sharma" />
                      <InputField label="Mobile Number" placeholder="10-digit mobile number" />
                      <div className="col-span-2">
                        <InputField label="Address (House No., Street, Area)" placeholder="Enter full address" />
                      </div>
                      <InputField label="City" placeholder="City" />
                      <InputField label="State" placeholder="State" />
                      <InputField label="Pincode" placeholder="6-digit pincode" />
                      <InputField label="Landmark (Optional)" placeholder="Near landmark" />
                    </div>
                  </div>
                  <div className="border border-gray-300 p-4">
                    <h3 className="text-sm font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                      2. Payment Method
                    </h3>
                    <div className="space-y-2">
                      {[
                        { id: "cod", label: "Cash on Delivery (COD)", desc: "Pay when your order arrives" },
                        { id: "upi", label: "UPI / QR Code", desc: "PhonePe, GPay, Paytm, BHIM" },
                        { id: "card", label: "Credit / Debit Card", desc: "Visa, Mastercard, RuPay" },
                        { id: "net", label: "Net Banking", desc: "All major Indian banks" },
                      ].map((pm) => (
                        <label key={pm.id} className="flex items-start gap-3 p-3 border border-gray-300 cursor-pointer hover:bg-gray-50">
                          <input type="radio" name="payment" className="mt-0.5" defaultChecked={pm.id === "cod"} />
                          <div>
                            <p className="text-xs font-semibold text-gray-800">{pm.label}</p>
                            <p className="text-xs text-gray-500">{pm.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-64 flex-shrink-0">
                  <div className="border border-gray-300 p-4 space-y-3">
                    <h3 className="text-sm font-bold text-gray-800 border-b border-gray-200 pb-2">3. Order Summary</h3>
                    {[
                      { name: "Floral Midi Dress × 1", price: "₹ 1,499" },
                      { name: "Denim Jacket × 2", price: "₹ 4,398" },
                      { name: "Boho Top × 1", price: "₹ 799" },
                    ].map((it) => (
                      <div key={it.name} className="flex justify-between text-xs text-gray-700">
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
                  </div>
                </div>
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 7: REGISTER PAGE ──────────────────────────────── */}
          <Screen number={7} title="REGISTER PAGE">
            <div className="flex flex-col items-center py-10 px-6">
              <div className="mb-4 text-center">
                <div className="text-xl font-bold tracking-widest text-gray-800 uppercase">WESTERN CLOTHES</div>
                <h2 className="text-base font-semibold text-gray-700 mt-2">Create an Account</h2>
                <p className="text-xs text-gray-500 mt-0.5">Join us and explore the latest western styles</p>
              </div>
              <div className="w-full max-w-sm space-y-3">
                <InputField label="Full Name" placeholder="Enter your full name" />
                <InputField label="Email Address" placeholder="Enter your email address" />
                <InputField label="Mobile Number" placeholder="10-digit mobile number" />
                <InputField label="Password" placeholder="Create a password (min. 8 characters)" type="password" />
                <InputField label="Confirm Password" placeholder="Re-enter your password" type="password" />
                <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
                  <CheckBox />
                  <span>
                    {"I agree to the "}
                    <span className="underline">Terms & Conditions</span>
                    {" and "}
                    <span className="underline">Privacy Policy</span>
                  </span>
                </label>
                <WireButton label="REGISTER" />
                <p className="text-center text-xs text-gray-500 mt-2">
                  {"Already have an account? "}
                  <span className="underline cursor-pointer text-gray-700 font-medium">Login here</span>
                </p>
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 8: ABOUT US PAGE ──────────────────────────────── */}
          <Screen number={8} title="ABOUT US PAGE">
            <NavBar />
            <div className="px-6 py-6 space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">About Western Clothes</h2>
                <div className="w-16 h-0.5 bg-gray-400 mx-auto mt-2" />
              </div>
              <div className="flex gap-8 items-start">
                <ImgBox w="w-64" h="h-44" label="About Us Image" className="flex-shrink-0" />
                <div className="space-y-3">
                  <p className="text-xs text-gray-600 leading-5">
                    Western Clothes is a premier e-commerce destination for authentic western-style fashion.
                    Founded in 2020, we bring you carefully curated collections of denim, plaid, boots,
                    and everything in between. Our mission is to make western fashion accessible, affordable,
                    and trendsetting for everyone across India.
                  </p>
                  <p className="text-xs text-gray-600 leading-5">
                    We partner directly with trusted manufacturers and designers to ensure every product
                    meets our high standards of quality, comfort, and style. From casual everyday wear to
                    statement pieces, Western Clothes is your one-stop shop for all things western.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { title: "Quality Products", desc: "Premium fabrics and craftsmanship in every item" },
                  { title: "Affordable Prices", desc: "Best prices without compromising on quality" },
                  { title: "Happy Customers", desc: "10,000+ satisfied customers across India" },
                  { title: "Trusted Brand", desc: "Verified seller with 4.8★ average rating" },
                ].map((f) => (
                  <div key={f.title} className="border border-gray-300 p-4 text-center space-y-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mx-auto flex items-center justify-center text-gray-500 text-lg">✦</div>
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide">{f.title}</h4>
                    <p className="text-xs text-gray-500 leading-4">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 9: CONTACT US PAGE ────────────────────────────── */}
          <Screen number={9} title="CONTACT US PAGE">
            <NavBar />
            <div className="px-6 py-6 space-y-4">
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">Contact Us</h2>
                <div className="w-16 h-0.5 bg-gray-400 mx-auto mt-2" />
                <p className="text-xs text-gray-500 mt-2">{"We'd love to hear from you. Reach out any time!"}</p>
              </div>
              <div className="flex gap-8">
                <div className="w-64 flex-shrink-0 space-y-4">
                  <h3 className="text-sm font-bold text-gray-700 border-b border-gray-200 pb-1">Get in Touch</h3>
                  {[
                    { icon: "📍", label: "Address", val: "123, Fashion Street, Connaught Place, New Delhi — 110001" },
                    { icon: "📞", label: "Phone", val: "+91 98765 43210" },
                    { icon: "✉️", label: "Email", val: "support@westernclothes.in" },
                    { icon: "🌐", label: "Website", val: "www.westernclothes.in" },
                  ].map((c) => (
                    <div key={c.label} className="flex gap-3">
                      <div className="w-8 h-8 bg-gray-200 border border-gray-300 flex items-center justify-center text-sm flex-shrink-0">{c.icon}</div>
                      <div>
                        <p className="text-xs font-semibold text-gray-700">{c.label}</p>
                        <p className="text-xs text-gray-500 leading-4">{c.val}</p>
                      </div>
                    </div>
                  ))}
                  <div className="border border-gray-200 p-3 mt-2">
                    <p className="text-xs font-semibold text-gray-700 mb-1">Business Hours</p>
                    <p className="text-xs text-gray-500">Mon – Sat: 9:00 AM – 6:00 PM</p>
                    <p className="text-xs text-gray-500">Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex-1 border border-gray-300 p-5 space-y-3">
                  <h3 className="text-sm font-bold text-gray-700 border-b border-gray-200 pb-2">Send Us a Message</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <InputField label="Your Name" placeholder="Enter your name" />
                    <InputField label="Email Address" placeholder="Enter your email" />
                  </div>
                  <InputField label="Subject" placeholder="Enter subject" />
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      className="w-full border border-gray-300 text-xs px-3 py-2 text-gray-700 bg-white resize-none h-28 placeholder-gray-400 outline-none"
                      placeholder="Write your message here..."
                    />
                  </div>
                  <button className="bg-gray-800 text-white text-xs px-6 py-2.5 border border-gray-800 hover:bg-gray-700 font-medium uppercase tracking-wide">
                    Send Message →
                  </button>
                </div>
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 10: ADMIN LOGIN PAGE ──────────────────────────── */}
          <Screen number={10} title="ADMIN LOGIN PAGE">
            <div className="flex flex-col items-center py-10 px-6">
              <div className="mb-6 text-center">
                <div className="text-xl font-bold tracking-widest text-gray-800 uppercase">WESTERN CLOTHES</div>
                <div className="text-xs text-gray-500 tracking-widest uppercase border border-gray-300 px-3 py-0.5 inline-block mt-2">
                  Admin Portal
                </div>
              </div>
              <div className="w-full max-w-xs border border-gray-300 p-6 space-y-4 bg-white">
                <h2 className="text-sm font-bold text-gray-800 text-center uppercase tracking-widest border-b border-gray-200 pb-3">
                  Admin Login
                </h2>
                <InputField label="Username" placeholder="Enter admin username" />
                <InputField label="Password" placeholder="Enter admin password" type="password" />
                <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                  <CheckBox /> Remember Me
                </label>
                <WireButton label="LOGIN" />
                <p className="text-center text-xs text-gray-400 mt-1">Authorized personnel only</p>
              </div>
            </div>
          </Screen>

          {/* ── SCREEN 11: ADMIN DASHBOARD PAGE ─────────────────────── */}
          <Screen number={11} title="ADMIN DASHBOARD PAGE">
            <div className="flex min-h-96">
              <div className="w-44 flex-shrink-0 bg-gray-800 text-white flex flex-col">
                <div className="px-4 py-4 border-b border-gray-600">
                  <div className="text-xs font-bold tracking-widest uppercase">Western Clothes</div>
                  <div className="text-xs text-gray-400 mt-0.5">Admin Panel</div>
                </div>
                <nav className="flex-1 py-3">
                  {[
                    { icon: "⬛", label: "Dashboard", active: true },
                    { icon: "📦", label: "Products", active: false },
                    { icon: "🧾", label: "Orders", active: false },
                    { icon: "👥", label: "Customers", active: false },
                    { icon: "🗂️", label: "Categories", active: false },
                    { icon: "🏷️", label: "Coupons", active: false },
                    { icon: "📊", label: "Reports", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2.5 px-4 py-2.5 text-xs cursor-pointer ${item.active ? "bg-gray-600 font-semibold" : "text-gray-300 hover:bg-gray-700"}`}
                    >
                      <span className="text-sm">{item.icon}</span>
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
              <div className="flex-1 bg-gray-50 p-5 space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-bold text-gray-800">Dashboard Overview</h2>
                  <div className="text-xs text-gray-500">Last updated: 14 Aug 2026, 10:30 AM</div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: "Total Orders", value: "1,284", sub: "+12% this month" },
                    { label: "Total Customers", value: "4,670", sub: "+8% this month" },
                    { label: "Total Products", value: "342", sub: "18 new this week" },
                    { label: "Total Revenue", value: "₹ 8,42,500", sub: "+15% this month" },
                  ].map((c) => (
                    <div key={c.label} className="border border-gray-300 bg-white p-4 space-y-1">
                      <div className="w-8 h-8 bg-gray-200 mb-2" />
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{c.label}</p>
                      <p className="text-lg font-bold text-gray-800">{c.value}</p>
                      <p className="text-xs text-gray-400">{c.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="border border-gray-300 bg-white">
                  <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wide">Recent Orders</h3>
                    <span className="text-xs text-gray-500 underline cursor-pointer">View All</span>
                  </div>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        {["Order ID", "Customer", "Items", "Date", "Amount", "Status"].map((h) => (
                          <th key={h} className="text-left px-4 py-2.5 text-gray-500 font-semibold uppercase tracking-wide text-xs">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: "#ORD-1052", name: "Priya Sharma", items: "3 items", date: "14 Aug 2026", amount: "₹ 3,497", status: "Delivered" },
                        { id: "#ORD-1051", name: "Rohan Mehta", items: "1 item", date: "13 Aug 2026", amount: "₹ 1,499", status: "Shipped" },
                        { id: "#ORD-1050", name: "Anjali Nair", items: "2 items", date: "13 Aug 2026", amount: "₹ 2,998", status: "Processing" },
                        { id: "#ORD-1049", name: "Vikram Singh", items: "4 items", date: "12 Aug 2026", amount: "₹ 5,196", status: "Pending" },
                        { id: "#ORD-1048", name: "Neha Gupta", items: "1 item", date: "11 Aug 2026", amount: "₹ 799", status: "Delivered" },
                      ].map((row) => (
                        <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="px-4 py-2.5 font-medium text-gray-800">{row.id}</td>
                          <td className="px-4 py-2.5 text-gray-700">{row.name}</td>
                          <td className="px-4 py-2.5 text-gray-500">{row.items}</td>
                          <td className="px-4 py-2.5 text-gray-500">{row.date}</td>
                          <td className="px-4 py-2.5 font-medium text-gray-800">{row.amount}</td>
                          <td className="px-4 py-2.5">
                            <span className={`px-2 py-0.5 text-xs border ${
                              row.status === "Delivered" ? "border-gray-400 text-gray-600 bg-gray-100" :
                              row.status === "Shipped" ? "border-gray-500 text-gray-700" :
                              row.status === "Processing" ? "border-gray-400 text-gray-600" :
                              "border-gray-300 text-gray-400"
                            }`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="border border-gray-300 bg-white">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wide">Sales Overview — Last 6 Months</h3>
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
                          <div key={b.month} className="flex flex-col items-center gap-1 flex-1">
                            <div
                              className="w-full bg-gray-400 border border-gray-500"
                              style={{ height: `${b.pct}%` }}
                            />
                            <span className="text-xs text-gray-400">{b.month}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400">[ Sales Chart Placeholder ]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Screen>

        </div>

        <div className="text-center mt-16 py-6 border-t border-gray-300">
          <p className="text-xs text-gray-500 uppercase tracking-widest">WESTERN CLOTHES — Mid-Fidelity Website Wireframe</p>
          <p className="text-xs text-gray-400 mt-1">College Project | 11 Screens | 2026</p>
        </div>

      </div>
    </div>
  )
}

/* ───── Shared wireframe components ───────────────────────────────── */

function Screen({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <section className="border border-gray-400 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 bg-gray-800 px-4 py-2">
        <span className="text-white text-xs font-bold tracking-widest">SCREEN {number}</span>
        <span className="text-gray-300 text-xs">—</span>
        <span className="text-gray-200 text-xs uppercase tracking-widest">{title}</span>
      </div>
      {children}
    </section>
  )
}

function NavBar() {
  return (
    <div className="border-b border-gray-300 px-6">
      <div className="flex items-center justify-between py-3 border-b border-gray-200">
        <div className="text-sm font-bold tracking-widest text-gray-800 uppercase">WESTERN CLOTHES</div>
        <div className="flex-1 mx-6">
          <div className="flex items-center border border-gray-300 bg-gray-50">
            <input
              className="flex-1 text-xs px-3 py-1.5 bg-transparent text-gray-700 placeholder-gray-400 outline-none"
              placeholder="Search for products, brands and more..."
            />
            <button className="bg-gray-800 text-white text-xs px-3 py-1.5 border-l border-gray-300">🔍</button>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-700">
          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-base">👤</span>
            <span className="text-xs">Account</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer relative">
            <span className="text-base">🛒</span>
            <span className="text-xs">Cart</span>
            <span className="absolute -top-1 -right-1 bg-gray-800 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-base">❤️</span>
            <span className="text-xs">Wishlist</span>
          </div>
        </div>
      </div>
      <nav className="flex items-center gap-6 py-2 text-xs text-gray-600 font-medium">
        {["Home", "Women", "Men", "New Arrivals", "Sale", "About Us", "Contact Us"].map((link) => (
          <span
            key={link}
            className={`cursor-pointer uppercase tracking-wide ${link === "Home" ? "text-gray-900 border-b-2 border-gray-800 pb-0.5" : "hover:text-gray-900"}`}
          >
            {link}
          </span>
        ))}
      </nav>
    </div>
  )
}

function ImgBox({ w, h, label, className = "" }: { w: string; h: string; label: string; className?: string }) {
  return (
    <div className={`${w} ${h} bg-gray-200 border border-gray-300 flex flex-col items-center justify-center gap-1 flex-shrink-0 ${className}`}>
      <div className="text-gray-400 text-2xl">▭</div>
      <span className="text-xs text-gray-400 text-center px-2">{label}</span>
    </div>
  )
}

function InputField({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 text-xs px-3 py-2 text-gray-700 bg-white placeholder-gray-400 outline-none"
      />
    </div>
  )
}

function WireButton({ label }: { label: string }) {
  return (
    <button className="w-full bg-gray-800 text-white text-xs py-2.5 border border-gray-800 hover:bg-gray-700 font-semibold uppercase tracking-widest">
      {label}
    </button>
  )
}

function CheckBox() {
  return <div className="w-3.5 h-3.5 border border-gray-400 flex-shrink-0 mt-0.5" />
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide border-b border-gray-200 pb-1 mb-2">{title}</h4>
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

function ProductCard({ name, price }: { name: string; price: string }) {
  return (
    <div className="border border-gray-300 bg-white">
      <ImgBox w="w-full" h="h-36" label="Product Image" />
      <div className="p-3 space-y-1.5">
        <p className="text-xs font-semibold text-gray-800 leading-tight">{name}</p>
        <p className="text-xs font-bold text-gray-800">{price}</p>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <span key={s} className={`text-xs ${s <= 4 ? "text-gray-600" : "text-gray-300"}`}>★</span>
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

function MiniProductCard({ name, price }: { name: string; price: string }) {
  return (
    <div className="border border-gray-300 bg-white">
      <ImgBox w="w-full" h="h-28" label="Product" />
      <div className="p-2 space-y-1">
        <p className="text-xs font-semibold text-gray-800 truncate">{name}</p>
        <p className="text-xs text-gray-700">{price}</p>
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

function SummaryRow({ label, value, bold = false }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between text-xs ${bold ? "font-bold text-gray-800" : "text-gray-700"}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}
