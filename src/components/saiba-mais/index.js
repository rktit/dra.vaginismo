import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import logoDesk from '../../assets/logo/logo-folder.png'
import logoMobile from '../../assets/logo/logoMobile.png'
import fundoDesk from '../../assets/cta/ctaDesk.png'
import fundoMobile from '../../assets/cta/ctaMobile.png'

export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false);


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
      <div className="flex-auto flex-col bg-obrigado">
        <div className="flex-auto ">

          <div className="flex flex-auto justify-center pt-10">
            <img src={logoMobile} className="flex justify-self-center justify-center pt-2 pb-8" width="150" />
          </div>
          <div className="flex-auto flex-col place-items-center pt-2">
            <div className="flex-auto saiba-title text-6xl">
              Obrigada!
            </div>
            <div className="flex-auto saiba-obrigada font-medium pb-80">
              Vamos voar juntas, rumo a liberdade! <br />
              Em breve novidades virão.
            </div>
          </div>

          <div className="flex flex-col relative place-items-center">

            <div className="flex-auto absolute saiba-text px-20 pt-3">
              Saiba de tudo sobre o nosso <br/>ENCONTRO de primeira mão. 
              Entre no GRUPO EXCLUSIVO NO WHATSAPP.
            </div>
            <div className="flex flex-auto pb-4">
              <img src={fundoMobile} onClick={() => window.location = "https://wppbox.site/go/OEncontro"} type="submit" className=" botao-saiba" width="300" />
            </div >
          </div>

        </div>
      </div>
      :
      <ScrollableAnchor id={'saiba-mais'}>
        <div className="bg-obrigadoDesk">
          <div className="flex-auto flex-col place-items-start	pl-28">
            <div className="flex flex-auto saiba-title text-8xl pt-40">
              Obrigada!
            </div>
            <div className="flex flex-auto saiba-obrigada font-xtra pb-10 pl-16">
              Vamos voar juntas, rumo a liberdade! <br />
              Em breve novidades virão.
            </div>
          </div>

          <div className="flex-auto flex-col relative place-items-start pt-8	pl-20">

            <div className="flex-auto absolute saiba-text font-medium pl-10 pt-6">
              Saiba de tudo sobre o nosso ENCONTRO de primeira mão. <br />
              Entre no GRUPO EXCLUSIVO NO WHATSAPP.
            </div>
            <div className="flex flex-auto">
              <img src={fundoDesk} onClick={() => window.location = "https://wppbox.site/go/OEncontro"} type="submit" className=" botao-saiba" width="500" />
            </div >
          </div>
          <div className="flex flex-auto absolute bottom-0 right-0">
            <img src={logoDesk} className="flex pb-8 pr-10 " width="300" />
          </div>
        </div>
      </ScrollableAnchor>
  )
}