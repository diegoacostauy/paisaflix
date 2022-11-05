import React from 'react'
import HeroMovie from '../components/HeroMovie'

type Props = {
  params: {
    id: string
  }
}

const page = ({ params: {id}}: Props) => {
  return (
    <HeroMovie id={id} />
  )
}

export default page
