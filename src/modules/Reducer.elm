port module Reducer exposing (..)

import Json.Decode exposing (Value)
import Json.Encode exposing (object)
import Redux
import Count
import Chat


-- PORT


port initialize : (Value -> msg) -> Sub msg



-- MODEL


type alias Model =
    { count : Count.Model
    , chat : Chat.Model
    }


initialModel : Model
initialModel =
    { count = Count.initialModel
    , chat = Chat.initialModel
    }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )


encode : Model -> Json.Encode.Value
encode model =
    object
        [ ( "count", Count.encode model.count )
        , ( "chat", Chat.encode model.chat )
        ]



-- Msg


type Msg
    = Initialize
    | CountMsg Count.Msg
    | ChatMsg Chat.Msg



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Initialize ->
            init

        CountMsg subMsg ->
            let
                ( count, countCmd ) =
                    Count.update subMsg model.count
            in
                ( { model | count = count }, Cmd.map CountMsg countCmd )

        ChatMsg subMsg ->
            let
                ( chat, chatCmd ) =
                    Chat.update subMsg model.chat
            in
                ( { model | chat = chat }, Cmd.map ChatMsg chatCmd )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ initialize <| always Initialize
        , Sub.map CountMsg (Count.subscriptions model.count)
        , Sub.map ChatMsg (Chat.subscriptions model.chat)
        ]



-- MAIN


main : Program Never Model Msg
main =
    Redux.program
        { init = init
        , update = update
        , encode = encode
        , subscriptions = subscriptions
        }
