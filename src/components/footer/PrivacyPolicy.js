import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  return (
    <div>
        <div className='container'>
        <div className='privacy_policy'>
            <h2 className='text-center'>Privacy Policy</h2>

               <div className='content'>
            <h5 className='mt-5'>INTRODUCTION</h5>
            <p> Mayavi Fashion is the ultimate brand for fashionable clothing in modern times. Shop high quality brand product and your perfect style on Mayavi Fashion. It’s time to redefine your style trend with our trendy clothes.</p>

            <h5 className='mt-3'>OUR PRIVACY POLICY</h5>
            <p>Privacy Policy of Mayavi Fashion Products:</p>
            <p><strong>Effective Date:</strong></p>

            <p className='mt-2'>Thank you for visiting Mayavi Fashion and reviewing our privacy Policy. Your Privacy is most important to us and we are committed to protecting your personal information. This Policy describes how we collect, use, disclose, and product your information when you visit our website or use our services.</p>

            <h6 className='mt-3'>Information We Collect:</h6>
            <p>i. Personal Information- When you make a purchase or create an account, we may collect your name, email id, shipping address, phone number and payment information.</p>
            <p>ii. Transaction Information:  We may collect details about purchases, including the products you purchased, the transaction amount and payment method.</p>
            <p>iii. Usage Information:  We collect information about how you interact with our website, such as IP address, browser type, pages viewed and referring URL.</p>
            <p>iv.  Cookies and Tracking Technologies:  We use cookies and similar technologies to improve your browsing experience and to collect information about your activities on our website.</p>

            <h6 className='mt-3'>How We Use Your Information:</h6>
            <p>i. To provide the Services - We use your information to process your order, communicate with you about your purchases and provide Customer Support.</p>
            <p>ii.  Personalization – We may personalization your shopping experience based on your preferences and past interaction with us.</p>
            <p>iii. Marketing And Promotion – With your consent , we may send you promotional emails about our products, special offers or events.</p>
            <p>iv. Analysis – We analyze usage data to improve our website, products and services</p>

            <h6 className='mt-3'>Information Sharing:</h6>
            <p>i. Service Providers – We may share your information with third party service providers who assist us in operating our website, conducting our business or servicing you.</p>
            <p>ii.  Legal Compliance – We may disclose your information when required by law or to protect our rights , property or safety.</p>

            <h6 className='mt-3'>Your Choices:</h6>
            <p>i.  Opt-Out – You can out-opt of receiving marketing communications from us by following the instructions in our emails or by contacting us directly.</p>
            <p>ii. Cookies – You can manage cookies and opt-out of certain tracking technologies through your browser settings.</p>

            <h6 className='mt-3'>Data Security:</h6>
            <p>We implement appropriate security measures to protect your information from unauthorized access, alteration , disclosure or destruction.</p>

            <h6 className='mt-3'>Children’s Privacy:</h6>
            <p>Our products and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children without parental consent.</p>

            <h6 className='mt-3'>Changes to this Privacy Policy:</h6>
            <p>We may updates this Privacy Policy from time to time reflect changes in our practices or for other operational, legal or regulatory  reasons. We will notify you of any significant changes by posting the updated policy on our website.</p>

            <h6 className='mt-3'>Contact Us :</h6>
            <p>If you have any questions about this Privacy Policy or our practices, please contact us at <Link to="mailto:mayavifashion@gmail.com">mayavifashion@gmail.com</Link></p>

            <p className='mt-2'>By using our website or providing your information to us, you consent to the collection, use, and disclosure of your information as described in this privacy policy.</p>
            <p>This Privacy Policy is designed to inform users of how their personal information is collected, used  and protected when they interact with a clothing brand’s products and services.</p>
            <p>Adjustment may be made based on the brand’s specific features or practices.</p>
               </div>
        </div>
          </div>
    </div>
  )
}

export default PrivacyPolicy