"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Calendar, Crown, Handshake, Heart, MessageCircle, Shield, ShoppingBag, Star, Trophy, Truck, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="animatedAurora"
      cardStyle="glass-flat"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Shop", id: "products" },
            { name: "Team", id: "team" },
            { name: "Membership", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="BVB Fans Shop"
          button={{
            text: "Join Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="BVB Fans United"
          description="Official merchandise for true Borussia Dortmund supporters. From jerseys to scarves, show your yellow and black pride with authentic BVB gear."
          tag="Official Store"
          tagIcon={Star}
          buttons={[
            { text: "Shop Now", href: "products" },
            { text: "Join Community", href: "pricing" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033957563-ppt739hz.jpg"
          imageAlt="BVB Signal Iduna Park stadium"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="For True BVB Supporters"
          description="We are passionate fans who understand what it means to support Borussia Dortmund. Our store brings you authentic merchandise and exclusive items that celebrate the yellow and black spirit."
          tag="Our Story"
          tagIcon={Heart}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Authentic Merchandise",
              description: "Official BVB products directly from the club and authorized partners",
              icon: Shield
            },
            {
              title: "Fast Shipping",
              description: "Quick delivery to get your gear before the next match",
              icon: Truck
            },
            {
              title: "Fan Community",
              description: "Join thousands of BVB supporters worldwide in our exclusive community",
              icon: Users
            },
            {
              title: "Match Day Ready",
              description: "Everything you need to show your support at Signal Iduna Park",
              icon: Calendar
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033959119-0it110l4.jpg"
          imageAlt="BVB fans celebrating in yellow wall"
          imagePosition="right"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured BVB Merchandise"
          description="Discover our collection of official Borussia Dortmund products - from match jerseys to fan accessories"
          tag="Shop"
          tagIcon={ShoppingBag}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "bvb-home-jersey",
              name: "BVB Home Jersey 2024/25",
              price: "€89.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033962700-xnjzcgkb.jpg",
              imageAlt: "BVB home jersey yellow black"
            },
            {
              id: "bvb-away-jersey",
              name: "BVB Away Jersey 2024/25",
              price: "€89.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033963744-iu2bcezy.jpg",
              imageAlt: "BVB away jersey"
            },
            {
              id: "bvb-scarf",
              name: "Official BVB Scarf",
              price: "€24.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033964717-2a1htgdr.jpg",
              imageAlt: "BVB official scarf yellow black"
            },
            {
              id: "bvb-cap",
              name: "BVB Baseball Cap",
              price: "€19.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033965671-0lvdvu6x.jpg",
              imageAlt: "BVB cap yellow"
            },
            {
              id: "bvb-mug",
              name: "BVB Coffee Mug",
              price: "€12.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033966695-xkytdl36.jpg",
              imageAlt: "BVB coffee mug"
            },
            {
              id: "bvb-keychain",
              name: "BVB Keychain",
              price: "€7.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033967719-z608dc7c.jpg",
              imageAlt: "BVB keychain merchandise"
            }
          ]}
          buttons={[
            { text: "View All Products", href: "https://shop.bvb.de" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="BVB Fan Memberships"
          description="Join our exclusive fan community and get access to special offers, events, and merchandise"
          tag="Membership"
          tagIcon={Crown}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "fan",
              name: "BVB Fan",
              price: "€19/year",
              features: [
                "10% discount on merchandise",
                "Monthly newsletter",
                "Fan community access",
                "Match updates"
              ],
              buttons: [
                { text: "Join Now", href: "contact" },
                { text: "Learn More", href: "#" }
              ]
            },
            {
              id: "supporter",
              badge: "Most Popular",
              badgeIcon: Star,
              name: "BVB Supporter",
              price: "€49/year",
              features: [
                "20% discount on merchandise",
                "Priority customer support",
                "Exclusive merchandise access",
                "Match day events invitations",
                "Digital match programs"
              ],
              buttons: [
                { text: "Join Now", href: "contact" },
                { text: "Learn More", href: "#" }
              ]
            },
            {
              id: "champion",
              name: "BVB Champion",
              price: "€99/year",
              features: [
                "30% discount on merchandise",
                "VIP customer support",
                "Limited edition items access",
                "Stadium tours included",
                "Meet & greet opportunities",
                "Signed merchandise chances"
              ],
              buttons: [
                { text: "Join Now", href: "contact" },
                { text: "Learn More", href: "#" }
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="BVB Legends"
          description="Celebrate the iconic players who made Borussia Dortmund legendary"
          tag="Hall of Fame"
          tagIcon={Trophy}
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "haaland",
              name: "Erling Haaland",
              role: "Striker Legend",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033968744-8t1qve4h.jpg",
              imageAlt: "Erling Haaland BVB player"
            },
            {
              id: "reus",
              name: "Marco Reus",
              role: "Captain & Icon",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033969664-5a84u1l0.jpg",
              imageAlt: "Marco Reus BVB captain"
            },
            {
              id: "bellingham",
              name: "Jude Bellingham",
              role: "Midfield Maestro",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033970845-yhk67k58.jpg",
              imageAlt: "Jude Bellingham BVB player"
            },
            {
              id: "hummels",
              name: "Mats Hummels",
              role: "Defensive Rock",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033971902-sijq5ksr.jpg",
              imageAlt: "Mats Hummels BVB defender"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What BVB Fans Say"
          description="Real testimonials from passionate Borussia Dortmund supporters around the world"
          tag="Fan Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "fan1",
              name: "Stefan Mueller",
              role: "Fan since 1995",
              company: "Dortmund Local",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033973250-8f2vf8ze.jpg",
              imageAlt: "Stefan Mueller BVB fan"
            },
            {
              id: "fan2",
              name: "Lisa Schmidt",
              role: "Season Ticket Holder",
              company: "Yellow Wall",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033974571-ky52ffgx.jpg",
              imageAlt: "Lisa Schmidt BVB fan"
            },
            {
              id: "fan3",
              name: "Carlos Rodriguez",
              role: "International Fan",
              company: "BVB Madrid",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033975507-g6p9q2bk.jpg",
              imageAlt: "Carlos Rodriguez BVB fan"
            },
            {
              id: "fan4",
              name: "Ahmed Hassan",
              role: "Digital Member",
              company: "BVB Middle East",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033976628-y4jv84kz.jpg",
              imageAlt: "Ahmed Hassan BVB fan"
            },
            {
              id: "fan5",
              name: "Jennifer Wilson",
              role: "Family Fan",
              company: "BVB USA",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033977549-3zaqzj7u.jpg",
              imageAlt: "Jennifer Wilson BVB fan"
            },
            {
              id: "fan6",
              name: "Thomas Weber",
              role: "Ultras Member",
              company: "Südtribüne",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033978675-o1spey5c.jpg",
              imageAlt: "Thomas Weber BVB fan"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Partners"
          description="Official partnerships with leading sports brands and organizations"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033979773-yqx9ymmf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033980826-j2fi5a56.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033981850-t086q4sf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033982955-pcxag23o.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033984308-saodywr1.jpg"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Join the BVB Family"
          description="Get in touch with us for membership information, special offers, or any questions about our merchandise and community"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your BVB passion...",
            rows: 4,
            required: false
          }}
          buttonText="Join Community"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763033985524-v67rp7lx.jpg"
          imageAlt="BVB merchandise store"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Shop",
              items: [
                { label: "Jerseys", href: "products" },
                { label: "Accessories", href: "products" },
                { label: "Home & Lifestyle", href: "products" },
                { label: "Gift Cards", href: "#" }
              ]
            },
            {
              title: "Community",
              items: [
                { label: "Membership", href: "pricing" },
                { label: "Fan Events", href: "#" },
                { label: "Match Day Guide", href: "#" },
                { label: "Stadium Tours", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Size Guide", href: "#" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 | BVB Fans Shop - Echte Liebe"
        />
      </div>
    </ThemeProvider>
  );
}