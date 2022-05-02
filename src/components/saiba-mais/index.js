import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import logo from '../../assets/logo/Logo.png'
import botao from '../../assets/cta/cta-obrigado.png'


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
      <div className="flex flex-col bg-obrigado">
        <div className="flex-auto">

          <div className="flex flex-auto justify-center">
            <img src={logo} className="flex justify-self-center justify-center pt-2 pb-8" width="200" />
          </div>
          <div className="flex flex-col place-items-center">
            <div className="flex-auto title-saiba ">
              Obrigada!
            </div>
            <div className="flex-auto obrigada-saiba">
              Vamos voar juntas, rumo a liberdade! <br />
              Em breve novidades virão.
            </div>
          </div>

          <div className="flex flex-col place-items-center">

            <div className="flex-auto text-saiba">
              Saiba de tudo sobre o nosso <br /> 
              ENCONTRO de primeira mão. Entre no <br />
              GRUPO EXCLUSIVO NO WHATSAPP.
            </div>
            <div className="relative flex justify-start pb-9">
              <img src={botao} className="flex saiba-button" />
              <button onClick={() => window.location = "https://wppbox.site/go/OEncontro"} type="submit" className="absolute saiba-botao">Entrar Agora</button>
            </div >
          </div>
        </div>
      </div>

      :
      <ScrollableAnchor id={'saiba-mais'}>
        <div className="bg-obrigadoDesk">
          <div className="flex flex-col place-items-start	pl-28">
            <div className="flex-auto saiba-title pt-40">
              Obrigada!
            </div>
            <div className="flex-auto saiba-obrigada">
              Vamos voar juntas, rumo a liberdade! <br />
              Em breve novidades virão.
            </div>
          </div>

          <div className="flex flex-col place-items-start	pl-20">

            <div className="flex-auto saiba-text pt-20">
              Saiba de tudo sobre o nosso ENCONTRO de primeira mão. <br />
              Entre no GRUPO EXCLUSIVO NO WHATSAPP.
            </div>
            <div className="relative flex justify-start">
              <img src={botao} className="flex button-saiba pb-32" />
              <button onClick={() => window.location = "https://wppbox.site/go/OEncontro"} type="submit" className="absolute botao-saiba pl-7 ">Entrar Agora</button>
            </div >
          </div>
        </div>
      </ScrollableAnchor>
  )
}