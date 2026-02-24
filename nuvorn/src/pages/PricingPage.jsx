import { useState } from 'react'
import { Link } from 'react-router-dom'

const PricingPage = () => {
  const [selectedTenure, setSelectedTenure] = useState('1-year')
  const [isCustomOpen, setIsCustomOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)

  const modules = [
    'Procurement & Purchase',
    'HR & Payroll',
    'Finance & Accounting',
    'Inventory Management',
    'Project Management',
    'Sales & CRM'
  ]

  const pricingPlans = {
    '1-year': {
      starter: 600000,
      professional: 800000,
      enterprise: 1000000,
      discount: 0,
      savings: 0
    },
    '2-year': {
      starter: 552000,
      professional: 736000,
      enterprise: 920000,
      discount: 8,
      savings: 48000
    },
    '3-year': {
      starter: 480000,
      professional: 640000,
      enterprise: 800000,
      discount: 20,
      savings: 120000
    }
  }

  const currentPlan = pricingPlans[selectedTenure]

  const faqs = [
    {
      question: "What is the ₹50,000 implementation fee and when do I pay it?",
      answer: "The ₹50,000 implementation fee is a one-time charge that covers complete system setup, data migration, user training, and go-live support. This fee is fully refundable until your ERP goes live, ensuring you're completely satisfied. You pay this fee upfront when you sign the contract, but it's protected by our refund guarantee."
    },
    {
      question: "How does the module-based pricing work?",
      answer: "Our pricing is based on the number of modules you need. Starter plan includes 2 modules, Professional includes 4 modules, and Enterprise includes all 6 modules. You can choose any combination of modules that fit your business needs."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade your plan at any time. If you start with the Starter plan and need more modules, you can easily upgrade to Professional or Enterprise. We'll prorate the pricing based on your remaining contract period."
    },
    {
      question: "What modules are available?",
      answer: "We offer 6 core modules: Procurement & Purchase, HR & Payroll, Finance & Accounting, Inventory Management, Project Management, and Sales & CRM. Each module provides complete functionality for that business area."
    },
    {
      question: "Is setup and implementation included?",
      answer: "Yes, all plans include complete setup, data migration, user training, and go-live support. Our team will handle the entire implementation process to ensure a smooth transition to your new ERP system."
    },
    {
      question: "What support is included?",
      answer: "Starter plan includes email support, Professional includes priority support, and Enterprise includes 24/7 priority support with a dedicated account manager. All plans include system updates and maintenance."
    },
    {
      question: "Can I get custom pricing for partial modules?",
      answer: "Yes, we offer flexible pricing for custom module combinations. Contact our sales team to discuss your specific needs and get a customized quote that fits your business requirements."
    },
    {
      question: "What happens if I need additional modules later?",
      answer: "You can add modules to your existing plan at any time. We'll provide a prorated quote for the additional modules and integrate them seamlessly with your current system."
    },
    {
      question: "What does the implementation fee cover exactly?",
      answer: "The ₹50,000 implementation fee covers: complete system configuration, data migration from your existing systems, comprehensive user training for your team, go-live support during the transition, and 30 days of post-implementation support. This ensures a smooth transition to your new ERP system."
    },
    {
      question: "Can you build custom modules for our specific needs?",
      answer: "Yes, we can develop custom modules tailored to your unique business requirements. Custom development is priced separately based on complexity and scope. We'll provide a detailed quote after understanding your specific needs."
    },
    {
      question: "What if our company has more than 1,000 users?",
      answer: "Our standard pricing is designed for companies with up to 1,000 users. For larger organizations, we'll discuss custom pricing and operational details based on your specific requirements and scale. Contact us for a personalized quote."
    },
    {
      question: "How do the long-term discounts work?",
      answer: "We offer significant savings for longer commitments: 8% discount for 2-year contracts and 20% discount for 3-year contracts. These discounts apply to all plans and help reduce your total cost of ownership."
    },
    {
      question: "Is there a minimum contract period?",
      answer: "All plans are annual contracts. This ensures we can provide comprehensive setup, training, and ongoing support. We offer flexible payment terms and can discuss custom arrangements for larger implementations."
    },
    {
      question: "Can I change my tenure commitment later?",
      answer: "You can upgrade to a longer tenure at any time to get better pricing. Downgrading to a shorter tenure is not allowed during your current contract period, but you can choose a different tenure at renewal."
    }
  ]

  return (
    <div className="relative z-10 bg-black text-white">
      {/* Header */}
      <section className="pt-[calc(var(--navbar-height-mobile,100px)+40px)] pb-20 section-dark">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-contrast mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-contrast-muted max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include full ERP functionality with flexible module selection.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-black">
        <div className="container-max">
          {/* Tenure Toggle */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fadeInUp">Choose Your Commitment</h2>
            <p className="text-xl text-gray-600 mb-8 animate-fadeInUp animate-delay-200">Select the tenure that works best for your business</p>
            <div className="flex justify-center">
              <div className="bg-white/5 rounded-2xl p-2 flex border border-white/10">
                {['1-year', '2-year', '3-year'].map((tenure) => (
                  <button
                    key={tenure}
                    onClick={() => setSelectedTenure(tenure)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedTenure === tenure
                        ? 'bg-primary text-white shadow-lg shadow-primary/30'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {tenure === '1-year' ? '1 Year' : tenure === '2-year' ? '2 Years' : '3 Years'}
                    {tenure !== '1-year' && (
                      <span className="ml-2 text-xs bg-emerald-500/15 text-emerald-200 px-2 py-1 rounded-full border border-emerald-500/20">
                        Save {pricingPlans[tenure].discount}%
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter Plan</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">₹{currentPlan.starter.toLocaleString('en-IN')}</span>
                  <span className="text-white/60 ml-2">/year</span>
                </div>
                <p className="text-white/70 mb-4">
                  2 Modules - Entry point for smaller businesses
                </p>
                {selectedTenure !== '1-year' && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 mb-4">
                    <p className="text-emerald-200 font-semibold text-sm">
                      Save ₹{(600000 - currentPlan.starter).toLocaleString('en-IN')} per year
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Choose any 2 modules</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Ideal for startups or small teams</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Can be upgraded anytime</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Email Support</span>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Plan</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">₹{currentPlan.professional.toLocaleString('en-IN')}</span>
                  <span className="text-white/60 ml-2">/year</span>
                </div>
                <p className="text-white/70 mb-4">
                  4 Modules - Growing organizations
                </p>
                {selectedTenure !== '1-year' && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 mb-4">
                    <p className="text-emerald-200 font-semibold text-sm">
                      Save ₹{(800000 - currentPlan.professional).toLocaleString('en-IN')} per year
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Includes any 4 modules</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Best for growing organizations</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Custom combinations allowed</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority Support</span>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan - Recommended */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 border-2 border-primary/25 relative hover:bg-white/10 transition-colors duration-300">
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Plan</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">₹{currentPlan.enterprise.toLocaleString('en-IN')}</span>
                  <span className="text-white/60 ml-2">/year</span>
                </div>
                <p className="text-white/70 mb-4">
                  All 6 Modules - Full ERP solution
                </p>
                {selectedTenure !== '1-year' && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 mb-4">
                    <p className="text-emerald-200 font-semibold text-sm">
                      Save ₹{(1000000 - currentPlan.enterprise).toLocaleString('en-IN')} per year
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>All 6 modules included</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Complete ERP functionality</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Dedicated Account Manager</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Priority Support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Custom Training & Documentation</span>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Available Modules */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Available Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of ERP modules. Mix and match based on your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{module}</h3>
                    <p className="text-sm text-gray-600">Complete module functionality</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-primary font-semibold mb-2">💬 Flexible pricing available for partial module setups</p>
              <p className="text-gray-600 text-sm">Contact us to discuss custom module combinations and pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All plans include comprehensive setup, training, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Setup & Implementation</h3>
                <div className="text-2xl font-bold text-primary mb-2">Included</div>
                <p className="text-gray-600 text-sm mb-4">Complete system setup and configuration</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm font-semibold">
                    ✓ Data migration, training, and go-live support
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                <div className="text-2xl font-bold text-primary mb-2">Included</div>
                <p className="text-gray-600 text-sm mb-4">Comprehensive support and maintenance</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-blue-800 text-sm font-semibold">
                    ✓ Updates, maintenance, and technical support
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Documentation</h3>
                <div className="text-2xl font-bold text-primary mb-2">Included</div>
                <p className="text-gray-600 text-sm mb-4">Complete user training and documentation</p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-amber-800 text-sm font-semibold">
                    ✓ User training sessions and comprehensive guides
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Important Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please review these important details about our pricing and implementation process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Custom Modules */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Modules</h3>
                  <p className="text-gray-600 mb-4">
                    Need specialized functionality beyond our standard modules? We can build custom modules tailored to your specific business requirements.
                  </p>
                  <div className="bg-white/50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Custom Development:</span> Additional cost based on complexity and requirements. 
                      We'll provide a detailed quote after understanding your specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Fee */}
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-accent/20">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation Fee</h3>
                  <p className="text-gray-600 mb-4">
                    A one-time implementation fee ensures smooth setup and successful go-live.
                  </p>
                  <div className="bg-white/50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">₹50,000 Implementation Fee:</span> Fully refundable until your ERP goes live. 
                      This covers setup, data migration, training, and go-live support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Limits */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">User Limits</h3>
                  <p className="text-gray-600 mb-4">
                    Our standard pricing is designed for companies with up to 1,000 users.
                  </p>
                  <div className="bg-white/50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">For 1,000+ Users:</span> We'll discuss custom pricing and operational details 
                      based on your specific requirements and scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Discount Information */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Long-term Discounts</h3>
                  <p className="text-gray-600 mb-4">
                    Commit to longer terms and save significantly on your ERP investment.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">2-Year Commitment:</span> 8% discount on all plans
                      </p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">3-Year Commitment:</span> 20% discount on all plans
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our pricing, implementation, and refund policies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the plan that fits your business needs and get started with your ERP implementation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get Started Today
            </Link>
            <Link
              to="/solutions"
              className="btn-secondary inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
