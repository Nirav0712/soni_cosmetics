// Data for Products, Blogs, and Testimonials
const products = [
  {
    id: 1,
    name: 'Hydrating Glow Serum',
    description: 'A luxurious, lightweight serum infused with hyaluronic acid and vitamin C for a radiant, dewy complexion.',
    price: 45.00,
    category: 'Skincare',
    rating: 4.9,
    specs: { 'skin-type': 'All types', 'key-ingredients': 'Hyaluronic Acid, Vitamin C', volume: '30ml' },
    images: ['https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29zbWV0aWNzfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1570172619380-41c6ad04ef42?w=600&h=600&fit=crop']
  },
  {
    id: 2,
    name: 'Velvet Matte Lipstick',
    description: 'Long-wearing, pigment-rich lipstick with a comfortable matte finish that never dries out.',
    price: 24.00,
    category: 'Makeup',
    rating: 4.8,
    specs: { shade: 'Crimson Rose', finish: 'Matte', features: 'Long-lasting, Vegan' },
    images: ['https://plus.unsplash.com/premium_photo-1738065061341-12f258ef930f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpcHN0aWNrJTIwa2lzc3xlbnwwfHwwfHx8MA%3D%3D', 'https://images.unsplash.com/photo-1596462502278-27bf3d603a3c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-159136023663c-ad3503aa336c?w=600&h=600&fit=crop']
  },
  {
    id: 3,
    name: 'Silk Infusion Conditioner',
    description: 'Deeply nourishing conditioner that restores shine and manages frizz for silky hair.',
    price: 32.00,
    category: 'Haircare',
    rating: 4.7,
    specs: { volume: '250ml', 'hair-type': 'Dry/Damaged', benefit: 'Repair & Shine' },
    images: ['https://media.istockphoto.com/id/904094922/photo/foundation-bottle.webp?a=1&b=1&s=612x612&w=0&k=20&c=nc0GE3fatkZvivDhXsaOPXyf5GksD-66XkdSecGYqqU=', 'https://images.unsplash.com/photo-1608443123894-3d1424b0fbb4?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=600&h=600&fit=crop']
  },
  {
    id: 4,
    name: 'Midnight Jasmine Parfum',
    description: 'An enchanting evening fragrance with notes of blooming jasmine, sandalwood, and amber.',
    price: 85.00,
    category: 'Fragrance',
    rating: 4.9,
    specs: { concentration: 'Eau de Parfum', notes: 'floral, woody', volume: '50ml' },
    images: ['https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=600&fit=crop']
  },
  {
    id: 5,
    name: 'Organic Shea Body Butter',
    description: 'Rich, whipped body cream that melts into the skin for 24-hour intense hydration.',
    price: 28.00,
    category: 'Body',
    rating: 4.6,
    specs: { fragrance: 'Unscented', 'skin-type': 'Dry', volume: '150g' },
    images: ['https://plus.unsplash.com/premium_photo-1664391814729-0cfae01d72e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JnYW5pYyUyMFNoZWElMjBCb2R5JTIwQnV0dGVyfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1590156221120-0920a2e5830d?w=600&h=600&fit=crop']
  },
  {
    id: 6,
    name: 'Radiance Cleansing Oil',
    description: 'Gentle oil-to-milk cleanser that removes makeup and impurities while softening skin.',
    price: 35.00,
    category: 'Skincare',
    rating: 4.8,
    specs: { 'first-cleanse': 'Yes', texture: 'Oil', volume: '100ml' },
    images: ['https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1610471201503-7cb3153cf25e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=600&h=600&fit=crop']
  },
  {
    id: 7,
    name: 'Glow Foundation Balm',
    description: 'A buildable, breathable foundation balm that evens skin tone with a natural skin-like finish.',
    price: 42.00,
    category: 'Makeup',
    rating: 4.7,
    specs: { shades: '15 available', coverage: 'Medium', finish: 'Radiant' },
    images: ['https://images.unsplash.com/photo-1599733589046-10c005739ef9?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1596461762144-2c74d30116c5?w=600&h=600&fit=crop']
  },
  {
    id: 8,
    name: 'Vitamin E Eye Cream',
    description: 'Lightweight cream that target dark circles and fine lines around the delicate eye area.',
    price: 38.00,
    category: 'Skincare',
    rating: 4.5,
    specs: { 'key-ingredients': 'Vitamin E, Caffeine', volume: '15ml', 'use': 'Morning/Evening' },
    images: ['https://images.unsplash.com/photo-1601049505392-eebe867c4329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXllJTIwQ3JlYW18ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1599522380470-3bc89b0cc962?w=600&h=600&fit=crop']
  },
  {
    id: 9,
    name: 'Argan Hair Mask',
    description: 'A weekly treatment to restore bounce and elasticity to chemically treated hair.',
    price: 40.00,
    category: 'Haircare',
    rating: 4.9,
    specs: { frequency: 'Once a week', 'hair-type': 'All', volume: '200ml' },
    images: ['https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=600&h=600&fit=crop']
  },
  {
    id: 10,
    name: 'Rosewater Mist',
    description: 'Refreshing facial mist that balances and hydrates skin on the go.',
    price: 18.00,
    category: 'Skincare',
    rating: 4.8,
    specs: { scent: 'Damask Rose', volume: '100ml', 'alcohol-free': 'Yes' },
    images: ['https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1620916566398-39f1143f7c0e?w=600&h=600&fit=crop']
  },
  {
    id: 11,
    name: 'Matte Liquid Eyeliner',
    description: 'Precision brush tip for creating sharp wings and defined looks that last all day.',
    price: 20.00,
    category: 'Makeup',
    rating: 4.7,
    specs: { color: 'Infinite Black', waterproof: 'Yes', tip: 'Brush' },
    images: ['https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=600&fit=crop']
  },
  {
    id: 12,
    name: 'Exfoliating Sea Salt Scrub',
    description: 'Smoothing body scrub with mineral-rich sea salts and essential citrus oils.',
    price: 26.00,
    category: 'Body',
    rating: 4.6,
    specs: { base: 'Sea Salt', fragrance: 'Citrus', volume: '250ml' },
    images: ['https://images.unsplash.com/photo-1620916566398-39f1143f7c0e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1590156221120-0920a2e5830d?w=600&h=600&fit=crop']
  },
  {
    id: 13,
    name: 'Sun Defense SPF 50',
    description: 'Invisible, non-greasy sunscreen that provides broad-spectrum UVA/UVB protection.',
    price: 34.00,
    category: 'Skincare',
    rating: 4.9,
    specs: { 'protection': 'SPF 50', 'finish': 'Matte', volume: '50ml' },
    images: ['https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop']
  },
  {
    id: 14,
    name: 'Conditioning Clay Mask',
    description: 'Deep-pore cleansing mask with pink clay to detoxify and brighten the skin.',
    price: 29.00,
    category: 'Skincare',
    rating: 4.8,
    specs: { 'clay-type': 'French Pink Clay', frequency: '2-3 times/week', volume: '75ml' },
    images: ['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1610471201503-7cb3153cf25e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=600&fit=crop']
  },
  {
    id: 15,
    name: 'Nourishing Cuticle Oil',
    description: 'A blend of sweet almond and jojoba oils to strengthen nails and soften cuticles.',
    price: 15.00,
    category: 'Body',
    rating: 4.7,
    specs: { oils: 'Almond, Jojoba', volume: '10ml', application: 'Dropper' },
    images: ['https://images.unsplash.com/photo-1620916566398-39f1143f7c0e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&h=600&fit=crop']
  },
  {
    id: 16,
    name: 'Volumizing Mascara',
    description: 'Lift and thicken every lash without clumping or smudging.',
    price: 22.00,
    category: 'Makeup',
    rating: 4.8,
    specs: { brush: 'Hourglass', 'smudge-proof': 'Yes', volume: '8ml' },
    images: ['https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=600&fit=crop']
  },
  {
    id: 17,
    name: 'Peptide Night Cream',
    description: 'A rich overnight treatment that supports skin repair and reduces signs of aging.',
    price: 52.00,
    category: 'Skincare',
    rating: 4.9,
    specs: { 'key-ingredients': 'Peptides, Squalane', volume: '50ml', 'texture': 'Rich' },
    images: ['https://images.unsplash.com/photo-1570172619380-41c6ad04ef42?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1599522380470-3bc89b0cc962?w=600&h=600&fit=crop']
  },
  {
    id: 18,
    name: 'Hand & Nail Cream',
    description: 'Moisturizing cream that protects hands from environmental stressors and aging.',
    price: 16.00,
    category: 'Body',
    rating: 4.5,
    specs: { scent: 'Lemongrass', volume: '75ml', 'non-greasy': 'Yes' },
    images: ['https://images.unsplash.com/photo-1620916566398-39f1143f7c0e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1590156221120-0920a2e5830d?w=600&h=600&fit=crop']
  },
  {
    id: 19,
    name: 'Setting Spray Mist',
    description: 'Weightless mist that locks makeup in place for up to 16 hours.',
    price: 28.00,
    category: 'Makeup',
    rating: 4.7,
    specs: { 'finish': 'Natural', 'skin-safe': 'Yes', volume: '120ml' },
    images: ['https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop']
  },
  {
    id: 20,
    name: 'Floral Bath Salts',
    description: 'Relaxing bath soak infused with dried rose petals and essential oils.',
    price: 22.00,
    category: 'Body',
    rating: 4.8,
    specs: { minerals: 'Epsom, Himalayan', fragrance: 'Floral', volume: '300g' },
    images: ['https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1471018358213-3172ca374dcc?w=600&h=600&fit=crop']
  }
];

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Double Cleanse Guide',
    excerpt: 'Why two steps are better than one for glowing, clear skin and how to do it right.',
    category: 'Skincare Tips',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=500&fit=crop'
  },
  {
    id: 2,
    title: '5 Common Makeup Mistakes to Avoid',
    excerpt: 'From cakey foundation to uneven liner, here is how to fix the most common beauty blunders.',
    category: 'Makeup Artistry',
    date: 'March 12, 2024',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=500&fit=crop'
  },
  {
    id: 3,
    title: 'Clean Beauty: What It Really Means',
    excerpt: 'Decoding ingredients and understanding our commitment to sustainable, non-toxic beauty.',
    category: 'Clean Beauty',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&h=500&fit=crop'
  },
  {
    id: 4,
    title: 'Morning Routine for Dewy Skin',
    excerpt: 'A step-by-step guide to achieving that glass skin look with the right products.',
    category: 'Routines',
    date: 'March 08, 2024',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143f7c0e?w=800&h=500&fit=crop'
  },
  {
    id: 5,
    title: 'The Science of Peptides',
    excerpt: 'How these powerful molecules help firm your skin and support collagen production.',
    category: 'Skincare Tips',
    date: 'March 05, 2024',
    image: 'https://images.unsplash.com/photo-1570172619380-41c6ad04ef42?w=800&h=500&fit=crop'
  },
  {
    id: 6,
    title: 'Spring Fragrance Trends',
    excerpt: 'Lighter scents and floral notes to welcome the new season with Soni Cosmetics.',
    category: 'Fragrance',
    date: 'March 02, 2024',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=500&fit=crop'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Beauty Editor',
    content: 'The Hydrating Glow Serum is a game-changer. My skin has never looked more radiant and healthy. Truly premium quality.',
    avatar: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    id: 2,
    name: 'Ananya Iyer',
    role: 'Makeup Artist',
    content: 'The Velvet Matte Lipsticks have incredible pigment payoff and stay comfortable all day. A staple in my bridal kit now.',
    avatar: 'https://i.pravatar.cc/150?u=ananya'
  },
  {
    id: 3,
    name: 'Rohan Mehta',
    role: 'Dermatologist',
    content: 'I appreciate the clean formulations and scientific approach. The eye cream is one of the few that actually delivers results.',
    avatar: 'https://i.pravatar.cc/150?u=rohan'
  }
];

const instagramPosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1629732047356-30c7e14e712b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEV5ZSUyMENyZWFtfGVufDB8fDB8fHww' },
  { id: 2, image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?w=300&h=300&fit=crop' },
  { id: 3, image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=300&h=300&fit=crop' },
  { id: 4, image: 'https://plus.unsplash.com/premium_photo-1732707011353-7a88ca5206d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlwc3RpY2slMjBraXNzfGVufDB8fDB8fHww' },
  { id: 5, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop' },
  { id: 6, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop' }
];

// Utility Functions
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount * 80); // Converting to INR for local feel
}

// Render Functions
function createProductCard(product) {
  return `
    <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden product-card group border border-gray-100" data-category="${product.category.toLowerCase()}">
      <div class="relative aspect-square overflow-hidden bg-gray-50">
        <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
        <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button onclick="openProductModal(${product.id})" class="bg-white text-primary px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg hover:bg-primary hover:text-white">
            Quick View
          </button>
        </div>
        <div class="absolute top-4 right-4 h-8 w-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-rose-500 shadow-sm cursor-pointer hover:bg-rose-500 hover:text-white transition-colors">
          <i class="far fa-heart"></i>
        </div>
      </div>
      <div class="p-6">
        <div class="flex items-center gap-1 mb-2">
          <div class="flex text-amber-400 text-xs">
            ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
            ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
          </div>
          <span class="text-xs text-gray-400">(${product.rating})</span>
        </div>
        <div class="text-xs font-semibold text-rose-500 tracking-wider uppercase mb-1">${product.category}</div>
        <h3 class="text-lg font-bold text-primary mb-2 truncate">${product.name}</h3>
        <p class="text-secondary text-sm mb-4 line-clamp-2">${product.description}</p>
        <div class="flex items-center justify-between">
          <span class="text-xl font-bold text-primary">${formatCurrency(product.price)}</span>
          <button class="bg-primary text-white p-3 rounded-xl hover:bg-accent transition-colors shadow-lg shadow-black/5">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const infoCol = modal.querySelector('.modal-info-col');
  const slider = modal.querySelector('.modal-slider');

  // Update Slider
  slider.innerHTML = product.images.map(img => `
    <img src="${img}" class="w-full h-full object-cover shrink-0" alt="${product.name}">
  `).join('');

  // Update Info
  infoCol.innerHTML = `
    <div class="flex justify-between items-start mb-6">
      <div>
        <div class="text-accent font-heading font-bold text-sm uppercase tracking-widest mb-1">${product.category}</div>
        <h2 class="text-3xl font-heading font-bold">${product.name}</h2>
      </div>
      <div class="text-2xl font-heading font-bold text-primary">${formatCurrency(product.price)}</div>
    </div>
    
    <div class="flex items-center gap-1 mb-6 text-amber-400">
      ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
      <span class="text-secondary text-sm ml-2">(${product.rating} customer rating)</span>
    </div>
    
    <p class="text-secondary mb-8 leading-relaxed">${product.description}</p>
    
    <div class="bg-surface p-6 rounded-xl mb-8 space-y-4">
      ${Object.entries(product.specs).map(([key, value]) => `
        <div class="flex justify-between border-b border-border pb-2 last:border-0 last:pb-0">
          <span class="text-secondary capitalize">${key.replace('-', ' ')}</span>
          <span class="font-medium">${value}</span>
        </div>
      `).join('')}
    </div>
    
    <div class="flex gap-4">
      <div class="flex items-center border border-border rounded-lg px-4">
        <button class="py-2 hover:text-accent"><i class="fas fa-minus"></i></button>
        <span class="px-6 font-medium">1</span>
        <button class="py-2 hover:text-accent"><i class="fas fa-plus"></i></button>
      </div>
      <button class="flex-grow bg-primary text-white font-heading font-medium py-4 rounded-lg hover:bg-accent transition-all">Add To Bag</button>
    </div>
  `;

  modal.classList.remove('invisible', 'opacity-0');
  modal.querySelector('.modal-content').classList.remove('scale-95');
}

function closeModal() {
  const modal = document.getElementById('productModal');
  modal.classList.add('invisible', 'opacity-0');
  modal.querySelector('.modal-content').classList.add('scale-95');
}

// Common Initialization (Menu, Header Scroll)
function initCommon() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navList = document.getElementById('navList');
  const siteHeader = document.getElementById('siteHeader');

  if (hamburgerBtn && navList) {
    hamburgerBtn.addEventListener('click', () => {
      navList.classList.toggle('-translate-x-full');
      hamburgerBtn.querySelector('i').classList.toggle('fa-bars');
      hamburgerBtn.querySelector('i').classList.toggle('fa-times');
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      siteHeader.classList.add('shadow-md', 'py-0');
      siteHeader.querySelector('.max-w-7xl').classList.remove('h-20');
      siteHeader.querySelector('.max-w-7xl').classList.add('h-16');
    } else {
      siteHeader.classList.remove('shadow-md', 'py-0');
      siteHeader.querySelector('.max-w-7xl').classList.add('h-20');
      siteHeader.querySelector('.max-w-7xl').classList.remove('h-16');
    }
  });
}

// Home Page Initialization
function initHomePage() {
  const featuredGrid = document.getElementById('featuredProductsGrid');
  if (featuredGrid) {
    featuredGrid.innerHTML = products.slice(0, 8).map(p => createProductCard(p)).join('');
  }

  const testimonialsGrid = document.getElementById('testimonialsGrid');
  if (testimonialsGrid) {
    testimonialsGrid.innerHTML = testimonials.map(t => `
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg transition-shadow">
        <div class="text-accent text-xl mb-6"><i class="fas fa-quote-left"></i></div>
        <p class="text-secondary italic mb-8 leading-relaxed">"${t.content}"</p>
        <div class="flex items-center gap-4">
          <img src="${t.avatar}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover">
          <div>
            <h4 class="font-heading font-bold text-sm">${t.name}</h4>
            <p class="text-xs text-secondary uppercase tracking-wider">${t.role}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  const instagramGrid = document.getElementById('instagramGrid');
  if (instagramGrid) {
    instagramGrid.innerHTML = instagramPosts.map(post => `
      <div class="relative aspect-square overflow-hidden group cursor-pointer rounded-lg">
        <img src="${post.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
        <div class="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <i class="fab fa-instagram text-white text-2xl"></i>
        </div>
      </div>
    `).join('');
  }
}

// Products Page Initialization
function initProductsPage() {
  const grid = document.getElementById('allProductsGrid');
  if (!grid) return;

  function renderProducts(filteredProducts) {
    grid.innerHTML = filteredProducts.map(p => createProductCard(p)).join('');
  }

  renderProducts(products);

  const filterLinks = document.querySelectorAll('.filter-link');
  filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.getAttribute('data-category');

      filterLinks.forEach(l => {
        l.classList.remove('text-accent', 'font-medium', 'is-active');
        l.classList.add('text-secondary');
      });
      link.classList.add('text-accent', 'font-medium', 'is-active');
      link.classList.remove('text-secondary');

      if (category === 'all') {
        renderProducts(products);
      } else {
        const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
        renderProducts(filtered);
      }
    });
  });
}

// Blog Page Initialization
function initBlogPage() {
  const blogGrid = document.getElementById('blogGrid');
  if (blogGrid) {
    blogGrid.innerHTML = blogPosts.map(post => createBlogPost(post)).join('');
  }
}

// Global initialization for components present on all pages (like navigation)
document.addEventListener('DOMContentLoaded', () => {
  // Common mobile menu toggle is handled by initCommon called in each HTML
});
