import { motion } from 'framer-motion'
import { Search, Lightbulb, Cog, Rocket, CheckCircle, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Discovery & Analysis",
      description: "We begin with comprehensive analysis of your current state, challenges, and opportunities.",
      details: [
        "Stakeholder interviews",
        "Process mapping",
        "Data analysis",
        "Market research",
        "Competitive benchmarking"
      ],
      duration: "2-4 weeks",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Strategy Development",
      description: "Based on insights, we develop tailored strategies and actionable roadmaps for success.",
      details: [
        "Strategic planning",
        "Solution design",
        "Risk assessment",
        "Resource planning",
        "Timeline development"
      ],
      duration: "3-6 weeks",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      icon: Cog,
      title: "Implementation",
      description: "We work alongside your team to execute the strategy with precision and expertise.",
      details: [
        "Project management",
        "Change management",
        "Training & development",
        "Process optimization",
        "Quality assurance"
      ],
      duration: "8-24 weeks",
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 4,
      icon: Rocket,
      title: "Launch & Scale",
      description: "We ensure successful deployment and help scale solutions across your organization.",
      details: [
        "Go-live support",
        "Performance monitoring",
        "Scaling strategies",
        "Optimization",
        "Knowledge transfer"
      ],
      duration: "4-12 weeks",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      icon: CheckCircle,
      title: "Continuous Improvement",
      description: "We provide ongoing support to ensure sustained success and continuous optimization.",
      details: [
        "Performance tracking",
        "Regular reviews",
        "Optimization recommendations",
        "Support & maintenance",
        "Future planning"
      ],
      duration: "Ongoing",
      color: "from-indigo-600 to-purple-600"
    }
  ]

  const methodologies = [
    {
      name: "Agile Consulting",
      description: "Iterative approach with rapid feedback cycles",
      icon: "🔄"
    },
    {
      name: "Design Thinking",
      description: "Human-centered problem-solving methodology",
      icon: "💡"
    },
    {
      name: "Lean Six Sigma",
      description: "Data-driven process improvement framework",
      icon: "📊"
    },
    {
      name: "Change Management",
      description: "Structured approach to organizational transformation",
      icon: "🔀"
    }
  ]

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium mb-4">
            Our Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Proven Process for
            <span className="block gradient-text">Guaranteed Success</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our systematic approach ensures consistent, measurable results. 
            Every engagement follows our time-tested methodology refined over 15+ years.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-green-200"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } space-y-8 lg:space-y-0 lg:space-x-16`}
              >
                {/* Content */}
                <div className="flex-1 max-w-lg">
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mr-4`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-500 mb-1">
                            STEP {step.id}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-900 mb-3">
                          Key Activities:
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium text-slate-700">
                            Duration: {step.duration}
                          </span>
                        </div>
                        {index < steps.length - 1 && (
                          <ArrowRight className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Visual Element */}
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-2xl`}
                  >
                    <step.icon className="w-16 h-16 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Methodologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Core Methodologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((methodology, index) => (
              <motion.div
                key={methodology.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {methodology.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">
                      {methodology.name}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {methodology.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-8">
              Why Our Process Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  metric: "98%",
                  label: "Project Success Rate",
                  description: "Consistently deliver results that exceed expectations"
                },
                {
                  metric: "6 Months",
                  label: "Average ROI Timeline",
                  description: "Clients see measurable returns within 6 months"
                },
                {
                  metric: "15+ Years",
                  label: "Methodology Refinement",
                  description: "Continuously improved through real-world application"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {item.metric}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.label}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process