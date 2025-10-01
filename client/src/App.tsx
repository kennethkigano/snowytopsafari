import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import Itineraries from "@/pages/itineraries";
import ItineraryDetail from "@/pages/itinerary-detail";
import Community from "@/pages/community";
import CommunityActivity from "@/pages/community-activity";
import CommunityEngagement from "@/pages/community-engagement";
import Book from "@/pages/book";
import Donate from "@/pages/donate";
import Teams from "@/pages/teams";
import Fleet from "@/pages/fleet";
import Volunteers from "@/pages/volunteers";
import VolunteerForm from "@/pages/volunteer-form";
import ThankYou from "@/pages/thank-you";
import Contact from "@/pages/contact";
import EndangeredSpecies from "@/pages/endangered-species";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";

// Import destination pages
import KenyaDestination from "@/pages/destinations/kenya";
import TanzaniaDestination from "@/pages/destinations/tanzania";
import UgandaDestination from "@/pages/destinations/uganda";

// Import experience pages
import LuxuryExperiences from "@/pages/experiences/luxury";
import AdventureExperiences from "@/pages/experiences/adventure";
import DubaiExperiences from "@/pages/experiences/dubai";
import Terms from "@/pages/terms";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/itineraries" component={Itineraries} />
      <Route path="/itineraries/:id" component={ItineraryDetail} />
      <Route path="/community" component={Community} />
      <Route path="/community/:slug" component={CommunityActivity} />
      <Route path="/community-engagement" component={CommunityEngagement} />
      <Route path="/book" component={Book} />
      <Route path="/donate" component={Donate} />
      <Route path="/teams" component={Teams} />
      <Route path="/fleet" component={Fleet} />
      <Route path="/volunteers" component={Volunteers} />
      <Route path="/volunteer" component={VolunteerForm} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/contact" component={Contact} />
      <Route path="/endangered-species" component={EndangeredSpecies} />
      <Route path="/about" component={About} />
      
      {/* Destination Routes */}
      <Route path="/destinations/kenya" component={KenyaDestination} />
      <Route path="/destinations/tanzania" component={TanzaniaDestination} />
      <Route path="/destinations/uganda" component={UgandaDestination} />
      
      {/* Experience Routes */}
      <Route path="/experiences/luxury" component={LuxuryExperiences} />
      <Route path="/experiences/adventure" component={AdventureExperiences} />
      <Route path="/experiences/dubai" component={DubaiExperiences} />
      <Route path="/terms" component={Terms} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;