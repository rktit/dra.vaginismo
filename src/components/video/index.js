import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import video from '../../assets/file/video.png'
import botao from '../../assets/cta/CTA.png'
import contato from '../../assets/cta/botao.png'



export default function Page(props) {
    const btnScrollTop = useRef(null)
    const [showBtn, setShowBtn] = useState(false)
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
        setData({ ...data, [e.target.name]: e.target.value });
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
                    {/* <form action="https://paginas.rocks/capture" method="post" > */}
                    <form>
                        <input id="id" name="id" type="hidden" value="619211" />
                        <input id="mid" name="mid" type="hidden" value="619211" />
                        <input id="pid" name="pid" type="hidden" value="20798275" />
                        <input id="list_id" name="list_id" type="hidden" value="619211" />
                        <input id="provider" name="provider" type="hidden" value="leadlovers" />
                        <input type="hidden" id="source" name="source" value="" />
                        <div className="flex flex-wrap justify-center space-x-2 pt-2">
                            <div className="relative flex mt-2">
                                <img src={contato} className="flex botao-contato" />
                                {/* <input class="absolute button-contato inputEmail pl-5" id="email" name="email" placeholder="Seu melhor e-mail" type="text" onChange={handleChange} /> */}
                            </div>
                            <div className="relative flex mt-2">
                                <img src={contato} className="flex botao-contato" />
                                {/* <input class="absolute button-contato inputEmail pr-4" id="phone" name="phone" placeholder="DDD + Celular" type="text" onChange={handleChange} /> */}
                            </div>
                        </div>
                        <div className="relative flex justify-center pt-4">
                            <img src={botao} className="flex button-video" />
                            <button type="submit" className="absolute botao-video">Reservar minha vaga</button>
                        </div>
                    </form>
                </div>
            </Fade>
            :
            <ScrollableAnchor id={'video'}>
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
                        {/* <form action="https://paginas.rocks/capture" method="post" > */}
                        <form >
                            <input id="id" name="id" type="hidden" value="619211" />
                            <input id="mid" name="mid" type="hidden" value="619211" />
                            <input id="pid" name="pid" type="hidden" value="20798275" />
                            <input id="list_id" name="list_id" type="hidden" value="619211" />
                            <input id="provider" name="provider" type="hidden" value="leadlovers" />
                            <input type="hidden" id="source" name="source" value="" />
                            <div className="flex flex-wrap justify-center space-x-14 pt-4">
                                <div className="relative flex pl-8 pt-3">
                                    <img src={contato} className="flex botaoContato" />
                                    {/* <input class="absolute buttonContato inputEmail" id="email" name="email" placeholder="Seu melhor e-mail" type="text" onChange={handleChange} /> */}
                                </div>
                                <div className="relative flex pl-8 pt-3">
                                    <img src={contato} className="flex botaoContato" />
                                    {/* <input class="absolute buttonContato inputEmail" id="phone" name="phone" placeholder="DDD + Celular" type="text" onChange={handleChange} /> */}
                                </div>
                            </div>
                            <div className="relative flex justify-center pt-10">
                                <img src={botao} className="flex buttonVideo" />
                                <button type="submit" className="absolute botaoVideo">Reservar minha vaga</button>
                            </div>
                        </form>
                    </div>
                </Fade>
            </ScrollableAnchor>
    )
}