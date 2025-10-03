import { useState } from 'react';
import { Shield, Satellite, Wind, Brain, MapPin, Bell, ArrowRight, AlertTriangle, Sparkles, Menu, X, TrendingUp, Activity, Users, Layers, BarChart3, Globe } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Shield className="w-8 h-8 text-teal-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-slate-900">AuraGuard</span>
                  <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded-full">North America</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">Powered by NASA TEMPO</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#problem" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Challenge</a>
              <a href="#solution" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Solution</a>
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Features</a>
              <a href="#map" className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2.5 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg shadow-teal-500/30 text-sm font-semibold">Explore Map</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#problem" className="block text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Challenge</a>
              <a href="#solution" className="block text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Solution</a>
              <a href="#features" className="block text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#map" className="block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2.5 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all text-center" onClick={() => setMobileMenuOpen(false)}>Explore Map</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-teal-200">
              <Sparkles className="w-4 h-4" />
              NASA Space Apps Challenge - Live Prototype
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              North America's
              <span className="block mt-2 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Hyperlocal Air Quality Guardian</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 mb-4 leading-relaxed font-light">
              Revolutionizing air quality monitoring through NASA TEMPO satellite data fusion
            </p>

            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-3xl mx-auto">
              Real-time integration of satellite imagery, ground sensors, and predictive AI to deliver ultra-local air quality insights across North America
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#map" className="group bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all transform hover:scale-105 font-semibold text-lg flex items-center justify-center gap-2 shadow-xl shadow-teal-500/30">
                Explore Live Map
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#features" className="bg-white text-slate-900 px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-lg border-2 border-slate-200 flex items-center justify-center gap-2 shadow-lg">
                See Technology Stack
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">NASA TEMPO</div>
                <div className="text-sm text-slate-600 font-medium">Satellite Integration</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">48-Hour</div>
                <div className="text-sm text-slate-600 font-medium">AI Forecasting</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5 Pollutants</div>
                <div className="text-sm text-slate-600 font-medium">Real-Time Tracking</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">Hyperlocal</div>
                <div className="text-sm text-slate-600 font-medium">Street-Level Data</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <AlertTriangle className="w-4 h-4" />
              The Challenge
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">The Invisible Threat</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Air quality monitoring across North America faces critical limitations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-red-500 to-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fragmented Data Sources</h3>
              <p className="text-slate-600 leading-relaxed">
                Satellite data, ground sensors, and weather information exist in silos. No unified platform provides a complete atmospheric picture for actionable decisions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lack of Hyperlocal Precision</h3>
              <p className="text-slate-600 leading-relaxed">
                Regional averages hide dangerous pollution hotspots. Your neighborhood air quality can differ drastically from city-wide reports, especially during wildfires.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">No Proactive Guidance</h3>
              <p className="text-slate-600 leading-relaxed">
                Complex technical data without context. Vulnerable communities, schools, and emergency services can't answer: "What should we do right now?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-green-500/30">
              <Sparkles className="w-4 h-4" />
              Our Innovative Solution
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Data Fusion Meets Predictive Intelligence</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transforming NASA's atmospheric science into actionable health protection
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg p-3 shadow-lg">
                  <Satellite className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">NASA TEMPO Data Fusion</h4>
                  <p className="text-slate-300 leading-relaxed">Real-time integration of NO₂, HCHO, PM, O₃, and Aerosol Index from NASA's TEMPO satellite, providing unprecedented atmospheric composition mapping.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-3 shadow-lg">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Comprehensive Ground-Truth Integration</h4>
                  <p className="text-slate-300 leading-relaxed">Seamlessly combines TEMPO data with Pandora, TolNet, and OpenAQ networks for robust validation and hyperlocal precision.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3 shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Predictive AI Forecasting Engine</h4>
                  <p className="text-slate-300 leading-relaxed">ML models process satellite, ground, and weather data to generate 48-hour air quality forecasts for specific communities.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-3 shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Socioeconomic Vulnerability Analysis</h4>
                  <p className="text-slate-300 leading-relaxed">Integrates demographic data to highlight communities most susceptible to air quality impacts, enabling targeted intervention.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-full p-2">
                        <Satellite className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-white text-sm">NASA TEMPO Live</span>
                        <div className="text-xs text-white/70">Last updated: 2 mins ago</div>
                      </div>
                    </div>
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">GOOD</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-white/70 text-xs mb-1">NO₂</div>
                      <div className="font-bold text-white text-lg">18 ppb</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-white/70 text-xs mb-1">O₃</div>
                      <div className="font-bold text-white text-lg">42 ppb</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-white/70 text-xs mb-1">PM2.5</div>
                      <div className="font-bold text-white text-lg">35 µg/m³</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 rounded-full p-2">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-white">48h AI Forecast</span>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">Air quality expected to worsen Thursday 8-11 AM due to weather patterns. Peak O₃ levels forecasted at 65 ppb near downtown areas.</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-yellow-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <span className="text-xs text-white/70 font-medium">Moderate</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 rounded-full p-2">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-white">Smart Alert</span>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">High ozone levels forecasted near Central Park 2-5 PM tomorrow. Vulnerable groups should limit prolonged outdoor activity during this window.</p>
                  <p className="text-xs text-white/60 mt-2">Personalized for your location & health profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Advanced Technology
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Seven Revolutionary Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge satellite integration meets intuitive design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Satellite className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">NASA TEMPO Data Fusion</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Real-time integration of NO₂, HCHO, PM, O₃, and Aerosol Index providing unparalleled atmospheric mapping.
              </p>
              <div className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full inline-block">Satellite Integration</div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ground-Truth Integration</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Combines TEMPO with Pandora, TolNet, and OpenAQ networks for validation and hyperlocal precision.
              </p>
              <div className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full inline-block">Multi-Source Fusion</div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Predictive AI Engine</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                ML models generate 48-hour forecasts by processing satellite, ground, and weather data.
              </p>
              <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">Machine Learning</div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dynamic Geospatial Viz</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Interactive maps displaying current and forecasted pollutants with weather overlays and community reports.
              </p>
              <div className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">Interactive Mapping</div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Bell className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Personalized Alerts</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Proactive notifications tailored to user profiles providing specific health guidance and timing.
              </p>
              <div className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">Health Protection</div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Vulnerability Overlay</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Integrates demographic data to highlight communities most susceptible to air quality impacts.
              </p>
              <div className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full inline-block">Social Impact</div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group md:col-span-2 lg:col-span-3">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="bg-gradient-to-br from-rose-500 to-rose-600 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Historical Trend Analysis & Validation</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    Compare satellite vs. ground data in real-time and review historical air quality trends. Essential for researchers, policymakers, and validation of predictive models.
                  </p>
                  <div className="text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full inline-block">Research Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section id="map" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" />
              Interactive Platform
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Live North America Air Quality Map</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore real-time pollutant levels powered by NASA TEMPO satellite data
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-100 via-teal-50/30 to-cyan-50/30 rounded-2xl p-12 text-center border-2 border-slate-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-200 [mask-image:radial-gradient(white,rgba(255,255,255,0.8))] -z-10"></div>
            <div className="max-w-3xl mx-auto relative">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Interactive Map Coming Soon</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Our dynamic geospatial platform will visualize real-time NO₂, HCHO, PM, O₃, and Aerosol Index with street-level precision across North America. Filter by pollutant, compare satellite vs. ground measurements, view 48-hour forecasts, and identify vulnerable communities.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto mb-8">
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                  <div className="text-xs text-slate-500 mb-1 font-medium">NO₂</div>
                  <div className="text-2xl font-bold text-slate-900">18</div>
                  <div className="text-xs text-green-600 font-semibold">ppb • Good</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                  <div className="text-xs text-slate-500 mb-1 font-medium">HCHO</div>
                  <div className="text-2xl font-bold text-slate-900">8.2</div>
                  <div className="text-xs text-green-600 font-semibold">ppb • Good</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                  <div className="text-xs text-slate-500 mb-1 font-medium">PM2.5</div>
                  <div className="text-2xl font-bold text-slate-900">35</div>
                  <div className="text-xs text-yellow-600 font-semibold">µg/m³ • Mod</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                  <div className="text-xs text-slate-500 mb-1 font-medium">O₃</div>
                  <div className="text-2xl font-bold text-slate-900">42</div>
                  <div className="text-xs text-green-600 font-semibold">ppb • Good</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                  <div className="text-xs text-slate-500 mb-1 font-medium">Aerosol</div>
                  <div className="text-2xl font-bold text-slate-900">0.8</div>
                  <div className="text-xs text-green-600 font-semibold">Index • Low</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="bg-white text-slate-700 px-4 py-2 rounded-lg font-medium border border-slate-200">NASA TEMPO</span>
                <span className="bg-white text-slate-700 px-4 py-2 rounded-lg font-medium border border-slate-200">Pandora Network</span>
                <span className="bg-white text-slate-700 px-4 py-2 rounded-lg font-medium border border-slate-200">TolNet</span>
                <span className="bg-white text-slate-700 px-4 py-2 rounded-lg font-medium border border-slate-200">OpenAQ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
            <Sparkles className="w-4 h-4" />
            NASA Space Apps Challenge Entry
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Join the Future of Air Quality Monitoring
          </h2>

          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Be among the first to experience NASA TEMPO-powered hyperlocal air quality intelligence
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                />
                <button
                  type="submit"
                  className="bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors font-semibold flex items-center justify-center gap-2 shadow-xl"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-white/80 text-sm mt-4">
                Join 500+ early adopters across North America
              </p>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/30">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Welcome to AuraGuard!</h3>
              <p className="text-white/90">
                You'll receive personalized air quality alerts powered by NASA TEMPO data. Breathe easier with science-driven insights.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-teal-400" />
              <div>
                <div className="text-lg font-bold">AuraGuard North America</div>
                <div className="text-xs text-slate-400">Powered by NASA TEMPO</div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm">
                A NASA Space Apps Challenge project revolutionizing air quality monitoring
              </p>
              <p className="text-slate-500 text-xs mt-2">
                Integrating TEMPO satellite data with Pandora, TolNet, OpenAQ, and predictive AI
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
