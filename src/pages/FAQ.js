import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
} from "@mui/material";
import Navbar from "../common/components/Navbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    id: 1,
    question: "What is LIT?",
    answer:
      "LIT is a fashion gaming platform that challenges players to compare two similar-looking products and choose the more expensive one based on quality and precision. It's an interactive and educational way to refine your sense of taste.",
  },
  {
    id: 2,
    question: "What all does LIT include?",
    answer:
      "LIT game, Marketplace, Image recognition, avatar store, social platform",
  },
  {
    id: 3,
    question: "Can I play LIT with friends or family?",
    answer:
      "Absolutely! LIT offers a social aspect where you can challenge friends and family to see who has the sharpest eye for quality, precision, and a nag for luxury.",
  },
  {
    id: 4,
    question: "Is LIT only for fashion products?",
    answer:
      "While LIT focuses on fashion, it can expand to other categories, providing opportunities for users to explore a wider range of products and brands.",
  },
  {
    id: 5,
    question: "Is my data safe with LIT?",
    answer:
      "LIT takes data privacy and security seriously. User data is protected and handled in accordance with privacy policies to ensure a safe and secure gaming experience.",
  },
  {
    id: 6,
    question: "How can I provide feedback or suggestions for LIT?",
    answer:
      "You can provide feedback and suggestions through the feedback option or by contacting our support team. We value users' input in improving the LIT experience.",
  },
  {
    id: 7,
    question: "Where can I download LIT?",
    answer:
      "LIT will be soon available for download on both Android and iOS platforms. Simply visit the respective app stores and search for 'LIT' to get started.",
  },
  {
    id: 8,
    question: "How can I reach out to LIT?",
    answer: "You can reach out to LIT by tapping on the CONTACT icon",
  },
];

function FAQ() {
  return (
    <Box sx={{ minHeight: { sm: "100%", md: "100vh" } }}>
      <Navbar />
      <Container>
        <Typography
          variant="h5"
          fontWeight="bold"
          mt={6}
          mb={4}
          textAlign="center"
        >
          Frequently Asked Questions (FAQ)
        </Typography>

        <Box>
          {faqData.map((item) => (
            <Accordion
              key={item.id}
              sx={{
                padding: 1,
                marginTop: 1,
                backgroundColor: "rgba(255, 255, 255, 0.85)",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body1" fontWeight="bold">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default FAQ;
