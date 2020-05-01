module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Events exposing (onClick)


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }


init : () -> ( Model, Cmd Msg )
init _ =
    ( 0, Cmd.none )


type alias Model =
    Int


type Msg
    = Increment Int
    | Decrement Int


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increment step ->
            ( model + step, Cmd.none )

        Decrement step ->
            ( model - step, Cmd.none )


view : Model -> Html Msg
view model =
    div []
        [ h2 [] [ text "This is an Elm component" ]
        , div [] [ text ("Count: " ++ String.fromInt model) ]
        , button [ onClick (Increment 1) ] [ text "+" ]
        , button [ onClick (Decrement 1) ] [ text "-" ]
        ]
