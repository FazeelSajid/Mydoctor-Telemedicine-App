import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Change icon set as required
import { Fonts } from '../../Constants/Fonts';

const HelpCenterScreen = () => {
  const [activeTab, setActiveTab] = useState('FAQ'); // Tracks FAQ or Contact Us
  const [expandedIndex, setExpandedIndex] = useState(null); // Tracks expanded FAQ item
  const [activeCategory, setActiveCategory] = useState('All'); // Tracks active FAQ category

  const FAQData = [
    {
      category: 'All',
      questions: [
        { question: 'How can I schedule an appointment?', answer: 'Scheduling an appointment on a telemedicine app typically involves a user-friendly and intuitive process.' },
        { question: 'How do I cancel an appointment?', answer: 'You can cancel your appointment directly from the app by going to your scheduled appointments and selecting "Cancel".' },
        { question: 'Can I reschedule an appointment?', answer: 'Yes, you can reschedule an appointment using the app by selecting "Reschedule".' },
        { question: 'How do I update my personal information?', answer: 'You can update your profile information through the "Profile" section in the app settings.' },
        { question: 'What should I do if I experience technical difficulties?', answer: 'If you encounter technical issues, please reach out to customer support through the app or website.' }
      ]
    },
    {
      category: 'General',
      questions: [
        { question: 'What is telemedicine?', answer: 'Telemedicine allows you to consult a doctor remotely through an app.' },
        { question: 'Is telemedicine safe?', answer: 'Yes, telemedicine is safe and secure with encrypted communication for patient privacy.' },
        { question: 'Do I need insurance to use telemedicine?', answer: 'Insurance is not always required, but many insurance companies do cover telemedicine consultations.' },
        { question: 'What type of devices can I use for telemedicine?', answer: 'You can use smartphones, tablets, or computers with internet access for telemedicine consultations.' },
        { question: 'Is telemedicine available 24/7?', answer: 'Yes, depending on the service, telemedicine consultations are often available 24/7.' }
      ]
    },
    {
      category: 'Services',
      questions: [
        { question: 'What services do you provide?', answer: 'We provide consultations, prescriptions, and follow-ups through our app.' },
        { question: 'Can I get a prescription through telemedicine?', answer: 'Yes, after a consultation, a licensed doctor can prescribe medication through the app.' },
        { question: 'Do you offer mental health services?', answer: 'Yes, we provide mental health consultations with licensed therapists and counselors.' },
        { question: 'Can I get a second opinion from a doctor?', answer: 'Yes, you can request a second opinion from another licensed professional using the app.' },
        { question: 'Do you offer pediatric services?', answer: 'Yes, our app offers pediatric consultations for children of all ages.' }
      ]
    }
  ];
  

  const contactData = [
    { icon: 'headset-mic', label: 'Customer Service', value: '' },
    { icon: 'whatsapp', label: 'Whatsapp', value: '0810 666 6666' },
    { icon: 'language', label: 'Website', value: '' },
    { icon: 'facebook', label: 'Facebook', value: '' },
    { icon: 'twitter', label: 'Twitter', value: '' },
    { icon: 'instagram', label: 'Instagram', value: '' },
  ];

  // Filter questions based on the active category
  const filteredFAQs =
    activeCategory === 'All'
      ? FAQData.find((item) => item.category === 'All').questions
      : FAQData.find((item) => item.category === activeCategory)?.questions || [];

  const handleToggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Help Center</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'FAQ' && styles.activeTab]}
          onPress={() => setActiveTab('FAQ')}
        >
          <Text style={[styles.tabText, activeTab === 'FAQ' && styles.activeTabText]}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Contact Us' && styles.activeTab]}
          onPress={() => setActiveTab('Contact Us')}
        >
          <Text style={[styles.tabText, activeTab === 'Contact Us' && styles.activeTabText]}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {activeTab === 'FAQ' ? (
        <View style={styles.content}>
          {/* Category Tabs */}
          <View style={styles.categoryTabs}>
            {FAQData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.categoryTab,
                  activeCategory === item.category && styles.activeCategoryTab,
                ]}
                onPress={() => setActiveCategory(item.category)}
              >
                <Text
                  style={[
                    styles.categoryTabText,
                    activeCategory === item.category && styles.activeCategoryTabText,
                  ]}
                >
                  {item.category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* FAQ List */}
          <FlatList
            data={filteredFAQs}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => handleToggleExpand(index)}>
                
                <View style={styles.faqContainer}>
                  <Text style={styles.faqQuestion}>{item.question}</Text>
                  <Icon
                    name={expandedIndex === index ? 'expand-less' : 'expand-more'}
                    size={24}
                    color="#000"
                  />
                </View>
                {expandedIndex === index && <Text style={styles.faqAnswer}>{item.answer}</Text>}
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <FlatList
          data={contactData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.contactContainer}>
              <Icon name={item.icon} size={24} color="#4CAF50" />
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>{item.label}</Text>
                {item.value ? <Text style={styles.contactValue}>{item.value}</Text> : null}
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default HelpCenterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 18,
    fontFamily: Fonts.Medium,
    marginLeft: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50',
  },
  tabText: {
    fontSize: 16,
    fontFamily: Fonts.Regular,
    color: '#000',
  },
  activeTabText: {
    color: '#4CAF50',
  },
  content: {
    flex: 1,
  },
  categoryTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  categoryTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  activeCategoryTab: {
    backgroundColor: '#4CAF50',
  },
  categoryTabText: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: '#000',
  },
  activeCategoryTabText: {
    color: '#fff',
  },
  faqContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  faqQuestion: {
    fontSize: 14,
    fontFamily: Fonts.Medium,
    color: '#000',
  },
  faqAnswer: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: '#666',
    paddingLeft: 16,
    marginTop: 4,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  contactInfo: {
    marginLeft: 16,
  },
  contactLabel: {
    fontSize: 14,
    fontFamily: Fonts.Medium,
    color: '#000',
  },
  contactValue: {
    fontSize: 12,
    fontFamily: Fonts.Regular,
    color: '#666',
  },
});
