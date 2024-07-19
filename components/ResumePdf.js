// components/ResumePDF.jsx
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  item: {
    marginBottom: 10,
  },
});

const ResumePDF = ({ resumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.item}>{resumeData.name}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Email</Text>
        <Text style={styles.item}>{resumeData.email}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Phone</Text>
        <Text style={styles.item}>{resumeData.phone}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Experience</Text>
        <Text style={styles.item}>{resumeData.experience}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Education</Text>
        <Text style={styles.item}>{resumeData.education}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Projects</Text>
        <Text style={styles.item}>{resumeData.projects}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Activities</Text>
        <Text style={styles.item}>{resumeData.activities}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Honors</Text>
        <Text style={styles.item}>{resumeData.honors}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Skills</Text>
        <Text style={styles.item}>{resumeData.skills}</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
