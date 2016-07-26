module Scrape

  require 'open-uri'
  require 'nokogiri'

  def url_scraping
    # scraiping URL
    url = 'http://matome.naver.jp/tech'
    charset = nil
    scraping_item = []
    scraping_list = []

    html = open(url) do |f|
      charset = f.charset # get charset
      f.read # read html and return
    end

    # parse html and make object
    doc = Nokogiri::HTML.parse(html, nil, charset)
    # "mdTopMTMList01Item" is ClassName。
    doc.xpath('//li[@class="mdTopMTMList01Item"]').each do |node|

      p node.css('h3').inner_text               
      p node.css('img').attribute('src').value  
      p node.css('a').attribute('href').value   
      
      scraping_item = [node.css('h3').inner_text, node.css('a').attribute('href').value]
      scraping_list.push(scraping_item)
    end
    return scraping_list
  end



  require 'open-uri'
  require 'json'
  require 'uri'

  def ekidata_scraping_1
    charset = nil
    prefecture = "1"
    url = "http://www.ekidata.jp/api/p/" + prefecture + ".json"
#    url = 'http://matome.naver.jp/tech'

    html = open(url) do |f|
      charset = f.charset # get charset
      f.read # read html and return
    end

    doc = Nokogiri::HTML.parse(html, nil, charset)
#    puts "doc: " + doc
    doc.xpath('line').each do |node|
      p "node: " + node
    end

    return doc    
  end



  require 'rexml/document'
  require 'nkf'

  def ekidata_scraping
  
    print "Content-Type: text/html\r\n\r\n"

    url = 'http://weather.livedoor.com'
    path = '/forecast/webservice/rest/v1?city=70&day=tomorrow'
    result = open(url + path)

    doc = REXML::Document.new(result)

    doc.elements.each ('lwws/') do |element|
    puts NKF.nkf("-Ws", element.elements['title'].text)
    end
  end

=begin

  require 'net/http'
  require 'uri'
  require 'json'
  def ekidata_scraping
    charset = nil
    prefecture = "1"
    url = "http://www.ekidata.jp/api/p/" + prefecture + ".json"
    url1 = 'http://www.example.com/sample.json'

    html = open(url) do |f|
      charset = f.charset # get charset
      f.read # read html and return
    end

    begin
    uri = URI.parse(url)
#    json = Net::HTTP.get(uri).encode("iso-8859-1").force_encoding("utf-8")
#    json = Net::HTTP.get(uri).encode("ASCII-8BIT").encode("utf-8")
    json = Net::HTTP.get(uri)
#    .encode('UTF-8', {:invalid => :replace,:undef   => :replace,:replace => '?'})
    p "json: " + json
#    result = json
    result = JSON.parse(json)
    p "result: " + result
    ekidata_scraping = result

    rescue JSON::ParserError => e
      $stderr.puts "ERROR: #{e}"
    end
  end  

=end
=begin
  require 'net/http'
  require 'uri'
  require 'json'

  def ekidata_scraping
    prefecture = "1"
    url = "http://www.ekidata.jp/api/p/" + prefecture + ".json"
    charset = nil

    uri = URI.parse(url)

    https = Net::HTTP.new(uri.host, uri.port)
    https.use_ssl = true
    res = https.start {
      https.get(uri.request_uri)
    }

    if res.code == '200'
      result = JSON.parse(res.body)
      p "HAHAHA! We got it!!!!!!!!!!!!!"
      return result
      # Railsだったらこう書ける`require 'json'`なしで
      # result = ActiveSupport::JSON.decode res.body

      # resultを使ってなんやかんや処理をする
    else
      p "OMG!! #{res.code} #{res.message}"
    end
  end
=end

end