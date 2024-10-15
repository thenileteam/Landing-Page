import home from './assets/home-13.svg'
import features from './assets/features-icon.svg'

export const navLinkItems = [
  { id: 1, text: "Home", url: "#hero", icon:home },
  { id: 2, text: "How It Works", url: "#howItWorks", icon:home },
  { id: 3, text: "Pricing", url: "#pricingSection", icon: features },
];

export const plans = [
  {
    id: 1,
    head: "Free Plan",
    monthly: 0,
    yearly: 0,
    text: `Basic features to get started.`, 
  },
  {
    id: 2,
    head: "Premium Plan",
    monthly: 4500,
    yearly: 55000,
    text: "Perfect for scaling your business",
  },
];
export const pricing = [
  {
    id: 1,
    textArray: [
      {
        id: 1,
        text: "User access: only you",
      },
      {
        id: 2,
        text: "Basic analysis insight",
      },
       
      {
        id: 3,
        text: "48 hours email response",
      },
      {
        id: 4,
        text: "Basic security features",
      },
      {
        id: 5,
        text: "Limited  product listing",
      },
      {
        id: 6,
        text: "Basic social sharing",
      },
      {
        id: 7,
        text: "Free domain that ends with .mynile.store",
      },
    ],
  },
  {
    id: 2,
    textArray: [
      {
        id: 1,
        text: "4 User access including you",
      },
      {
        id: 2,
        text: "24 hour Priority plan",
      },
      {
        id: 3,
        text: " Deep dive analysis and support",
      },
      {
        id: 4,
        text: " Advanced security ans backup solution",
      },
      {
        id: 5,
        text: "Unlimited product listings",
      },
      {
        id: 6,
        text: " Full social media integration",
      },
      {
        id: 7,
        text: "Personalized business domain tht ends with.com.ng",
      },
      {
        id: 8,
        text: "Integrated reviews and rating",
      },
    ],
  },
];

export const howItWorksSteps = [
  {
    id: 0,
    heading: "Add Product",
    paragraph:'Choose your primary color,upload your logo,fill your address details and add your products.'
  },
  {
    id: 1,
    heading: "Customize Your Store",
    paragraph:'Post your first product and start making sales.'
 
  },
  {
    id: 2,
    heading: "Receive Payment",
    paragraph:'With ease,receive your money across board and from anywhere.'
     
  },
];