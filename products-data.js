/**
 * Oishi Products Data & Shared Cart Service
 */
const OISHI_PRODUCTS = [
  {
    id: "tom-cay",
    name: "Oishi Snack Tôm Cay",
    fullName: "Oishi Snack Tôm Cay 42g",
    price: 6000,
    oldPrice: 7000,
    weight: "42g",
    category: "cay-hai-san",
    categoryName: "Cay & Hải sản",
    badge: "Bán chạy #1",
    rating: 4.9,
    reviewsCount: 382,
    image: "imgs/oishi-tom.jpg",
    aspect: 0.8055555555555556,
    shortDesc: "Vị tôm tươi tự nhiên hòa quyện ớt cay nồng, giòn rụm khó cưỡng.",
    longDesc: "Snack Tôm Cay Oishi là món bánh gắn liền với tuổi thơ bao thế hệ người Việt. Từng miếng snack giòn tan được tẩm ướp đậm đà từ bột tôm thật cùng ớt cay cay tê tê đặc trưng, nướng phồng không qua chiên ngập dầu, an toàn tuyệt đối cho sức khỏe.",
    ingredients: "Bột mì, tinh bột sắn, dầu ăn, tôm tươi (5%), đường, muối i-ốt, ớt cay, tỏi, gia vị tự nhiên.",
    calories: "210 kcal / gói 42g",
    accentColor: "#ff9bb5",
    tags: ["Tôm tươi", "Ớt cay nồng", "Nướng không chiên", "Tuổi thơ Oishi"]
  },
  {
    id: "bap-pho-mai",
    name: "Oishi Snack Bắp Phô Mai",
    fullName: "Oishi Snack Bắp Vị Phô Mai 42g",
    price: 6000,
    oldPrice: 7000,
    weight: "42g",
    category: "pho-mai-bap",
    categoryName: "Phô mai & Bắp",
    badge: "Bé rất thích",
    rating: 4.8,
    reviewsCount: 295,
    image: "imgs/oishi-bap.jpg",
    aspect: 0.8108651911468813,
    shortDesc: "Làm từ nguyên liệu bắp ngọt tự nhiên phủ phô mai thơm béo dịu nhẹ.",
    longDesc: "Hạt snack bắp vàng óng thơm lừng vị bắp ngọt ngọt bùi bùi, phủ đều lớp bột phô mai béo ngậy thơm nức mũi. Vị ngọt dịu dễ chịu rất thích hợp cho cả trẻ nhỏ và những bữa ăn xế văn phòng tràn ngập năng lượng.",
    ingredients: "Bột bắp tự nhiên (55%), bột mì, dầu thực vật, bột phô mai Cheddar (6%), đường tinh luyện, muối, hương bắp tự nhiên.",
    calories: "195 kcal / gói 42g",
    accentColor: "#ffc94d",
    tags: ["Bắp ngọt tự nhiên", "Phô mai béo ngậy", "Dễ ăn", "Hạt xốp giòn"]
  },
  {
    id: "crab-me",
    name: "Oishi Crab Me! Snack Cua",
    fullName: "Oishi Crab Me Snack Cua Xốt Chua Ngọt 40g",
    price: 6000,
    oldPrice: 7000,
    weight: "40g",
    category: "cay-hai-san",
    categoryName: "Cay & Hải sản",
    badge: "Hình cua vui",
    rating: 4.9,
    reviewsCount: 240,
    image: "imgs/oishi-cua.jpg",
    aspect: 0.7695035460992907,
    shortDesc: "Miếng bánh hình chú cua ngộ nghĩnh thấm đẫm xốt cua chua ngọt bắt vị.",
    longDesc: "Từng miếng snack tạo hình những chú cua nhỏ xinh xắn cực kỳ ngộ nghĩnh. Vị đậm đà từ xốt cua chua ngọt cân bằng, cay nhẹ kích thích vị giác làm bữa tiệc bạn bè thêm rộn ràng tiếng cười giòn tan.",
    ingredients: "Bột mì, dầu ăn, tinh bột ngô, chiết xuất thịt cua (4%), xốt chua ngọt chua cay, đường, bột hành, bột tỏi.",
    calories: "205 kcal / gói 40g",
    accentColor: "#7cc4f5",
    tags: ["Hình cua ngộ nghĩnh", "Xốt chua ngọt", "Hải sản thơm ngon"]
  },
  {
    id: "pho-mat-mieng",
    name: "Oishi Snack Phô Mát Miếng",
    fullName: "Oishi Snack Phô Mát Miếng 45g",
    price: 7000,
    oldPrice: 8000,
    weight: "45g",
    category: "pho-mai-bap",
    categoryName: "Phô mai & Bắp",
    badge: "Đậm đà ngậy béo",
    rating: 4.9,
    reviewsCount: 310,
    image: "imgs/oishi-pho-mai.jpg",
    aspect: 0.7004504504504504,
    shortDesc: "Lát snack giòn tan phủ bột phô mai béo ngậy chuẩn vị, ăn là ghiền.",
    longDesc: "Từng lát bánh vuông vức mỏng tang giòn rụm được áo ngập bột phô mai thơm phức nức mũi. Vị mặn ngọt béo hài hòa tuyệt đối, là người bạn đồng hành hoàn hảo khi cày phim, chơi game và gặp gỡ bạn bè.",
    ingredients: "Bột mì, tinh bột khoai tây, bột phô mai nhập khẩu (8%), dầu cọ tinh luyện, muối, đường, chất điều vị tự nhiên.",
    calories: "220 kcal / gói 45g",
    accentColor: "#a791ff",
    tags: ["Phô mai đậm đà", "Lát mỏng giòn rụm", "Ăn là ghiền"]
  },
  {
    id: "snack-hanh",
    name: "Oishi Snack Hành Onion Rings",
    fullName: "Oishi Snack Hành Onion Rings 42g",
    price: 6000,
    oldPrice: 7000,
    weight: "42g",
    category: "chay-thanh-dam",
    categoryName: "Snack chay & Hành",
    badge: "Hành tây thật",
    rating: 4.7,
    reviewsCount: 185,
    image: "imgs/oishi-hanh.jpg",
    aspect: 0.8319444444444445,
    shortDesc: "Vòng bánh giòn xốp thơm dịu mùi hành tây tươi, vị mặn ngọt hài hòa.",
    longDesc: "Thiết kế hình tròn vòng hành bắt mắt, kết hợp chiết xuất hành tây tươi tự nhiên mang lại mùi thơm ngào ngạt không hề hăng cay, vị ngọt mặn giòn tan tan biến trong miệng vô cùng thanh đạm và cuốn hút.",
    ingredients: "Bột mì, tinh bột sắn, dầu thực vật, hành tây tự nhiên sấy khô (6%), bột ngọt, đường, tiêu thơm.",
    calories: "190 kcal / gói 42g",
    accentColor: "#7bd89b",
    tags: ["Hành tây thật", "Vòng tròn vui mắt", "Thơm thanh giòn ngọt"]
  },
  {
    id: "martys-chay",
    name: "Oishi Marty's Vị Da Heo Quay",
    fullName: "Oishi Marty's Snack Chay Vị Da Heo Quay 35g",
    price: 7000,
    oldPrice: 8000,
    weight: "35g",
    category: "chay-thanh-dam",
    categoryName: "Snack chay & Hành",
    badge: "0g Trans Fat",
    rating: 4.8,
    reviewsCount: 220,
    image: "imgs/oishi-da-heo.jpg",
    aspect: 0.7847222222222222,
    shortDesc: "Snack chay giòn rụm đậm đà hương vị da heo quay, không chất béo chuyển hóa.",
    longDesc: "Marty's Cracklin' là sáng tạo snack ăn chay độc đáo từ Oishi với hương vị da heo quay giòn rụm khó tin nhưng làm từ 100% đạm thực vật cao cấp. 0g Trans Fat, không cholesterol, vừa ngon miệng vừa thanh lành.",
    ingredients: "Đạm đậu nành khử dầu, bột mì, tinh bột ngô, gia vị giấm muối ớt tỏi kiểu da heo nướng, dầu thực vật.",
    calories: "170 kcal / gói 35g",
    accentColor: "#ffab6b",
    tags: ["Thuần chay", "0g Trans Fat", "Vị da heo quay giòn tan"]
  }
];

// Combo sản phẩm
const OISHI_COMBOS = [
  {
    id: "combo-6-vi",
    name: "Combo Tiệc Vui 6 Gói Đủ Vị",
    fullName: "Combo Tiệc Vui 6 Gói Đủ Vị (Tôm, Bắp, Cua, Phô mai, Hành, Da heo)",
    price: 32000,
    oldPrice: 38000,
    image: "imgs/oishi-tom.jpg",
    shortDesc: "Mang cả thế giới Oishi Friends về nhà với trọn bộ 6 vị bán chạy nhất."
  }
];

// Shared Cart Manager
const OishiCart = {
  getCart() {
    try {
      return JSON.parse(localStorage.getItem('oishi_cart') || '[]');
    } catch(e) {
      return [];
    }
  },

  saveCart(cart) {
    try {
      localStorage.setItem('oishi_cart', JSON.stringify(cart));
      window.dispatchEvent(new CustomEvent('oishi-cart-updated', { detail: { cart } }));
    } catch(e) {
      console.error(e);
    }
  },

  addItem(item, qty = 1) {
    const cart = this.getCart();
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        id: item.id,
        name: item.name || item.fullName,
        price: item.price,
        image: item.image,
        weight: item.weight || 'Gói tiêu chuẩn',
        qty: qty
      });
    }
    this.saveCart(cart);
    return cart;
  },

  updateQty(id, delta) {
    const cart = this.getCart();
    const idx = cart.findIndex(i => i.id === id);
    if (idx !== -1) {
      cart[idx].qty += delta;
      if (cart[idx].qty <= 0) {
        cart.splice(idx, 1);
      }
      this.saveCart(cart);
    }
    return cart;
  },

  removeItem(id) {
    let cart = this.getCart();
    cart = cart.filter(i => i.id !== id);
    this.saveCart(cart);
    return cart;
  },

  clearCart() {
    this.saveCart([]);
    return [];
  },

  getTotalCount() {
    return this.getCart().reduce((sum, i) => sum + (i.qty || 0), 0);
  },

  getTotalPrice() {
    return this.getCart().reduce((sum, i) => sum + (i.price * (i.qty || 0)), 0);
  },

  formatVND(amount) {
    return (amount || 0).toLocaleString('vi-VN') + '₫';
  }
};
