import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import contato from '../../assets/cta/botao.png'
import logo from '../../assets/logo/Logo.png'
import { Reservar } from '../'


export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (event) => {
    if (window.pageYOffset >= 700 && !showBtn) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  return (
    isMobile ?
      <div className="flex flex-col bgTopo">
          <div className="flex-auto">
            <div className="flex topImg pt-2">
            <img src={logo} className="flex items-center pb-60 p-2" width="180"/>
            </div>
          </div>
        <Reservar />
      </div>
      :
    <ScrollableAnchor id={'home'}>
      <div className="bg-topo">
          <div className="flex-auto">
            <div className="flex top-img">
            <img src={logo} className="flex" width="400"/>
            </div>
            <img src={contato} className="invisible py-48" />
          </div>
        <Reservar />
      </div>
    </ScrollableAnchor>
  )
}