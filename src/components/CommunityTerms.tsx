"use client";

import { useState } from "react";

export default function CommunityTerms() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-16 border-t border-gray-200 pt-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none group"
      >
        <h3 className="font-lilita text-black text-2xl sm:text-3xl group-hover:text-[#d56116] transition-colors">
          Terms & Conditions
        </h3>
        <svg 
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-6 font-poppins text-black/80 text-sm space-y-6">
          <p className="italic">
            <strong className="text-black font-semibold">25 Free Meals for Community Groups & Organizations</strong><br />
            These Terms & Conditions (the &quot;Terms&quot;) govern Rizin&apos;s Community Meal Support program (the &quot;Program&quot;), through which Rizin&apos;s (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) provides 25 free meals to a selected community group, charity, or organization (the &quot;Recipient&quot;). By submitting an application, the applicant and the organization they represent agree to these Terms in full.
          </p>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">1. About the Program</h4>
            <p>Rizin&apos;s believes great, 100% halal food should be affordable and within reach for everyone. Through the Program, we offer 25 free meals to a community group or organization doing meaningful work for the people around them. The Program is offered at our discretion, on a goodwill basis, and is not a contractual entitlement.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">2. Eligibility</h4>
            <p className="mb-2">To be considered, an applicant must:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Represent a community group, charity, nonprofit, mosque or faith community, school or youth group, shelter, food bank, or similar organization serving a genuine community need.</li>
              <li>Be at least 18 years of age and authorized to apply on behalf of the organization.</li>
              <li>Provide accurate, truthful information and any supporting material reasonably requested by Rizin&apos;s.</li>
              <li>Be located within the area Rizin&apos;s serves and able to collect the meals in person.</li>
            </ul>
            <p className="mt-2">Rizin&apos;s reserves the right to determine eligibility at its sole discretion.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">3. How to Apply</h4>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Complete and submit the official Program application form.</li>
              <li>Provide details about your organization and the people you serve.</li>
              <li>Share any supporting information that helps us understand and verify your request — for example a flyer, letterhead, photo, registration document, or written description of the need. Supporting material is welcomed but a specific document is not always required; Rizin&apos;s may request further information before making a decision.</li>
            </ol>
            <p className="mt-2">Applications are reviewed on a periodic basis. Submitting an application does not guarantee selection.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">4. Selection</h4>
            <p>Recipients are selected at the sole discretion of Rizin&apos;s, based on factors that may include genuine need, community impact, the information and supporting material provided, and availability. Rizin&apos;s is not obligated to provide reasons for any decision. Only selected applicants will be contacted; we aim to respond by email or phone using the contact details provided.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">5. Collection of Meals</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Meals must be collected in person by the Recipient. The Program does not include delivery.</li>
              <li>The Recipient may collect from the Rizin&apos;s location they selected in their application form, subject to confirmation by Rizin&apos;s.</li>
              <li>The Recipient may choose the date and time of collection, subject to availability and prior confirmation by Rizin&apos;s.</li>
              <li>Collection is available Monday through Thursday only. Collection is not available on Fridays or weekends.</li>
              <li>The Recipient is responsible for arranging suitable transport and for the safe handling, transport, and storage of the meals once collected.</li>
              <li>Meals not collected at the agreed date and time may be forfeited. Rizin&apos;s is not obliged to remake or reschedule meals that are not collected as arranged, though we will use reasonable efforts to accommodate genuine circumstances.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">6. What Is Included</h4>
            <p className="mb-2">The Program provides 25 meals, with each meal consisting of one standard-sized double patty burger and a portion of chips. No other menu items, sizes, sides, drinks, or substitutions are included.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Any additions to the burgers — for example dipping sauces, salads, extra toppings, drinks, or other items — are not part of the Program and must be paid for by the Recipient out of pocket at the time of collection.</li>
              <li>Only 25 meals are provided free under the Program. Any meals requested beyond the 25 must be paid for by the Recipient out of pocket at Rizin&apos;s standard prices.</li>
            </ul>
            <p className="mt-2">Meals are intended for prompt consumption. The offer is for 25 meals on a single agreed occasion and has no cash value; it is non-transferable and cannot be exchanged, sold, or redeemed for cash or credit.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">7. 100% Halal</h4>
            <p>All food provided by Rizin&apos;s is 100% halal, and this will never change. Halal food is prepared to a clean, careful standard intended to be safe and welcoming for everyone to eat, regardless of background or belief. Recipients are responsible for informing the people they serve of the food&apos;s contents and for managing any allergies, dietary requirements, or other restrictions among those receiving the meals.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">8. Food Safety & Allergens</h4>
            <p>Once meals are collected, responsibility for their safe handling, storage, and timely consumption passes to the Recipient. Rizin&apos;s is not liable for any issue arising from improper transport, storage, reheating, or delayed consumption after collection. Recipients must make those receiving the meals aware that food may contain or come into contact with common allergens. Anyone with a food allergy or specific dietary need should be advised accordingly before consuming the meals.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">9. Verification & Accuracy</h4>
            <p>Rizin&apos;s may verify any information provided in an application, including by contacting the organization or requesting additional documentation. Providing false, misleading, or fraudulent information will result in disqualification and may lead to withdrawal of the offer, even after selection.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">10. Use of Name, Photos & Promotion</h4>
            <p>Rizin&apos;s may wish to photograph or document the Program and share it on our website, social media, or other marketing channels to promote our community work. By participating, the Recipient agrees that Rizin&apos;s may reference the organization&apos;s name and use images of the meal hand-off for these purposes, unless the Recipient notifies us in writing that they prefer not to be featured. Recipients are responsible for obtaining any consents needed from individuals who appear in photos they themselves share.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">11. Privacy & Data</h4>
            <p>Information submitted through the application is used to assess eligibility, administer the Program, and contact applicants. Rizin&apos;s will handle personal information in line with applicable data protection laws and will not sell applicant data. Uploaded files and responses are stored securely and retained only as long as reasonably necessary to operate the Program.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">12. Limitation of Liability</h4>
            <p>To the fullest extent permitted by law, Rizin&apos;s shall not be liable for any indirect, incidental, or consequential loss arising from participation in the Program. Nothing in these Terms excludes or limits liability that cannot lawfully be excluded, including liability for death or personal injury caused by negligence. The Program is provided &quot;as is&quot; and as a gesture of goodwill.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">13. Changes & Cancellation</h4>
            <p>Rizin&apos;s reserves the right to amend, suspend, pause, or cancel the Program or these Terms at any time without prior notice. The version of the Terms in effect at the time of an application governs that application. Continued participation following any change constitutes acceptance of the updated Terms.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">14. General</h4>
            <p>These Terms constitute the entire understanding between Rizin&apos;s and the Recipient regarding the Program. If any provision is found unenforceable, the remaining provisions remain in full effect. These Terms are governed by the laws of the jurisdiction in which Rizin&apos;s operates.</p>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2 text-base">15. Contact</h4>
            <p>Questions about the Program or these Terms can be directed to Rizin&apos;s at: <a href="mailto:richardjacob@rizins.com.au" className="text-[#d56116] hover:underline">richardjacob@rizins.com.au</a></p>
          </div>
        </div>
      )}
    </div>
  );
}