import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";

export default function Fondo() {
  const [imagen, setImagen] = useState(
    "https://www.ejemplos.co/wp-content/plugins/contextual-related-posts/default.png"
  );

  return (
    <>
      <div className="text-center mt-5">
        <Image src={imagen} alt="imagen de prueba numero1" />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button className="mx-5"
          variant="primary"
          onClick={() =>
          setImagen("https://thumbs.dreamstime.com/b/l%C3%A1piz-para-el-examen-prueba-escolar-impresa-pruebas-en-papel-ejercicios-y-ex%C3%A1menes-hoja-de-ordenador-con-la-sala-escuela-167279560.jpg")
          }
        >
          Primary
        </Button>{" "}
        <Button className="mx-5" variant="secondary"
          onClick={() =>
            setImagen("https://depor.com/resizer/bnZ_OBvpCqheCjy9xeVwUdgWBis=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/F2QAYXAKU5CZ7CJBZ7NALV2SNU.jpg")
            }
        >
          Secondary
        </Button>{" "}
        <Button className="mx-5" variant="success"
         onClick={() =>
          setImagen("https://www.uba.ar/internacionales/archivos/TEST.jpg")
          }
        >
          Success
        </Button>{" "}
        <Button className="mx-5" variant="warning"
        onClick={() =>
          setImagen("https://static.doofinder.com/main-files/uploads/2017/08/Prueba-social-o-social-proof.jpg")
          }
        >
          Warning
        </Button>{" "}
      </div>
    </>
  );
}
