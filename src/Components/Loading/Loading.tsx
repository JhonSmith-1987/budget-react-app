import {LoadingStyled} from "./LoadingStyled";

export default function Loading(): JSX.Element {

    return (
        <LoadingStyled>
            <img className="image-loading" alt="loading" src="/img/cargando.png"/>
            <span className="text-loading">Esta cargando...</span>
        </LoadingStyled>
    );
}