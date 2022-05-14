import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import botao from '../../assets/cta/botao-reservar.png'
import contato from '../../assets/cta/botao.png'
import contatoMobile from '../../assets/cta/CTAe-mail.png'
import { sendLeadLovers } from '../../services/email.service';
import Utils from '../../utils';

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
  const [data, setData] = useState(
    {
      id: "620363",
      mid: "620363",
      pid: "20795733",
      list_id: "620363",
      provider: "leadlovers",
      email: '',
      phone: '',
    }
  );

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const sendForm = async () => {
    console.log('RELOAD');
    const result = await sendLeadLovers(data);
  }

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  return (
    isMobile ?
    <ScrollableAnchor id={'reservar'}>
      <div className="px-2">
        <Fade>
          <div className="text-reserva pt-2">Entenda o que é a sua dor e<strong> descubra como ser livre</strong>!</div>
          <form action="https://paginas.rocks/capture" method="post" >
            <input id="id" name="id" type="hidden" value="619211" />
            <input id="mid" name="mid" type="hidden" value="619211" />
            <input id="pid" name="pid" type="hidden" value="20798275" />
            <input id="list_id" name="list_id" type="hidden" value="619211" />
            <input id="provider" name="provider" type="hidden" value="leadlovers" />
            <input type="hidden" id="source" name="source" value="" />
            <div className="flex flex-wrap justify-center pt-2">
              <div className="relative flex">
                <img src={contatoMobile} className="flex botao-contato" />
                <input class="absolute button-contato inputEmail pl-1" id="email" name="email" placeholder="Seu melhor e-mail" type="text" onChange={handleChange} />
              </div>
              <div className="relative flex">
                <img src={contatoMobile} className="flex botao-contato" />
                <input class="absolute button-contato inputEmail pr-4" id="phone" name="phone" placeholder="DDD + Celular" type="text" onChange={handleChange} />
              </div>
            </div>
            <div className="relative flex justify-center pt-2">
              <img src={botao} className="flex reserva-button" />
              <button type="submit" className="absolute button-reserva" onClick={() => sendForm()}>Reservar minha vaga</button>
            </div>
          </form>
          <div className="eventoText pt-2">Evento <strong>gratuito</strong> e
            <strong> online</strong>. Reserve agora!</div>

          <div className="text-evento pb-2">Ao se cadastrar, você aceita os Termos de Uso, Política de Privacidade, o uso de cookies e o envio de comunicação nos termos da LGPD.</div>
        </Fade>
      </div>
      </ ScrollableAnchor>
      :
      <ScrollableAnchor id={'reservar'}>
        <div className=" bg-reservar flex flex-col ">
          <Fade>
            <div className="textReserva pt-6">Entenda o que é a sua dor e<strong> descubra como ser livre</strong>!</div>
            <form action="https://paginas.rocks/capture" method="post" >
              <input id="id" name="id" type="hidden" value="619211" />
              <input id="mid" name="mid" type="hidden" value="619211" />
              <input id="pid" name="pid" type="hidden" value="20798275" />
              <input id="list_id" name="list_id" type="hidden" value="619211" />
              <input id="provider" name="provider" type="hidden" value="leadlovers" />
              <input type="hidden" id="source" name="source" value="" />
              <div className="flex flex-wrap justify-center space-x-14 pt-4">
                <div className="relative flex pl-8 pt-3">
                  <img src={contato} className="flex botaoContato" />
                  <input class="absolute buttonContato inputEmail" id="email" name="email" placeholder="Seu melhor e-mail" type="text" onChange={handleChange} />
                </div>
                <div className="relative flex pl-8 pt-3">
                  <img src={contato} className="flex botaoContato" />
                  <input class="absolute buttonContato inputEmail" id="phone" name="phone" placeholder="DDD + Celular" type="text" onChange={handleChange} />
                </div>
              </div>
              <div className="relative flex justify-center pt-10">
                <img src={botao} className="flex reservaButton" />
                <button type="submit" className="absolute buttonReserva" onClick={() => sendForm()}>Reservar minha vaga</button>
              </div>
            </form>
            <div className="evento pt-6">Evento <strong>gratuito</strong> e
              <strong> online</strong>. Reserve agora!</div>
            <div className="textEvento pt-4 pb-8">Ao se cadastrar, você aceita os Termos de Uso, Política de Privacidade, o uso de cookies e o envio de comunicação nos termos da LGPD.</div>
          </Fade>
        </div>
      </ ScrollableAnchor>
  )
}