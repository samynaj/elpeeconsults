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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nvvvibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus elit set condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                </div>
            </div>
        </Layout>
    )
}

export default Index