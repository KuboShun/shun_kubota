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

end
