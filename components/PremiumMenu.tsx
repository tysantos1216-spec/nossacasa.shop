interface BakeryItem {
  id: string
  name: string
  heritage: 'Portuguese' | 'Mexican'
  description: string
  pricePerDozen: number
  imagePath: string
  badge?: string
}



const MENU_ITEMS: BakeryItem[] = [
  {
    id: 'azorean chocolate cookies',
    name: 'azorean chocolate cookies',
    heritage: 'Portuguese',
    description:
      'Authentic Azorean chocolate cookies, baked to perfection with traditional ingredients.',
    pricePerDozen: 24.0,
    imagePath: '/images/azorean-cookies.jpg',
    badge: 'Best Seller',
  },
  {
    id: 'conchas',
    name: 'Conchas',
    heritage: 'Mexican',
    description:
      'Traditional pan dulce topped with a crisp, beautifully patterned sweet shell crusted sugar topping.',
    pricePerDozen: 22.0,
    imagePath: '/images/conchas.jpg',
    badge: 'Fresh Batch',
  },
]

export default function PremiumMenu() {
  return (
    <section className="bg-stone-50 py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-emerald-700 font-semibold tracking-widest text-sm uppercase">
          Tradition Baked Daily
        </span>
        <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2">
          The Nossa Casa Menu
        </h2>
        <p className="text-stone-600 mt-4 max-w-xl mx-auto">
          Handcrafted, shelf-stable regional delicacies. Pre-order by the dozen for guaranteed
          freshness.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {MENU_ITEMS.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-200/60 relative flex flex-col justify-between"
          >
            {item.badge && (
              <span className="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                {item.badge}
              </span>
            )}

            <div>
              <div className="h-64 bg-stone-100 relative overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              </div>

              <div className="p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                  {item.heritage} Recipe
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-800 mt-3">{item.name}</h3>
                <p className="text-stone-600 mt-2 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-stone-100 mt-4 flex items-center justify-between bg-stone-50/50">
              <div>
                <span className="text-xs text-stone-500 block uppercase font-medium">Price per Dozen</span>
                <span className="text-2xl font-bold text-stone-900">
                  ${item.pricePerDozen.toFixed(2)}
                </span>
              </div>
              <a
                href="#secure-checkout"
                className="bg-stone-900 text-white font-medium px-5 py-3 rounded-xl hover:bg-emerald-800 transition-colors duration-200 shadow-sm text-sm"
              >
                Add to Order Bundle
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
