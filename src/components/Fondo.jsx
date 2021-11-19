import React from "react";
import {Button, Image} from "react-bootstrap"

export default function Fondo() {
  return (
    <>
     <div className="text-center mt-5">
     <Image src="https://www.ejemplos.co/wp-content/plugins/contextual-related-posts/default.png" alt="imagen de prueba numero1" />
      </div>
    <div className="d-flex justify-content-center mt-5">
      <Button className="mx-5" variant="primary">Primary</Button>{" "}
      <Button className="mx-5" variant="secondary">Secondary</Button>{" "}
      <Button className="mx-5" variant="success">Success</Button>{" "}
      <Button className="mx-5" variant="warning">Warning</Button>{" "}
    </div>
    </>
  )
}
