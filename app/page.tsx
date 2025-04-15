import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import CertificationsSection from "@/components/certifications-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-primary-black transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
