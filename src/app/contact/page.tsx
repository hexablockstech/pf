import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Page | MoneyMapping | Efficient Tracking for Saving and Investing",
  description: "Get in Touch, Let's Talk Money!",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in Touch, Let's Talk Money!"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
