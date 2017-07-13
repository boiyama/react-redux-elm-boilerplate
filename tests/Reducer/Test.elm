module Reducer.Test exposing (..)

import ElmTestBDDStyle exposing (..)
import Expect exposing (..)
import Test exposing (..)
import Reducer exposing (..)
import Chat


suite : Test
suite =
    describe "Reducer Test Suite"
        [ describe "init"
            [ it "returns initial model" <|
                expect init to equal ( Model 0 (Chat.Model "" []), Cmd.none )
            ]
        , describe "update"
            [ it "returns initialized model" <|
                expect (update Initialize (Model 0 (Chat.Model "" []))) to equal ( Model 0 (Chat.Model "" []), Cmd.none )
            ]
        ]
