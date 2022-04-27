import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import logo from '../../assets/logo/logo-footer.png'
import botao from '../../assets/cta/botao-reservar.png'
import botaoFooter from '../../assets/cta/botao-footer.png'


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
      <div className="bg-footer px-5">
        <Fade>

          <div className="flex flex-auto justify-center pt-2">
              <img src={logo} className="flex justify-self-center justify-center" width="250"/>
          </div>

            <div className="footerText">Política de Privacidade | Termo de Uso <br />
            Este site não é afiliado ao Faccebook ou a qualquer entidade do Facebook. A Série Encontro Mulheres Livres ensina conceitos através de técnicas atualizadas e validadas. Os conteúdos tem caráter meramente informativo e educativo, não constitui e nem deve ser interpretado como recomendação obrigatória. Todas as informações contidas e compartilhadas são meramente indicativas, elas podem não refletir os sintomas reais dependendo de cada caso. Todos os participantes que ministram esta série, não se responsabilizam por decisões que venham a ser tomadas com base nas informações divulgadas e se eximem de qualquer responsabilidade, quaisquer prejuízos, diretos ou indiretos, que cenham a decorrer da utilização deste material ou seu conteúdo. Os conteúdos disponibilizados têm como único propósito fomentar a educação e autoconhecimento das mulheres. Ao se cadastrar para assistir o conteúdo, você está concordando com os termos de nossa Política de Privacidade e Termos de Uso. 
            </div>
        </Fade>
      </div>
    :
    <ScrollableAnchor id={'home'}>
      
      <div className="bg-footer">
        <Fade>
          <div className="flex flex-col">
            <div className="titulo-footer pt-10">
            <strong>Garanta já sua vaga</strong>
            </div>

            <div className="flex flex-auto justify-center">
              <img src={logo} className="flex justify-self-center justify-center"/>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-self-center justify-center pt-10">
              <div className="relative flex justify-center">
                <img src={botaoFooter} className="flex botaoFooter px-2" />
                <div className="absolute buttonFooter pr-20">Seu e-mail principal</div>
              </div>
              <div className="relative flex justify-center">
                <img src={botaoFooter} className="flex botaoFooter px-2" />
                <div className="flex absolute buttonFooter pr-32">DDD + Celular</div>
              </div>
              <div className="relative flex justify-center">
                <img src={botao} className="flex botaoVaga" />
                <div className="absolute buttonVaga px-2">Reservar minha vaga</div>
              </div>
            </div>

            <div className="textFooter pt-10">Ao se cadastrar, você aceita os Termos de Uso, Política de Privacidade, o uso de cookies e o envio de comunicação nos termos da LGPD.
            </div>

            <div className="footer-text px-20">Política de Privacidade | Termo de Uso <br />
            Este site não é afiliado ao Faccebook ou a qualquer entidade do Facebook. A Série Encontro Mulheres Livres ensina conceitos através de técnicas atualizadas e validadas. Os conteúdos tem caráter meramente informativo e educativo, não constitui e nem deve ser interpretado como recomendação obrigatória. Todas as informações contidas e compartilhadas são meramente indicativas, elas podem não refletir os sintomas reais dependendo de cada caso. Todos os participantes que ministram esta série, não se responsabilizam por decisões que venham a ser tomadas com base nas informações divulgadas e se eximem de qualquer responsabilidade, quaisquer prejuízos, diretos ou indiretos, que cenham a decorrer da utilização deste material ou seu conteúdo. Os conteúdos disponibilizados têm como único propósito fomentar a educação e autoconhecimento das mulheres. Ao se cadastrar para assistir o conteúdo, você está concordando com os termos de nossa Política de Privacidade e Termos de Uso. 
            </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}