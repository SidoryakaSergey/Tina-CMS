@echo off
echo Building the project...
call npm run build

if %errorlevel% neq 0 (
    echo Build failed. Deployment aborted.
    exit /b 1
)

echo Adding files to git...
git add .

echo Committing changes...
git commit -m "deploy: site update"

echo Pushing to GitHub...
git push

echo Deployment completed successfully!