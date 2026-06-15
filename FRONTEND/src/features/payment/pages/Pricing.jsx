import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
    const plans = [
        { name: 'Free', price: '$0', tokens: '10K tokens', features: ['Basic access', 'Community support'] },
        { name: 'Medium', price: '$10', tokens: '500K tokens', features: ['Priority access', 'Email support'] },
        { name: 'Premium', price: '$25', tokens: '10M tokens', features: ['Full access', 'Dedicated support'] },
    ]

    return (
        <div className="min-h-screen flex-col gap-12  bg-slate-950 text-slate-100 flex items-center justify-center p-8">
            <h1 className='text-3xl font-semibold mb-4'>Upgrade Your plan</h1>
            <div className="grid w-full max-w-6xl gap-6 md:grid-cols-3">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.8)]"
                    >
                        <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                        <p className="mt-4 text-4xl font-bold text-white">{plan.price}</p>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">{plan.tokens}</p>
                        <ul className="mt-6 space-y-3">
                            {plan.features.map((feature) => (
                                <li key={feature} className="rounded-xl bg-gray-950 px-4 py-2 text-sm text-slate-200">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Link to={"/checkout"} className="mt-8 w-full block rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
                            Select
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing