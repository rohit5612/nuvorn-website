import { Link } from 'react-router-dom'
import { useState } from 'react'

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState({
    workflow: 0,
    rbac: 0,
    inventory: 0,
    documents: 0,
    audit: 0,
    tech: 0
  })
  const features = [
    {
      id: "workflow",
      title: "Visual Workflow Designer",
      description: "Create custom approval chains and business processes with our drag-and-drop interface. No coding required.",
      benefits: [
        "Drag-and-drop node creation",
        "Conditional workflow paths", 
        "Approval and decision nodes",
        "Version control and rollbacks",
        "Real-time workflow execution"
      ],
      screenshots: [
        {
          image: "workflow designer.png",
          title: "Workflow Designer Interface",
          description: "Drag-and-drop interface for creating custom approval chains and business processes without coding."
        },
        {
          image: "actual PO process with app nodes.png",
          title: "Purchase Order Workflow",
          description: "Real-world example of a purchase order approval workflow with multiple decision nodes and approval paths."
        }
      ],
      highlight: true
    },
    {
      id: "rbac",
      title: "Advanced Role-Based Access Control",
      description: "Fine-grained permissions with department-scoped roles, feature-level access, and data-level restrictions.",
      benefits: [
        "Department-scoped permissions",
        "Feature-level access control",
        "Data-level restrictions (own/department/all)",
        "Cross-department access options",
        "Permission caching for performance"
      ],
      screenshots: [
        {
          image: "role mgt.png",
          title: "Role Management",
          description: "Create and manage roles with granular permissions and access controls for different user types."
        },
        {
          image: "role matrix for ABAC.png",
          title: "Role Matrix",
          description: "Visual representation of role-based access control matrix showing permissions across roles and resources."
        }
      ]
    },
    {
      id: "inventory",
      title: "Real-time Inventory Management",
      description: "Live stock tracking with multi-warehouse support, automated transfers, and comprehensive reporting.",
      benefits: [
        "Real-time stock levels",
        "Multi-warehouse management",
        "Automated stock transfers",
        "Stock adjustment workflows",
        "Periodic stock counting"
      ],
      screenshots: [
        {
          image: "stock overview.png",
          title: "Stock Overview",
          description: "Real-time view of stock levels across all warehouses with filtering and search capabilities."
        },
        {
          image: "stock transfer.png",
          title: "Stock Transfer",
          description: "Inter-warehouse stock transfers with approval workflows and tracking."
        },
        {
          image: "stock adjustment.png",
          title: "Stock Adjustment",
          description: "Handle stock adjustments with reasons, approvals, and documentation."
        },
        {
          image: "warehouse .png",
          title: "Warehouse Management",
          description: "Multi-warehouse setup with bin locations and capacity management."
        }
      ]
    },
    {
      id: "documents",
      title: "Secure Document Management",
      description: "Attach and manage documents with validation, secure storage, and audit trails for compliance.",
      benefits: [
        "Secure file attachments",
        "Document validation",
        "Audit trail tracking",
        "Printable document generation",
        "Version control"
      ],
      screenshots: [
        {
          image: "grn.png",
          title: "Goods Receipt Note",
          description: "Process incoming goods with item-level details and quality checks."
        },
        {
          image: "po details.png",
          title: "Purchase Order Details",
          description: "Detailed purchase order view with supplier information and approval status."
        }
      ]
    },
    {
      id: "audit",
      title: "Comprehensive Audit Logging",
      description: "Track all system activities with detailed logs for compliance, security, and operational insights.",
      benefits: [
        "User activity tracking",
        "System change logs",
        "Security event monitoring",
        "Compliance reporting",
        "Data integrity verification"
      ],
      screenshots: [
        {
          image: "user mgmt.png",
          title: "User Management",
          description: "Comprehensive user administration with role assignments and access controls."
        },
        {
          image: "DEPT mgt.png",
          title: "Department Management",
          description: "Configure departments and their access to different ERP modules."
        }
      ]
    },
    {
      id: "tech",
      title: "Modern Technology Stack",
      description: "Built on modern, secure technologies with Redis caching, JWT authentication, and scalable architecture.",
      benefits: [
        "PERN stack (PostgreSQL, Express, React, Node.js)",
        "Redis caching for performance",
        "JWT authentication with refresh tokens",
        "RESTful API architecture",
        "Docker containerization support"
      ],
      screenshots: [
        {
          image: "dashboard.png",
          title: "Light Dashboard",
          description: "Clean and modern dashboard interface with real-time data visualization."
        },
        {
          image: "dark dashboard.png",
          title: "Dark Dashboard",
          description: "Dark mode dashboard for comfortable viewing in low-light environments."
        }
      ]
    }
  ]

  return (
    <div className="relative z-10 bg-black text-white">
      {/* Header */}
      <section className="pt-[calc(var(--navbar-height-mobile,100px)+40px)] pb-20 section-dark">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-contrast mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-contrast-muted max-w-3xl mx-auto">
            Built for modern businesses that need flexibility, security, and scalability. 
            Every feature designed to adapt to your processes, not the other way around.
          </p>
        </div>
      </section>

      {/* Features with Screenshots */}
      {features.map((feature, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-black' : 'section-dark'}`}>
          <div className="container-max">
            <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              {/* Content */}
              <div className="flex-1">
                {feature.highlight && (
                  <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/10 border border-white/15 text-white/90">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Key Differentiator
                  </div>
                )}
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {feature.title}
                </h2>
                
                <p className="text-lg mb-8 text-white/70">
                  {feature.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/80">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenshots */}
              <div className="flex-1">
                {feature.screenshot ? (
                  <div className="relative">
                    <img 
                      src={`/images/erp-ss/${feature.screenshot}`}
                      alt={feature.title}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                ) : feature.screenshots ? (
                  <div>
                    <h3 className="text-2xl font-bold mb-8 text-center">See It In Action</h3>
                    
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                      {feature.screenshots.map((screenshot, screenshotIndex) => (
                        <button
                          key={screenshotIndex}
                          onClick={() => setActiveTab(prev => ({ ...prev, [feature.id]: screenshotIndex }))}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                            activeTab[feature.id] === screenshotIndex
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          {screenshot.title}
                        </button>
                      ))}
                    </div>

                    {/* Active Screenshot */}
                    <div className="relative">
                      <img 
                        src={`/images/erp-ss/${feature.screenshots[activeTab[feature.id]].image}`}
                        alt={feature.screenshots[activeTab[feature.id]].title}
                        className="w-full h-auto rounded-xl shadow-2xl max-w-4xl mx-auto"
                      />
                      
                      {/* Screenshot Description */}
                      <div className="mt-6 text-center">
                        <h4 className="text-xl font-bold mb-3">
                          {feature.screenshots[activeTab[feature.id]].title}
                        </h4>
                        <p className="max-w-3xl mx-auto text-white/70">
                          {feature.screenshots[activeTab[feature.id]].description}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Technical Specifications */}
      <section className="py-20 section-dark border-t border-white/10">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-contrast mb-6">
              Technical Excellence
            </h2>
            <p className="text-xl text-contrast-muted">
              Built on modern, secure technologies for enterprise-grade performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-contrast mb-3">Database</h3>
              <p className="text-contrast-muted">PostgreSQL 14+ with optimized queries and indexing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-contrast mb-3">Performance</h3>
              <p className="text-contrast-muted">Redis caching for sub-second response times</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-contrast mb-3">Security</h3>
              <p className="text-contrast-muted">JWT auth, rate limiting, and audit logging</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-contrast mb-3">Scalability</h3>
              <p className="text-contrast-muted">Docker-ready with horizontal scaling support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            See how our features work together to create a truly adaptive ERP solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solutions"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explore Solutions
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage

