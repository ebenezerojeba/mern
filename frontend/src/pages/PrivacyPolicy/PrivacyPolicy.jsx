import React, { useEffect } from "react";
import "./PrivacyPolicy.css"; // Make sure to create this CSS file

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top
  }, []);
  return (
    <div className="privacy-policy" id="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> [ 19th July, 2024 ]
      </p>

      <h2>Introduction</h2>
      <p>
        Welcome to Palatial Events and Catering Services. We are dedicated to
        safeguarding your privacy and ensuring that your personal information is
        protected. This Privacy Policy describes how we collect, use, disclose,
        and safeguard your information when you visit our website{" "}
        <a href="https://palatial.onrender.com">
          https://palatial.onrender.com
        </a>{" "}
        or use our services. By using our site, you agree to the terms of this
        Privacy Policy.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Personal Information</h3>
      <p>
        We collect personal information that you voluntarily provide to us when
        you:
      </p>
      <ul>
        <li>
          <strong>Register on our site:</strong> Name, email address, phone
          number
        </li>
        <li>
          <strong>Place an order:</strong> Mailing address, payment information
        </li>
        <li>
          <strong>Subscribe to our newsletter:</strong> Email address
        </li>
        <li>
          <strong>Contact us:</strong> Any information you provide in your
          communication
        </li>
      </ul>

      <h3>1.2 Non-Personal Information</h3>
      <p>
        We may automatically collect non-personal information about your
        interaction with our site, including:
      </p>
      <ul>
        <li>Browser type and version</li>
        <li>IP address</li>
        <li>Operating system</li>
        <li>Pages viewed</li>
        <li>Date and time of visit</li>
        <li>Referring website</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>The information we collect is used in the following ways:</p>
      <ul>
        <li>
          <strong>To Provide and Improve Our Services:</strong> We use your
          information to process transactions, fulfill orders, and enhance our
          services. This includes personalizing your experience and responding
          to your inquiries.
        </li>
        <li>
          <strong>To Communicate with You:</strong> We may send you updates,
          promotional content, and information related to our services. You can
          opt-out of marketing communications at any time.
        </li>
        <li>
          <strong>To Ensure Security:</strong> We use your data to protect
          against fraudulent activities and maintain the security of our
          website.
        </li>
        <li>
          <strong>To Comply with Legal Obligations:</strong> We may use your
          information to comply with applicable laws, regulations, and legal
          processes.
        </li>
      </ul>

      <h2>3. How We Protect Your Information</h2>
      <p>
        We implement a range of security measures to protect your personal
        information:
      </p>
      <ul>
        <li>
          <strong>Encryption:</strong> We use SSL/TLS encryption to secure data
          transmitted between your browser and our servers.
        </li>
        <li>
          <strong>Access Control:</strong> Only authorized personnel have access
          to your information. We enforce strict access controls.
        </li>
        <li>
          <strong>Data Storage:</strong> Your information is stored in secure
          data centers with regular security updates and monitoring.
        </li>
      </ul>

      <h2>4. Sharing Your Information</h2>
      <p>
        We do not sell, trade, or rent your personal information. We may share
        your information in the following circumstances:
      </p>
      <ul>
        <li>
          <strong>With Service Providers:</strong> We may share information with
          third-party service providers who assist us in operating our site,
          processing payments, or delivering services. They are required to
          protect your information.
        </li>
        <li>
          <strong>For Legal Purposes:</strong> We may disclose information if
          required by law or in response to legal requests from authorities.
        </li>
        <li>
          <strong>During Business Transfers:</strong> If we undergo a merger,
          acquisition, or sale of assets, your information may be transferred as
          part of the transaction.
        </li>
      </ul>

      <h2>5. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar technologies to enhance your browsing
        experience. Cookies are small files that store information about your
        preferences. You can manage cookies through your browser settings. Our
        site may use cookies to:
      </p>
      <ul>
        <li>Improve site functionality</li>
        <li>Analyze user behavior</li>
        <li>Provide personalized content and ads</li>
      </ul>

      <h2>6. Your Rights and Choices</h2>
      <p>You have the following rights regarding your personal information:</p>
      <ul>
        <li>
          <strong>Access and Update:</strong> You can access, correct, or update
          your personal information by contacting us.
        </li>
        <li>
          <strong>Opt-Out:</strong> You can opt-out of receiving marketing
          communications by following the unsubscribe instructions in our
          emails.
        </li>
        <li>
          <strong>Deletion:</strong> You may request the deletion of your
          personal information, subject to applicable laws and regulations.
        </li>
      </ul>

      <h2>7. Children's Privacy</h2>
      <p>
        Our services are not intended for children under 13. We do not knowingly
        collect personal information from children under 13. If we learn that we
        have collected such information, we will take steps to delete it
        promptly.
      </p>

      <h2>8. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. We will post the updated policy
        on our website and notify you of significant changes. Your continued use
        of our services after changes indicates your acceptance of the revised
        policy.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:palatailevents@gmail.com">palatailevents@gmail.com</a>
        </li>
        <li>
          <strong>Phone:</strong> [08143691712]
        </li>
      </ul>

      <p>
        Thank you for trusting Palatial Events and Catering Services with your
        information. We are committed to ensuring your privacy and providing a
        secure and enjoyable experience.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
