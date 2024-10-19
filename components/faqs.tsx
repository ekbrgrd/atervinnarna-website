import Accordion from "@/components/utils/accordion";

interface FaqItem {
  title: string;
  content: string;
}

interface FaqsProps {
  faqs: FaqItem[];
}

export default function Faqs({ faqs }: FaqsProps) {
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-50">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-quicksand text-slate-800">Vanliga frågor</h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <Accordion key={index} title={faq.title}>
                {faq.content}
              </Accordion>
            ))}
            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul>
        </div>
      </div>
    </section>
  );
}
