import React from 'react'
import { Link } from 'react-router-dom'

function TermsAndConditions() {
  return (
    <div>
        <div className='container'>
            <div className='termsncondition'>
                <h2 className='text-center'>Terms & Conditions</h2>
                <div className='content'>
                      <p><strong>Effective Date:</strong></p>
                      <p>Welcome to Mayavi Fashion! These term & conditions outline the rules and regulations for the use of our website and the purchase of products from us. By accessing or using our website and purchasing our products, you agree to abide by these terms. Please read them carefully before proceeding.</p>

                      <h5 className='mt-3'>Website Use:</h5>
                      <p>i. License – We grant you a limited ,non-exclusive, non-transferable licence to access and use our website for personal use only.</p>
                      <p>ii.  Prophited Activities – You agree not to engage in any unauthorized use of our website, including but not limited to the following:</p>
                      <ul>
                          <li>  Using our website for any unlawful purpose.</li>
                          <li> Interfering with the security features of the website.</li>
                          <li>Attempting to access or collect data from the website using automated means.</li>
                      </ul>

                      <h5 className='mt-3'>Products and Orders:</h5>
                      <p>i. Product Information – We make every effort to display accurate descriptions and images of our products. However, we do not guarantee that product descriptions or other content  on our website is accurate, complete, reliable, current or error-free.</p>
                      <p>ii.  Ordering – By placing an order through our website, you warrant that you are legally able to enter into binding contracts and that the information you provide is accurate and complete.</p>
                      <p>iii.  Cancellation – We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspicion of fraudulent activity.</p>

                      <h5 className='mt-3'>Pricing And Payment:</h5>
                      <p>i.  Pricing – All prices displayed on our website are in [currency] and are subject to change without notice.</p>
                      <p>ii.  Payment – Payments for orders must be made via our accepted payment methods. By providing your payment information , you authorize us to process and fulfil your order.</p>

                      <h5 className='mt-3'>Shipping And Delivery:</h5>
                      <p>i. Shipping – We will arrange shipment of the products to you using our standard shipping methods.</p>
                      <p>ii.  Delivery – Delivery times may vary depending on your location and the shipping method selected . We are not responsible for any delays caused by shipping carriers.</p>

                      <h5 className='mt-3'>Return And Exchange:</h5>
                      <p>i. Return – We accept the return of unworn, unwashed and undamaged products within 7 days of delivery. Please refer to our return Policy for detailed instructions.</p>
                      <p>ii. Exchanges – Exchanges may be allowed under certain conditions. Please contact us for more information.</p>

                      <h5 className='mt-3'>Intellectual Property:</h5>
                      <p>Ownership – All content, trademarks, logos and intellectual property displayed on our website are the property of Mayavi Fashion or their respective owners. You may not use, reproduce or distribute any content from our website without our written permission.</p>

                      <h5 className='mt-3'>Limitation of Liability:</h5>
                      <p>Disclaimer – To the maximum extent permitted by law Mayavi Fashion disclaims all warranties, express or implied, with respect to the products and services offered on our website. We will not be liable for any indirect , incidental, special or consequential damages arising out of or related to your use of our website or products.</p>

                      <h5 className='mt-3'>Governing Law:</h5>
                      <p>Jurisdiction – These Term and Conditions shall be governed by and interpreted in accordance with the laws of [jurisdiction]. Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in [jurisdiction].</p>

                      <h5 className='mt-3'>Changes To Terms:</h5>
                      <p>Modification – We reserve the right to modify these Term And Conditions at any time. Changes will become effective immediately upon posting on our website. Your continued use of our website after any changes indicate your acceptance of the modified terms.</p>

                      <h5 className='mt-3'>Contact Us:</h5>
                      <p>If you have any questions about these Terms and Conditions, please contact us at <Link to="mailto:mayavifashion@gmail.com">mayavifashion@gmail.com</Link>.</p>

                      <p className='mt-3'>These Terms and Conditions govern the use of Mayavi Fashion’s website and the purchase of products. They provide clarity on your rights and responsibilities when using our services and ordering our products. Adjustments can be made to tailor the terms to specific business practices and legal requirements.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TermsAndConditions