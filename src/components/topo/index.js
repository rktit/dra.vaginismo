import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import contato from '../../assets/cta/botao.png'
import logo from '../../assets/logo/Logo.png'
import barraDesk from '../../assets/background/barraDesk.png'
import barraMobile from '../../assets/background/barraMobile.png'
import { BarraTopo } from '../'


export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)

  // window.addEventListener("blur", function(){
  //   window.location.reload(true);
  // });

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
            {/* <div className="flex top-img ">
            <img src={logo} className="imageTopo flex items-center "/>
            </div> */}
          </div>
          <img src={contato} className="flex imagemOculta" />

        </div>
        <div className="flex relative top-img">
          <img src={barraMobile} className="flex flex-auto w-full" />
          <div className="flex absolute font-small uppercase tracking-widest text-center pt-0.5">Sua dor durante a relação <strong className="flex family-bold"> não é normal!</strong>
          </div>
        </div>
        {/* <BarraTopo/> */}
      </div>

      :
      <ScrollableAnchor id={'home'}>
        <div className="flex-auto bg-topo">
          <div className="flex-auto pt-7">
            <div className="flex top-img pb-6">
              <img src={logo} className="flex" width="400" />
            </div>
            {/* <img src={contato} className="imgOculta" /> */}
          </div>
          <div className="flex top-img items-center">
            <img src={barraDesk} className="flex-auto absolute bottom-0 opacity-90 w-full" />
            <div className="flex-auto absolute bottom-0 font-big uppercase tracking-widest text-center">Sua dor durante a relação <strong> não é normal!</strong>
            </div>
          </div>
          {/* <BarraTopo/> */}
        </div>
      </ScrollableAnchor>
  )
}