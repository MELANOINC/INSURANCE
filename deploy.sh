#!/bin/bash
# Deploy script for Alan Nico Seguros

echo "🚀 Iniciando deployment de Alan Nico Seguros..."

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json"
    exit 1
fi

# Limpiar cache de Next.js
echo "🧹 Limpiando cache..."
rm -rf .next

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Construir el proyecto
echo "🔨 Construyendo proyecto..."
npm run build

# Verificar que el build fue exitoso
if [ $? -eq 0 ]; then
    echo "✅ Build exitoso!"
    echo "🎉 Proyecto listo para deployment en Vercel"
    echo "📱 ID del proyecto: prj_i5HkQ0Het7K5xvoBfcbHPLZfYWnP"
else
    echo "❌ Error en el build"
    exit 1
fi
