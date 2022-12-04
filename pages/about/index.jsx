import React from 'react'
import styles from './index.module.scss'
import Layout from '../../components/layout'
import Image from 'next/image'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdExpandMore } from 'react-icons/md'

const Index = () => {
    return (
        <Layout>
            <div className={styles.root}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <Image src='/assets/about.jpg' alt='' width={700} height={700} />
                    </div>
                    <div className={styles.right}>
                        <div
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className={styles.about}
                        >
                            <h2
                                data-aos='flip-left'
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="3000"
                            >About Emwesto Global Ltd.</h2>
                            <div></div>
                            <p>WE ARE THE LEADERS IN THE CONSTRUCTION INDUSTRY!</p>
                        </div>
                        <div>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<MdExpandMore />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ padding: '20px' }}
                                >
                                    <Typography>COMPANY FEATURES</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Emwesto becomes the leading steel structure and pre-engineered buildings corporation in terms of revenue,
                                        system quality, products, and services in Nigeria and Africa.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<MdExpandMore />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    sx={{ padding: '20px' }}
                                >
                                    <Typography>COMPANY MISSION</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Emwesto provides products and services that meet our customers’
                                        expectations to bring prosperity and sustainable development for Customers, Employees, Partners, Shareholders, Suppliers.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<MdExpandMore />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    sx={{ padding: '20px' }}
                                >
                                    <Typography>COMPANY HISTORY</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Company members are committed to living and working according to the company’s values, to build a homogeneous and strong company’s culture,
                                        develop the self-foundation of each individual as an essential focus:
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>Emwesto specializes in providing complete solutions including consulting, design, fabrication and erection of high-quality pre-engineered steel building and steel structure products. We provide customers with full steel structures such as factories, warehouses, high-rise building, heavy industry, shopping mall, exhibition centers, infrastructure (railway stations, airports…). </p>
                </div>
            </div>
        </Layout>
    )
}

export default Index