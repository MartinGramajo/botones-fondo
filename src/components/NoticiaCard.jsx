import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NoticiaCard({ data }) {
    const { id, titulo, foto } = data;
    return (
        <div className="card-propiedad ">
            <Card className="">
                <Link to={"/noticia/" + id}>
                    <Card.Img
                        className="card-foto img-fluid"
                        variant="top"
                        src={foto}
                    />
                </Link>
                <Card.Body className="color-negrogris-fondo ">
                    <Card.Text className=" color-gris peso-bold text-start my-2">
                        {titulo}
                    </Card.Text>

                    <Card.Text className=" text-start my-2">
                        <a className="sin-sub color-gris-tenue" href={"/noticia/" + id}>
                            Ver +
                        </a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
