import React from "react"
import { Rings } from "react-loader-spinner"

export default function Spinner() {

  return (
    <div >
      <Rings
        height="220"
        width="220"
        color="white"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  )
}