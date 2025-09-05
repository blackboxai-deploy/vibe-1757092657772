export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About UniCrowd</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering university communities through innovative crowdfunding solutions that bring student ideas to life.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/099e72a8-6823-46c5-8df1-4497d28799ae.png"
                  alt="University campus with students collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At UniCrowd, we believe that every student idea deserves a chance to flourish. 
                Our platform connects passionate students and faculty with a community of supporters 
                who believe in the power of education and innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you&apos;re funding groundbreaking research, supporting student organizations, 
                or improving campus life, UniCrowd provides the tools and community to make it happen.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Education First</h3>
                <p className="text-muted-foreground">
                  Every campaign supports learning, growth, and academic excellence within our university community.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We foster connections between students, faculty, alumni, and supporters who share our vision.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We support creative projects and groundbreaking research that push boundaries and create impact.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">$2.4M+</div>
                <div className="text-muted-foreground">Total Raised</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">1,200+</div>
                <div className="text-muted-foreground">Projects Funded</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">25,000+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">87%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/578b19df-ea88-48f3-9b0d-194120aeb0e9.png"
                    alt="Dr. Sarah Mitchell - Platform Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Dr. Sarah Mitchell</h3>
                <p className="text-muted-foreground mb-2">Platform Director</p>
                <p className="text-sm text-muted-foreground">
                  Former Dean of Student Affairs with 15 years of experience in higher education.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bb337858-153c-46a7-9096-54f5f713daf7.png"
                    alt="Alex Thompson - Lead Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Alex Thompson</h3>
                <p className="text-muted-foreground mb-2">Lead Developer</p>
                <p className="text-sm text-muted-foreground">
                  Technology expert specializing in secure payment systems and user experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c7ad0807-399c-4a61-8a92-2ab15d259b97.png"
                    alt="Maria Rodriguez - Community Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Maria Rodriguez</h3>
                <p className="text-muted-foreground mb-2">Community Manager</p>
                <p className="text-sm text-muted-foreground">
                  Dedicated to supporting campaign creators and building meaningful connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}