import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import logo from '../../assets/logo/Logo.png'
import botao from '../../assets/cta/CTA.png'


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
      <div className="flex flex-col bg-saibaMais">
        <div className="flex-auto">

          <div className="flex flex-auto justify-center pt-2">
            <img src={logo} className="flex justify-self-center justify-center" width="250" />
          </div>
          <div className="saiba-title pb-4 pt-10">
            Obrigado!
          </div>
        </div>

        <div className="flex items-start pl-4">

          <div className="saiba-text text-center">
            Seu contato já está conosco! <br />
            Em breve entraremos em contato com você.
          </div>
        </div>

        <div className="pl-20">
        </div>
      </div>
      :
      <ScrollableAnchor id={'saiba-mais'}>
        <div className="bg-saibaMais">
          <div className="flex-auto">
            <div className=" pt-20 flex justify-center">
              <img src={logo} className="flex justify-self-center justify-center" />
            </div>
          </div>
          <div className="flex flex-col pl-48">
            <div className="saiba-title pb-12 pt-24">
              Obrigado!
            </div>
              <div className="saiba-text pb-12">
                Seu contato já está conosco! <br />
                Em breve entraremos em contato com você.
              </div>
              <div className="relative flex justify-start pb-9">
                <img src={botao} className="flex button-saiba" />
                <button onClick={() => window.location = "https://dravaginismo.com.br/"} type="submit" className="absolute botao-saiba">Saiba Mais</button>
              </div >
          </div>
        </div>
      </ScrollableAnchor>
  )
}