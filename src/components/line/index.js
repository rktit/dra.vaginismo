import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import timeline from '../../assets/file/Timeline.png'
import timelineMobile from '../../assets/file/Timeline-mobile.png'
import botao from '../../assets/cta/botao-cta.png'

import { Biografia, Video } from '../'

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
        <div className="bgfolder pt-10 px-4">
                <Fade>
                    <div className="titulo-line">
                        A dor que vai além do incômodo
                    </div>
                    <div className="text-line pb-10">
                        Saiba o porquê este encontro é para você.
                    </div>

                    <div className="flex flex-col">
                        <div className="px-4">
                            <img src={timelineMobile} className="w-auto"/>
                        </div>
                        <div className="flex flex-auto justify-center pt-20">
                            <div className="flex button-line px-10">
                            <img src={botao} />
                            </div> 
                        </div> 
                    </div>
                </Fade>

                <Video />
                <Biografia />
            </div>
        :
        <ScrollableAnchor id={'line'}>
            <div className="bg-folder px-20">
                <Fade>
                    <div className="tituloLine pt-14">
                        A dor que vai além do incômodo
                    </div>
                    <div className="textLine pb-20">
                        Saiba o porquê este encontro é para você.
                    </div>

                    <div className="flex flex-col">
                        <div className="px-36">
                            <img src={timeline} className="w-auto"/>
                        </div>
                        <div className="flex flex-auto justify-center pt-20">
                            <button onClick={() => window.location.href='#reservar'} className="flex buttonLine">
                            <img src={botao} />
                            </button> 
                        </div> 
                    </div>
                </Fade>

                <Video />
                <Biografia />
            </div>
        </ScrollableAnchor>
    )
}