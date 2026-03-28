param(
    [int]$Port = 5500
)

$ErrorActionPreference = 'Stop'

$port = $Port
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Write-Host "Serving $root at http://localhost:$port"
Write-Host "Press Ctrl+C to stop."

$mimeTypes = @{
    '.css'  = 'text/css'
    '.gif'  = 'image/gif'
    '.html' = 'text/html; charset=utf-8'
    '.jpg'  = 'image/jpeg'
    '.jpeg' = 'image/jpeg'
    '.js'   = 'application/javascript; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.png'  = 'image/png'
    '.svg'  = 'image/svg+xml'
    '.txt'  = 'text/plain; charset=utf-8'
    '.webp' = 'image/webp'
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $requestPath = [System.Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart('/'))

        if ([string]::IsNullOrWhiteSpace($requestPath)) {
            $requestPath = 'index.html'
        }

        $localPath = Join-Path $root $requestPath

        if ((Test-Path $localPath) -and -not (Get-Item $localPath).PSIsContainer) {
            $extension = [System.IO.Path]::GetExtension($localPath).ToLowerInvariant()
            $context.Response.ContentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { 'application/octet-stream' }

            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $context.Response.ContentLength64 = $bytes.Length
            $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $context.Response.StatusCode = 404
            $notFound = [System.Text.Encoding]::UTF8.GetBytes('404 - File not found')
            $context.Response.ContentType = 'text/plain; charset=utf-8'
            $context.Response.ContentLength64 = $notFound.Length
            $context.Response.OutputStream.Write($notFound, 0, $notFound.Length)
        }

        $context.Response.OutputStream.Close()
    }
}
finally {
    $listener.Stop()
    $listener.Close()
}
