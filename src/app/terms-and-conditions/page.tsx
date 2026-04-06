import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Fielmente",
  description:
    "Review the terms and conditions for using Fielmente's services and website.",

  alternates: {
    canonical: "https://fielmente.com/terms-and-conditions",
    languages: {
      "en-US": "https://fielmente.com/terms-and-conditions",
    },
  },
  openGraph: {
    title: "Terms and Conditions - Fielmente",
    description:
      "Review the terms and conditions for using Fielmente's services and website.",

    images: [
      {
        url: "https://fielmente.com/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};
function page() {
  return (
    <section>
      <div className="max-width mx-auto py-20 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-black">TERMS OF USE</h1>
        <div>
          <h2 className="text-xl font-bold text-black">
            1. Your Agreement to the Terms and Conditions of Use
          </h2>
          <p className="text-lg text-black font-medium">
            By accessing and using this website, you are agreeing to be bound by
            these web site Terms and Conditions of Use and all applicable laws
            and regulations. If you do not agree with any of these terms, you
            are prohibited from using or accessing this site. The materials
            contained on this website are protected by applicable copyright and
            trademark law. The Terms and Conditions of Use may be updated or
            otherwise changed from time to time. The Terms and Conditions of Use
            in their current form will always be available on this website for
            your review. By your continued use of the site following changes
            made to the Terms and Conditions of Use constitutes your acceptance
            of those changes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-black">2. Use License</h2>
          <p className="text-lg text-black">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Cayuga Hospitality
            Consultant’s website for personal, non-commercial transitory viewing
            only. This is a grant of a license, not a transfer of title, and
            under this license you may not:
          </p>
          <ul className="mt-6 flex flex-col gap-4 list-disc list-inside font-medium">
            <li className="text-black text-lg">
              Modify or copy the materials;
            </li>
            <li className="text-black text-lg">
              Use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li className="text-black text-lg">
              Attempt to decompile or reverse engineer any software contained on
              Cayuga Hospitality Consultant’s website;
            </li>
            <li className="text-black text-lg">
              Interrupt or attempt to interrupt the operation of the site in any
              way;
            </li>
            <li className="text-black text-lg">
              Remove any copyright or other proprietary notations from the
              materials; or transfer the materials to another person or “mirror”
              the materials on any other server.
            </li>
            <li className="text-black text-lg">
              Send, post or attempt to store or use the site to distribute
              malicious or harmful code or components designed to interfere or
              interrupt the software, hardware or telecommunications equipment
              associated with this site;
            </li>
            <li className="text-black text-lg">
              Use this site to post or publish any message or communication that
              is vulgar, indecent, pornographic, profane, sexually oriented,
              threatening, abusive, false or misleading, or which is slanderous,
              libelous or defamatory;
            </li>
            <li className="text-black text-lg">
              Use this site for any purpose that is unlawful or to carry out any
              activity that infringes on copyright, patent, trademark or other
              rights of any person or entity, or to solicit any illegal or other
              activity that contravenes the rights of Cayuga Hospitality
              Consultants or its members and affiliates.
            </li>
          </ul>

          <p className="text-lg text-black mt-5 font-medium">
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by Cayuga Hospitality
            Consultants sat any time. Upon terminating your viewing of these
            materials or upon the termination of this license, you must destroy
            any downloaded materials in your possession whether in electronic or
            printed format.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-black">3. Disclaimer</h2>
          <p className="text-lg text-black font-medium">
            The materials on Cayuga Hospitality Consultant’s website are
            provided without any representations or warranties, expressed or
            implied, including, without limitation, any representation or
            warranty of non-infringement of intellectual property or other
            violation of rights. Further, Cayuga Hospitality Consultants does
            not warrant or make any representations concerning the accuracy,
            likely results, or reliability of the use of the materials on its
            website or otherwise relating to such materials or on any sites
            linked to this site.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-black">4. Limitations</h2>
          <p className="text-lg text-black font-medium">
            In no event shall Cayuga Hospitality Consultants or its members be
            liable for any damages (including, without limitation, damages for
            loss of data or profit, or due to business interruption,) arising
            out of the use or inability to use the materials on Cayuga
            Hospitality Consultant’s website, even if Cayuga Hospitality
            Consultants or a member thereof has been notified orally or in
            writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-black">
            5. Revisions and Errata
          </h2>
          <p className="text-lg text-black font-medium">
            The materials appearing on Cayuga Hospitality Consultant’s website
            could include technical, typographical, or photographic errors.
            Cayuga Hospitality Consultants does not represent or warrant that
            any of the materials on its web site are accurate, complete, or
            current. Cayuga Hospitality Consultants may make changes to the
            materials contained on its web site at any time without notice.
            Cayuga Hospitality Consultants does not, however, make any
            commitment to update the materials.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-black">6. Links</h2>
          <p className="text-lg text-black font-medium">
            Cayuga Hospitality Consultants has not reviewed all of the sites
            linked to its website and is not responsible for the contents of any
            such linked sites. The inclusion of any link does not imply
            endorsement by Cayuga Hospitality Consultants of any site, and
            Cayuga Hospitality Consultants does not take responsibility for the
            accuracy, legality, copyright compliance or any other inclusions
            that are not under the control of Cayuga Hospitality Consultants.
            Use of any such linked web site is at the user’s own risk.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-black">7. Posting.</h2>
          <p className="text-lg text-black font-medium">
            If you are authorized to post on the website, you acknowledge and
            agree that any materials and information that you post are
            non-confidential, and any information that you post in any public
            areas of the site, including “Members Only” sections, may be seen
            and used by any users of the website. Cayuga Hospitality Consultants
            is not responsible for anyone’s misuse of the website or for any
            misappropriation of any information that you post on the website.
            You grant to Cayuga Hospitality Consultants a nonexclusive,
            irrevocable, unlimited, assignable, royalty-free right to use,
            without any further consent, notice and/or compensation to you or to
            any third parties (unless a payment is expressly set out in a
            separate specific written agreement between you and Cayuga
            Hospitality Consultants). Cayuga Hospitality Consultants right
            extend to allowance to copy, edit and improve, distribute, publish,
            remove, retain, use and manage for commercial purposes, in any way,
            any information you provide, directly or indirectly to the website
            or Cayuga Hospitality Consultants. If you have the right to post on
            this site, you represent and warrant to Cayuga Hospitality
            Consultants that you are the owner of or otherwise control the
            content, that it is accurate, not under confidentiality terms, and
            not in any violation of this or any other company’s contracts, law
            or rights. Cayuga Hospitality Consultants reserves the right to
            refuse to post any content or portion of that it deems to be in
            violation of these Terms and Conditions of Use or for any other
            reason. Cayuga Hospitality Consultants reserves the right to remove
            content at its own discretion and for any reason.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-black">
            8. Site Terms of Use Modifications
          </h2>
          <p className="text-lg text-black font-medium">
            Cayuga Hospitality Consultants may revise these terms of use for its
            website at any time without notice other than by posting the current
            version on its website. By using this website you are agreeing to be
            bound by the then current version of these Terms and Conditions of
            Use.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-black">9. Governing Law</h2>
          <p className="text-lg text-black font-medium">
            Any claim relating to Cayuga Hospitality Consultant’s web site shall
            be governed by the laws of the State of Florida without regard to
            its conflict of law provisions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default page;
