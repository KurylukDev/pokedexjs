import { DotSpinner } from '@uiball/loaders'
import React from 'react'

export const Loader = () => {
  return (
    <div className="container-loader">
      <DotSpinner size={40} speed={0.9} color='black'></DotSpinner>
    </div>
  )
}


