module Count.Test exposing (..)

import ElmTestBDDStyle exposing (..)
import Expect exposing (..)
import Fuzz exposing (..)
import Test exposing (..)
import Count exposing (..)


suite : Test
suite =
    describe "Counter Test Suite"
        [ describe "update"
            [ it "returns increased model" <|
                expect (update Increase 0) to equal ( 1, Cmd.none )
            , fuzz int "returns increased model if model is odd" <|
                \model ->
                    let
                        newModel =
                            if model % 2 /= 0 then
                                model + 1
                            else
                                model
                    in
                        expect (update IncreaseIfOdd model) to equal ( newModel, Cmd.none )
            , it "returns model and command that increases in a second" <|
                expect (update IncreaseAsync 1) to equal ( 1, increaseInSecond )
            , it "returns decreased model" <|
                expect (update Decrease 1) to equal ( 0, Cmd.none )
            ]
        ]
