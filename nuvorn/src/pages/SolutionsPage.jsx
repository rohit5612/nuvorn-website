import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SolutionsNavbar from '../components/SolutionsNavbar'

const SolutionsPage = () => {
  const [activeTab, setActiveTab] = useState({
    procurement: 0,
    inventory: 0,
    security: 0
  })
  
  const [activeSection, setActiveSection] = useState('procurement')

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = solutions.map(s => s.id).concat(['implementation'])
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solutions = [
    {
      id: "procurement",
      title: "Procurement Suite",
      description: "Complete procurement workflow from requisition to goods receipt with approval chains and supplier management.",
      businessNeed: "Every business needs to purchase goods and services efficiently while maintaining control over spending, ensuring quality, and managing supplier relationships. Traditional procurement processes are often manual, error-prone, and lack visibility.",
      whatItDoes: "Our Procurement Suite automates the entire procurement lifecycle from initial requisition to goods receipt, providing real-time visibility, automated approvals, and comprehensive supplier management.",
      features: [
        "Purchase Requisitions & Orders",
        "Goods Receipt Notes (GRN)",
        "Supplier & Price Management", 
        "Approval Workflows",
        "Printable Documents"
      ],
      screenshots: [
        {
          image: "PR list dark .png",
          title: "Purchase Requisition Dashboard",
          description: "Centralized view of all purchase requisitions with status tracking, approval workflows, and real-time updates. Users can see pending approvals, completed requests, and track spending across departments."
        },
        {
          image: "pr create.png", 
          title: "Create Purchase Requisition",
          description: "Intuitive form for creating purchase requisitions with item details, quantities, justifications, and budget allocation. Includes smart suggestions based on previous purchases and supplier catalogs."
        },
        {
          image: "po details.png",
          title: "Purchase Order Management", 
          description: "Detailed purchase order view with supplier information, item specifications, pricing, delivery terms, and approval status. Includes document attachments and communication history."
        },
        {
          image: "actual PO process with app nodes.png",
          title: "Approval Workflow Visualization",
          description: "Visual representation of the approval process showing current status, pending approvals, and workflow nodes. Managers can see exactly where each order stands in the approval chain."
        },
        {
          image: "supplier mgmt.png",
          title: "Supplier Management",
          description: "Comprehensive supplier database with contact information, performance metrics, compliance status, and relationship history. Track supplier performance and manage contracts effectively."
        },
        {
          image: "supplier price.png",
          title: "Supplier Price Lists",
          description: "Manage multiple price lists from suppliers with effective dates, quantity breaks, and special pricing. Compare prices across suppliers and track price changes over time."
        },
        {
          image: "grn.png",
          title: "Goods Receipt Note (GRN)",
          description: "Process incoming goods with item-level details, quality checks, and attachment support. Match received items against purchase orders and handle discrepancies automatically."
        }
      ]
    },
    {
      id: "inventory",
      title: "Inventory Management", 
      description: "Real-time inventory tracking with multi-warehouse support, stock transfers, and comprehensive reporting.",
      businessNeed: "Accurate inventory management is crucial for businesses to avoid stockouts, reduce carrying costs, and ensure product availability. Poor inventory control leads to lost sales, excess stock, and operational inefficiencies.",
      whatItDoes: "Our Inventory Management system provides real-time visibility into stock levels across multiple warehouses, automates stock movements, and provides intelligent reporting for better decision making.",
      features: [
        "Multi-warehouse & Bin Management",
        "Stock Transfers & Adjustments", 
        "Stock Count & Reconciliation",
        "Item Master & Categories",
        "Real-time Stock Tracking"
      ],
      screenshots: [
        {
          image: "item master.png",
          title: "Item Master Database",
          description: "Comprehensive item catalog with specifications, categories, suppliers, and pricing information. Manage item attributes, variants, and relationships for complete product information."
        },
        {
          image: "stock overview.png",
          title: "Stock Overview Dashboard",
          description: "Real-time view of stock levels across all warehouses with filtering, search, and alert capabilities. Monitor stock movements, identify slow-moving items, and track inventory value."
        },
        {
          image: "stock transfer.png",
          title: "Stock Transfer Management",
          description: "Inter-warehouse stock transfers with approval workflows and tracking. Manage internal movements between locations with proper documentation and audit trails."
        },
        {
          image: "stock adjustment.png",
          title: "Stock Adjustment Processing",
          description: "Handle stock adjustments with reasons, approvals, and documentation. Process cycle counts, damage adjustments, and inventory corrections with full audit trails."
        },
        {
          image: "warehouse .png",
          title: "Warehouse Management",
          description: "Multi-warehouse setup with bin locations, capacity management, and zone configurations. Optimize warehouse operations with intelligent bin assignments and picking strategies."
        },
        {
          image: "SRN.png",
          title: "Stock Return Note (SRN)",
          description: "Process stock returns with reasons, quality checks, and reconciliation workflows. Handle customer returns, supplier returns, and internal stock movements efficiently."
        }
      ]
    },
    {
      id: "security",
      title: "Security & Access Control",
      description: "Advanced Role-Based Access Control (RBAC) with department-scoped permissions and audit logging.",
      businessNeed: "Businesses need granular control over who can access what data and features. Different departments require different levels of access, and compliance requirements demand comprehensive audit trails.",
      whatItDoes: "Our Security & Access Control system provides fine-grained permissions, department-scoped access, and comprehensive audit logging to ensure data security and regulatory compliance.",
      features: [
        "Department-scoped Roles",
        "Feature-level Permissions",
        "Data-level Access Control",
        "User Lifecycle Management",
        "Comprehensive Audit Logs"
      ],
      screenshots: [
        {
          image: "user mgmt.png",
          title: "User Management",
          description: "Comprehensive user administration with role assignments, department associations, and access controls. Manage user accounts, permissions, and lifecycle from creation to deactivation."
        },
        {
          image: "DEPT mgmt.png",
          title: "Department Management",
          description: "Configure departments and their access to different ERP modules. Set up organizational structure with proper hierarchy and access controls for each department."
        },
        {
          image: "module access to dept.png",
          title: "Module Access Control",
          description: "Define which departments have access to specific modules and features. Granular control over module access with department-level restrictions and feature permissions."
        },
        {
          image: "role mgt.png",
          title: "Role Management",
          description: "Create and manage roles with granular permissions and access controls. Define custom roles for different job functions with specific permissions for data access and operations."
        },
        {
          image: "role matrix for ABAC.png",
          title: "Role Matrix Visualization",
          description: "Visual representation of role-based access control matrix showing permissions across roles and resources. Easy-to-understand matrix for managing complex permission structures."
        }
      ]
    },
    {
      id: "workflow",
      title: "Workflow Designer",
      description: "Visual drag-and-drop interface to create custom approval chains and business processes without coding.",
      businessNeed: "Every business has unique approval processes and workflows. Traditional ERP systems force businesses to adapt to rigid workflows, but modern businesses need flexibility to match their specific processes.",
      whatItDoes: "Our Workflow Designer allows you to create custom approval chains and business processes using a visual drag-and-drop interface, without any coding required.",
      features: [
        "Drag-and-drop Interface",
        "Approval & Decision Nodes",
        "Conditional Workflows",
        "Version Control",
        "Audit Trails"
      ],
      screenshot: "workflow designer.png",
      highlight: true
    }
  ]

  return (
    <div className="relative z-10 bg-black text-white">
      {/* Floating Navigation */}
      <SolutionsNavbar 
        solutions={solutions} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      {/* Header */}
      <section className="pt-[calc(var(--navbar-height-mobile,100px)+40px)] pb-20 section-dark">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-contrast mb-6">
            Complete ERP Solutions
          </h1>
          <p className="text-xl text-contrast-muted max-w-3xl mx-auto">
            Modular ERP suite designed for telecom infrastructure companies and SMEs. 
            Start with what you need, expand as you grow.
          </p>
        </div>
      </section>

             {/* Detailed Solutions Sections */}
             {solutions.map((solution, index) => (
               <section key={index} id={solution.id} className={`py-20 ${index % 2 === 0 ? 'bg-black' : 'section-dark'}`}>
          <div className="container-max">
            {/* Solution Header */}
            <div className="text-center mb-14">
              {solution.highlight && (
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/10 border border-white/15 text-white/90">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Key Differentiator
                </div>
              )}
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {solution.title}
              </h2>
              
              <p className="text-xl max-w-4xl mx-auto mb-8 text-white/70">
                {solution.description}
              </p>
            </div>

            {/* Business Need & What It Does */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              <div className="rounded-2xl p-7 border border-white/10 bg-white/5">
                <h3 className="text-xl font-bold mb-3">Why your business needs this</h3>
                <p className="text-white/70 leading-relaxed">
                  {solution.businessNeed}
                </p>
              </div>
              
              <div className="rounded-2xl p-7 border border-white/10 bg-white/5">
                <h3 className="text-xl font-bold mb-3">What this solution does</h3>
                <p className="text-white/70 leading-relaxed">
                  {solution.whatItDoes}
                </p>
              </div>
            </div>

            {/* Screenshots with Tab Navigation */}
            {solution.screenshots && (
              <div>
                <h3 className={`text-2xl font-bold mb-8 text-center ${index % 2 === 0 ? 'text-gray-900' : 'text-contrast'}`}>See It In Action</h3>
                
                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {solution.screenshots.map((screenshot, screenshotIndex) => (
                    <button
                      key={screenshotIndex}
                      onClick={() => setActiveTab(prev => ({ ...prev, [solution.id]: screenshotIndex }))}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeTab[solution.id] === screenshotIndex
                          ? 'badge-primary shadow-lg'
                          : 'badge-muted hover:badge-secondary'
                      }`}
                    >
                      {screenshot.title}
                    </button>
                  ))}
                </div>

                {/* Active Screenshot */}
                <div className="relative">
                  <img 
                    src={`/images/erp-ss/${solution.screenshots[activeTab[solution.id]].image}`}
                    alt={solution.screenshots[activeTab[solution.id]].title}
                    className="w-full h-auto rounded-xl shadow-2xl screenshot-hover max-w-4xl mx-auto"
                  />
                  
                  {/* Screenshot Description */}
                  <div className="mt-6 text-center">
                    <h4 className={`text-xl font-bold mb-3 ${index % 2 === 0 ? 'text-gray-900' : 'text-contrast'}`}>
                      {solution.screenshots[activeTab[solution.id]].title}
                    </h4>
                    <p className={`max-w-3xl mx-auto ${index % 2 === 0 ? 'text-gray-600' : 'text-contrast-muted'}`}>
                      {solution.screenshots[activeTab[solution.id]].description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Single Screenshot (Workflow Designer) */}
            {solution.screenshot && (
              <div>
                <h3 className={`text-2xl font-bold mb-8 text-center ${index % 2 === 0 ? 'text-gray-900' : 'text-contrast'}`}>Visual Workflow Designer</h3>
                <div className="relative">
                  <img 
                    src={`/images/erp-ss/${solution.screenshot}`}
                    alt={solution.title}
                    className="w-full h-auto rounded-xl shadow-2xl screenshot-hover max-w-4xl mx-auto"
                  />
                  
                  <div className="mt-6 text-center">
                    <h4 className={`text-xl font-bold mb-3 ${index % 2 === 0 ? 'text-gray-900' : 'text-contrast'}`}>Drag-and-Drop Workflow Creation</h4>
                    <p className={`max-w-3xl mx-auto ${index % 2 === 0 ? 'text-gray-600' : 'text-contrast-muted'}`}>
                      Create custom approval chains and business processes using our intuitive drag-and-drop interface. 
                      No coding required - simply connect nodes to define your workflow logic and approval paths.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Key Features - Moved to bottom */}
            <div className="mt-16">
              <h3 className={`text-2xl font-bold mb-8 text-center ${index % 2 === 0 ? 'text-gray-900' : 'text-contrast'}`}>Key Features</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    index % 2 === 0 
                      ? 'bg-white/40 border border-white text-slate-900' 
                      : 'bg-white/20 border border-white/30 text-white'
                  }`}>
                    <svg className={`w-4 h-4 mr-2 flex-shrink-0 ${
                      index % 2 === 0 ? 'text-slate-900' : 'text-white'
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

             {/* Implementation Approach */}
             <section id="implementation" className="py-20 section-accent">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
              Phased Implementation
            </h2>
            <p className="text-xl text-accent-foreground">
              Start with core modules, expand as your business grows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-foreground font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-accent-foreground mb-3">Phase 1: Foundation</h3>
              <p className="text-accent-foreground">Procurement & Inventory modules with basic workflows</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-foreground font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-accent-foreground mb-3">Phase 2: Customization</h3>
              <p className="text-accent-foreground">Advanced workflows, RBAC, and custom processes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-foreground font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-accent-foreground mb-3">Phase 3: Expansion</h3>
              <p className="text-accent-foreground">Additional modules: HR, CRM, Project Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-200 to-blue-50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-slate-900/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how Nuvorn Axis can be tailored to your specific business needs and industry requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/features"
              className="bg-primary text-white inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-amber-800 hover:text-white"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explore Features
            </Link>
            <Link
              to="/contact"
              className="bg-gray-400 inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:bg-slate-950 hover:text-white"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolutionsPage

