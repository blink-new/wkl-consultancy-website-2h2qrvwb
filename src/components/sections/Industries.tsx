import { motion } from 'framer-motion'
import { Building2, Heart, Factory, ShoppingCart, Banknote, Zap, Plane, GraduationCap } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      name: "Technology",
      description: "Digital transformation, software development, and IT infrastructure optimization for tech companies.",
      projects: "150+ Projects",
      expertise: ["Cloud Migration", "DevOps", "Agile Transformation", "Product Strategy"],
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Patient care optimization, regulatory compliance, and operational efficiency for healthcare providers.",
      projects: "80+ Projects",
      expertise: ["Patient Experience", "Compliance", "Process Optimization", "Digital Health"],
      color: "from-red-600 to-pink-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Lean manufacturing, supply chain optimization, and Industry 4.0 transformation initiatives.",
      projects: "120+ Projects",
      expertise: ["Lean Manufacturing", "Supply Chain", "Quality Management", "Automation"],
      color: "from-gray-600 to-slate-600",
      bgColor: "bg-gray-50"
    },
    {
      icon: ShoppingCart,
      name: "Retail & E-commerce",
      description: "Customer experience enhancement, omnichannel strategies, and digital commerce solutions.",
      projects: "90+ Projects",
      expertise: ["Customer Experience", "Omnichannel", "Inventory Management", "Digital Marketing"],
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Banknote,
      name: "Financial Services",
      description: "Risk management, regulatory compliance, and digital banking transformation for financial institutions.",
      projects: "70+ Projects",
      expertise: ["Risk Management", "Compliance", "Digital Banking", "Fintech Integration"],
      color: "from-yellow-600 to-orange-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Zap,
      name: "Energy & Utilities",
      description: "Sustainability initiatives, smart grid implementation, and renewable energy transition strategies.",
      projects: "60+ Projects",
      expertise: ["Sustainability", "Smart Grid", "Renewable Energy", "Regulatory Compliance"],
      color: "from-purple-600 to-indigo-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Plane,
      name: "Transportation",
      description: "Logistics optimization, fleet management, and mobility-as-a-service solutions for transport companies.",
      projects: "45+ Projects",
      expertise: ["Logistics", "Fleet Management", "Route Optimization", "Mobility Solutions"],
      color: "from-teal-600 to-cyan-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Digital learning platforms, institutional management, and educational technology implementation.",
      projects: "35+ Projects",
      expertise: ["EdTech", "Learning Management", "Student Experience", "Digital Transformation"],
      color: "from-indigo-600 to-purple-600",
      bgColor: "bg-indigo-50"
    }
  ]

  const stats = [
    { number: "25+", label: "Industries Served" },
    { number: "500+", label: "Successful Projects" },
    { number: "98%", label: "Client Retention" },
    { number: "$2.5B", label: "Value Created" }
  ]

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-4">
            Industry Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Deep Expertise Across
            <span className="block gradient-text">Every Industry</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our consultants bring specialized knowledge and proven methodologies 
            tailored to the unique challenges and opportunities in your industry.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
                <CardContent className="p-6">
                  {/* Icon and Header */}
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${industry.bgColor} rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {industry.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {industry.projects}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Expertise Areas */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">
                      Key Expertise:
                    </h4>
                    <div className="space-y-1">
                      {industry.expertise.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center text-xs text-slate-600">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Industry Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="glass p-8 rounded-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Industry-Specific Solutions
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We don't believe in one-size-fits-all solutions. Our approach is deeply rooted 
                  in understanding the unique dynamics, regulations, and competitive landscapes 
                  of each industry we serve.
                </p>
                <div className="space-y-4">
                  {[
                    "Regulatory compliance expertise",
                    "Industry-specific best practices",
                    "Competitive intelligence",
                    "Specialized methodologies",
                    "Sector-focused partnerships"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Compliance Rate", value: "99.9%" },
                  { title: "Industry Awards", value: "25+" },
                  { title: "Sector Partnerships", value: "50+" },
                  { title: "Specialized Teams", value: "8" }
                ].map((metric, index) => (
                  <motion.div
                    key={metric.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-center p-4 bg-white/50 rounded-xl"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate-600">
                      {metric.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Don't See Your Industry?
          </h3>
          <p className="text-slate-600 mb-8 text-lg max-w-2xl mx-auto">
            We work across many more sectors and are always ready to tackle new challenges. 
            Let's discuss how our expertise can be applied to your specific industry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg"
            >
              Discuss Your Industry
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
            >
              View All Case Studies
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries