require 'sinatra'
require 'sinatra/activerecord'
require './app'
require 'sinatra/activerecord/rake'
# require 'activerecord'

get '/' do
  erb :index
end
