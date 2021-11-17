import React from "react";
import {Button} from "react-bootstrap"

export default function Fondo() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Button className="mx-5" variant="primary">Primary</Button>{" "}
      <Button className="mx-5" variant="secondary">Secondary</Button>{" "}
      <Button className="mx-5" variant="success">Success</Button>{" "}
      <Button className="mx-5" variant="warning">Warning</Button>{" "}
    </div>
  );
}
