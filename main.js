<!DOCTYPE html>
<html lang="ro">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Coșul meu – TechStore MD</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<nav>
  <a href="index.html" class="nav-logo">TechStore MD</a>
  <ul class="nav-links">
    <li><a href="index.html">Acasă</a></li>
    <li><a href="produse.html">Produse</a></li>
    <li><a href="oferte.html">Oferte</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <div class="nav-search">
    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    <input type="text" placeholder="Caută produse...">
  </div>
  <a href="cos.html" class="nav-cart" style="border-bottom:2px solid var(--black);">
    <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    <span class="cart-badge" id="cartBadge">0</span>
  </a>
</nav>

<div class="page-hero">
  <h1>Coșul meu</h1>
  <p>Verifică produsele selectate și finalizează comanda</p>
</div>

<div id="cartContainer"></div>

<div class="toast" id="toast">✓ Produs actualizat!</div>
<button class="chat-btn" title="Chat support">💬</button>

<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-logo">TechStore MD</div>
      <p class="footer-desc">Magazinul tău de încredere pentru tehnologie premium în Moldova.</p>
    </div>
    <div class="footer-col">
      <h4>Navigare</h4>
      <ul>
        <li><a href="index.html">Acasă</a></li>
        <li><a href="produse.html">Produse</a></li>
        <li><a href="oferte.html">Oferte</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Categorii</h4>
      <ul>
        <li><a href="produse.html?cat=Laptopuri">Laptopuri</a></li>
        <li><a href="produse.html?cat=Telefoane">Telefoane</a></li>
        <li><a href="produse.html?cat=Tablete">Tablete</a></li>
        <li><a href="produse.html?cat=Accesorii">Accesorii</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="contact.html">📍 Chișinău, Moldova</a></li>
        <li><a href="contact.html">📞 +373 XX XXX XXX</a></li>
        <li><a href="contact.html">✉️ info@techstore.md</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 TechStore MD. Toate drepturile rezervate.</span>
    <span>Politica de confidențialitate · Termeni și condiții</span>
  </div>
</footer>

<script src="js/main.js"></script>
<script>
const products = [
  { id: 1, cat: 'Laptopuri', name: 'Laptop Dell XPS 15 – Intel Core i7, 16GB RAM, 512GB SSD', price: 28999, emoji: '💻', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80' },
  { id: 2, cat: 'Telefoane', name: 'iPhone 15 Pro Max 256GB – Titanium Natural', price: 24500, emoji: '📱', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500&q=80' },
  { id: 3, cat: 'Telefoane', name: 'Samsung Galaxy S24 Ultra 512GB', price: 22300, emoji: '📱', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80' },
  { id: 4, cat: 'Laptopuri', name: 'MacBook Pro 14" M3 Pro – 18GB RAM, 1TB SSD', price: 45999, emoji: '💻', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80' },
  { id: 5, cat: 'Accesorii', name: 'Sony WH-1000XM5 – Căști wireless cu noise cancelling', price: 7899, emoji: '🎧', img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80' },
  { id: 6, cat: 'Tablete', name: 'iPad Pro 12.9" M2 – 256GB Wi-Fi', price: 21999, emoji: '📲', img: 'https://images.unsplash.com/photo-1589739900266-43b2843f4c12?w=500&q=80' },
  { id: 7, cat: 'Accesorii', name: 'Logitech MX Master 3S – Mouse wireless', price: 1899, emoji: '🖱️', img: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80' },
  { id: 8, cat: 'Monitoare', name: 'Samsung 27" Monitor 4K UHD – 144Hz', price: 8499, emoji: '🖥️', img: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?w=500&q=80' },
  { id: 9, cat: 'Wearables', name: 'Apple Watch Series 9 – GPS + Cellular 45mm', price: 9899, emoji: '⌚', img: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&q=80' },
  { id: 10, cat: 'Accesorii', name: 'Keychron K8 Pro – Tastatură mecanică wireless', price: 2199, emoji: '⌨️', img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80' },
  { id: 11, cat: 'Accesorii', name: 'AirPods Pro (2nd generation) cu USB-C', price: 5499, emoji: '🎧', img: 'https://images.unsplash.com/photo-1606741965509-717c3f54e4c5?w=500&q=80' },
  { id: 12, cat: 'Laptopuri', name: 'Asus ROG Strix Gaming Laptop – RTX 4070, 32GB RAM', price: 35999, emoji: '🎮', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80' },
];

function renderCart() {
  const container = document.getElementById('cartContainer');
  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cos-empty">
        <div class="empty-icon">🛒</div>
        <h2>Coșul tău este gol</h2>
        <p>Adaugă produse din magazin pentru a începe cumpărăturile.</p>
        <a href="produse.html" class="btn-primary">Vezi produsele →</a>
      </div>
    `;
    return;
  }

  const subtotal = cart.reduce((sum, item) => {
    const p = products.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
  const livrare = subtotal >= 3000 ? 0 : 150;
  const total = subtotal + livrare;

  container.innerHTML = `
    <div class="cos-layout">
      <div class="cos-items">
        ${cart.map(item => {
          const p = products.find(x => x.id === item.id);
          if (!p) return '';
          return `
            <div class="cos-item" id="cos-item-${p.id}">
              <div class="cos-item-img">
                <img src="${p.img}" alt="${p.name}" onerror="this.style.display='none';this.parentElement.textContent='${p.emoji}'">
              </div>
              <div>
                <div class="cos-item-cat">${p.cat}</div>
                <div class="cos-item-name">${p.name}</div>
                <div class="cos-item-price">${(p.price * item.qty).toLocaleString('ro')} MDL</div>
              </div>
              <div class="cos-item-actions">
                <div class="cos-qty">
                  <button onclick="changeQty(${p.id}, -1)">−</button>
                  <span id="qty-${p.id}">${item.qty}</span>
                  <button onclick="changeQty(${p.id}, 1)">+</button>
                </div>
                <button class="cos-remove" onclick="removeItem(${p.id})" title="Șterge">✕</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      <div class="cos-summary">
        <h3>Rezumatul comenzii</h3>
        <div class="cos-summary-row"><span>Subtotal</span><span>${subtotal.toLocaleString('ro')} MDL</span></div>
        <div class="cos-summary-row"><span>Livrare</span><span>${livrare === 0 ? 'Gratuită' : livrare + ' MDL'}</span></div>
        ${livrare > 0 ? `<div style="font-size:0.8rem;color:var(--gray-400);margin-bottom:8px;">Livrare gratuită pentru comenzi peste 3.000 MDL</div>` : ''}
        <div class="cos-summary-row total"><span>Total</span><span>${total.toLocaleString('ro')} MDL</span></div>
        <button class="cos-checkout" onclick="checkout()">Finalizează comanda →</button>
        <div style="text-align:center;margin-top:12px;">
          <a href="produse.html" style="font-size:0.85rem;color:var(--gray-600);text-decoration:none;">← Continuă cumpărăturile</a>
        </div>
      </div>
    </div>
  `;
}

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeItem(id);
    return;
  }
  saveCart(cart);
  updateCartBadge();
  renderCart();
}

function removeItem(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  updateCartBadge();
  renderCart();
}

function checkout() {
  const t = document.getElementById('toast');
  t.textContent = '✓ Comandă plasată cu succes!';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
  saveCart([]);
  updateCartBadge();
  setTimeout(() => renderCart(), 2600);
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderCart();
});
</script>
</body>
</html>
