import Image from 'next/image'
import React, { useRef } from 'react'
import styles from './index.module.scss'
import Typewriter from 'typewriter-effect';

const Index = () => {
    return (
        <div className={styles.root}>
            <Image src="/assets/sep-line-white.png" alt="" width={400} height={10} />
            <div className={styles.type} >
                <Typewriter
                    options={{
                        strings: ['Construction',
                        'Architecture',
                        'Supply of General Hardwares and Softwares',
                        'General Merchant'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                {/* <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Red Hat Display',
                        color: 'orange',
                        fontWeight: 800,
                        fontSize: '2.5em',
                    }}
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    multiText={[
                        'Construction',
                        'Architecture',
                        'Supply of General Hardwares and Softwares',
                        'General Merchant',
                    ]}
                    multiTextDelay={1500}
                    typeSpeed={30}
                    // scrollArea={myRef}
                /> */}
            </div>
            <Image src="/assets/sep-line-white.png" alt="" width={400} height={10} />
        </div>
    )
}

export default Index