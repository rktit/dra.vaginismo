import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import botao from '../../assets/cta/CTA.png'
import contato from '../../assets/cta/botao.png'
import logo from '../../assets/logo/logo-folder.png'
import evento from '../../assets/logo/Evento.png'
import { sendLeadLovers } from '../../services/email.service';

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

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value});
    }
    const sendForm = async () => {
        console.log('RELOAD');
        const result = await sendLeadLovers(data);
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
            <Fade>
                <div className="pt-12 tituloBio">
                    biografia
                </div>
                <div className="textBio pt-8 pl-4">
                    <strong> olá mulherada linda! </strong>
                </div>
                <div className="descricaoBio pl-4">
                    Para quem ainda não me conhece, eu sou a Dra. Amanda Almeida,
                    também conhecida como <strong>Dra. Vaginismo</strong>.
                    <br /><br />
                    Eu sou formada em Fisioterapia pela UNESP (Universidade do Estado de São Paulo),
                    e especialista em <strong>Fisioterapia Pélvica e Sexologia</strong>, com foco na sáude íntima feminina.
                    <br /><br />
                    Há mais de 7 anos trabalho com mulheres com dor durante a relação sexual.
                    E há 2 anos criei o 1º tratamento de Vaginismo à distância do mundo, ajudando <strong>mais de 450 mulheres a se livrar do Vaginismo</strong> sem sair de casa e de vários lugares do mundo.
                    <br /><br />
                    Diariamente compartilho muito conhecimento e qualidade de vida com milhares de
                    mulheres pelas redes sociais, principalmente através de meu perfil no <a href=" https://www.instagram.com/dra.vaginismo/" target="_blank"><strong>Instagram</strong></a> e no
                    <a href="https://www.tiktok.com/@dra.vaginismo?lang=en" target="_blank"><strong>TikTok @dra.vaginismo</strong> </a>.
                    <br /><br />
                    Tenho como propósito de vida levar a cura para milhões de mulheres que sofrem com
                    essa disfunção, trazendo de volta a felicidade para a vida íntima de cada uma delas.
                </div>

                <div className="flex-auto">
                    <div className="flex evento-img">
                        <img src={evento} className="flex" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="titulo-footer pt-6">
                        <strong>Garanta já sua vaga</strong>
                    </div>
                </div>
                <form action="https://paginas.rocks/capture" method="post" >
                    <input id="id" name="id" type="hidden" value="619211" />
                    <input id="mid" name="mid" type="hidden" value="619211" />
                    <input id="pid" name="pid" type="hidden" value="20798275" />
                    <input id="list_id" name="list_id" type="hidden" value="619211" />
                    <input id="provider" name="provider" type="hidden" value="leadlovers" />
                    <input type="hidden" id="source" name="source" value="" />
                            <div className="flex flex-col justify-start">
                        <div className="relative flex">
                            <img src={contato} className="flex folder-botao" />
                            <input class="absolute folder-button inputBiografia" id="email" name="email" placeholder="Seu melhor e-mail" type="text" onChange={handleChange}/>
                        </div>
                        <div className="relative flex mt-3">
                            <img src={contato} className="flex folder-botao" />
                            <input class="absolute inputBiografia folder-button" id="phone" name="phone" placeholder="DDD + Celular" type="text" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="relative flex justify-start pt-7">
                        <img src={botao} className="flex button-folder" />
                        <button type="submit" className="absolute botao-folder">Reservar minha vaga</button>
                    </div >
                </form>
                
                <div className="flex-auto">
                    <div className="flex folder-img">
                        <img src={logo} className="flex pb-4" width="170" />
                    </div>
                </div>
            </Fade>
            :
            <ScrollableAnchor id={'biografia'}>
                <Fade>
                    <div className="pt-28 titulo-bio">
                        biografia
                    </div>
                    <div className="text-bio pt-10">
                        <strong> olá mulherada linda! </strong>
                    </div>
                    <div className="descricao-bio">
                        Para quem ainda não me conhece, eu sou a Dra. Amanda Almeida,
                        também conhecida como <strong>Dra. Vaginismo</strong>.
                        <br /><br />
                        Eu sou formada em Fisioterapia pela UNESP (Universidade do Estado de São Paulo),
                        e especialista em <strong>Fisioterapia Pélvica e Sexologia</strong>, com foco na sáude íntima feminina.
                        <br /><br />
                        Há mais de 7 anos trabalho com mulheres com dor durante a relação sexual.
                        E há 2 anos criei o 1º tratamento de Vaginismo à distância do mundo, ajudando <strong>mais de<br />
                        450 mulheres a se livrar do Vaginismo</strong> sem sair de casa e de vários lugares do mundo.
                        <br /><br />
                        Diariamente compartilho muito conhecimento e qualidade de vida com milhares de
                        mulheres pelas redes sociais, principalmente através de meu perfil no <a href=" https://www.instagram.com/dra.vaginismo/" target="_blank"><strong>Instagram</strong></a> e no
                        <a href="https://www.tiktok.com/@dra.vaginismo?lang=en" target="_blank"><strong> TikTok @dra.vaginismo</strong> </a>.
                        <br /><br />
                        Tenho como propósito de vida levar a cura para milhões de mulheres que sofrem com
                        essa disfunção, trazendo de volta a felicidade para a vida íntima de cada uma delas.
                    </div>
                </Fade>
            </ScrollableAnchor>
    )
}