import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import video from '../../assets/file/video.png'
import botao from '../../assets/cta/CTA.png'
import contato from '../../assets/cta/botao.png'



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
        <Fade>
            <div className="titulo-video pb-2 pt-12">
                Veja o que irá acontecer no nosso encontro
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <img src={video} className="flex img-video" />
                </div>
                <div className="descubra pt-2">
                    Descubra se sua dor
                </div>
                <div className="durante">
                    Durante a relação sexual tem cura!
                </div>
                <div className="entenda">
                    Entenda o que é Vaginismo, saiba se você possui
                    <br />
                    essa disfunção e como conseguir a cura.
                </div>
                <div className="flex flex-wrap justify-center space-x-2 pt-6">
                    <div className="relative flex">
                        <img src={contato} className="flex contato-botao" />
                        <div className="absolute contato-button">Seu e-mail principal</div>
                    </div>
                    <div className="relative flex">
                        <img src={contato} className="flex contato-botao" />
                        <div className="absolute contato-button">DDD + Celular</div>
                    </div>
                </div>
                <div className="relative flex justify-center pt-4">
                    <img src={botao} className="flex button-video" />
                    <div className="absolute botao-video">Reservar minha vaga</div>
                </div >  
            </div>
            </Fade>
        :
        <ScrollableAnchor id={'home'}>
            <Fade>
                <div className="tituloVideo pb-10 pt-36">
                    Veja o que irá acontecer no nosso encontro
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <img src={video} className="flex imgVideo" />
                    </div>
                    <div className="descubra pt-8">
                        Descubra se sua dor
                    </div>
                    <div className="durante">
                        Durante a relação sexual tem cura!
                    </div>
                    <div className="entenda">
                        Entenda o que é Vaginismo, saiba se você possui
                        <br />
                        essa disfunção e como conseguir a cura.
                    </div>

                    <div className="flex flex-wrap justify-center space-x-14 pt-10">
                        <div className="relative flex  pt-3">
                            <img src={contato} className="flex contatoBotao" />
                            <div className="absolute contatoButton">Seu e-mail principal</div>
                        </div>
                        <div className="relative flex  pt-3">
                            <img src={contato} className="flex contatoBotao" />
                            <div className="absolute contatoButton">DDD + Celular</div>
                        </div>
                    </div>
                    <div className="relative flex justify-center pt-10">
                        <img src={botao} className="flex buttonVideo" />
                        <div className="absolute botaoVideo">Reservar minha vaga</div>
                    </div>

                </div>
            </Fade>
        </ScrollableAnchor>
    )
}