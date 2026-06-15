import React from 'react'

const Checkout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/95 p-8 shadow-xl shadow-slate-950/40">
        <header className="mb-10">
          <h1 className="text-4xl font-semibold text-white">Checkout</h1>
          <p className="mt-3 text-slate-400">Review your plan, enter payment details, and complete your order.</p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Order Summary</h2>
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-slate-200">
              <span>Pro Plan</span>
              <strong>$29 / month</strong>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 py-4 text-slate-300">
              <span>One-time setup</span>
              <span>$15</span>
            </div>
            <div className="flex items-center justify-between pt-4 text-base font-semibold text-white">
              <span>Total</span>
              <span>$44</span>
            </div>
          </div>

          <div className="grid gap-8">
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Billing Details</h2>
              <label className="mb-5 block text-slate-300">
                <span className="mb-2 block text-sm font-medium">Full Name</span>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </label>
              <label className="mb-5 block text-slate-300">
                <span className="mb-2 block text-sm font-medium">Email Address</span>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </label>
              <label className="block text-slate-300">
                <span className="mb-2 block text-sm font-medium">Company</span>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </label>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Payment Method</h2>
              <label className="mb-5 block text-slate-300">
                <span className="mb-2 block text-sm font-medium">Card Number</span>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-slate-300">
                  <span className="mb-2 block text-sm font-medium">Expiry</span>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                  />
                </label>
                <label className="block text-slate-300">
                  <span className="mb-2 block text-sm font-medium">CVC</span>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                  />
                </label>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-right">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
          >
            Complete Purchase
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Checkout