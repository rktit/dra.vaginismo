import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import contato from '../../assets/cta/botao.png'
import logo from '../../assets/logo/Logo.png'
import barraDesk from '../../assets/background/barraDesk.png'
import barraMobile from '../../assets/background/barraMobile.png'


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

      <div className="flex relative top-img pb-6">
        <img src={barraMobile} className="flexw-full" />
        <div className="absolute font-medium">Sua dor durante a relação
          <strong> não é normal!</strong>
        </div>
      </div>
      :
      <ScrollableAnchor id={'home'}>

        <div className="flex relative top-img pb-6 items-center ">
          <img src={barraDesk} className="flex opacity-90 w-full" />
          <div className="absolute font-big tracking-widest">Sua dor durante a relação <strong> não é normal!</strong>
          </div>
        </div>
      </ScrollableAnchor>
      
  )
}