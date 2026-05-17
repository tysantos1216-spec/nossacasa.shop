import React from 'react'

export default function FestasUpdatesPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf2] py-12 px-4 md:px-8">
      {/* Premium Azorean Accent Header */}
      <div className="max-w-5xl mx-auto text-center mb-16 border-b-2 border-dashed border-[#061d60]/20 pb-10">
        <span className="text-[#061d60] font-bold tracking-widest text-xs uppercase bg-white px-4 py-1.5 rounded-full border border-[#061d60]/30 shadow-sm">
          Espírito Santo & Island Traditions
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-black text-[#061d60] mt-4 tracking-tight">
          Festas & Local Updates
        </h1>
        <p className="text-stone-600 mt-3 text-sm md:text-base max-w-xl mx-auto italic">
          Keeping the culture alive in Rhode Island. Track our community batches, festival schedules, and baking calendars.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* LEFT TWO COLUMNS: Premium Facebook Feed Display */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border-2 border-[#061d60]/10 shadow-md p-6 relative overflow-hidden">
            {/* Top Azulejo Border Strip */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#061d60] via-amber-400 to-[#061d60]" />

            <div className="flex items-center justify-between mb-6 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#061d60] text-white flex items-center justify-center font-bold text-sm shadow-inner">
                  NC
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base">@nossacasa</h3>
                  <p className="text-xs text-emerald-700 font-medium">Latest Reels & Highlights</p>
                </div>
              </div>
              <a
                href="https://facebook.com/nossacasa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#061d60] hover:bg-blue-900 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all"
              >
                Follow Page
              </a>
            </div>

            {/* Embedded Live Player Window */}
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-stone-900 border border-stone-200 relative group shadow-inner">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Ffacebook.com%2Fnossacasa&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="opacity-95"
              />
            </div>
            <p className="text-xs text-stone-400 text-center mt-3 italic">
              Tap above to view our 2 latest posts, interactive videos, and kitchen updates live.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Festa Batch Tracker Notice */}
        <div className="space-y-6">
          <div className="bg-[#061d60] text-white rounded-2xl p-6 shadow-md border border-amber-400/40 relative">
            <h4 className="font-serif text-xl font-bold tracking-wide border-b border-white/20 pb-3 mb-4 text-amber-300">
              Próxima Festa Batch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider opacity-60 font-semibold">Current Location Focus</span>
                <span className="font-medium text-base">Cranston & Providence, RI</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider opacity-60 font-semibold">Special Recipe Drop</span>
                <span className="font-medium text-base text-amber-200">Fresh Wood-Fired Bolos Lêvedos</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider opacity-60 font-semibold">Status</span>
                <span className="inline-flex items-center gap-1.5 text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-1 rounded-md w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Pre-orders Open
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Share Link Card */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 text-center shadow-sm">
            <p className="text-xs text-stone-500 font-medium">Seen a Reel you loved?</p>
            <a
              href="https://facebook.com/nossacasa/reels"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block w-full text-center border-2 border-[#061d60] text-[#061d60] hover:bg-[#061d60] hover:text-white font-bold py-2.5 rounded-xl text-xs transition-colors tracking-wide"
            >
              Open Direct Reels Tab
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
