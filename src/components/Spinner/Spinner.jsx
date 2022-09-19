import ClipLoader from "react-spinners/ClipLoader";
import PulseLoader from "react-spinners/PulseLoader";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Spinner() {

  return (
    <Container>
      <ClipLoader speedMultiplier={0.8} color="white" size={250} />

      <PulseLoader
        color="white"
        cssOverride={{}}
        loading
        margin={12}
        size={25}
        speedMultiplier={0.5}
      />
    </Container>
  )
}