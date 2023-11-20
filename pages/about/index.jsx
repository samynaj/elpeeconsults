import React from "react";
import styles from "./index.module.scss";
import Layout from "../../components/layout";
import Image from "next/image";
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
          <div className={styles.left}>
            <Image src="/assets/about.jpg" alt="" width={700} height={700} />
          </div>
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
                About Elpeeconsults Ltd.
              </h2>
              <div></div>
              <p>WE ARE THE LEADERS IN THE CONSTRUCTION INDUSTRY!</p>
            </div>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<MdExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ padding: "20px" }}
                >
                  <Typography>COMPANY FEATURES</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Elpeeconsults becomes the leading steel structure and
                    pre-engineered buildings corporation in terms of revenue,
                    system quality, products, and services in Nigeria and
                    Africa.
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
                  <Typography>COMPANY MISSION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Elpeeconsults provides products and services that meet our
                    customers’ expectations to bring prosperity and sustainable
                    development for Customers, Employees, Partners,
                    Shareholders, Suppliers.
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
                  <Typography>COMPANY HISTORY</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Elpeeconsults Founded in 1875, Elpeeconsults is a reputable
                    construction and general merchandise company in Nigeria. our
                    main focus is on construction, but they also deal in a
                    variety of other merchandise, including clothing, tools, and
                    home goods. we have a rich history of providing quality
                    goods and services to our customers, and we continue to be a
                    leader in the industry today. our dedication to our
                    customers and to our products has made us one of the most
                    trusted companies in the UK and Nigeria.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            Building a strong foundation with quality construction and general
            merchandise Since our establishment in 1954, our company has been
            the leading builder and supplier of construction and general
            merchandise in our region. We offer premier quality construction and
            general merchandise to both large and small businesses, as well as
            to individual consumers. We take pride in our products and our
            services, and we are dedicated to meeting the needs of our
            customers. With our extensive selection of construction and general
            merchandise, we are sure to have exactly what you need. Shop with us
            today, and experience the quality and service that have made us the
            top builder and supplier in our region.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
