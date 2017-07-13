module Chat.Test exposing (..)

import ElmTestBDDStyle exposing (..)
import Expect exposing (..)
import Test exposing (..)
import Chat exposing (..)


suite : Test
suite =
    describe "Chat Test Suite"
        [ describe "update"
            [ it "returns model that is updated input" <|
                expect (update (Input (Just "foo")) (Model "" [ "bar" ])) to equal ( Model "foo" [ "bar" ], Cmd.none )
            , it "returns model that is cleared input and command that sends message" <|
                expect (update Send (Model "foo" [ "bar" ])) to equal ( Model "" [ "bar" ], sendMessage "foo" )
            , it "returns model that is pushed message to messages" <|
                expect (update (Receive "bar") (Model "baz" [ "foo" ])) to equal ( Model "baz" [ "bar", "foo" ], Cmd.none )
            ]
        ]
