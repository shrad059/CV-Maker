import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 45%;
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

const ResumeDisplay = ({ resumeData }) => {
  return (
    <Container>
      <Section>
        <Title>Name</Title>
        <Item>{resumeData.name}</Item>
      </Section>
      <Section>
        <Title>Email</Title>
        <Item>{resumeData.email}</Item>
      </Section>
      <Section>
        <Title>Phone</Title>
        <Item>{resumeData.phone}</Item>
      </Section>
      <Section>
        <Title>Experience</Title>
        <Item>{resumeData.experience}</Item>
      </Section>
      <Section>
        <Title>Education</Title>
        <Item>{resumeData.education}</Item>
      </Section>
      <Section>
        <Title>Projects</Title>
        <Item>{resumeData.projects}</Item>
      </Section>
      <Section>
        <Title>Activities</Title>
        <Item>{resumeData.activities}</Item>
      </Section>
      <Section>
        <Title>Honors</Title>
        <Item>{resumeData.honors}</Item>
      </Section>
      <Section>
        <Title>Skills</Title>
        <Item>{resumeData.skills}</Item>
      </Section>
    </Container>
  );
};

export default ResumeDisplay;
