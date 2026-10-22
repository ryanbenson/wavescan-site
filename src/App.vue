<script setup lang="ts">
import IconSprite from "./components/IconSprite.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteNav from "./components/SiteNav.vue";
import DownloadSection from "./sections/DownloadSection.vue";
import FactStrip from "./sections/FactStrip.vue";
import FaqSection from "./sections/FaqSection.vue";
import HelpSection from "./sections/HelpSection.vue";
import HeroSection from "./sections/HeroSection.vue";
import HowItWorksSection from "./sections/HowItWorksSection.vue";
import ReportSection from "./sections/ReportSection.vue";
import RequirementsSection from "./sections/RequirementsSection.vue";
import RoadmapSection from "./sections/RoadmapSection.vue";
import SafetySection from "./sections/SafetySection.vue";
import WutheringToolsSection from "./sections/WutheringToolsSection.vue";
</script>

<template>
  <IconSprite />
  <SiteNav />
  <main id="top">
    <HeroSection />
    <FactStrip />
    <RequirementsSection />
    <HowItWorksSection />
    <WutheringToolsSection />
    <SafetySection />
    <DownloadSection />
    <RoadmapSection />
    <HelpSection />
    <ReportSection />
    <FaqSection />
  </main>
  <SiteFooter />
</template>
