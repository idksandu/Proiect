const products = [
  { id: 1, cat: 'Laptopuri', name: 'Laptop Dell XPS 15 – Intel Core i7, 16GB RAM, 512GB SSD', price: 28999, rating: 4.8, reviews: 124, img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80', emoji: '💻', inStock: true },
  { id: 2, cat: 'Telefoane', name: 'iPhone 15 Pro Max 256GB – Titanium Natural', price: 24500, rating: 4.9, reviews: 342, img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500&q=80', emoji: '📱', inStock: true },
  { id: 3, cat: 'Telefoane', name: 'Samsung Galaxy S24 Ultra 512GB', price: 22300, rating: 4.7, reviews: 298, img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80', emoji: '📱', inStock: true },
  { id: 4, cat: 'Laptopuri', name: 'MacBook Pro 14" M3 Pro – 18GB RAM, 1TB SSD', price: 45999, rating: 5, reviews: 187, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80', emoji: '💻', inStock: true },
  { id: 5, cat: 'Accesorii', name: 'Sony WH-1000XM5 – Căști wireless cu noise cancelling', price: 7899, rating: 4.8, reviews: 456, img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80', emoji: '🎧', inStock: true },
  { id: 6, cat: 'Tablete', name: 'iPad Pro 12.9" M2 – 256GB Wi-Fi', price: 21999, rating: 4.9, reviews: 234, img: 'https://images.unsplash.com/photo-1589739900266-43b2843f4c12?w=500&q=80', emoji: '📲', inStock: true },
  { id: 7, cat: 'Accesorii', name: 'Logitech MX Master 3S – Mouse wireless', price: 1899, rating: 4.7, reviews: 678, img: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80', emoji: '🖱️', inStock: true },
  { id: 8, cat: 'Monitoare', name: 'Samsung 27" Monitor 4K UHD – 144Hz', price: 8499, rating: 4.6, reviews: 189, img: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?w=500&q=80', emoji: '🖥️', inStock: true },
  { id: 9, cat: 'Wearables', name: 'Apple Watch Series 9 – GPS + Cellular 45mm', price: 9899, rating: 4.8, reviews: 523, img: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&q=80', emoji: '⌚', inStock: false },
  { id: 10, cat: 'Accesorii', name: 'Keychron K8 Pro – Tastatură mecanică wireless', price: 2199, rating: 4.7, reviews: 312, img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80', emoji: '⌨️', inStock: true },
  { id: 11, cat: 'Accesorii', name: 'AirPods Pro (2nd generation) cu USB-C', price: 5499, rating: 4.9, reviews: 892, img: 'https://images.unsplash.com/photo-1606741965509-717c3f54e4c5?w=500&q=80', emoji: '🎧', inStock: true },
  { id: 12, cat: 'Laptopuri', name: 'Asus ROG Strix Gaming Laptop – RTX 4070, 32GB RAM', price: 35999, rating: 4.7, reviews: 156, img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80', emoji: '🎮', inStock: true },
];

function getCart() {
  try { return JSON.parse(localStorage.getItem('techstore_cart') || '[]'); } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('techstore_cart', JSON.stringify(cart));
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function addToCart(id) {
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty++; } else { cart.push({ id, qty: 1 }); }
  saveCart(cart);
  updateCartBadge();
  showToast();
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = getCartCount();
}

function showToast() {
  const t = document.getElementById('toast');
  if (!t) return;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

function toggleFaq(el) {
  el.parentElement.classList.toggle('open');
}

function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  const count = document.getElementById('productsCount');
  if (!grid) return;
  if (count) count.textContent = list.length + ' produse găsite';
  grid.innerHTML = list.map(p => `
    <div class="product-card">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy"
             onerror="this.style.display='none'; if(!this.parentElement.querySelector('.product-icon-wrap')){let d=document.createElement('div');d.className='product-icon-wrap';d.textContent='${p.emoji}';this.parentElement.appendChild(d);}">
        ${!p.inStock ? `<div class="out-of-stock-overlay"><span>Stoc epuizat</span></div>` : ''}
      </div>
      <div class="product-body">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}</span>
          ${p.rating} (${p.reviews})
        </div>
        <div class="product-footer">
          <div class="product-price">${p.price.toLocaleString('ro')} MDL</div>
          <button class="btn-add" ${!p.inStock ? 'disabled' : ''} onclick="addToCart(${p.id})">
            🛒 Adaugă
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts() {
  const min = parseInt(document.getElementById('priceMin')?.value) || 0;
  const max = parseInt(document.getElementById('priceMax')?.value) || 999999;
  let filtered = products.filter(p => p.price >= min && p.price <= max);
  if (window.activeCategory && window.activeCategory !== 'Toate') {
    filtered = filtered.filter(p => p.cat === window.activeCategory);
  }
  renderProducts(filtered);
}

function filterByRadio(el) {
  window.activeCategory = el.value;
  filterProducts();
}

function filterCategory(cat) {
  window.activeCategory = cat;
  const radios = document.querySelectorAll('input[name="cat"]');
  radios.forEach(r => { r.checked = r.value === cat; });
  filterProducts();
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
}

function resetFilters() {
  window.activeCategory = 'Toate';
  const min = document.getElementById('priceMin');
  const max = document.getElementById('priceMax');
  if (min) min.value = 0;
  if (max) max.value = 50000;
  document.querySelectorAll('input[name="cat"]').forEach(r => { r.checked = r.value === 'Toate'; });
  filterProducts();
}

function startTimer() {
  let seconds = 18 * 3600 + 45 * 60 + 32;
  setInterval(() => {
    if (seconds > 0) seconds--;
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    const el = document.getElementById('timer');
    if (el) el.textContent = `${h}:${m}:${s}`;
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  window.activeCategory = 'Toate';
  if (document.getElementById('productsGrid')) {
    renderProducts(products);
  }
  startTimer();
});
