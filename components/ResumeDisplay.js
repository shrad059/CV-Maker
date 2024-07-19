// components/ResumeDisplay.jsx
import React from 'react';
import styled from 'styled-components';
// import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePdf'; // Assuming you have a component to render PDF content

const Container = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Item = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ResumeDisplay = ({ resumeData }) => {
  const { name, email, phone, experience, education, projects, activities, honors, skills } = resumeData;

  return (
    <Container>
      <Section>
        <Title>Name</Title>
        <Item>{name}</Item>
      </Section>
      <Section>
        <Title>Email</Title>
        <Item>{email}</Item>
      </Section>
      <Section>
        <Title>Phone</Title>
        <Item>{phone}</Item>
      </Section>
      <Section>
        <Title>Experience</Title>
        <Item>{experience}</Item>
      </Section>
      <Section>
        <Title>Education</Title>
        <Item>{education}</Item>
      </Section>
      <Section>
        <Title>Projects</Title>
        <Item>{projects}</Item>
      </Section>
      <Section>
        <Title>Activities</Title>
        <Item>{activities}</Item>
      </Section>
      <Section>
        <Title>Honors</Title>
        <Item>{honors}</Item>
      </Section>
      <Section>
        <Title>Skills</Title>
        <Item>{skills}</Item>
      </Section>
      {/* <PDFDownloadLink document={<ResumePDF resumeData={resumeData} />} fileName="resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink> */}
    </Container>
  );
};

export default ResumeDisplay;
