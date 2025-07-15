# Deploy script for Alan Nico Seguros - Windows PowerShell Version
Write-Host "🚀 Iniciando deployment de Alan Nico Seguros..." -ForegroundColor Green

# Verificar que estamos en el directorio correcto
if (-Not (Test-Path "package.json")) {
    Write-Host "❌ Error: No se encontró package.json" -ForegroundColor Red
    exit 1
}

# Limpiar cache de Next.js
Write-Host "🧹 Limpiando cache..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
}

# Instalar dependencias
Write-Host "📦 Instalando dependencias..." -ForegroundColor Cyan
npm install

# Construir el proyecto
Write-Host "🔨 Construyendo proyecto..." -ForegroundColor Blue
npm run build

# Verificar que el build fue exitoso
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build exitoso!" -ForegroundColor Green
    Write-Host "🎉 Proyecto listo para deployment en Vercel" -ForegroundColor Green
    Write-Host "📱 ID del proyecto: prj_i5HkQ0Het7K5xvoBfcbHPLZfYWnP" -ForegroundColor Yellow
    
    # Intentar hacer git add y commit
    Write-Host "📝 Haciendo commit de cambios..." -ForegroundColor Magenta
    git add .
    git commit -m "Fix Vercel deployment configuration - Remove obsolete appDir"
    git push origin main
    
    Write-Host "🚀 Deployment completado!" -ForegroundColor Green
} else {
    Write-Host "❌ Error en el build" -ForegroundColor Red
    exit 1
}
