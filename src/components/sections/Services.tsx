import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Lightbulb, 
  Target, 
  BarChart3, 
  Zap,
  ArrowRight
} from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Strategic Planning",
      description: "Comprehensive strategic roadmaps that align with your business objectives and market opportunities.",
      features: ["Market Analysis", "Competitive Intelligence", "Growth Strategy", "Risk Assessment"]
    },
    {
      icon: Users,
      title: "Organizational Development",
      description: "Transform your team dynamics and organizational culture for peak performance and engagement.",
      features: ["Team Building", "Leadership Development", "Culture Transformation", "Change Management"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Drive innovation and digital transformation to stay ahead in the rapidly evolving business landscape.",
      features: ["Digital Strategy", "Process Innovation", "Technology Integration", "Innovation Labs"]
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Optimize operations and processes to maximize efficiency, reduce costs, and improve outcomes.",
      features: ["Process Improvement", "Efficiency Analysis", "Cost Optimization", "Quality Management"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Leverage data-driven insights to make informed decisions and uncover hidden opportunities.",
      features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "KPI Development"]
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Navigate the digital landscape with confidence through comprehensive transformation strategies.",
      features: ["Technology Roadmap", "Digital Strategy", "Automation", "Cloud Migration"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Business
            <span className="block gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We deliver tailored consulting services that drive measurable results 
            and sustainable growth for businesses across all industries.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="group/btn text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-600 mb-6 text-lg">
              Let's discuss how our expertise can help you achieve your strategic objectives.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services