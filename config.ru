use Rack::Static,
  :urls => ["/bootstrap", "/imgs", "/js", "/css"],
  :root => "public",
  :header_rules => [
         # Cache all static files in public caches (e.g. Rack::Cache)
         #  as well as in the browser
         [:all, {'Cache-Control' => 'public, max-age=86400'}]]

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