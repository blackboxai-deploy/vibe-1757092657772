import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about UniCrowd? Need help with your campaign? We&apos;re here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Support</h3>
                      <p className="text-muted-foreground">support@unicrowd.edu</p>
                      <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone Support</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-5PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Location</h3>
                      <p className="text-muted-foreground">
                        Student Services Building<br />
                        123 University Ave, Suite 200<br />
                        University City, UC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Cards */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I start a campaign?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Click &quot;Start a Campaign&quot; in the navigation, fill out the campaign form with your project details, 
                    and submit for university approval. Once approved, your campaign will go live!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What fees does UniCrowd charge?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    UniCrowd charges a 5% platform fee on successfully funded campaigns. 
                    This helps us maintain the platform and provide support to our community.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does campaign approval take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Campaign approval typically takes 2-3 business days. Our team reviews each campaign 
                    to ensure it meets university guidelines and platform standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I donate anonymously?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! When making a donation, you can choose to donate anonymously. 
                    Your name won&apos;t be displayed publicly, but you&apos;ll still receive a receipt.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What payment methods are accepted?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We accept credit cards, debit cards, and university account payments. 
                    All transactions are secure and processed through encrypted payment gateways.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Support Resources */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-8">Additional Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-semibold mb-2">Campaign Guide</h3>
                <p className="text-sm text-muted-foreground">
                  Step-by-step instructions for creating successful campaigns
                </p>
              </Card>
              <Card className="p-6">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <p className="text-sm text-muted-foreground">
                  Tips and strategies from our most successful campaign creators
                </p>
              </Card>
              <Card className="p-6">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="font-semibold mb-2">Video Tutorials</h3>
                <p className="text-sm text-muted-foreground">
                  Watch detailed tutorials on using the UniCrowd platform
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}