import Button from "@/components/Button"
import { Check, Crown } from "lucide-react"

const Pricing = () => {
  return (
    <div className="relative w-full min-h-screen py-16 bg-white flex flex-col items-center font-medium overflow-hidden tracking-[-0.04em] leading-[1.2]">
      <div className="flex flex-col items-center text-center max-w-7xl mx-auto px-4">

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
        <p className="text-sm text-neutral-850 mb-12">
          Sick of payment issues, billing errors, and chargebacks? We handle all the <br />
          backend work: payments, disputes, data, and retention.
        </p>

        {/* Three Pricing Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl items-stretch">

          {/* Card 1 - Left */}
          <div className="w-full flex">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-neutral-500 flex flex-col w-full">
              <h2 className="text-xl text-neutral-950 mb-3 font-medium text-left">
                BECOME A PRIVATE CLIENT
              </h2>
              <p className="text-neutral-850 mb-6 text-sm font-medium text-left">
                For larger brands looking to supercharge their subscription program.
              </p>
              <h3 className="text-3xl font-medium text-gray-900 mb-8 text-left">
                Custom Pricing
              </h3>

              <div className="space-y-4 mb-8 flex-grow">
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
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-neutral-800 text-sm font-medium text-left">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full py-3 shadow-xl bg-gradient-to-b from-gray-700 to-gray-900">Start Fulfilling</Button>
            </div>
          </div>

          {/* Card 2 - Center */}
          <div className="w-full flex">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-neutral-500 flex flex-col w-full">
              <h2 className="text-xl text-neutral-950 mb-3 font-medium text-left">
                BECOME A PRIVATE CLIENT
              </h2>
              <p className="text-neutral-850 mb-6 text-sm font-medium text-left">
                For larger brands looking to supercharge their subscription program.
              </p>
              <h3 className="text-3xl font-medium text-gray-900 mb-8 text-left">
                Custom Pricing
              </h3>

              <div className="space-y-4 mb-8 flex-grow">
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
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-neutral-800 text-sm font-medium text-left">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full py-3 shadow-xl bg-gradient-to-b from-gray-700 to-gray-900">Start Fulfilling</Button>
            </div>
          </div>

          {/* Card 3 - Right */}
          <div className="w-full flex">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-neutral-500 flex flex-col w-full">
              <h2 className="text-xl text-neutral-950 mb-3 font-medium text-left">
                BECOME A PRIVATE CLIENT
              </h2>
              <p className="text-neutral-850 mb-6 text-sm font-medium text-left">
                For larger brands looking to supercharge their subscription program.
              </p>
              <h3 className="text-3xl font-medium text-gray-900 mb-8 text-left">
                Custom Pricing
              </h3>

              <div className="space-y-4 mb-8 flex-grow">
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
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-neutral-800 text-sm font-medium text-left">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full py-3 shadow-xl bg-gradient-to-b from-gray-700 to-gray-900">Start Fulfilling</Button>
            </div>
          </div>
        </div>


        {/* End Section */}
        <div className="mt-30 font-medium tracking-[-0.04em] leading-[1.2] text-center">
          <h2 className="text-5xl text-[#14181A] mb-4">
            <span className="text-gray-400">Buy,</span>{' '}
            <span className="text-blue-400">Ship,</span>{' '}
            <span>and Manage Everything <br /> From China Seamlessly.</span>
          </h2>

          <p className="text-neutral-850 mb-6">
            Sick of payment issues, billing errors, and chargebacks? We handle all the <br />
            backend work: payments, disputes, data, and retention.
          </p>

          <Button className="py-3 shadow-xl">
            Start Fulfilling
          </Button>
        </div>



      </div>
    </div>
  )
}

export default Pricing
