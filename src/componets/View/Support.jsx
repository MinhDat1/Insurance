import { ExpandMore, Search } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import { Footer } from "../Partials";
import "./CSS/Support.css";
import { Link } from "react-router-dom";

function Services() {
  const customCard = [
    {
      id: 1,
      img: img1,
      label: "Billing & Payments Support",
      content:
        "For general questions related to  paying your bill, making an online payment or setting up paperless billing.",
    },
    {
      id: 2,
      img: img2,
      label: "How to File and Monitor a Claim",
      content:
        "You can count on support agents and claims adjusters, who have lots of experience to handle your auto, home or business insurance claim. ",
    },
    {
      id: 3,
      img: img3,
      label: "Online Account Basics",
      content:
        "Creating your online account gives you immediate access to your auto ID card (not in N.Y.), policy information, claims status, online bill pay and more. ",
    },
    {
      id: 4,
      img: img1,
      label: "Billing & Payments Support",
      content:
        "For general questions related to  paying your bill, making an online payment or setting up paperless billing.",
    },
    {
      id: 5,
      img: img2,
      label: "How to File and Monitor a Claim",
      content:
        "You can count on support agents and claims adjusters, who have lots of experience to handle your auto, home or business insurance claim. ",
    },
    {
      id: 6,
      img: img3,
      label: "Online Account Basics",
      content:
        "Creating your online account gives you immediate access to your auto ID card (not in N.Y.), policy information, claims status, online bill pay and more. ",
    },
    {
      id: 7,
      img: img1,
      label: "Billing & Payments Support",
      content:
        "For general questions related to  paying your bill, making an online payment or setting up paperless billing.",
    },
    {
      id: 8,
      img: img2,
      label: "How to File and Monitor a Claim",
      content:
        "You can count on support agents and claims adjusters, who have lots of experience to handle your auto, home or business insurance claim. ",
    },
    {
      id: 9,
      img: img3,
      label: "Online Account Basics",
      content:
        "Creating your online account gives you immediate access to your auto ID card (not in N.Y.), policy information, claims status, online bill pay and more. ",
    },
    {
      id: 10,
      img: img3,
      label: "Online Account Basics",
      content:
        "Creating your online account gives you immediate access to your auto ID card (not in N.Y.), policy information, claims status, online bill pay and more. ",
    },
  ];
  const faqs = [
    {
      id: "1",
      expanded: "panel1",
      label: "Who can enroll?",
      detail:
        "International students who:" +
        " have vaild F1 and J1 visa status, AND " +
        "an associate, bachelor, master or Ph.D. or formal university ESL program, and," +
        "are currently registered with no less than 6 credit hours* are eligible and qualified to enroll" +
        ".The Company maintains its right to investigate student status and attendance records to verify that the policy eligibility requirements have been met. If and whenever the Company discovers that the policy eligibility have not been met, its only obligation is refund of premium.",
    },
    {
      id: "2",
      expanded: "panel2",
      label: "What are the Payment Options?",
      detail:
        "To make a payment, you may choose among the available options below:" +
        "1. By Card: US or International Card" +
        "2. By ACH Payment:" +
        "3. By Cash payment through Wells Fargo Bank. Fill out a deposit slip with the following info:" +
        "Account Name : Professional Service, Inc." +
        "Account Number : 2608424731" +
        "Amount : Should match the pending balance from their account",
    },
    {
      id: "3",
      expanded: "panel3",
      label: "Check eligibility?",
      detail:
        "International students with F-1 visas who are enrolled in a full-time associate, bachelor, master or Ph.D. degree program, or formal ESL program at a university, who are currently registered with no less than 6 credit hours (unless such school's full-time status requires less credited hours), and International Visiting Scholars with J-1 visas are eligible to enroll in this insurance plan. The six credit hours requirement is waived for summer, if the applicant was enrolled in this plan as a full-time student in the immediately preceding spring term." +
        "Eligible students who do enroll may also insure their Dependents. Eligible Dependents are the spouse (husband or wife) and children under 26 years of age. Dependent eligibility expires concurrently with that of the Insured student.",
    },
    {
      id: "4",
      expanded: "panel4",
      label: "Where do I go to get the best care when I'm not well?",
      detail: (
        <Link to="https://www.psiservice.com/document/media/video/2/PSI-Walk-in-UrgentCareEmergencyRoom.mp4">
          https://www.psiservice.com/document/media/video/2/PSI-Walk-in-UrgentCareEmergencyRoom.mp4
        </Link>
      ),
    },
    {
      id: "5",
      expanded: "panel5",
      label: "Which plan should I buy?",
      detail:
        "Students can enroll in any PSI Plan posted to the school they are attending. PSI reserves the right to cancel the plan and refund premium to students in all other cases.",
    },
    {
      id: "6",
      expanded: "panel6",
      label:
        "Where can I get discounts for Prescriptions, Vision, and hearing?",
      detail:
        "For Prescriptions, check GoodRX. This helps if your prescriptions are reimbursed (Bronze, Silver, Ruby). For Vision and hearing discounts, download free discount cards here.",
    },
  ];
  const [expanded, setExpanded] = React.useState(false);
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === customCard.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);
    return () => {
      resetTimeout();
    };
  }, [index, customCard.length]);
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className="sup-breadcrumbs">
        <Link to="/">Main</Link>
        <Typography color="text.primary">MyAccount</Typography>
      </Breadcrumbs>
      <div className="support-search">
        <Box height="320px" width="560px" sx={{ paddingTop: "20px" }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            <b>Support Center</b>
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            paddingBottom="20px"
            textAlign="center"
          >
            Find answers to commonly asked questions about insurance policies,
            claims, bills and more
          </Typography>
          <Typography gutterBottom>What can we help you?</Typography>

          <Box display="flex" flexDirection="row">
            <TextField
              id="search-bar"
              className="text"
              // onInput={(e) => {
              //   setSearchQuery(e.target.value);
              // }}

              variant="outlined"
              placeholder="Search..."
              size="medium"
              sx={{ width: "560px", backgroundColor: "#fff" }}
            />
            <IconButton type="submit" aria-label="search">
              <Search sx={{ fill: "blue" }} />
            </IconButton>
          </Box>
        </Box>
      </div>
      <div className="support-slide">
        <Box height="320px">
          <Typography
            variant="h5"
            gutterBottom
            textAlign="center"
            paddingBottom="20px"
          >
            <b>THE HELP YOU NEED, THE SERVICE YOU WANT</b>
          </Typography>
          <Box
            sx={{
              margin: "0 auto",
              overflow: "hidden",
              maxWidth: "400px",
            }}
          >
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {customCard &&
                customCard.map((card, index) => {
                  return (
                    <Card className="slide" key={index}>
                      <CardMedia component="img" alt="" image={card.img} />
                      <CardContent>
                        <Typography gutterBottom>
                          <Link>{card.label}</Link>
                        </Typography>
                        <Typography>{card.content} </Typography>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </Box>
          <div className="slideshowDots">
            {customCard.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </Box>
      </div>
      <div className="faqs-container">
        <Typography variant="h4" gutterBottom>
          <b>FAQs</b>
        </Typography>
        <hr />
        {faqs &&
          faqs.map((faq, index) => {
            return (
              <Accordion
                expanded={expanded === faq.expanded}
                onChange={handleChange(faq.expanded)}
                key={index}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>{faq.label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.detail}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </div>
      <div className="support-footer">
        <Typography variant="h5" gutterBottom>
          <b>READ MORE</b>
        </Typography>
        <Typography variant="h6" gutterBottom>
          Find more help on <Link>our blog</Link>
        </Typography>
        <Footer />
      </div>
    </>
  );
}

export default Services;
