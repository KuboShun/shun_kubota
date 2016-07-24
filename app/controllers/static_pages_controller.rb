class StaticPagesController < ApplicationController
  def home
  end

  def about
  end

  def contact
  end

  def number
    logger.debug "出力したいデバッグ情報: " + params[:file_id]
    render file: "public/#{params[:file_id]}", layout: true, content_type: 'text/html'
  end

  def node
    logger.debug "出力したいデバッグ情報: " + params[:file_id]
    render file: "public/node/#{params[:file_id]}", layout: true, content_type: 'text/html'
  end

  include Scrape
  def scraping
    @url_scrapings = url_scraping
    logger.debug "出力したいデバッグ情報: " + @url_scrapings[0][0]
  end

end
