use Rack::Static,
  :urls => ["/bootstrap", "/imgs", "/js", "/css"],
  :root => "public"
  
use Rack::Favicon

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}