#!/usr/bin/env pwsh

# PowerShell script for deployment
Write-Host "Building the project..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Adding files to git..." -ForegroundColor Green
    git add .
    
    Write-Host "Committing changes..." -ForegroundColor Green
    git commit -m "deploy: site update"
    
    Write-Host "Pushing to GitHub..." -ForegroundColor Green
    git push
    
    Write-Host "Deployment completed successfully!" -ForegroundColor Green
} else {
    Write-Host "Build failed. Deployment aborted." -ForegroundColor Red
    exit 1
}