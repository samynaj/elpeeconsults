import React from "react";
import styles from "./index.module.scss";
import Layout from "../../components/layout";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdExpandMore } from "react-icons/md";

const Index = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.top}>
          {/* <div className={styles.left}>
            <div className={styles.opaq}>
              <h4>About Us</h4>
            </div>
            <img src="/assets/about.jpeg" alt="" />
          </div> */}
          <div className={styles.right}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className={styles.about}
            >
              <h2
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                About Us
              </h2>
              <div></div>
              <p>
                We elevate your organization’s success by surpassing goals and
                setting new standards in the dynamic business landscape.
              </p>
            </div>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<MdExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ padding: "20px" }}
                >
                  <Typography>OUR VISION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    “To provide world-class cutting edge integrated solutions
                    through the use of creative and innovative ideas, quality
                    processes and cost efficient methods to provide the desired
                    results to our clients.”
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<MdExpandMore />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ padding: "20px" }}
                >
                  <Typography>OUR MISSION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    “To assist our clients in achieving their organisational
                    goal through the provision of full fledged business
                    transformation and human capital development ranging from
                    training, simulations, field activities etc. which portrays
                    us correctly as worthy partners.”
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<MdExpandMore />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ padding: "20px" }}
                >
                  <Typography>OUR CORE VALUES</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <Typography>Excellence</Typography>
                    </li>
                    <li>
                      <Typography>Leadership</Typography>
                    </li>
                    <li>
                      <Typography>Passion</Typography>
                    </li>
                    <li>
                      <Typography>Enthusiasm</Typography>
                    </li>
                    <li>
                      <Typography>Empathy</Typography>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            At the core of our mission is a deep-seated belief in the pivotal
            role of people as a fundamental investment in every institution. We
            are resolute in our commitment to adding substantial value to these
            esteemed institutions through targeted interventions in staff
            development, idea generation, process definition, and strategic
            planning. Our ultimate aim is to facilitate favorable results that
            propel organizational growth.
          </p>
          <p>
            Our overarching goal is to elevate the value of your organization,
            empowering it to achieve and exceed set objectives. We take immense
            pride in the exceptional quality of our deliveries—a direct
            reflection of the competence and expertise we bring to every
            engagement.
          </p>
          <p>
            We recognize the unique needs of our clients, and, as such, we
            meticulously tailor our offerings to meet these specific
            requirements. Fueled by formidable teamwork, we channel all our
            energy towards providing enduring solutions and high-quality
            services. At our core, we are dedicated to ensuring that our clients
            not only meet their goals but surpass them, setting new standards
            for success in the dynamic business landscape.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
