'use client'

import { useState } from 'react'

// Iconos SVG inline
const CarIcon = () => (
  <svg className="h-6 w-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17H5a2 2 0 01-2-2v-4a2 2 0 012-2h4m6-2V2a1 1 0 00-1-1H8a1 1 0 00-1 1v1m8 5l4-4m0 0l-4-4m4 4H4" />
  </svg>
)

const UserIcon = () => (
  <svg className="h-6 w-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="h-6 w-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="h-8 w-8 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const StarIcon = ({ filled = true }) => (
  <svg className={`h-4 w-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

// Logos de aseguradoras (simulados)
const insuranceLogos = [
  { name: "Sancor Seguros", logo: "/logos/sancor.png", color: "bg-red-500" },
  { name: "La Caja", logo: "/logos/lacaja.png", color: "bg-blue-500" },
  { name: "Federación Patronal", logo: "/logos/federacion.png", color: "bg-green-500" },
  { name: "Zurich", logo: "/logos/zurich.png", color: "bg-purple-500" },
  { name: "Allianz", logo: "/logos/allianz.png", color: "bg-blue-600" },
  { name: "Mercantil Andina", logo: "/logos/mercantil.png", color: "bg-orange-500" }
]

const QuoteForm = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    vehicleType: '',
    brand: '',
    model: '',
    year: '',
    version: '',
    postalCode: '',
    birthDate: '',
    gender: '',
    name: '',
    email: '',
    phone: '',
    usage: ''
  })

  const [quotes, setQuotes] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const brands = [
    'Toyota', 'Ford', 'Chevrolet', 'Volkswagen', 'Peugeot', 'Renault', 
    'Fiat', 'Honda', 'Nissan', 'Hyundai', 'Citroën', 'Kia'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const generateQuotes = () => {
    setLoading(true)
    
    // Simular llamada a API
    setTimeout(() => {
      const mockQuotes = [
        {
          company: "Sancor Seguros",
          logo: insuranceLogos[0],
          plan: "Responsabilidad Civil",
          price: 8500,
          features: ["RC $30M", "Granizo", "Grúa 24hs"],
          rating: 4.8
        },
        {
          company: "La Caja",
          logo: insuranceLogos[1],
          plan: "Terceros Completo",
          price: 12300,
          features: ["RC $50M", "Robo e Incendio", "Cristales"],
          rating: 4.6
        },
        {
          company: "Federación Patronal",
          logo: insuranceLogos[2],
          plan: "Todo Riesgo",
          price: 18900,
          features: ["RC $100M", "Cobertura Total", "Auto Sustituto"],
          rating: 4.7
        },
        {
          company: "Zurich",
          logo: insuranceLogos[3],
          plan: "Responsabilidad Civil Plus",
          price: 9800,
          features: ["RC $40M", "Granizo", "Asistencia Legal"],
          rating: 4.5
        },
        {
          company: "Allianz",
          logo: insuranceLogos[4],
          plan: "Terceros Amplio",
          price: 15600,
          features: ["RC $60M", "Robo Total", "Accidentes Personales"],
          rating: 4.4
        },
        {
          company: "Mercantil Andina",
          logo: insuranceLogos[5],
          plan: "Todo Riesgo Premium",
          price: 22400,
          features: ["RC $150M", "Cobertura Completa", "Valor Convenido"],
          rating: 4.3
        }
      ].sort((a, b) => a.price - b.price) // Ordenar de menor a mayor precio
      
      setQuotes(mockQuotes)
      setLoading(false)
      setStep(4)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShieldIcon />
              <h1 className="text-2xl font-heading font-bold gradient-text">
                Alan Nico Seguros
              </h1>
            </div>
            <div className="text-sm text-gray-600">
              Paso {step} de 3
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Título principal */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-heading font-bold mb-4 gradient-text">
              Cotizá tu Vehículo
            </h2>
            <p className="text-xl text-gray-600">
              Completá los datos y compará precios de las mejores aseguradoras
            </p>
          </div>

          {/* Formulario paso a paso */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            
            {/* Paso 1: Datos del vehículo */}
            {step === 1 && (
              <div className="animate-fade-in">
                <div className="flex items-center mb-6">
                  <CarIcon />
                  <h3 className="text-2xl font-semibold text-accent-500 ml-3">Datos del Vehículo</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Vehículo
                    </label>
                    <select 
                      className="input-field"
                      value={formData.vehicleType}
                      onChange={(e) => handleInputChange('vehicleType', e.target.value)}
                    >
                      <option value="">Seleccionar</option>
                      <option value="auto">Auto</option>
                      <option value="suv">SUV</option>
                      <option value="pickup">Pickup</option>
                      <option value="moto">Moto</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Marca
                    </label>
                    <select 
                      className="input-field"
                      value={formData.brand}
                      onChange={(e) => handleInputChange('brand', e.target.value)}
                    >
                      <option value="">Seleccionar marca</option>
                      {brands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Modelo
                    </label>
                    <input 
                      type="text"
                      className="input-field"
                      placeholder="Ej: Corolla"
                      value={formData.model}
                      onChange={(e) => handleInputChange('model', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Año
                    </label>
                    <select 
                      className="input-field"
                      value={formData.year}
                      onChange={(e) => handleInputChange('year', e.target.value)}
                    >
                      <option value="">Seleccionar año</option>
                      {Array.from({length: 25}, (_, i) => 2025 - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Versión
                    </label>
                    <input 
                      type="text"
                      className="input-field"
                      placeholder="Ej: 1.8 XEI CVT"
                      value={formData.version}
                      onChange={(e) => handleInputChange('version', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button 
                    className="btn-primary flex items-center space-x-2"
                    onClick={() => setStep(2)}
                    disabled={!formData.vehicleType || !formData.brand || !formData.model || !formData.year}
                  >
                    <span>Continuar</span>
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            )}

            {/* Paso 2: Datos del conductor */}
            {step === 2 && (
              <div className="animate-fade-in">
                <div className="flex items-center mb-6">
                  <UserIcon />
                  <h3 className="text-2xl font-semibold text-accent-500 ml-3">Datos del Conductor</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Código Postal
                    </label>
                    <input 
                      type="text"
                      className="input-field"
                      placeholder="Ej: 1425"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha de Nacimiento
                    </label>
                    <input 
                      type="date"
                      className="input-field"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Género
                    </label>
                    <select 
                      className="input-field"
                      value={formData.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                    >
                      <option value="">Seleccionar</option>
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Uso del Vehículo
                    </label>
                    <select 
                      className="input-field"
                      value={formData.usage}
                      onChange={(e) => handleInputChange('usage', e.target.value)}
                    >
                      <option value="">Seleccionar</option>
                      <option value="particular">Particular</option>
                      <option value="comercial">Comercial</option>
                      <option value="uber">Uber/Cabify</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button 
                    className="btn-outline"
                    onClick={() => setStep(1)}
                  >
                    Volver
                  </button>
                  <button 
                    className="btn-primary flex items-center space-x-2"
                    onClick={() => setStep(3)}
                    disabled={!formData.postalCode || !formData.birthDate || !formData.gender}
                  >
                    <span>Continuar</span>
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            )}

            {/* Paso 3: Datos de contacto */}
            {step === 3 && (
              <div className="animate-fade-in">
                <div className="flex items-center mb-6">
                  <PhoneIcon />
                  <h3 className="text-2xl font-semibold text-accent-500 ml-3">Datos de Contacto</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo
                    </label>
                    <input 
                      type="text"
                      className="input-field"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input 
                      type="email"
                      className="input-field"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input 
                      type="tel"
                      className="input-field"
                      placeholder="11 1234-5678"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-secondary-500 p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>¿Por qué necesitamos estos datos?</strong><br/>
                    Los utilizamos únicamente para enviarte las cotizaciones y contactarte en caso de que quieras contratar algún seguro. No compartimos tu información con terceros.
                  </p>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button 
                    className="btn-outline"
                    onClick={() => setStep(2)}
                  >
                    Volver
                  </button>
                  <button 
                    className="btn-primary flex items-center space-x-2"
                    onClick={generateQuotes}
                    disabled={!formData.name || !formData.email || !formData.phone}
                  >
                    <span>Obtener Cotizaciones</span>
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            )}

            {/* Paso 4: Resultados */}
            {step === 4 && (
              <div className="animate-fade-in">
                {loading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary-500 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600">Cotizando en las mejores aseguradoras...</p>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-heading font-bold mb-4 gradient-text">
                        ¡Encontramos {quotes.length} Cotizaciones para Vos!
                      </h3>
                      <p className="text-lg text-gray-600">
                        Ordenadas de menor a mayor precio. Todas incluyen emisión inmediata.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {quotes.map((quote, index) => (
                        <div key={index} className="card p-6 border-l-4 border-secondary-500">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-4">
                              <div className={`w-16 h-16 ${quote.logo.color} rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                                {quote.company.split(' ').map(word => word[0]).join('')}
                              </div>
                              <div>
                                <h4 className="text-xl font-semibold text-accent-500">{quote.company}</h4>
                                <p className="text-lg text-gray-600">{quote.plan}</p>
                                <div className="flex items-center mt-1">
                                  {[...Array(5)].map((_, i) => (
                                    <StarIcon 
                                      key={i} 
                                      filled={i < Math.floor(quote.rating)}
                                    />
                                  ))}
                                  <span className="ml-2 text-sm text-gray-600">({quote.rating})</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-3xl font-bold text-primary-500">
                                ${quote.price.toLocaleString()}
                              </div>
                              <div className="text-sm text-gray-600">por mes</div>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex flex-wrap gap-2">
                            {quote.features.map((feature, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {feature}
                              </span>
                            ))}
                          </div>
                          
                          <div className="mt-6 flex space-x-4">
                            <button className="btn-primary flex-1">
                              Contratar Ahora
                            </button>
                            <button className="btn-outline">
                              Ver Detalles
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 text-center">
                      <button 
                        className="btn-outline"
                        onClick={() => {
                          setStep(1)
                          setQuotes([])
                          setFormData({
                            vehicleType: '',
                            brand: '',
                            model: '',
                            year: '',
                            version: '',
                            postalCode: '',
                            birthDate: '',
                            gender: '',
                            name: '',
                            email: '',
                            phone: '',
                            usage: ''
                          })
                        }}
                      >
                        Nueva Cotización
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuoteForm
