'use client'

import { useState } from 'react'

// Iconos SVG inline para evitar dependencias externas
const CarIcon = () => (
  <svg className="h-12 w-12 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17H5a2 2 0 01-2-2v-4a2 2 0 012-2h4m6-2V2a1 1 0 00-1-1H8a1 1 0 00-1 1v1m8 5l4-4m0 0l-4-4m4 4H4" />
  </svg>
)
        <div className="flex items-center space-x-2">
          <ShieldIcon />
          <h1 className="text-2xl font-heading font-bold gradient-text">
            Alan Nico Seguros
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+5492236203664" className="flex items-center space-x-2 text-accent-500 hover:text-secondary-500 transition-colors">
            <PhoneIcon />
            <span>+54 9 2236 20-3664</span>
          </a>
          <button className="btn-primary">
            Contactanos
          </button>
        </div>Linecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-12 w-12 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const StarIcon = ({ filled = true }) => (
  <svg className={`h-4 w-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MailIcon = () => (
  <svg className="h-4 w-4 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon />
                  <span>Comparamos +20 aseguradoras</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon />
                  <span>Emisión en 5 minutos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon />
                  <span>Mejor precio garantizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon />
                  <span>Atención 24/7</span>
                </div>
              </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+5492236203664" className="flex items-center space-x-2 text-accent-500 hover:text-secondary-500 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+54 9 2236 20-3664</span>
            </a>
            <button className="btn-primary">
              Contactanos
            </button>
          </div>
  const insuranceTypes = [
    {
      icon: <CarIcon />,
      title: "Seguro de Auto",
      description: "Protegé tu vehículo con la mejor cobertura",
      features: ["Responsabilidad Civil", "Robo e Incendio", "Todo Riesgo"],
      action: "Cotizar Vehiculo"
    },
    {
      icon: <HomeIcon />,
      title: "Seguro de Hogar",
      description: "Tu casa protegida las 24 horas",
      features: ["Incendio", "Robo", "Fenómenos Naturales"],
      action: "Cotizar Hogar"
    },
    {
      icon: <HeartIcon />,
      title: "Seguro de Vida",
      description: "Tranquilidad para vos y tu familia",
      features: ["Muerte", "Invalidez", "Enfermedades Graves"],
      action: "Cotizar Vida"
    },
    {
      icon: <UsersIcon />,
      title: "Seguro de Salud",
      description: "Cuidá tu salud y la de los tuyos",
      features: ["Consultas", "Internación", "Medicina Prepaga"],
      action: "Cotizar Salud"
    }
  ]       <div className="animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">¿Por qué elegirnos?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Comparamos +20 aseguradoras</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Emisión en 5 minutos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Mejor precio garantizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Atención 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
              <ul className="text-sm text-gray-500 mb-6 space-y-1">
                {insurance.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center space-x-2">
                    <CheckCircleIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>o de Auto",
      description: "Protegé tu vehículo con la mejor cobertura",
      features: ["Responsabilidad Civil", "Robo e Incendio", "Todo Riesgo"],
      action: "Cotizar Vehiculo"
    },
    {
      icon: <Home className="h-12 w-12 text-secondary-500" />,
      title: "Seguro de Hogar",
      description: "Tu casa protegida las 24 horas",
      features: ["Incendio", "Robo", "Fenómenos Naturales"],
      action: "Cotizar Hogar"
    },
    {
      icon: <Heart className="h-12 w-12 text-secondary-500" />,
      title: "Seguro de Vida",
      description: "Tranquilidad para vos y tu familia",
      features: ["Muerte", "Invalidez", "Enfermedades Graves"],
      action: "Cotizar Vida"
    },
    {
      icon: <Users className="h-12 w-12 text-secondary-500" />,
      title: "Seguro de Salud",
      description: "Cuidá tu salud y la de los tuyos",
      features: ["Consultas", "Internación", "Medicina Prepaga"],
      action: "Cotizar Salud"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4 gradient-text">
            Todos los Seguros que Necesitás
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontrá el seguro perfecto para cada momento de tu vida. 
            Comparamos precios y coberturas para que tomes la mejor decisión.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insuranceTypes.map((insurance, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="flex justify-center mb-4">
                {insurance.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent-500">
                {insurance.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {insurance.description}
              </p>
              <ul className="text-sm text-gray-500 mb-6 space-y-1">
                {insurance.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
            <div key={index} className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-500">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.age} años, {testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} filled={true} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-3">"{testimonial.text}"</p>
              <div className="text-xs text-secondary-500 font-medium">
                {testimonial.insurance}
              </div>
            </div>
    {
      name: "Carlos Rodríguez",
      age: 45,
      location: "Córdoba",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "La atención es excelente y me ayudaron a encontrar el mejor precio para mi seguro de hogar. Muy profesionales.",
      rating: 5,
      insurance: "Seguro de Hogar"
    },
    {
      name: "Ana Martín",
      age: 28,
      location: "Rosario",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "Proceso súper fácil y rápido. Comparé varios seguros de vida y encontré el ideal para mi familia.",
      rating: 5,
      insurance: "Seguro de Vida"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4 gradient-text">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600">
            Miles de personas ya confían en nosotros
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-accent-500">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.age} años, {testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-3">"{testimonial.text}"</p>
              <div className="text-xs text-secondary-500 font-medium">
                {testimonial.insurance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente para el footer
const Footer = () => {
  return (
    <footer className="bg-primary-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShieldIcon />
              <h3 className="text-xl font-semibold">Alan Nico Seguros</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Tu tranquilidad, nuestra prioridad. Comparamos y encontramos el mejor seguro para vos.
            </p>
            <div className="flex space-x-3">
              <PhoneIcon />
              <span>+54 9 2236 20-3664</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Seguros</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-secondary-500 transition-colors">Seguro de Auto</a></li>
              <li><a href="#" className="hover:text-secondary-500 transition-colors">Seguro de Hogar</a></li>
              <li><a href="#" className="hover:text-secondary-500 transition-colors">Seguro de Vida</a></li>
              <li><a href="#" className="hover:text-secondary-500 transition-colors">Seguro de Salud</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-secondary-500 transition-colors">Cómo Funciona</a></li>
              <li><a href="#" className="hover:text-secondary-500 transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-secondary-500 transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-secondary-500 transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MailIcon />
                <span>info@alannicoseguros.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPinIcon />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Alan Nico Seguros. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Página principal
export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <InsuranceTypes />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
