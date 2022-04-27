import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import botao from '../../assets/cta/botao-reservar.png'
import contato from '../../assets/cta/botao.png'
import contatoMobile from '../../assets/cta/CTAe-mail.png'


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
    <div className="px-2">
    <Fade>
      <div className="titulo-reserva">Sua dor durante a relação
        <strong className="titulo-reserva"> não é normal!</strong>
      </div>
      <div className="text-reserva pt-6">Entenda o que é a sua dor e<strong className="text-reserva"> descubra como ser livre</strong>!</div>

      <div className="flex flex-wrap justify-center pt-2">
        <div className="relative flex">
          <img src={contatoMobile} className="flex botao-contato" />
          <div className="absolute button-contato ml-9">Seu melhor e-mail</div>
        </div>
        <div className="relative flex pl-2">
          <img src={contatoMobile} className="flex botao-contato" />
          <div className="absolute button-contato ml-12">DDD + Celular</div>
        </div>
      </div>
      <div className="relative flex justify-center pt-4">
        <img src={botao} className="flex reserva-button" />
          <div className="absolute button-reserva">Reservar minha vaga</div>
      </div>
      
      <div className="evento pt-2">Evento <strong>gratuito</strong> e
        <strong> online</strong>. Reserve agora!</div>
      
      <div className="text-evento pt-4 pb-2">Ao se cadastrar, você aceita os Termos de Uso, Política de Privacidade, o uso de cookies e o envio de comunicação nos termos da LGPD.</div>
    </Fade>
  </div>
    :
    <ScrollableAnchor id={'home'}>
      <div className="flex flex-col">
        <Fade>
          <div className="tituloReserva tracking-widest pt-2">Sua dor durante a relação
            <strong className="tituloReserva"> não é normal!</strong>
          </div>
          <div className="textReserva pt-6">Entenda o que é a sua dor e<strong className="textReserva"> descubra como ser livre</strong>!</div>

          <div className="flex flex-wrap justify-center space-x-14 pt-4">
            <div className="relative flex pl-8 pt-3">
              <img src={contato} className="flex botaoContato" />
              <div className="absolute buttonContato">Seu e-mail principal</div>
            </div>
            <div className="relative flex pl-8 pt-3">
              <img src={contato} className="flex botaoContato" />
              <div className="absolute buttonContato">DDD + Celular</div>
            </div>
          </div>
          <div className="relative flex justify-center pt-10">
            <img src={botao} className="flex reservaButton" />
              <div className="absolute buttonReserva">Reservar minha vaga</div>
          </div>
          
          <div className="evento pt-6">Evento <strong>gratuito</strong> e
            <strong> online</strong>. Reserve agora!</div>
          
          <div className="textEvento pt-4 pb-8">Ao se cadastrar, você aceita os Termos de Uso, Política de Privacidade, o uso de cookies e o envio de comunicação nos termos da LGPD.</div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}