module Main exposing (main)

import Html exposing (..)


main : Html msg
main =
    div []
        [ h2 [] [ text "This is an Elm component" ]
        , div [] [ text "Count: 0" ]
        , button [] [ text "+" ]
        , button [] [ text "-" ]
        ]