import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Papa from "papaparse";
import { useParams } from "react-router";

export default function NoticiaDetalle() {
    const params = useParams();

    const [noticias, setNoticias] = useState({});
    console.log("file: NoticiaDetalle.jsx ~ line 11 ~ NoticiaDetalle ~ noticias", noticias)
    const getNoticias = async () => {
        const response = await axios.get(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTZrI4hczpVnZ_O0niOKLPTw_eadZsCnLHJ_0ubRFHiFS8sm7oUXyn36xVbRW0pznuQmewOfPuT3UBk/pub?gid=0&single=true&output=csv"
        );

        const noticias = Papa.parse(response.data, { header: true });
        const noticia1 = noticias.data;

        const noticiaFiltrada = noticia1.filter(
            (noticia) => noticia.id === params.id
        );
        setNoticias(noticiaFiltrada[0]);
    };
    useEffect(() => {
        getNoticias();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { titulo, foto, descripcion} = noticias;
    return (
        <>
            <Container>
                <div className="mx-auto">
                    <div>
                        <h1>holaa mundito</h1>
                        <img src={foto} alt="imagen1" />
                    </div>
                    <div className="p-5">
                        <p className="m-0">{titulo}</p>
                        <p> { descripcion }</p>
                    </div>
                </div>
            </Container>
        </>
    );
}
