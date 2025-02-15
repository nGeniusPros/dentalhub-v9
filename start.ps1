Write-Host "Starting DentalHub development environment..." -ForegroundColor Green

# Start the development server
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot'; npm start"

# Wait a moment for the server to start
Start-Sleep -Seconds 3

# Open the browser
Start-Process "http://localhost:5173"

Write-Host "Development environment is ready!" -ForegroundColor Green
Write-Host "Server is running at: http://localhost:5173" -ForegroundColor Yellow
