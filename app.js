

    // --- 1. PRODUCT DATA WITH PERFECT CORRESPONDING UNSPLASH IMAGES ---
    const products = [
      // ১. চাল ও ডাল (৬টি আইটেম)
      {
        id: 1,
        name: "মিনিকেট চাল (পছন্দ)",
        category: "rice-dal",
        price: 68,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 2,
        name: "দেশী মসুর ডাল",
        category: "rice-dal",
        price: 130,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1545114137-24a421683cca?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 3,
        name: "প্যাকেটজাত আটা",
        category: "rice-dal",
        price: 55,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 4,
        name: "প্রিমিয়াম সুজি",
        category: "rice-dal",
        price: 45,
        unit: "৫০০ গ্রাম",
        image: "https://images.unsplash.com/photo-1533630232467-542bc61cf272?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 5,
        name: "পোলাও চাল (চিনিগুড়া)",
        category: "rice-dal",
        price: 155,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 6,
        name: "মুগ ডাল (সোনা)",
        category: "rice-dal",
        price: 140,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=300"
      },

      // ২. মাছ ও মাংস (৬টি আইটেম)
      {
        id: 7,
        name: "মুরগির মাংস (ব্রয়লার)",
        category: "fish-meat",
        price: 195,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 8,
        name: "হাঁসের মাংস (আস্ত)",
        category: "fish-meat",
        price: 420,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 9,
        name: "গরুর মাংস (তাজা)",
        category: "fish-meat",
        price: 750,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 10,
        name: "তাজা ইলিশ মাছ",
        category: "fish-meat",
        price: 1200,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 11,
        name: "রুই মাছ (তাজা)",
        category: "fish-meat",
        price: 340,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1611171711791-b34ec49e9137?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 12,
        name: "রূপচাঁদা মাছ",
        category: "fish-meat",
        price: 850,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=300"
      },

      // ৩. মসলা ও তেল (৭টি আইটেম)
      {
        id: 13,
        name: "খাঁটি সয়াবিন তেল",
        category: "oil-spice",
        price: 165,
        unit: "১ লিটার",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 14,
        name: "কাঁচা আদা",
        category: "oil-spice",
        price: 180,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 15,
        name: "দেশী রসুন",
        category: "oil-spice",
        price: 210,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 16,
        name: "হলুদ গুঁড়া",
        category: "oil-spice",
        price: 80,
        unit: "২০০ গ্রাম",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 17,
        name: "মরিচ গুঁড়া",
        category: "oil-spice",
        price: 95,
        unit: "২০০ গ্রাম",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 18,
        name: "দেশী পেঁয়াজ",
        category: "oil-spice",
        price: 80,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 19,
        name: "গরম মসলা প্যাক",
        category: "oil-spice",
        price: 120,
        unit: "১০০ গ্রাম",
        image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=300"
      },

      // ৪. সবজি (৬টি আইটেম)
      {
        id: 20,
        name: "লাল শাক (তাজা)",
        category: "veg",
        price: 25,
        unit: "১ আঁটি",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAX4kKmCbIZA6o82R7KQv8uQAmEFXLslHe4ESlYZb0A&s=300"
      },
      {
        id: 21,
        name: "কাকরোল",
        category: "veg",
        price: 60,
        unit: "১ কেজি",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uqY5QfQ1-WHXr6uJvv9XjfF4TwHgnzowiT0TNbysIQ&s=10"
      },
      {
        id: 22,
        name: "পটল",
        category: "veg",
        price: 45,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 23,
        name: "কাঁচা পেঁপে",
        category: "veg",
        price: 35,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1613735165954-2f6b0267f43a?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 24,
        name: "মিষ্টি কুমড়া",
        category: "veg",
        price: 40,
        unit: "১ ফালি",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-GShHw-m0PnXrEbiTNjKoGfQyJdLhquQHD_prrvgsA&s=300"
      },
      {
        id: 25,
        name: " করলা",
        category: "veg",
        price: 40,
        unit: "১ কেজি",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNcgDoU5txVjqK6P3_TbVniRHSgs7sUUPv0pC6YPBqQ&s=300"
      },

      // ৫. ফল (৬টি আইটেম)
      {
        id: 26,
        name: "সবুজ আপেল",
        category: "fruits",
        price: 270,
        unit: "১ কেজি",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOKzJp2m9ch2Gl_MmwlhND--QT5bVakwpnFl33Ywrng&s=300"
      },
      {
        id: 27,
        name: "কাল আঙুর",
        category: "fruits",
        price: 380,
        unit: "১ কেজি",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRge1os4RK-d7RIQY4yeIoke2audOadFXXpFzdAoVAVMQ&s=300"
      },
      {
        id: 28,
        name: " কলা",
        category: "fruits",
        price: 90,
        unit: "১ ডজন",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 29,
        name: "মরিয়ম খেজুর",
        category: "fruits",
        price: 650,
        unit: "১ কেজি",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVM6S6bwC3Pds46Yr0AIAY5HxyP-e1IHi8EoDaJE5zdQ&s=300"
      },
      {
        id: 30,
        name: "তাজা মাল্টা",
        category: "fruits",
        price: 220,
        unit: "১ কেজি",
        image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=300"
      },
      {
        id: 31,
        name: "পাঁকা পেঁপে",
        category: "fruits",
        price: 120,
        unit: "১ কেজি",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdvwrOvBNwF8cJXY8RaKHL-nWyaPw6zAMhYm0ilQvVg&s=10"
      }
    ];

    // ক্যাটাগরি ম্যাপিং
    const categories = {
      "all": "সব প্রোডাক্ট",
      "rice-dal": "চাল ও ডাল",
      "fish-meat": "মাছ ও মাংস",
      "oil-spice": "মসলা ও তেল",
      "veg": "সবজি",
      "fruits": "ফলমূল"
    };

    // --- 2. APP STATE ---
    let cart = [];
    let currentCategory = "all";

    // --- 3. DOM ELEMENTS ---
    const productGrid = document.getElementById('productGrid');
    const categoryList = document.getElementById('categoryList');
    const mobileCategoryList = document.getElementById('mobileCategoryList');
    const categoryTitle = document.getElementById('categoryTitle');
    const searchInput = document.getElementById('searchInput');
    const cartBtn = document.getElementById('cartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const closeCart = document.getElementById('closeCart');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Payment Modal Elements
    const paymentModal = document.getElementById('paymentModal');
    const closeModal = document.getElementById('closeModal');
    const paymentForm = document.getElementById('paymentForm');
    const modalTotal = document.getElementById('modalTotal');
    const paymentInstruction = document.getElementById('paymentInstruction');

    // --- 4. INITIALIZATION ---
    window.addEventListener('DOMContentLoaded', () => {
      renderCategories();
      renderProducts(products);
      setupEventListeners();
    });

    // --- 5. RENDER FUNCTIONS ---
    function renderCategories() {
      let sidebarHtml = "";
      let mobileHtml = "";
      Object.keys(categories).forEach(key => {
        const isActive = key === currentCategory;
        const activeClasses = isActive ? "bg-emerald-100 text-emerald-800 font-bold" :
          "text-gray-600 hover:bg-gray-100";
        const mobileActiveClasses = isActive ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-700";

        sidebarHtml += `
                    <li>
                        <button onclick="filterCategory('${key}')" class="w-full text-left px-4 py-2.5 rounded-lg text-sm transition flex items-center justify-between ${activeClasses}">
                            <span>${categories[key]}</span>
                            <i class="fa-solid fa-chevron-right text-xs opacity-50"></i>
                        </button>
                    </li>
                `;

        mobileHtml += `
                    <button onclick="filterCategory('${key}')" class="px-4 py-1.5 rounded-full text-sm font-semibold transition shrink-0 ${mobileActiveClasses}">
                        ${categories[key]}
                    </button>
                `;
      });
      categoryList.innerHTML = sidebarHtml;
      mobileCategoryList.innerHTML = mobileHtml;
    }

    function renderProducts(productsToRender) {
      if (productsToRender.length === 0) {
        productGrid.innerHTML =
          `<p class="col-span-full text-center text-gray-500 py-12">কোনো প্রোডাক্ট খুঁজে পাওয়া যায়নি!</p>`;
        return;
      }
      productGrid.innerHTML = productsToRender.map(product => `
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition duration-200">
                    <img src="${product.image}" alt="${product.name}" class="h-32 sm:h-44 w-full object-cover bg-gray-100">
                    <div class="p-3 sm:p-4 flex flex-col flex-1 justify-between">
                        <div>
                            <span class="text-[10px] text-gray-400 font-semibold block uppercase">${categories[product.category]}</span>
                            <h4 class="text-sm sm:text-base font-bold text-gray-800 mt-1 line-clamp-1">${product.name}</h4>
                            <p class="text-xs text-gray-500 mt-1">${product.unit}</p>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between mt-3 gap-2">
                            <span class="text-base sm:text-lg font-extrabold text-emerald-600">৳ ${product.price}</span>
                            <button onclick="addToCart(${product.id})" class="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg font-bold text-xs transition flex items-center justify-center space-x-1">
                                <i class="fa-solid fa-plus"></i>
                                <span>অ্যাড করুন</span>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
    }

    // --- 6. INTERACTIVE FUNCTIONS ---
    window.filterCategory = function (categoryKey) {
      currentCategory = categoryKey;
      categoryTitle.textContent = categories[categoryKey];
      renderCategories();
      if (categoryKey === "all") {
        renderProducts(products);
      } else {
        renderProducts(products.filter(p => p.category === categoryKey));
      }
    };

    window.addToCart = function (productId) {
      const product = products.find(p => p.id === productId);
      const existingCartItem = cart.find(item => item.id === productId);
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        cart.push({
          ...product,
          quantity: 1
        });
      }
      updateCart();
      cartDrawer.classList.remove('translate-x-full'); // Auto open cart
    };

    window.updateQuantity = function (productId, action) {
      const item = cart.find(item => item.id === productId);
      if (item) {
        if (action === 'increase') {
          item.quantity += 1;
        } else if (action === 'decrease') {
          item.quantity -= 1;
          if (item.quantity === 0) {
            cart = cart.filter(cartItem => cartItem.id !== productId);
          }
        }
      }
      updateCart();
    };

    function updateCart() {
      const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
      const totalCartPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

      cartCount.textContent = totalItemsCount;
      cartTotal.textContent = totalCartPrice;

      if (cart.length === 0) {
        emptyCartMessage.classList.remove('hidden');
        cartItemsContainer.querySelectorAll('.cart-item').forEach(el => el.remove());
      } else {
        emptyCartMessage.classList.add('hidden');
        cartItemsContainer.innerHTML = cart.map(item => `
                    <div class="cart-item flex items-center justify-between border-b pb-3">
                        <div class="flex items-center space-x-3">
                            <img src="${item.image}" class="w-12 h-12 object-cover rounded-md">
                            <div>
                                <h5 class="font-bold text-gray-800 text-sm">${item.name}</h5>
                                <p class="text-xs text-gray-500">৳ ${item.price} x ${item.quantity}</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <button onclick="updateQuantity(${item.id}, 'decrease')" class="bg-gray-200 text-gray-800 w-7 h-7 rounded flex items-center justify-center font-bold">-</button>
                            <span class="font-bold text-gray-800 text-sm w-4 text-center">${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 'increase')" class="bg-gray-200 text-gray-800 w-7 h-7 rounded flex items-center justify-center font-bold">+</button>
                        </div>
                    </div>
                `).join('');
      }
    }

    // --- 7. PAYMENT & GATEWAY SYSTEM ---
    window.selectPayment = function (method) {
      const codLabel = document.getElementById('codLabel');
      const bkashLabel = document.getElementById('bkashLabel');
      const nagadLabel = document.getElementById('nagadLabel');

      // Reset Styles
      [codLabel, bkashLabel, nagadLabel].forEach(label => {
        label.classList.remove('border-emerald-500', 'bg-emerald-50', 'border-pink-500', 'bg-pink-50',
          'border-orange-500', 'bg-orange-50');
        label.classList.add('border-gray-200');
      });

      // Set Active Styles & Instructions
      if (method === 'cod') {
        codLabel.classList.add('border-emerald-500', 'bg-emerald-50');
        paymentInstruction.innerHTML =
          `<i class="fa-solid fa-info-circle text-emerald-600 mr-1"></i> আপনার ক্যাশ অন ডেলিভারি সিলেক্ট করা হয়েছে। অর্ডার রিসিভ করার সময় পেমেন্ট করবেন।`;
      } else if (method === 'bkash') {
        bkashLabel.classList.add('border-pink-500', 'bg-pink-50');
        paymentInstruction.innerHTML = `
                    <p class="font-bold text-pink-600 mb-1">বিকাশ পেমেন্ট গেটওয়ে:</p>
                    <p class="text-xs text-gray-600">আমাদের মার্চেন্ট অ্যাকাউন্ট নম্বরে (<b>০১৭০০-০০০০০০</b>) পেমেন্ট সম্পূর্ণ করে ট্রানজেকশন আইডিটি ডেলিভারিম্যানকে দেখান।</p>
                `;
      } else if (method === 'nagad') {
        nagadLabel.classList.add('border-orange-500', 'bg-orange-50');
        paymentInstruction.innerHTML = `
                    <p class="font-bold text-orange-600 mb-1">নগদ পেমেন্ট গেটওয়ে:</p>
                    <p class="text-xs text-gray-600">আমাদের নগদ মার্চেন্ট নম্বরে (<b>০১৮০০-০০০০০০</b>) পেমেন্ট সম্পন্ন করে আপনার অর্ডারটি কনফার্ম করুন।</p>
                `;
      }
    };

    // --- 8. EVENT LISTENERS ---
    function setupEventListeners() {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = products.filter(product => product.name.toLowerCase().includes(query));
        renderProducts(filtered);
      });

      cartBtn.addEventListener('click', () => cartDrawer.classList.toggle('translate-x-full'));
      closeCart.addEventListener('click', () => cartDrawer.classList.add('translate-x-full'));

      // Open Payment Modal
      checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
          alert('আপনার কার্টটি সম্পূর্ণ খালি! দয়া করে কিছু প্রোডাক্ট যোগ করুন।');
        } else {
          const totalCartPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
          modalTotal.textContent = totalCartPrice;
          paymentModal.classList.remove('hidden');
          cartDrawer.classList.add('translate-x-full');
        }
      });

      // Close Modal
      closeModal.addEventListener('click', () => paymentModal.classList.add('hidden'));

      // Handle Order Submission
      paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('custName').value;
        const phone = document.getElementById('custPhone').value;
        const address = document.getElementById('custAddress').value;
        const activePayment = document.querySelector('input[name="paymentMethod"]:checked').value;

        alert(
          `🎉 অভিনন্দন ${name}!\nআপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে।\n\n💵 মোট মূল্য: ৳ ${modalTotal.textContent}\n🚚 ঠিকানা: ${address}\n💳 পেমেন্ট টাইপ: ${activePayment.toUpperCase()}`
          );

        cart = [];
        updateCart();
        paymentForm.reset();
        paymentModal.classList.add('hidden');
      });
    }
