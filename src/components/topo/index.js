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
    <div className="flex-auto bgTopo">
      <div className="flex-auto flex-col">
          <div className="flex-auto pt-7">
            <div className="flex topImg ">
            <img src={logo} className="imageTopo flex items-center "/>
            </div>
          </div>
          </div>
          <div className="titulo-topo">Sua dor durante a relação
            <strong> não é normal!</strong>
          </div>
        <Reservar />
      </div>
      :
    <ScrollableAnchor id={'home'}>
      <div className="bg-topo">
          <div className="flex-auto pt-7">
            <div className="flex top-img pb-3">
            <img src={logo} className="flex" width="400"/>
            </div>
            <img src={contato} className="invisible pt-80" />
          </div>
          <div className="tituloTopo tracking-widest">Sua dor durante a relação
              <strong> não é normal!</strong>
            </div>
        <Reservar />
      </div>
    </ScrollableAnchor>
  )
}