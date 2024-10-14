import orderAnime from "./assets/rafiki.svg";
import amico from "./assets/amico.svg";
import home from './assets/home-13.svg'
import features from './assets/features-icon.svg'

export const navLinkItems = [
  { id: 1, text: "Home", url: "#home", icon:home },
  { id: 2, text: "How It Works", url: "#howItWorks", icon:home },
  { id: 3, text: "Pricing", url: "#pricingSection", icon: features },
];

export const steps = [
  {
    id: 1,
    heading: "Seamlessly manage orders with ease",
    paragraph:
      "Get instant notifications and track your orders effortlessly in real time. With Nile, you’ll never miss a sale,keeping your business running smoothly every step of the way.",
    img: orderAnime,
    bg: "bg-myCustomColor-light",
  },
  {
    id: 2,
    heading: "Stay ahead with smart inventory alerts.",
    paragraph:
      "No more stock outs! Get timely low inventory alerts and reorder products i seconds,ensuring your store is always ready to meet customer demands without delay.",
    img: amico,
    bg: "bg-primary",
  },
];

export const plans = [
  {
    id: 1,
    head: "Free Plan",
    monthly: 0,
    yearly: 0,
    text: `Basic features to get started.Great for testing out the platform`,
  },
  {
    id: 2,
    head: "Premium Plan",
    monthly: 8500,
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
        text: "limited  product listing",
      },
      {
        id: 6,
        text: "Basic social sharing",
      },
      {
        id: 7,
        text: "free domain that ends with .mynile.store",
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
  },
  {
    id: 1,
    heading: "Customize Your Store",
 
  },
  {
    id: 2,
    heading: "Recieve Payment",
     
  },
];
// export const colors=['#004324', '#F5F5F5']