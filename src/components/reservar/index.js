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
      id: "619211",
      mid: "619211",
      pid: "20798275",
      list_id: "619211",
      provider: "leadlovers",
      email: '',
      phone: '',
      source:'',
    }
  );

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const sendForm = async () => {
    console.log('RELOAD');
    const result = await sendLeadLovers(data);
    console.log('result :: ', result(true));
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
      <div className="bg-reservar px-6">
        <Fade>
          <div className="textReserva pt-2 font-xs">Entenda o que é a sua dor e<strong> descubra como ser livre</strong>!</div>
          <form action="https://paginas.rocks/capture" method="post" >
            <input id="id" name="id" type="hidden" value="619211" />
            <input id="mid" name="mid" type="hidden" value="619211" />
            <input id="pid" name="pid" type="hidden" value="20798275" />
            <input id="list_id" name="list_id" type="hidden" value="619211" />
            <input id="provider" name="provider" type="hidden" value="leadlovers" />
            <input type="hidden" id="source" name="source" value="" />
            <div className="flex flex-grid justify-center pt-2">
              <div className="relative flex">
                <img src={contatoMobile} className="flex botaoContato w-80" />
                <input class="absolute flex buttonContato inputEmail tracking-widest font-xs" id="email" name="email" placeholder="Seu melhor e-mail" type="text" onChange={handleChange} />
              </div>
              <div className="relative flex">
                <img src={contatoMobile} className="flex botaoContato w-80" />
                <input class="absolute flex buttonContato inputEmail tracking-widest font-xs" id="phone" name="phone" placeholder="DDD + Celular" type="text" onChange={handleChange} />
              </div>
            </div>
            <div className="relative flex justify-center pt-4">
              <img src={botao} className="absolute flex reservaButton" />
              <button onClick={(sendForm)=>{Utils.pageThanks()}} type="submit" className="absolute buttonReserva font-xtra" >Reservar minha vaga</button>
            </div>
          </form>
          <div className="evento font-normal pt-4">Evento <strong>gratuito</strong> e
            <strong> online</strong>. Reserve agora!</div>

          <div className="textEvento font-sm pb-2">Ao se cadastrar, você aceita os Termos de Uso, Política de Privacidade, o uso de cookies e o envio de comunicação nos termos da LGPD.</div>
        </Fade>
      </div>
      </ ScrollableAnchor>
      :
      <ScrollableAnchor id={'reservar'}>
        <div className=" bg-reservar flex flex-col ">
          <Fade>
            <div className="textReserva pt-6 font-base">Entenda o que é a sua dor e<strong> descubra como ser livre</strong>!</div>
            <form action="https://paginas.rocks/capture" method="post">
              <input id="id" name="id" type="hidden" value="619211" />
              <input id="mid" name="mid" type="hidden" value="619211" />
              <input id="pid" name="pid" type="hidden" value="20798275" />
              <input id="list_id" name="list_id" type="hidden" value="619211" />
              <input id="provider" name="provider" type="hidden" value="leadlovers" />
              <input type="hidden" id="source" name="source" value="" />
              <div className="flex flex-wrap justify-center pt-4">
                <div className="relative flex pt-3 mx-2">
                  <img src={contato} className="flex botaoReserva w-auto" />
                  <input class="absolute buttonContato inputEmail" id="email" name="email" placeholder="Seu melhor e-mail" type="text" onChange={handleChange} />
                </div>
                <div className="relative flex pt-3 mx-2">
                  <img src={contato} className="flex botaoReserva w-auto" />
                  <input class="absolute buttonContato inputEmail" id="phone" name="phone" placeholder="DDD + Celular" type="text" onChange={handleChange} />
                </div>
              </div>
              <div className="relative flex justify-center pt-10">
                <img src={botao} className="absolute flex reservaButton" />
                <button onClick={(sendForm)=>{Utils.pageThanks()}} className="absolute buttonReserva font-base" >Reservar minha vaga</button>
              </div>
            </form>
            <div className="evento pt-6">Evento <strong>gratuito</strong> e
              <strong> online</strong>. Reserve agora!</div>
            <div className="textEvento pt-4 pb-8 px-6 md:px-0">Ao se cadastrar, você aceita os Termos de Uso, Política de Privacidade, o uso de cookies e o envio de comunicação nos termos da LGPD.</div>
          </Fade>
        </div>
      </ ScrollableAnchor>
  )
}