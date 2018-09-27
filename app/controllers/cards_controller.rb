class CardsController < ApplicationController
before_action :set_card, only: [:show, :update, :destroy]

def index
    render json: Card.order(created_at: :desc)
end

def show
    render json: @card
end

def create
    card = Card.new(card_params)

    if card.save
        render json: card
    else
        render_error(card)
    end
end

def update
    if @card.update(card_params)
        render json: @card
    else
        render_error(@card)
    end
end

def destroy
    @card.destroy
end

private

def set_card
    @card = Card.find(params[:id])
end

def card_params
    params.require(:card).permit(:name, :post, :liked)
end
end
