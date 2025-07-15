'use client'

import { useState } from 'react'

// Iconos SVG inline para evitar dependencias externas
const CarIcon = () => (
  <svg className="h-12 w-12 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 00-4-4H2m11-4v6l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const HomeIcon = () => (
  <svg className="h-12 w-12 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const HeartIcon = () => (
  <svg className="h-12 w-12 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const MedicalIcon = () => (
  <svg className="h-12 w-12 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="h-8 w-8 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const StarIcon = () => (
  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <ShieldIcon />
              <h1 className="text-2xl font-heading font-bold gradient-text">
                Alan Nico Seguros
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+5492236203664" className="flex items-center space-x-2 text-accent-500 hover:text-secondary-500 transition-colors">
                <PhoneIcon />
                <span className="font-medium">+54 9 2236 20-3664</span>
              </a>
              <a
                href="/cotizar"
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                COTIZA MI VEHICULO
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Tu tranquilidad,<br />
              <span className="text-accent-400">nuestra prioridad</span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
              Protege lo que más importa con los mejores seguros de Argentina. 
              Cotiza en minutos y obtén la cobertura perfecta para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cotizar"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-xl"
              >
                COTIZA MI VEHICULO
              </a>
              <a
                href="tel:+5492236203664"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Seguros */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-primary-600 mb-6">
              Seguros que Protegen tu Futuro
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde tu vehículo hasta tu hogar, ofrecemos la cobertura más completa 
              con las mejores aseguradoras del país.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Seguro de Auto */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-center group hover:transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-100 rounded-full mb-6 group-hover:bg-accent-200 transition-colors">
                <CarIcon />
              </div>
              <h4 className="text-xl font-bold text-primary-600 mb-4">Seguro de Auto</h4>
              <p className="text-gray-600 mb-6">
                Protección completa para tu vehículo con cobertura contra todo riesgo, 
                robo y terceros completos.
              </p>
              <a 
                href="/cotizar"
                className="text-secondary-500 font-semibold hover:text-secondary-600 transition-colors"
              >
                Cotizar →
              </a>
            </div>

            {/* Seguro de Hogar */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-center group hover:transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-100 rounded-full mb-6 group-hover:bg-accent-200 transition-colors">
                <HomeIcon />
              </div>
              <h4 className="text-xl font-bold text-primary-600 mb-4">Seguro de Hogar</h4>
              <p className="text-gray-600 mb-6">
                Cubre tu casa, departamento o local comercial contra incendio, 
                robo y daños por eventos climáticos.
              </p>
              <a 
                href="/cotizar"
                className="text-secondary-500 font-semibold hover:text-secondary-600 transition-colors"
              >
                Cotizar →
              </a>
            </div>

            {/* Seguro de Vida */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-center group hover:transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-100 rounded-full mb-6 group-hover:bg-accent-200 transition-colors">
                <HeartIcon />
              </div>
              <h4 className="text-xl font-bold text-primary-600 mb-4">Seguro de Vida</h4>
              <p className="text-gray-600 mb-6">
                Protege a tu familia con seguros de vida individuales y 
                grupales con las mejores coberturas del mercado.
              </p>
              <a 
                href="/cotizar"
                className="text-secondary-500 font-semibold hover:text-secondary-600 transition-colors"
              >
                Cotizar →
              </a>
            </div>

            {/* Seguro de Salud */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-center group hover:transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-100 rounded-full mb-6 group-hover:bg-accent-200 transition-colors">
                <MedicalIcon />
              </div>
              <h4 className="text-xl font-bold text-primary-600 mb-4">Seguro de Salud</h4>
              <p className="text-gray-600 mb-6">
                Acceso a la mejor medicina privada con planes familiares 
                e individuales adaptados a tus necesidades.
              </p>
              <a 
                href="/cotizar"
                className="text-secondary-500 font-semibold hover:text-secondary-600 transition-colors"
              >
                Cotizar →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <ShieldIcon />
              <h4 className="text-xl font-bold">Alan Nico Seguros</h4>
            </div>
            <p className="text-gray-300 mb-4">
              Tu tranquilidad, nuestra prioridad.
            </p>
            <p className="text-gray-300">
              📞 +54 9 2236 20-3664 | 📧 info@alannicoseguros.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
