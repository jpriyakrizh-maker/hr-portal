export const categories = [
  { id: 'ALL', label: 'ALL' },
  { id: 'BOUQUETS', label: 'BOUQUETS' },
  { id: 'ROSES', label: 'ROSES' },
  { id: 'SEASONAL', label: 'SEASONAL' },
  { id: 'GIFTS', label: 'GIFTS' },
  { id: 'WEDDINGS', label: 'WEDDINGS' },
  { id: 'BEST SELLERS', label: 'BEST SELLERS' },
];

export const products = [
  {
    id: 1,
    name: 'Rose Muse',
    price: 899,
    category: 'ROSES',
    tag: 'Classic Luxury',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    description: 'Velvety crimson and antique blush roses bundled with silver dollar eucalyptus in artisanal paper wrapping.',
    details: 'Stem count: 12-14 stems. Includes bespoke flower food, care card, and handwritten calligraphy note.'
  },
  {
    id: 2,
    name: 'Wild Bloom',
    price: 1099,
    category: 'BOUQUETS',
    tag: 'Artisan Pick',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=800&auto=format&fit=crop',
    description: 'Untamed botanical meadow blend featuring field wildflowers, astrantia, chamomile, and meadow grass.',
    details: 'Stem count: 16-18 stems. Designed to bring breezy open-field vitality to any interior.'
  },
  {
    id: 3,
    name: 'Blush Hour',
    price: 1299,
    category: 'SEASONAL',
    tag: 'Seasonal Favorite',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop',
    description: 'Soft pink garden peonies layered with cream ranunculus, astilbe, and dusty miller.',
    details: 'Stem count: 14-16 stems. Peak seasonal harvest from high-altitude organic nurseries.'
  },
  {
    id: 4,
    name: 'Garden Mix',
    price: 999,
    category: 'BOUQUETS',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop',
    description: 'Lush cottage garden medley with blue delphiniums, blush lisianthus, and fragrant rosemary sprigs.',
    details: 'Stem count: 15 stems. Scented with subtle herbal and honey floral notes.'
  },
  {
    id: 5,
    name: 'Spring Bloom',
    price: 1199,
    category: 'SEASONAL',
    tag: 'Spring Edit',
    image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=800&auto=format&fit=crop',
    description: 'Vibrant pastel celebration with French double tulips, sweet peas, and tender apple blossom twigs.',
    details: 'Stem count: 18 stems. Hand-tied with raw silk ribbon in soft blush.'
  },
  {
    id: 6,
    name: 'Romantic Rose',
    price: 1499,
    category: 'ROSES',
    tag: 'Romantic',
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop',
    description: 'Opulent English garden roses in dusky mauve and dusty peach tones with Italian ruscus.',
    details: 'Stem count: 20 stems. Long-lasting luxury blooms with rich velvet petal depth.'
  },
  {
    id: 7,
    name: 'Soft Petals',
    price: 1099,
    category: 'GIFTS',
    tag: 'Gift Favorite',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop',
    description: 'Delicate hydrangeas, buttercup ranunculus, and baby eucalyptus styled for thoughtful gifting.',
    details: 'Stem count: 12 stems. Presented in our signature dark textured gift cylinder.'
  },
  {
    id: 8,
    name: 'Golden Garden',
    price: 1399,
    category: 'BEST SELLERS',
    tag: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop',
    description: 'Honeyed hues, dried palm spears, toffee roses, craspedia globes, and golden flax stems.',
    details: 'Stem count: 15 stems. Warm editorial color palette suited for statement consoles and dining tables.'
  },
  {
    id: 9,
    name: 'Velvet Dahlia',
    price: 1599,
    category: 'WEDDINGS',
    tag: 'Luxury Bridal',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm79eiRWqTJcXye0sxkTB-1JwPQ6TfxO718JRPffeI26jaeQPcASXSfc0&s=10',
    description: 'Deep burgundy dinnerplate dahlias paired with dark plum foliage and trailing star jasmine.',
    details: 'Stem count: 14 stems. Dramatic and sophisticated centerpiece for elevated evenings.'
  },
  {
    id: 10,
    name: 'Ethereal Peony',
    price: 1699,
    category: 'BEST SELLERS',
    tag: 'Best Seller',
    image: 'https://etherealblooms.com/cdn/shop/files/OnlyPeonyPinkTOP_00a64c9a-12f4-4b31-9759-030206f118e6.jpg?crop=center&height=2900&v=1774542551&width=2900',
    description: 'Cascading bridal peonies with champagne spray roses, seeded eucalyptus, and silver olive branches.',
    details: 'Stem count: 18 stems. Our most requested signature celebration bouquet.'
  },
  {
    id: 11,
    name: 'Serene Sage',
    price: 949,
    category: 'GIFTS',
    tag: 'Botanical Gift',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxO51fXqO0BV0RuUL1ix79iIVuHgKpTa6ZOj_zJqf4W7pvuFlbTOXXZAg&s=10',
    description: 'Calming botanical arrangement of spiral eucalyptus, lavender sprigs, and crisp white anemones.',
    details: 'Stem count: 14 stems. Naturally aromatic and designed for mindful living spaces.'
  },
  {
    id: 12,
    name: 'Celestial Bloom',
    price: 1799,
    category: 'WEDDINGS',
    tag: 'Bespoke Luxury',
    image: 'https://images.unsplash.com/photo-1507290439931-a861b5a38200?q=80&w=800&auto=format&fit=crop',
    description: 'Grand architectural floral sculpture featuring white phalaenopsis orchids, calla lilies, and Italian greenery.',
    details: 'Stem count: 16 luxury stems. Ideal for monumental moments, anniversaries, and grand entries.'
  }
];
