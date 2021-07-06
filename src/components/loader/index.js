import React from 'react'
import { LoaderStyle } from './styled'

export const Loader = () => {
  return (
    <LoaderStyle>
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderStyle>
  )
}
