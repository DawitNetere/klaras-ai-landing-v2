import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface PrivacyPolicyProps {
  children: React.ReactNode;
}

const PrivacyPolicy = ({ children }: PrivacyPolicyProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[60vw] max-h-[85vh] p-0 bg-white rounded-xl border-0 shadow-2xl flex flex-col">
        <DialogHeader className="bg-white p-6 border-b border-gray-200 rounded-t-xl flex-shrink-0">
          <div>
            <DialogTitle className="text-2xl font-semibold text-blue-500 mb-2">
              Privacy Policy
            </DialogTitle>
            <p className="text-sm text-gray-500">
              Last updated: January 2025
            </p>
          </div>
        </DialogHeader>
        
        <div className="overflow-y-auto flex-1 p-6 space-y-6 text-sm leading-relaxed">
          <p className="text-gray-700">
            At Klaras AI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our analytics platform.
          </p>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect</h3>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Personal Information</h4>
              <ul className="space-y-1 text-gray-600 ml-4">
                <li>• Contact information (name, email address, phone number)</li>
                <li>• Company details (company name, job title, industry)</li>
                <li>• Account credentials and profile information</li>
                <li>• Communication preferences</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Usage Data</h4>
              <ul className="space-y-1 text-gray-600 ml-4">
                <li>• Analytics and performance data from your applications</li>
                <li>• Platform usage statistics and feature utilization</li>
                <li>• System logs and technical information</li>
                <li>• Device and browser information</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
            <ul className="space-y-1 text-gray-600 ml-4">
              <li>• Provide and maintain our analytics platform services</li>
              <li>• Generate insights and reports for your business metrics</li>
              <li>• Communicate with you about your account and our services</li>
              <li>• Improve and enhance our platform functionality</li>
              <li>• Ensure security and prevent fraudulent activities</li>
              <li>• Comply with legal obligations and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Information Sharing and Disclosure</h3>
            <p className="text-gray-700 mb-3">
              We do not sell, trade, or rent your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="space-y-1 text-gray-600 ml-4">
              <li>• <strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our platform</li>
              <li>• <strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
              <li>• <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
              <li>• <strong>Consent:</strong> When you explicitly authorize us to share information</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Security</h3>
            <p className="text-gray-700 mb-3">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="space-y-1 text-gray-600 ml-4">
              <li>• Encryption of data in transit and at rest</li>
              <li>• Regular security audits and vulnerability assessments</li>
              <li>• Access controls and authentication mechanisms</li>
              <li>• Secure cloud infrastructure and backup systems</li>
              <li>• Employee training on data protection practices</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Retention</h3>
            <p className="text-gray-700">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Data may be retained longer if required by law or for legitimate business purposes.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h3>
            <p className="text-gray-700 mb-3">
              You have the following rights regarding your personal information:
            </p>
            <ul className="space-y-1 text-gray-600 ml-4">
              <li>• <strong>Access:</strong> Request copies of your personal information</li>
              <li>• <strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
              <li>• <strong>Portability:</strong> Request transfer of your data to another service</li>
              <li>• <strong>Objection:</strong> Object to certain processing of your information</li>
              <li>• <strong>Withdrawal:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies and Tracking</h3>
            <p className="text-gray-700">
              We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">International Data Transfers</h3>
            <p className="text-gray-700">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Changes to This Policy</h3>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our platform and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Email:</strong> privacy@klaras.ai
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
