import { Check } from "lucide-react"

const Pricing = () => {
  return (
    <div className="relative w-full min-h-screen py-16 bg-white flex flex-col items-center font-medium overflow-hidden">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">

        <h1 className="text-5xl font-medium text-neutral-1000 tracking-[-0.04em] leading-[1.2]">
          <span className="flex items-center gap-2">
            Fair pricing
            <img
              src="/Frame 136.svg"
              alt=""
              className="h-16 w-auto object-contain mt-6"
            />
            <span className="bg-gradient-to-b from-[#66BCFF] to-[#0091FE] bg-clip-text text-transparent">
              No Surprises
            </span>
          </span>
        </h1>


        {/* Subtext */}
        <p className="text-sm text-neutral-850 ">
          Sick of payment issues, billing errors, and chargebacks? We handle all the <br />
          backend work: payments, disputes, data, and retention.
        </p>


        {/* Private Client Section */}

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            {/* Header */}
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              BECOME A PRIVATE CLIENT
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For larger brands looking to supercharge their subscription program.
            </p>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">
              Custom Pricing
            </h3>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                "1:1 Migration & Onboarding",
                "Subscription Management CRM",
                "Automated Payment Orchestration",
                "Custom Checkout & Upsells",
                "One-Click Membership Portals",
                "Fraud & Chargeback Guard",
                "Integrated With Your Apps",
                "24/7 Dedicated Support"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-b from-gray-700 to-gray-900 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
              Start Fulfilling
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
