export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF5EE'}}>
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{background: 'linear-gradient(90deg, #0e3600 0%, #245e12 100%)'}}>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hindi Ka Na<br />
              <span style={{background: 'linear-gradient(to left, #ffd176, #d3950e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                Mauubusan ng Pera
              </span><br />
              Sa Excel!
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ang pinakamadaling paraan para sa mga solo business owners na ma-track ang inventory, kita, at gastos - 
              <strong className="text-yellow-300"> may AI pa na nagtuturo!</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://note-buko-886ay.ondigitalocean.app/login"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                🚀 Subukan Ngayon - LIBRE!
              </a>
              <p className="text-sm text-gray-300">No credit card needed • 5-minute setup</p>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Pagod Ka Na Ba Sa Mga Ganitong Problema?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
            <div className="text-4xl mb-4">😤</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Excel Hell</h3>
            <p className="text-gray-600">Nakakalito ang mga formula, nawawala ang data, at hindi mo alam kung magkano talaga ang kita mo.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Nawawalang Pera</h3>
            <p className="text-gray-600">Hindi mo alam kung saan napupunta ang pera mo. Parang kumikita ka pero walang natitira.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Walang Oras</h3>
            <p className="text-gray-600">Ginugugol mo ang buong gabi sa pag-compute ng inventory at gastos sa halip na mag-focus sa business.</p>
          </div>
        </div>
      </div>

      {/* Video Section Placeholder */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Tingnan Kung Paano Ka Matutulungan
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 rounded-xl aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-xl font-bold">Demo: 5-Minute Setup</p>
              <p className="text-gray-300">See how easy it is to get started</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-xl font-bold">AI Business Insights</p>
              <p className="text-gray-300">Watch AI analyze your business</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-gray-800 rounded-xl aspect-video w-full max-w-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-xl font-bold">Success Stories</p>
              <p className="text-gray-300">Real Filipino business owners sharing results</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div style={{background: 'linear-gradient(90deg, #0e3600 0%, #245e12 100%)'}} className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ang Sagot Sa Lahat Ng Problema Mo
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              NoteBuko - Ang pinakamadaling inventory at profit tracker na may AI business coach pa!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 text-black rounded-full p-2 flex-shrink-0">
                    <span className="text-xl font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Smart Inventory Tracking</h3>
                    <p className="text-gray-200">Automatic na mag-track ng stocks, sales, at profit. Hindi ka na mag-iisip ng formula!</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 text-black rounded-full p-2 flex-shrink-0">
                    <span className="text-xl font-bold">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">AI Business Coach</h3>
                    <p className="text-gray-200">May AI na magtuturo sa'yo kung paano pa mas lumaki ang kita mo. Parang may business consultant ka!</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 text-black rounded-full p-2 flex-shrink-0">
                    <span className="text-xl font-bold">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Kahit Saan, Kahit Kailan</h3>
                    <p className="text-gray-200">Web-based kaya pwede sa phone, tablet, o computer. Hindi mo kailangan mag-install ng anything!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-600 italic">[Dashboard Screenshot Placeholder]</p>
                <p className="text-sm text-gray-500 mt-2">Real-time inventory & profit analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="text-6xl mb-4">📱</div>
              <p className="text-gray-600 italic">[Mobile Interface Screenshot]</p>
              <p className="text-sm text-gray-500 mt-2">Works perfectly on any device</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="text-6xl mb-4">🤖</div>
              <p className="text-gray-600 italic">[AI Insights Screenshot]</p>
              <p className="text-sm text-gray-500 mt-2">AI-powered business recommendations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Mga Success Stories ng Mga Kapwa Mo Business Owner
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-gray-800">Maria Santos</h4>
                <p className="text-sm text-gray-600">Sari-sari Store Owner</p>
              </div>
            </div>
            <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-700 italic">
              "Grabe! Hindi ko alam na ganito pala kadami ang nawawala kong pera sa inventory. 
              Ngayon nakita ko na ang tunay kong kita. Salamat NoteBuko!"
            </p>
            <p className="text-green-600 font-bold mt-2">+₱15,000 monthly profit increase</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                J
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-gray-800">Juan Dela Cruz</h4>
                <p className="text-sm text-gray-600">Online Reseller</p>
              </div>
            </div>
            <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-700 italic">
              "Dati 3 oras ako nag-compute sa Excel every night. Ngayon 5 minutes lang! 
              Mas marami na akong time para sa family ko."
            </p>
            <p className="text-green-600 font-bold mt-2">3 hours saved daily</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-gray-800">Ana Reyes</h4>
                <p className="text-sm text-gray-600">Food Business</p>
              </div>
            </div>
            <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-700 italic">
              "Yung AI suggestions nila sobrang helpful! Natututo ako kung paano pa mas lumaki ang business ko. 
              Parang may business mentor ako!"
            </p>
            <p className="text-green-600 font-bold mt-2">2x revenue growth in 3 months</p>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div style={{background: 'linear-gradient(to left, #ffd176, #d3950e)'}} className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Magkano Ba Ito?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Mas mura pa sa isang araw na kita mo!
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Solo Business Plan</h3>
            <div className="text-5xl font-bold text-green-600 mb-2">₱99</div>
            <p className="text-gray-600 mb-6">per month</p>
            
            <ul className="text-left space-y-2 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Unlimited inventory tracking
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                AI business insights
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Real-time profit analytics
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Multi-currency support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                24/7 email support
              </li>
            </ul>
            
            <p className="text-sm text-gray-600 mb-4">
              <strong>FREE 14-day trial</strong> - No credit card required
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Ready Ka Na Ba Kumita ng<br />
          <span style={{background: 'linear-gradient(90deg, #0e3600 0%, #245e12 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Mas Malaki?
          </span>
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Hindi mo kailangan mag-antay. Simulan mo na ngayon ang pag-track ng tunay mong kita. 
          <strong> 5 minutes lang ang setup!</strong>
        </p>
        
        <div className="space-y-4">
          <a 
            href="https://note-buko-886ay.ondigitalocean.app/login"
            className="inline-block bg-gradient-to-r from-green-600 to-green-800 text-white font-bold text-2xl px-12 py-6 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            🚀 Simulan Mo Na - LIBRE 14 Days!
          </a>
          
          <p className="text-sm text-gray-500">
            ✅ No credit card required  ✅ Setup in 5 minutes  ✅ Cancel anytime
          </p>
          
          <p className="text-lg font-bold text-gray-700 mt-6">
            Samantalahin mo ang 14-day FREE trial. Walang risk, malaki ang potential!
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{background: 'linear-gradient(90deg, #0e3600 0%, #245e12 100%)'}} className="py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-200 text-sm">
            © 2025 NoteBuko. Made with ❤️ for Filipino Business Owners.
          </p>
        </div>
      </div>
    </div>
  )
}