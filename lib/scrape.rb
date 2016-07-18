module Scrape

  require 'open-uri'
  require 'nokogiri'

  def url_scraping
    # スクレイピング先のURL
    url = 'http://matome.naver.jp/tech'
    charset = nil
    scraping_item = []
    scraping_list = []

    html = open(url) do |f|
      charset = f.charset # 文字種別を取得
      f.read # htmlを読み込んで変数htmlに渡す
    end

    # htmlをパース(解析)してオブジェクトを作成
    doc = Nokogiri::HTML.parse(html, nil, charset)
    # "mdTopMTMList01Item"がクラス名。
    doc.xpath('//li[@class="mdTopMTMList01Item"]').each do |node|

      p node.css('h3').inner_text               # tilte
      p node.css('img').attribute('src').value  # 記事のサムネイル画像
      p node.css('a').attribute('href').value   # 記事のサムネイル画像
      
      scraping_item = [node.css('h3').inner_text, node.css('a').attribute('href').value]
      scraping_list.push(scraping_item)
    end
    return scraping_list
  end

end