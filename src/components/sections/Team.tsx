import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail, Award, Users, TrendingUp, Target } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

const Team = () => {
  const leadership = [
    {
      name: "William K. Lee",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "15+ years of strategic consulting experience with Fortune 500 companies. Former McKinsey partner specializing in digital transformation and organizational change.",
      expertise: ["Strategic Planning", "Digital Transformation", "Change Management"],
      education: "MBA Harvard Business School, BS MIT",
      achievements: ["Led 200+ transformations", "Published author", "Industry speaker"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "william@wklconsultancy.com"
      }
    },
    {
      name: "Sarah Chen",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Former McKinsey consultant with deep expertise in technology strategy and innovation. Led digital transformations for major tech companies and startups.",
      expertise: ["Technology Strategy", "Innovation", "Product Development"],
      education: "MBA Stanford, MS Computer Science",
      achievements: ["Tech innovation awards", "Startup advisor", "Patent holder"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@wklconsultancy.com"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Operations excellence expert with 12+ years optimizing processes across manufacturing, healthcare, and financial services industries.",
      expertise: ["Process Optimization", "Lean Six Sigma", "Quality Management"],
      education: "MBA Wharton, BS Industrial Engineering",
      achievements: ["Six Sigma Master Black Belt", "Process improvement expert", "Industry consultant"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@wklconsultancy.com"
      }
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Analytics",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      bio: "Data science leader with PhD in Statistics and 10+ years building analytics capabilities for Fortune 100 companies.",
      expertise: ["Data Analytics", "Machine Learning", "Business Intelligence"],
      education: "PhD Statistics, MS Data Science",
      achievements: ["AI research publications", "Analytics platform architect", "Data science mentor"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@wklconsultancy.com"
      }
    }
  ]

  const consultants = [
    {
      name: "David Kim",
      role: "Senior Consultant",
      specialization: "Financial Services",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      projects: "50+ Projects"
    },
    {
      name: "Lisa Thompson",
      role: "Senior Consultant", 
      specialization: "Healthcare",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      projects: "45+ Projects"
    },
    {
      name: "James Wilson",
      role: "Principal Consultant",
      specialization: "Manufacturing",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      projects: "60+ Projects"
    },
    {
      name: "Maria Garcia",
      role: "Senior Consultant",
      specialization: "Retail & E-commerce",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      projects: "40+ Projects"
    },
    {
      name: "Robert Chang",
      role: "Principal Consultant",
      specialization: "Technology",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face",
      projects: "70+ Projects"
    },
    {
      name: "Jennifer Lee",
      role: "Senior Consultant",
      specialization: "Energy & Utilities",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop&crop=face",
      projects: "35+ Projects"
    }
  ]

  const stats = [
    { icon: Users, number: "50+", label: "Team Members", color: "from-blue-600 to-cyan-600" },
    { icon: Award, number: "25+", label: "Industry Awards", color: "from-purple-600 to-pink-600" },
    { icon: TrendingUp, number: "15+", label: "Years Experience", color: "from-green-600 to-emerald-600" },
    { icon: Target, number: "98%", label: "Client Satisfaction", color: "from-orange-600 to-red-600" }
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-4">
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet the Experts Behind
            <span className="block gradient-text">Your Success</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our diverse team of seasoned consultants brings together decades of experience 
            across industries, ensuring you get the best strategic guidance for your business.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      {/* Profile Image */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-24 h-24 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <Award className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 mb-1">
                          {leader.name}
                        </h4>
                        <p className="text-blue-600 font-semibold mb-3">
                          {leader.role}
                        </p>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                          {leader.bio}
                        </p>

                        {/* Expertise */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-slate-900 mb-2">Expertise:</h5>
                          <div className="flex flex-wrap gap-2">
                            {leader.expertise.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Education */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-slate-900 mb-1">Education:</h5>
                          <p className="text-slate-600 text-xs">{leader.education}</p>
                        </div>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-slate-900 mb-2">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {leader.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-center text-xs text-slate-600">
                                <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-3">
                          <a
                            href={leader.social.linkedin}
                            className="w-8 h-8 bg-slate-100 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 group/social"
                          >
                            <Linkedin className="w-4 h-4 text-slate-600 group-hover/social:text-white" />
                          </a>
                          <a
                            href={leader.social.twitter}
                            className="w-8 h-8 bg-slate-100 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors duration-200 group/social"
                          >
                            <Twitter className="w-4 h-4 text-slate-600 group-hover/social:text-white" />
                          </a>
                          <a
                            href={`mailto:${leader.social.email}`}
                            className="w-8 h-8 bg-slate-100 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200 group/social"
                          >
                            <Mail className="w-4 h-4 text-slate-600 group-hover/social:text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Consulting Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Senior Consulting Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultants.map((consultant, index) => (
              <motion.div
                key={consultant.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <img
                      src={consultant.image}
                      alt={consultant.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <h4 className="text-lg font-bold text-slate-900 mb-1">
                      {consultant.name}
                    </h4>
                    <p className="text-blue-600 font-semibold text-sm mb-2">
                      {consultant.role}
                    </p>
                    <Badge variant="outline" className="mb-3 text-xs">
                      {consultant.specialization}
                    </Badge>
                    <p className="text-slate-500 text-sm">
                      {consultant.projects}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Join Our World-Class Team
            </h3>
            <p className="text-slate-600 mb-6 text-lg">
              We're always looking for exceptional consultants who share our passion 
              for driving transformational results for our clients.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg"
              >
                View Open Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
              >
                Learn About Our Culture
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team