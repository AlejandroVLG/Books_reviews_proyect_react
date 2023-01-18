import PulseLoader from "react-spinners/PulseLoader"
import { Container } from "react-bootstrap"

export default function Spinner() {

  return (
    <Container >
      <PulseLoader
        color="white"
        cssOverride={{}}
        loading
        margin={12}
        size={35}
        speedMultiplier={0.7}
      />
    </Container>
  )
}