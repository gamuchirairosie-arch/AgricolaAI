import React, { useRef, useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { Colors } from '../constants/colors';

// Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import WhyUsSection from '../components/WhyUsSection';
import WhoBenefitsSection from '../components/WhoBenefitsSection';
import ImpactSection from '../components/ImpactSection';
import SdgSection from '../components/SdgSection';
import FinalCtaSection from '../components/FinalCtaSection';
import Footer from '../components/Footer';

export default function HomeScreen({ navigation }) {
  const scrollViewRef = useRef(null);
  const [layouts, setLayouts] = useState({});

  const handleLayout = (section) => (event) => {
    const { y } = event.nativeEvent.layout;
    setLayouts((prev) => ({ ...prev, [section]: y }));
  };

  const scrollToSection = (sectionName) => {
    const yOffset = layouts[sectionName] ? Math.max(0, layouts[sectionName] - 10) : 0;
    scrollViewRef.current?.scrollTo({ y: yOffset, animated: true });
  };

  const handleStartFarming = () => {
    navigation.navigate('Welcome');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      
      {/* 1. Sticky Navigation Bar */}
      <Header 
        onMenuPress={scrollToSection} 
        onGetStartedPress={handleStartFarming} 
      />

      <ScrollView 
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* 2. Hero Section */}
        <View onLayout={handleLayout('home')} style={styles.section}>
          <Hero onCtaPress={handleStartFarming} />
        </View>

        {/* 3. The Problem Section */}
        <View onLayout={handleLayout('problem')} style={styles.section}>
          <ProblemSection />
        </View>

        {/* 4. Our Solution Section */}
        <View onLayout={handleLayout('solution')} style={styles.section}>
          <SolutionSection />
        </View>

        {/* 5. Why Agricola AI? (Features) Section */}
        <View onLayout={handleLayout('features')} style={styles.section}>
          <WhyUsSection />
        </View>

        {/* 6. Who Benefits Section */}
        <View style={styles.section}>
          <WhoBenefitsSection />
        </View>

        {/* 7. Expected Impact Section */}
        <View onLayout={handleLayout('impact')} style={styles.section}>
          <ImpactSection />
        </View>

        {/* 8. SDGs Section */}
        <View style={styles.section}>
          <SdgSection />
        </View>

        {/* 9. Final CTA Section */}
        <View style={styles.section}>
          <FinalCtaSection onCtaPress={handleStartFarming} />
        </View>

        {/* 10. Footer Section */}
        <Footer />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 48,
  },
  section: {
    width: '100%',
  },
});
