port module Count exposing (..)

import Json.Decode exposing (Value)
import Json.Encode exposing (int)
import Process exposing (sleep)
import Task exposing (perform)
import Time exposing (millisecond)


-- PORT


port increase : (Value -> msg) -> Sub msg


port increaseIfOdd : (Value -> msg) -> Sub msg


port increaseAsync : (Value -> msg) -> Sub msg


port decrease : (Value -> msg) -> Sub msg



-- MODEL


type alias Model =
    Int


initialModel : Model
initialModel =
    0


encode : Model -> Json.Encode.Value
encode model =
    int model



-- Msg


type Msg
    = Increase
    | IncreaseIfOdd
    | IncreaseAsync
    | Decrease



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increase ->
            ( model + 1, Cmd.none )

        IncreaseIfOdd ->
            let
                count =
                    if model % 2 /= 0 then
                        model + 1
                    else
                        model
            in
                ( count, Cmd.none )

        IncreaseAsync ->
            ( model, increaseInSecond )

        Decrease ->
            ( model - 1, Cmd.none )


increaseInSecond : Cmd Msg
increaseInSecond =
    setTimeout Increase 1000


setTimeout : Msg -> Float -> Cmd Msg
setTimeout msg delay =
    perform (always msg) (sleep (delay * millisecond))



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ increase <| always Increase
        , increaseIfOdd <| always IncreaseIfOdd
        , increaseAsync <| always IncreaseAsync
        , decrease <| always Decrease
        ]
