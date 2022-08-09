import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import logo from '../../assets/logo/logo-footer.png'
import botao from '../../assets/cta/botao-reservar.png'
import botaoFooter from '../../assets/cta/botao-footer.png'
import Utils from '../../utils';

export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)
  const [data, setData] = useState(
    {
      id: "619211",
      mid: "619211",
      pid: "20798275",
      list_id: "619211",
      provider: "leadlovers",
      email: '',
      phone: '',
    }
  );

  const handleChange = (e) => {
    setData({...data, [e.target.name] : e.target.value});
  }

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
      <div className="bg-footer px-5">
        <Fade>

          <div className="flex flex-auto justify-center pt-2">
              <img src={logo} className="flex justify-self-center justify-center" width="250"/>
          </div>

            <div className="footer-text font-small">Política de Privacidade | Termo de Uso <br />
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. A Série Encontro Mulheres Livres ensina conceitos através de técnicas atualizadas e validadas. Os conteúdos tem caráter meramente informativo e educativo, não constitui e nem deve ser interpretado como recomendação obrigatória. Todas as informações contidas e compartilhadas são meramente indicativas, elas podem não refletir os sintomas reais dependendo de cada caso. Todos os participantes que ministram esta série, não se responsabilizam por decisões que venham a ser tomadas com base nas informações divulgadas e se eximem de qualquer responsabilidade, quaisquer prejuízos, diretos ou indiretos, que cenham a decorrer da utilização deste material ou seu conteúdo. Os conteúdos disponibilizados têm como único propósito fomentar a educação e autoconhecimento das mulheres. Ao se cadastrar para assistir o conteúdo, você está concordando com os termos de nossa Política de Privacidade e Termos de Uso. 
            </div>
        </Fade>
      </div>
    :
    <ScrollableAnchor id={''}>
      
      <div className="bg-footer">
        <Fade>
          <div className="flex flex-col">
            <div className="titulo-footer text-center font-lg pt-10">
            <strong>Garanta já sua vaga</strong>
            </div>

            <div className="flex flex-auto justify-center">
              <img src={logo} className="flex justify-self-center justify-center w-80"/>
              </div>
            </div>
            <form action="https://paginas.rocks/capture" method="post" >
              <input id="id" name="id" type="hidden" value="619211" />
              <input id="mid" name="mid" type="hidden" value="619211" />
              <input id="pid" name="pid" type="hidden" value="20798275" />
              <input id="list_id" name="list_id" type="hidden" value="619211" />
              <input id="provider" name="provider" type="hidden" value="leadlovers" />
              <input type="hidden" id="source" name="source" value="" />
              <div className="flex flex-wrap justify-self-center justify-center pt-10">
                <div className="relative flex justify-center">
                  <img src={botaoFooter} className="flex botaoFooter px-2" />
                  <input class="absolute buttonFooter inputFooter" id="email" name="email" placeholder="Seu melhor e-mail" type="text" onChange={handleChange}/>
                </div>
                <div className="relative flex justify-center pt-4 md:pt-0">
                  <img src={botaoFooter} className="flex botaoFooter px-2" />
                  <input class="absolute buttonFooter inputFooter" id="phone" name="phone" placeholder="DDD + Celular" type="text" onChange={handleChange}/>
                </div>
                <div className="relative flex justify-center items-center pt-8 md:pt-0">
                  <img src={botao} className="absolute flex botaoVaga p-1" />
                  <button onClick={()=>{Utils.pageThanks()}} type="submit" className="absolute buttonVaga px-6">Reservar minha vaga</button>
                </div>
              </div>
            </form>
            <div className="textFooter pt-10 px-4 md:px-0">Ao se cadastrar, você aceita os Termos de Uso, Política de Privacidade, o uso de cookies e o envio de comunicação nos termos da LGPD.
            </div>

            <div className="footer-text px-10 md:px-20">Política de Privacidade | Termo de Uso <br />
            Este site não é afiliado ao Faccebook ou a qualquer entidade do Facebook. A Série Encontro Mulheres Livres ensina conceitos através de técnicas atualizadas e validadas. Os conteúdos tem caráter meramente informativo e educativo, não constitui e nem deve ser interpretado como recomendação obrigatória. Todas as informações contidas e compartilhadas são meramente indicativas, elas podem não refletir os sintomas reais dependendo de cada caso. Todos os participantes que ministram esta série, não se responsabilizam por decisões que venham a ser tomadas com base nas informações divulgadas e se eximem de qualquer responsabilidade, quaisquer prejuízos, diretos ou indiretos, que cenham a decorrer da utilização deste material ou seu conteúdo. Os conteúdos disponibilizados têm como único propósito fomentar a educação e autoconhecimento das mulheres. Ao se cadastrar para assistir o conteúdo, você está concordando com os termos de nossa Política de Privacidade e Termos de Uso. 
            </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}