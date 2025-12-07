import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';

// Sample services data (replace with API data)
const SAMPLE_SERVICES = [
  {
    id: 's1',
    name: 'Express Pizza Delivery',
    desc: 'Hot stone-baked pizza delivered within 30 minutes.',
    price: 299,
    time: 30,
    rating: 4.7,
    category: 'Pizza',
    image: 'https://tse3.mm.bing.net/th/id/OIP.Yn-FB-HTuWvEKS2tqTYyzgHaE8?pid=Api&P=0&h=180',
    tags: ['Hot', 'Popular', 'Veg/Non-Veg']
  },
  {
    id: 's2',
    name: 'Sushi Combo',
    desc: 'Fresh sashimi and nigiri platter for two.',
    price: 699,
    time: 45,
    rating: 4.9,
    category: 'Japanese',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2',
    tags: ['Fresh', 'Chef Special']
  },
  {
    id: 's3',
    name: 'Healthy Salad Bowl',
    desc: 'Quinoa, greens, nuts and seasonal dressing.',
    price: 249,
    time: 15,
    rating: 4.5,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3',
    tags: ['Healthy', 'Low Calorie']
  },
  {
    id: 's4',
    name: 'Classic Burger',
    desc: 'Double patty, cheese, and secret sauce.',
    price: 199,
    time: 25,
    rating: 4.6,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=4',
    tags: ['Best Seller']
  }
];

const categories = ['All', 'Pizza', 'Japanese', 'Salads', 'Burgers'];

function Star({ value }) {
  return (
    <div className="inline-flex items-center gap-1 text-yellow-500 text-sm">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.455a1 1 0 00-.364 1.118l1.287 3.95c.3.921-.755 1.688-1.54 1.118l-3.37-2.455a1 1 0 00-1.176 0l-3.37 2.455c-.784.57-1.84-.197-1.54-1.118l1.287-3.95a1 1 0 00-.364-1.118L2.063 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.95z" />
      </svg>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function ServiceCard({ service, onOpen }) {
  return (
    <motion.article
      layout
      whileHover={{ scale: 1.02, y: -6 }}
      className="relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
    >
      <div className="h-44 sm:h-48 md:h-56 lg:h-48 overflow-hidden">
        <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{service.name}</h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{service.desc}</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">₹{service.price}</div>
            <div className="text-xs text-gray-500">{service.time} mins</div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <Star value={service.rating} />
            <div className="text-xs text-gray-500">{service.category}</div>
          </div>
          <div className="flex items-center gap-2">
            {service.tags.slice(0,2).map((t) => (
              <span key={t} className="px-2 py-1 text-xs bg-gray-100 rounded-full">{t}</span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => onOpen(service)}
            className="flex-1 py-2 rounded-xl font-semibold bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md hover:opacity-95"
          >
            View & Order
          </button>
          <button className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium hover:bg-gray-50">Wishlist</button>
        </div>
      </div>
    </motion.article>
  );
}

function SearchBar({ value, setValue }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-full shadow-sm px-4 py-2 border border-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
      </svg>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search dishes, cuisines or restaurants..."
        className="flex-1 outline-none text-sm bg-transparent"
      />
      {value && (
        <button onClick={() => setValue('')} className="text-xs text-gray-500 px-2">Clear</button>
      )}
    </div>
  );
}

function CategoryChips({ categories, selected, setSelected }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => setSelected(c)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium ${selected === c ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

export default function Service() {
  const [services] = useState(SAMPLE_SERVICES);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('recommended');
  const [selectedService, setSelectedService] = useState(null);

  const filtered = useMemo(() => {
    let items = services.slice();
    if (category !== 'All') items = items.filter(s => s.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(s => s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q) || s.tags.join(' ').toLowerCase().includes(q));
    }
    if (sort === 'price-asc') items.sort((a,b)=>a.price-b.price);
    if (sort === 'price-desc') items.sort((a,b)=>b.price-a.price);
    if (sort === 'time') items.sort((a,b)=>a.time-b.time);
    if (sort === 'rating') items.sort((a,b)=>b.rating-a.rating);
    return items;
  }, [services, category, query, sort]);

  return (
    <>
    <main className="min-h-screen p-6 sm:p-8 lg:p-12 bg-gradient-to-b from-gray-50 to-white mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">Discover Food Vingo Services</h1>
            <p className="text-gray-600 mt-1">Handpicked dishes, fast delivery & chef specials — all in one place.</p>
          </div>

          <div className="w-full sm:w-96">
            <SearchBar value={query} setValue={setQuery} />
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <CategoryChips categories={categories} selected={category} setSelected={setCategory} />

          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-600">Sort by</div>
            <select value={sort} onChange={(e)=>setSort(e.target.value)} className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm">
              <option value="recommended">Recommended</option>
              <option value="rating">Top rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="time">Fastest</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence>
          <motion.section layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
            {filtered.map(s => (
              <ServiceCard key={s.id} service={s} onOpen={(sv)=>setSelectedService(sv)} />
            ))}
          </motion.section>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-12 text-center text-gray-500">No services matched your search. Try another keyword or category.</div>
        )}

        {/* Modal / Drawer */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-8"
            >
              <motion.div
                initial={{ y: 60, scale: 0.98 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="h-56 sm:h-auto">
                    <img src={selectedService.image} alt={selectedService.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-bold">{selectedService.name}</h2>
                        <p className="text-sm text-gray-500 mt-1">{selectedService.category} • {selectedService.time} mins</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-extrabold">₹{selectedService.price}</div>
                        <div className="text-sm text-gray-500">{selectedService.rating} ★</div>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-700">{selectedService.desc}</p>

                    <div className="mt-4 flex gap-2 flex-wrap">
                      {selectedService.tags.map(t=> (
                        <span key={t} className="text-xs bg-gray-100 px-3 py-1 rounded-full">{t}</span>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-3">
                      <button className="flex-1 py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md">Add to Cart</button>
                      <button onClick={()=>setSelectedService(null)} className="px-4 py-3 rounded-xl border border-gray-200">Close</button>
                    </div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
    <div>
        <Footer/>
    </div>
    </>
  );
}
