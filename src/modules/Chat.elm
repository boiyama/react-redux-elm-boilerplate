port module Chat exposing (..)

import Json.Decode exposing (Value)
import Json.Encode exposing (list, object, string)
import WebSocket


server : String
server =
    "wss://echo.websocket.org"



-- PORT


port input : (Maybe String -> msg) -> Sub msg


port send : (Value -> msg) -> Sub msg



-- MODEL


type alias Model =
    { input : String
    , messages : List String
    }


initialModel : Model
initialModel =
    Model "" []


encode : Model -> Json.Encode.Value
encode model =
    object
        [ ( "input", string model.input )
        , ( "messages", list (List.map string model.messages) )
        ]



-- Msg


type Msg
    = Input (Maybe String)
    | Send
    | Receive String



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Input (Just input) ->
            ( Model input model.messages, Cmd.none )

        Input Nothing ->
            ( Model "" model.messages, Cmd.none )

        Send ->
            ( Model "" model.messages, sendMessage model.input )

        Receive message ->
            ( Model model.input (message :: model.messages), Cmd.none )


sendMessage : String -> Cmd Msg
sendMessage input =
    WebSocket.send server input



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ input Input
        , send <| always Send
        , WebSocket.listen server Receive
        ]
