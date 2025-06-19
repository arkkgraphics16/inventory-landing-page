export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF5EE'}}>
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{background: 'linear-gradient(90deg, #0e3600 0%, #245e12 100%)'}}>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
             Spreadsheet na <br />
              <span style={{background: 'linear-gradient(to left, #ffd176, #d3950e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
               Ma utak at wais. 
              </span><br />
              Saldo AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ang pinakamadaling paraan para sa mga business owners na ma-track ang inventory, benta, kita, at gastos - 
              <strong className="text-yellow-300"> may AI pa na nagtuturo!</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://note-buko-886ay.ondigitalocean.app/login"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Subukan Ngayon - LIBRE!
              </a>
              <p className="text-sm text-gray-300">No credit card needed • INSTANT setup</p>
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
            <h3 className="text-xl font-bold text-gray-800 mb-3">Magulong Spreadsheet</h3>
            <p className="text-gray-600">Nakakalito ang mga formula, andaming data, at hindi mo alam kung ang gagawin mo na NEXT STEP.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Ano na tapos?</h3>
            <p className="text-gray-600">Nalagay mo na nga ang data mo sa spreadsheet. Pero ano na ang susunod mong gagawin?</p>
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
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
    Demo: Paano Gamitin ang App
  </h2>
  
  <div className="flex justify-center">
<div className="w-full max-w-sm aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.youtube.com/embed/Z4zVLob1s0g"
        title="Saldo AI Demo"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
</div>

      {/* Solution Section */}
      <div style={{background: 'linear-gradient(90deg, #0e3600 0%, #245e12 100%)'}} className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Eto ang Sasagot Sa Lahat Ng Problema Mo
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ang pinakamadaling inventory at profit tracker na MATALINO pa!
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
                    <h3 className="text-xl font-bold text-white mb-2">Saldo AI</h3>
                    <p className="text-gray-200">May AI na magtuturo sa&apos;yo kung paano pa mas lumaki ang kita mo. Parang may business consultant ka!</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 text-black rounded-full p-2 flex-shrink-0">
                    <span className="text-xl font-bold">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Kahit Saan, Kahit Kailan</h3>
                    <p className="text-gray-200">Web-based kaya pwede sa phone, tablet, o computer. Kahit saan, pwede mong ma open!</p>
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
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
    Saldo AI In Action
  </h2>

  <div className="overflow-x-auto flex space-x-6 snap-x snap-mandatory pb-4">
    {["/images/mobile.jpg", "/images/ai1.jpg", "/images/ai2.jpg", "/images/ai3.jpg", "/images/dash.jpg"].map((src, idx) => (
      <div key={idx} className="flex-shrink-0 w-80 snap-center bg-white rounded-xl shadow-md overflow-hidden">
        <img src={src} alt={`Saldo Screenshot ${idx + 1}`} className="w-full aspect-[9/16] object-cover" />
        <div className="p-4 text-center">
          <p className="text-sm text-gray-600">
            {src.includes('mobile') && 'Mobile Interface'}
            {src.includes('ai') && 'AI Insight Suggestion'}
            {src.includes('dash') && 'Dashboard Overview'}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


 {/* Testimonials */}
<div className="max-w-6xl mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
    Mga Success Stories ng Kapwa Mong Business Owner
  </h2>
  <p className="text-center text-green-700 font-semibold text-lg mb-10">
    Ginagamit na ng 300+ users sa buong Pilipinas
  </p>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="text-sm text-gray-500 mb-2 italic">Sari-sari store owner in Aklan</div>
      <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
      <p className="text-gray-700 italic">
        &quot;Grabe! Hindi ko alam na ganito pala kadami ang nawawala kong pera sa inventory.
        Ngayon nakita ko na ang tunay kong kita. Salamat Saldo AI!&quot;
      </p>
      <p className="text-green-600 font-bold mt-2">10% monthly profit increase</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="text-sm text-gray-500 mb-2 italic">Online reseller from Iloilo</div>
      <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
      <p className="text-gray-700 italic">
        &quot;Dati 3 oras ako nag-co-compute sa notebook ko gabi-gabi. Ngayon 5 minutes lang! 
        Mas marami na akong time sa pamilya ko.&quot;
      </p>
      <p className="text-green-600 font-bold mt-2">3 hours saved daily</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="text-sm text-gray-500 mb-2 italic">Food business owner from Capiz</div>
      <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
      <p className="text-gray-700 italic">
        &quot;Yung AI suggestions nila sobrang helpful! Ngayon alam ko kung anong products ang biglaan lumalakas.
        Parang may business mentor ako 24/7.&quot;
      </p>
      <p className="text-green-600 font-bold mt-2">2x revenue growth in 3 months</p>
    </div>
  </div>
</div>


      {/* Pricing */}
<div style={{background: 'linear-gradient(to left, #ffd176, #d3950e)'}} className="py-16">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-black mb-4">
      Gamitin Mo Libre! Gusto mo montly access kay Saldo AI? Dito Ka Lang Magbabayad.
    </h2>
    <p className="text-xl text-gray-800 mb-10">
      Lahat ng spreadsheet features, dashboard, at tracking, 100% LIBRE.
      <br />Si Saldo lang ang may bayad.
    </p>

    <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Saldo Add-on</h3>
      <div className="text-5xl font-bold text-green-600 mb-2">₱299</div>
      <p className="text-gray-600 mb-6">monthly — cancel anytime</p>

      <ul className="text-left space-y-2 mb-8 text-black">
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✓</span>
          Personalized business suggestions
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✓</span>
          Advices based on your spreadsheet
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✓</span>
          Business trend detection. UPDATED sa trends!
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✓</span>
          Works with your free account
        </li>
      </ul>
      <p className="text-sm text-gray-600 mb-4">
        <strong>FREE 3-day trial for Saldo AI</strong> – No credit card needed
      </p>
    </div>
  </div>
</div>


      {/* Final CTA */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Ready Ka Na Ba Mag Negosyo ng<br />
          <span style={{background: 'linear-gradient(90deg, #0e3600 0%, #245e12 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Mas Mautak?
          </span>
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Hindi mo kailangan mag-antay. Simulan mo na ngayon ang pag-track at pag SCALE!
          <strong> Instant setup!</strong>
        </p>
        
        <div className="space-y-4">
          <a 
            href="https://note-buko-886ay.ondigitalocean.app/login"
            className="inline-block bg-gradient-to-r from-green-600 to-green-800 text-white font-bold text-2xl px-12 py-6 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
             Simulan Mo Na - LIBRE!
          </a>
          
          <p className="text-sm text-gray-500">
            ✅ No credit card required  ✅ Setup in 5 minutes  ✅ Cancel anytime
          </p>
          
          <p className="text-lg font-bold text-gray-700 mt-6">
            Samantalahin mo ang 3-day FREE trial kay Saldo. Walang risk, malaki ang potential!
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{background: 'linear-gradient(90deg, #0e3600 0%, #245e12 100%)'}} className="py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-200 text-sm">
            © 2025 NoteBuko. Made for Filipino Business Owners.
          </p>
        </div>
      </div>
    </div>
  )
}