"use client"



export function HeroSection() {
  return (
    <>
      {/* Header with flags and logo */}
      <header className="bg-white border-b border-gray-200 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative flex justify-center">
            {/* Flag Background */}
            <div className="absolute inset-0 flex justify-center items-center gap-10 opacity-20">
              <div className="w-15 h-10 rounded" style={{background: 'linear-gradient(to right, green 33%, white 33%, white 66%, red 66%)'}} />
              <div className="w-15 h-10 rounded" style={{background: 'linear-gradient(to right, blue 40%, white 40%)'}} />
            </div>
            
            {/* Logo */}
            <div className="relative z-10">
              <img src="/images/logo.jpg" alt="Nossa Casa Bakery" className="h-24 w-auto mx-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with featured image */}
      <section className="py-5 flex justify-center bg-gray-50">
        <div className="max-w-4xl w-full px-4">
          <div className="relative max-w-full border-none overflow-hidden rounded-2xl shadow-lg">
            <img src="/images/best-picture.jpg" alt="Featured Product" className="w-full h-auto block" />
          </div>
        </div>
      </section>
    </>
  )
}
