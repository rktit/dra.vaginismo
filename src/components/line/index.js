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
        <ScrollableAnchor id={''}>

        <div className="bgFolder pt-10">
                <Fade>
                    <div className="tituloLine font-xtra">
                        A dor que vai além do incômodo
                    </div>
                    <div className="textLine pb-10 font-normal">
                        Saiba o porquê este encontro é para você.
                    </div>

                    <div className=" flex-col">
                        <div className="px-4">
                            <img src={timelineMobile} className="w-auto"/>
                        </div>
                        <div className="flex  justify-center pt-20">
                            <button onClick={() => window.location.href='#reservar'} className="flex buttonLine px-10">
                            <img src={botao} />
                            </button> 
                        </div> 
                    </div>
                </Fade>

                <Video />
                <Biografia />
            </div>
            </ScrollableAnchor>
        :
        <ScrollableAnchor id={''}>
            <div className="flex-auto bg-folder">
                <Fade>
                    <div className="flex-auto tituloLine font-xl pt-14">
                        A dor que vai além do incômodo
                    </div>
                    <div className="flex-auto textLine font-xtra pb-20">
                        Saiba o porquê este encontro é para você.
                    </div>

                    <div className="flex-col">
                        <div className="px-10">
                            <img src={timeline} className="w-auto px-0 md:px-20"/>
                        </div>
                        <div className="flex justify-center pt-20">
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