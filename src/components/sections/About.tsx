import { motion } from 'framer-motion'
import { Award, Users, Globe, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

const About = () => {
  const stats = [
    { icon: Award, number: "500+", label: "Projects Completed", color: "from-blue-600 to-cyan-600" },
    { icon: Users, number: "200+", label: "Happy Clients", color: "from-purple-600 to-pink-600" },
    { icon: Globe, number: "25+", label: "Countries Served", color: "from-green-600 to-emerald-600" },
    { icon: TrendingUp, number: "98%", label: "Success Rate", color: "from-orange-600 to-red-600" }
  ]

  const team = [
    {
      name: "William K. Lee",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "15+ years of strategic consulting experience with Fortune 500 companies."
    },
    {
      name: "Sarah Chen",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Former McKinsey consultant specializing in digital transformation."
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in process optimization and organizational development."
    }
  ]

  const values = [
    {
      title: "Excellence",
      description: "We deliver exceptional results that exceed expectations and drive sustainable growth."
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge solutions and creative thinking to solve complex challenges."
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical standards in all our engagements."
    },
    {
      title: "Partnership",
      description: "We build long-term relationships based on trust, collaboration, and mutual success."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            About WKL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Driving Success Through
            <span className="block gradient-text">Strategic Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Founded on the principle that every business has untapped potential, 
            WKL Consultancy has been transforming organizations for over 15 years.
          </p>
        </motion.div>

        {/* Stats */}
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

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                WKL Consultancy was founded with a simple yet powerful vision: to help 
                businesses unlock their full potential through strategic thinking and 
                innovative solutions.
              </p>
              <p>
                Over the years, we've evolved from a small consulting firm to a trusted 
                partner for organizations worldwide. Our success is built on deep industry 
                expertise, proven methodologies, and an unwavering commitment to client success.
              </p>
              <p>
                Today, we continue to push boundaries, embrace new technologies, and deliver 
                transformational results that create lasting value for our clients.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass p-8 rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Meet Our Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About