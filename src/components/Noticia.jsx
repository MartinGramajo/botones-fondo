import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import NoticiaCard from "../components/NoticiaCard";

export default function Noticia() {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const getNoticias = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vTZrI4hczpVnZ_O0niOKLPTw_eadZsCnLHJ_0ubRFHiFS8sm7oUXyn36xVbRW0pznuQmewOfPuT3UBk/pub?gid=0&single=true&output=csv"
            );

            const noticias = Papa.parse(response.data, { header: true });

            setNoticias(noticias.data);
        };
        getNoticias();
    }, []);
    return (
        <div className="container mt-4">
            <div className="text-center">
                <p className="tamaño-grande color-negro mb-0">Noticias</p>
                <div className="mb-5 d-flex flex-wrap justify-content-around">
                    {noticias.map((noticia, id) => (
                        <NoticiaCard key={id} data={noticia} />
                    ))}
                </div>
                <a className="sin-sub color-gris-tenue" href="/noticias">
                    <p className="color-vino">Ver todas las noticias</p>
                </a>
            </div>
        </div>
    );
}
