/* ========== DATA STORAGE ========== */

// 20 Products each with 3 images
const products = [
  {
    id: 1,
    name: 'Luxury Accent Chair',
    description: 'A beautifully crafted accent chair with premium velvet upholstery and gold-finished legs.',
    price: 349.99,
    category: 'Furniture',
    rating: 4.8,
    specs: { material: 'Velvet, Metal', dimensions: '30"W x 32"D x 34"H', weight: '25 lbs' },
    images: ['https://picsum.photos/id/11/600/600', 'https://picsum.photos/id/12/600/600', 'https://picsum.photos/id/13/600/600']
  },
  {
    id: 2,
    name: 'Modern Minimalist Desk',
    description: 'Sleek workspace solution featuring solid oak wood and hidden cable management.',
    price: 499.00,
    category: 'Workspace',
    rating: 4.9,
    specs: { material: 'Solid Oak', dimensions: '48"W x 24"D x 30"H', weight: '45 lbs' },
    images: ['https://picsum.photos/id/20/600/600', 'https://picsum.photos/id/21/600/600', 'https://picsum.photos/id/22/600/600']
  },
  {
    id: 3,
    name: 'Ceramic Table Lamp',
    description: 'Hand-glazed ceramic body paired with a linen shade for soft, ambient lighting.',
    price: 129.50,
    category: 'Lighting',
    rating: 4.7,
    specs: { material: 'Ceramic, Linen', dimensions: '12"D x 24"H', wattage: '60W max' },
    images: ['https://picsum.photos/id/30/600/600', 'https://picsum.photos/id/31/600/600', 'https://picsum.photos/id/32/600/600']
  },
  {
    id: 4,
    name: 'Abstract Canvas Print',
    description: 'Large-scale contemporary art piece bringing texture and color to any room.',
    price: 189.99,
    category: 'Decor',
    rating: 4.5,
    specs: { medium: 'Acrylic on Canvas', dimensions: '36"W x 48"H', frame: 'Floating Wood' },
    images: ['https://picsum.photos/id/40/600/600', 'https://picsum.photos/id/41/600/600', 'https://picsum.photos/id/42/600/600']
  },
  {
    id: 5,
    name: 'Leather Lounge Sofa',
    description: 'Top-grain Italian leather sofa offering deep seating and enduring comfort.',
    price: 1299.00,
    category: 'Furniture',
    rating: 5.0,
    specs: { material: 'Top-Grain Leather', dimensions: '84"W x 38"D x 32"H', seating: '3 Persons' },
    images: ['https://picsum.photos/id/50/600/600', 'https://picsum.photos/id/51/600/600', 'https://picsum.photos/id/52/600/600']
  },
  {
    id: 6,
    name: 'Woven Storage Basket',
    description: 'Handwoven natural seagrass basket perfect for throws, pillows, or plants.',
    price: 45.00,
    category: 'Storage',
    rating: 4.6,
    specs: { material: 'Seagrass', dimensions: '16"D x 14"H', care: 'Wipe clean' },
    images: ['https://picsum.photos/id/60/600/600', 'https://picsum.photos/id/61/600/600', 'https://picsum.photos/id/62/600/600']
  },
  {
    id: 7,
    name: 'Brass Pendant Light',
    description: 'Industrial-chic pendant with brushed brass finish and exposed bulb aesthetic.',
    price: 159.00,
    category: 'Lighting',
    rating: 4.8,
    specs: { material: 'Brushed Brass', diameter: '8"', cord_length: 'Adjustable up to 72"' },
    images: ['https://picsum.photos/id/70/600/600', 'https://picsum.photos/id/71/600/600', 'https://picsum.photos/id/72/600/600']
  },
  {
    id: 8,
    name: 'Geometric Wool Rug',
    description: 'Plush hand-tufted wool rug featuring modern geometric patterns.',
    price: 299.00,
    category: 'Decor',
    rating: 4.7,
    specs: { material: '100% Wool', dimensions: '5\' x 8\'', pile_height: '0.5"' },
    images: ['https://picsum.photos/id/80/600/600', 'https://picsum.photos/id/81/600/600', 'https://picsum.photos/id/82/600/600']
  },
  {
    id: 9,
    name: 'Oak Dining Table',
    description: 'Sturdy circular dining table ideal for intimate meals and tight spaces.',
    price: 649.00,
    category: 'Furniture',
    rating: 4.9,
    specs: { material: 'Solid Oak', dimensions: '42" Diameter x 30"H', capacity: 'Seats 4' },
    images: ['https://picsum.photos/id/90/600/600', 'https://picsum.photos/id/91/600/600', 'https://picsum.photos/id/92/600/600']
  },
  {
    id: 10,
    name: 'Velvet Throw Pillow',
    description: 'Soft and luxurious velvet pillow cover in deep emerald green.',
    price: 35.00,
    category: 'Decor',
    rating: 4.5,
    specs: { material: 'Cotton Velvet', dimensions: '20" x 20"', insert: 'Sold Separately' },
    images: ['https://picsum.photos/id/100/600/600', 'https://picsum.photos/id/101/600/600', 'https://picsum.photos/id/102/600/600']
  },
  {
    id: 11,
    name: 'Artisan Coffee Mug',
    description: 'Hand-thrown stoneware mug with a unique speckled glaze.',
    price: 24.00,
    category: 'Kitchen',
    rating: 4.8,
    specs: { material: 'Stoneware', capacity: '12 oz', care: 'Dishwasher Safe' },
    images: ['https://picsum.photos/id/110/600/600', 'https://picsum.photos/id/111/600/600', 'https://picsum.photos/id/112/600/600']
  },
  {
    id: 12,
    name: 'Ergonomic Office Chair',
    description: 'Fully adjustable mesh chair designed for all-day comfort and support.',
    price: 289.00,
    category: 'Workspace',
    rating: 4.7,
    specs: { material: 'Mesh, Nylon', adjustments: 'Height, Tilt, Armrests', weight_cap: '275 lbs' },
    images: ['https://picsum.photos/id/120/600/600', 'https://picsum.photos/id/121/600/600', 'https://picsum.photos/id/122/600/600']
  },
  {
    id: 13,
    name: 'Matte Black Planter',
    description: 'Minimalist powder-coated steel planter with matching drainage tray.',
    price: 55.00,
    category: 'Decor',
    rating: 4.9,
    specs: { material: 'Steel', dimensions: '10"D x 12"H', feature: 'Includes Drainage Tray' },
    images: ['https://picsum.photos/id/130/600/600', 'https://picsum.photos/id/131/600/600', 'https://picsum.photos/id/132/600/600']
  },
  {
    id: 14,
    name: 'Walnut Bookshelf',
    description: 'Five-tier leaning bookshelf crafted from beautiful walnut veneer.',
    price: 320.00,
    category: 'Furniture',
    rating: 4.6,
    specs: { material: 'Walnut Veneer', dimensions: '30"W x 14"D x 72"H', assembly: 'Required' },
    images: ['https://picsum.photos/id/140/600/600', 'https://picsum.photos/id/141/600/600', 'https://picsum.photos/id/142/600/600']
  },
  {
    id: 15,
    name: 'Glass French Press',
    description: 'Premium borosilicate glass coffee maker with copper accents.',
    price: 48.00,
    category: 'Kitchen',
    rating: 4.7,
    specs: { material: 'Glass, Copper', capacity: '34 oz (8 cups)', filter: 'Stainless Steel Mesh' },
    images: ['https://picsum.photos/id/150/600/600', 'https://picsum.photos/id/151/600/600', 'https://picsum.photos/id/152/600/600']
  },
  {
    id: 16,
    name: 'Linen Duvet Cover',
    description: 'Breathable, washed European flax linen cover for a relaxed bedroom look.',
    price: 195.00,
    category: 'Bedding',
    rating: 4.9,
    specs: { material: '100% European Flax', size: 'Queen (88"x92")', care: 'Machine Washable' },
    images: ['https://picsum.photos/id/160/600/600', 'https://picsum.photos/id/161/600/600', 'https://picsum.photos/id/162/600/600']
  },
  {
    id: 17,
    name: 'Apothecary Jar Candle',
    description: 'Soy wax blend candle with notes of sandalwood and vanilla.',
    price: 28.00,
    category: 'Decor',
    rating: 4.8,
    specs: { wax: 'Soy Blend', burn_time: '60 Hours', scent: 'Sandalwood Vanilla' },
    images: ['https://picsum.photos/id/170/600/600', 'https://picsum.photos/id/171/600/600', 'https://picsum.photos/id/172/600/600']
  },
  {
    id: 18,
    name: 'Wire Storage Basket',
    description: 'Industrial-style open wire basket perfect for organizing magazines or logs.',
    price: 38.00,
    category: 'Storage',
    rating: 4.5,
    specs: { material: 'Iron', finish: 'Matte Black', dimensions: '14"W x 10"D x 10"H' },
    images: ['https://picsum.photos/id/180/600/600', 'https://picsum.photos/id/181/600/600', 'https://picsum.photos/id/182/600/600']
  },
  {
    id: 19,
    name: 'Bamboo Bath Tray',
    description: 'Expandable bath caddy with slots for a book, glass, and spa essentials.',
    price: 42.00,
    category: 'Decor',
    rating: 4.6,
    specs: { material: 'Natural Bamboo', length: 'Expands 29" to 43"', feature: 'Water Resistant' },
    images: ['https://picsum.photos/id/190/600/600', 'https://picsum.photos/id/191/600/600', 'https://picsum.photos/id/192/600/600']
  },
  {
    id: 20,
    name: 'Faux Ficus Tree',
    description: 'Lifelike 6-foot artificial ficus tree adding greenery without the maintenance.',
    price: 180.00,
    category: 'Decor',
    rating: 4.8,
    specs: { height: '72 Inches', material: 'Silk, Plastic', pot: 'Included (Black Plastic)' },
    images: ['https://picsum.photos/id/200/600/600', 'https://picsum.photos/id/201/600/600', 'https://picsum.photos/id/202/600/600']
  }
];

const blogPosts = [
  {
    id: 1,
    title: '5 Ways to Elevate Your Living Space',
    date: 'March 15, 2026',
    excerpt: 'Discover simple yet effective ways to transform your living room into a sophisticated retreat without breaking the bank.',
    image: 'https://picsum.photos/id/210/600/400',
    category: 'Interior Design'
  },
  {
    id: 2,
    title: 'The Art of Minimalist Decor',
    date: 'March 10, 2026',
    excerpt: 'Learn how to embrace minimalism by curating pieces that serve both function and aesthetic purpose in your home.',
    image: 'https://picsum.photos/id/211/600/400',
    category: 'Styling'
  },
  {
    id: 3,
    title: 'Choosing the Perfect Lighting',
    date: 'March 5, 2026',
    excerpt: 'A comprehensive guide to layering ambient, task, and accent lighting to create the perfect mood in any room.',
    image: 'https://picsum.photos/id/212/600/400',
    category: 'Lighting'
  },
  {
    id: 4,
    title: 'Sustainable Materials in Modern Furniture',
    date: 'February 28, 2026',
    excerpt: 'Why eco-friendly materials are not just good for the planet, but also bring unique texture and warmth to your decor.',
    image: 'https://picsum.photos/id/213/600/400',
    category: 'Sustainability'
  },
  {
    id: 5,
    title: 'Color Forecast: Warm Neutrals',
    date: 'February 22, 2026',
    excerpt: 'Explore the rising trend of warm, earthy neutrals and how to seamlessly integrate them into your existing color palette.',
    image: 'https://picsum.photos/id/214/600/400',
    category: 'Trends'
  },
  {
    id: 6,
    title: 'Creating a Productive Home Office',
    date: 'February 15, 2026',
    excerpt: 'Tips for setting up an ergonomic and inspiring workspace that maximizes focus and blends beautifully with your home.',
    image: 'https://picsum.photos/id/215/600/400',
    category: 'Workspace'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Interior Designer',
    text: 'Elysian has become my go-to for sourcing high-quality pieces for my clients. The attention to detail is unmatched.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Homeowner',
    text: 'I ordered the leather lounge sofa and it completely transformed my living room. Incredible quality and comfort.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Architect',
    text: 'The minimalist aesthetic of their products aligns perfectly with modern architectural spaces. Highly recommended.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

const instagramPosts = [
  { id: 1, username: 'elysian.home', userImg: 'https://randomuser.me/api/portraits/women/12.jpg', postImg: 'https://picsum.photos/id/220/400/400' },
  { id: 2, username: 'elysian.home', userImg: 'https://randomuser.me/api/portraits/women/12.jpg', postImg: 'https://picsum.photos/id/221/400/400' },
  { id: 3, username: 'elysian.home', userImg: 'https://randomuser.me/api/portraits/women/12.jpg', postImg: 'https://picsum.photos/id/222/400/400' },
  { id: 4, username: 'elysian.home', userImg: 'https://randomuser.me/api/portraits/women/12.jpg', postImg: 'https://picsum.photos/id/223/400/400' },
  { id: 5, username: 'elysian.home', userImg: 'https://randomuser.me/api/portraits/women/12.jpg', postImg: 'https://picsum.photos/id/225/400/400' },
  { id: 6, username: 'elysian.home', userImg: 'https://randomuser.me/api/portraits/women/12.jpg', postImg: 'https://picsum.photos/id/227/400/400' },
  { id: 7, username: 'elysian.home', userImg: 'https://randomuser.me/api/portraits/women/12.jpg', postImg: 'https://picsum.photos/id/229/400/400' },
  { id: 8, username: 'elysian.home', userImg: 'https://randomuser.me/api/portraits/women/12.jpg', postImg: 'https://picsum.photos/id/231/400/400' },
  { id: 9, username: 'elysian.home', userImg: 'https://randomuser.me/api/portraits/women/12.jpg', postImg: 'https://picsum.photos/id/233/400/400' }
];

/* ========== CORE FUNCTIONS ========== */

// Initialize common elements (Header, Mobile Menu)
function initCommon() {
  const header = document.getElementById('siteHeader');
  const hamburger = document.getElementById('hamburgerBtn');
  const navList = document.getElementById('navList');

  // Sticky Header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('shadow-md', 'fixed', 'top-0', 'w-full', 'z-50', 'bg-white/95', 'backdrop-blur-md');
      header.classList.remove('relative');
    } else {
      header.classList.remove('shadow-md', 'fixed', 'top-0', 'w-full', 'z-50', 'bg-white/95', 'backdrop-blur-md');
      header.classList.add('relative');
    }
  });

  // Mobile Menu Toggle
  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      navList.classList.toggle('-translate-x-full');
    });
  }
}

// Render a single product card
function createProductCard(product) {
  return `
    <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 border border-surface relative flex flex-col group h-full">
      <div class="relative w-full aspect-square overflow-hidden bg-surface slider-container">
        <div class="absolute inset-0 flex transition-transform duration-300" id="slider-${product.id}">
          ${product.images.map(img => `<img src="${img}" alt="${product.name}" class="w-full h-full object-cover shrink-0" loading="lazy">`).join('')}
        </div>
        <button class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 transition-opacity duration-200 text-primary z-10 hover:bg-white hover:text-accent group-hover:opacity-100 shadow-md" onclick="moveSlider(${product.id}, -1)">
          <i class="fas fa-chevron-left text-sm"></i>
        </button>
        <button class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 transition-opacity duration-200 text-primary z-10 hover:bg-white hover:text-accent group-hover:opacity-100 shadow-md" onclick="moveSlider(${product.id}, 1)">
          <i class="fas fa-chevron-right text-sm"></i>
        </button>
      </div>
      <div class="p-6 flex flex-col grow">
        <div class="text-xs uppercase text-secondary tracking-wider mb-2 font-main">${product.category}</div>
        <h3 class="text-lg font-heading font-semibold text-primary mb-2 hover:text-accent transition-colors"><a href="#" onclick="openModal(${product.id}); return false;">${product.name}</a></h3>
        <p class="text-sm text-secondary mb-4 line-clamp-2 grow font-main">${product.description}</p>
        <div class="flex justify-between items-center mb-5">
          <span class="text-xl font-semibold font-heading text-primary">$${product.price.toFixed(2)}</span>
          <span class="text-sm text-yellow-500 font-main"><i class="fas fa-star"></i> ${product.rating}</span>
        </div>
        <button class="w-full py-3 px-6 bg-primary text-white font-medium rounded hover:bg-accent transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md font-heading" onclick="openModal(${product.id})">View Details</button>
      </div>
    </div>
  `;
}

// Move Slider Logic
const sliderState = {}; 

window.moveSlider = function(productId, direction) {
  if (!sliderState[productId]) sliderState[productId] = 0;
  
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const totalSlides = product.images.length;
  sliderState[productId] += direction;

  if (sliderState[productId] >= totalSlides) sliderState[productId] = 0;
  if (sliderState[productId] < 0) sliderState[productId] = totalSlides - 1;

  const slider = document.getElementById(`slider-${productId}`);
  if (slider) {
    slider.style.transform = `translateX(-${sliderState[productId] * 100}%)`;
  }
};

// Open Product Modal
window.openModal = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById('productModal');
  if (!overlay) return;

  const modalSlider = overlay.querySelector('.modal-slider');
  const modalInfo = overlay.querySelector('.modal-info-col');

  // Set images
  modalSlider.innerHTML = product.images.map(img => `<img src="${img}" alt="${product.name}" class="w-full h-full object-cover shrink-0">`).join('');
  modalSlider.style.transform = 'translateX(0)';
  
  sliderState['modal'] = 0;
  
  let sliderControls = '';
  if (product.images.length > 1) {
    sliderControls = `
      <button class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-primary z-10 hover:bg-white hover:text-accent shadow-md transition-colors" onclick="moveModalSlider(-1)">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-primary z-10 hover:bg-white hover:text-accent shadow-md transition-colors" onclick="moveModalSlider(1)">
        <i class="fas fa-chevron-right"></i>
      </button>
    `;
  }
  
  // Setup info
  let specsHtml = Object.entries(product.specs).map(([key, val]) => 
    `<li class="flex justify-between border-b border-border pb-2 mb-2">
      <strong class="font-medium text-primary">${key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}:</strong> 
      <span class="text-secondary">${val}</span>
    </li>`
  ).join('');

  modalInfo.innerHTML = `
    <div class="text-sm uppercase tracking-wider text-secondary mb-2 font-main">${product.category}</div>
    <h2 class="text-3xl font-heading font-semibold text-primary mb-2">${product.name}</h2>
    <div class="text-yellow-500 text-sm mb-6"><i class="fas fa-star"></i> ${product.rating} <span class="text-secondary ml-1">(120 reviews)</span></div>
    <div class="text-2xl font-heading font-semibold text-accent mb-6">$${product.price.toFixed(2)}</div>
    <p class="mb-8 text-secondary font-main leading-relaxed">${product.description}</p>
    
    <h4 class="text-lg font-heading font-semibold text-primary mb-4">Specifications</h4>
    <ul class="mb-8 font-main text-sm">
      ${specsHtml}
    </ul>
    
    <button class="w-full py-4 bg-primary text-white font-medium rounded-lg hover:bg-accent transition-all hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2 font-heading text-lg">
      Buy Now <i class="fas fa-shopping-cart"></i>
    </button>
  `;

  // Inject controls into image col
  const imgCol = overlay.querySelector('.modal-image-col');
  const oldControls = imgCol.querySelectorAll('button');
  oldControls.forEach(c => c.remove());
  imgCol.insertAdjacentHTML('beforeend', sliderControls);

  overlay.classList.remove('invisible', 'opacity-0');
  overlay.classList.add('is-active');
  document.body.style.overflow = 'hidden'; 
};

window.moveModalSlider = function(direction) {
  const overlay = document.getElementById('productModal');
  if (!overlay) return;
  const slider = overlay.querySelector('.modal-slider');
  const images = slider.querySelectorAll('img');
  const totalSlides = images.length;

  if (!sliderState['modal']) sliderState['modal'] = 0;
  sliderState['modal'] += direction;

  if (sliderState['modal'] >= totalSlides) sliderState['modal'] = 0;
  if (sliderState['modal'] < 0) sliderState['modal'] = totalSlides - 1;

  slider.style.transform = `translateX(-${sliderState['modal'] * 100}%)`;
}

window.closeModal = function() {
  const overlay = document.getElementById('productModal');
  if (overlay) {
    overlay.classList.add('invisible', 'opacity-0');
    overlay.classList.remove('is-active');
    document.body.style.overflow = 'auto';
  }
};

/* ========== PAGE INITIALIZERS ========== */

function initHomePage() {
  // Render Featured Products (first 8)
  const featuredGrid = document.getElementById('featuredProductsGrid');
  if (featuredGrid) {
    const featured = products.slice(0, 8);
    featuredGrid.innerHTML = featured.map(p => createProductCard(p)).join('');
  }

  // Render Testimonials
  const testGrid = document.getElementById('testimonialsGrid');
  if (testGrid) {
    testGrid.innerHTML = testimonials.map(t => `
      <div class="bg-white p-10 rounded-xl shadow-sm border border-surface relative">
        <i class="fas fa-quote-right text-4xl text-accent/20 absolute top-6 right-6"></i>
        <p class="italic text-secondary mb-6 font-main leading-relaxed">"${t.text}"</p>
        <div class="flex items-center gap-4">
          <img src="${t.image}" alt="${t.name}" class="w-14 h-14 rounded-full object-cover shadow-sm">
          <div>
            <h4 class="font-heading font-semibold text-primary m-0">${t.name}</h4>
            <span class="text-sm text-secondary font-main">${t.role}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Instagram
  const instaGrid = document.getElementById('instagramGrid');
  if (instaGrid) {
    instaGrid.innerHTML = instagramPosts.map(p => `
      <a href="https://instagram.com/${p.username}" target="_blank" class="block relative aspect-square rounded-lg overflow-hidden shadow-sm hover-overlay-group bg-surface hover-zoom-img-insta">
        <img src="${p.postImg}" alt="Instagram Post" class="w-full h-full object-cover transition-transform duration-300" loading="lazy">
        <div class="hover-overlay absolute inset-0 bg-black/60 opacity-0 flex flex-col items-center justify-center text-white transition-opacity duration-300 backdrop-blur-[2px]">
          <i class="fab fa-instagram text-3xl mb-3"></i>
          <div class="flex flex-col items-center gap-2">
            <img src="${p.userImg}" alt="${p.username}" class="w-10 h-10 rounded-full border-2 border-white object-cover">
            <span class="font-medium text-sm">@${p.username}</span>
          </div>
        </div>
      </a>
    `).join('');
  }
}

function initProductsPage() {
  const grid = document.getElementById('allProductsGrid');
  if (grid) {
    grid.innerHTML = products.map(p => createProductCard(p)).join('');
  }

  const filterLinks = document.querySelectorAll('.filter-link');
  filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      filterLinks.forEach(l => l.classList.remove('is-active', 'text-accent', 'font-medium'));
      filterLinks.forEach(l => l.classList.add('text-secondary'));
      
      e.target.classList.remove('text-secondary');
      e.target.classList.add('is-active', 'text-accent', 'font-medium');

      const category = e.target.getAttribute('data-category');
      
      let filtered = products;
      if (category !== 'all') {
        filtered = products.filter(p => p.category.toLowerCase() === category);
      }
      
      grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
    });
  });
}

function initBlogPage() {
  const blogGrid = document.getElementById('blogGrid');
  if (blogGrid) {
    blogGrid.innerHTML = blogPosts.map(post => `
      <article class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 border border-border">
        <div class="relative w-full h-56 hover-zoom-img overflow-hidden bg-surface">
           <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover transition-transform duration-500" loading="lazy">
        </div>
        <div class="p-6">
          <div class="text-xs text-secondary mb-3 flex gap-4 font-main uppercase tracking-wide">
            <span><i class="far fa-calendar-alt mr-1"></i> ${post.date}</span>
            <span><i class="far fa-folder mr-1"></i> ${post.category}</span>
          </div>
          <h3 class="text-xl font-heading font-semibold text-primary mb-3 hover:text-accent transition-colors"><a href="#">${post.title}</a></h3>
          <p class="text-secondary font-main mb-6 line-clamp-2">${post.excerpt}</p>
          <a href="#" class="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors font-main">Read More <i class="fas fa-arrow-right text-sm"></i></a>
        </div>
      </article>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    const overlay = document.getElementById('productModal');
    if (overlay && e.target === overlay) {
      closeModal();
    }
  });
});
