import {
  Header,
  Hero,
  SubscriptionPlans,
  ServicesPreview,
  WebsiteTemplates,
  OurProjects,
  WhySireSoft,
  AboutSnapshot,
  Footer,
  BookDemoCTA,
  OurClients,
} from "../components/Home/sections";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SubscriptionPlans />
      <ServicesPreview />
      <WebsiteTemplates />
      <OurProjects />
      <WhySireSoft />
      <BookDemoCTA />
      <OurClients />
      <AboutSnapshot />
      <Footer />
    </main>
  );
}
