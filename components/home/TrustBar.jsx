import { ShieldCheck, Users, Clock, HeartPulse } from "lucide-react";
const items = [
  { icon: HeartPulse, label: "Medical & dental focus", note: "Expertise that fits your practice" },
  { icon: Users, label: "Dedicated billing team", note: "People who know your workflow" },
  { icon: Clock, label: "Consistent claim follow-up", note: "Attention from start to finish" },
  { icon: ShieldCheck, label: "HIPAA-minded data handling", note: "Care for sensitive information" },
];
export default function TrustBar() {
  return <section className="trust-bar"><div className="container-px mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">{items.map(({icon: Icon, label, note}) => <div key={label} className="trust-item"><Icon size={23} strokeWidth={1.5} /><div><h2>{label}</h2><p>{note}</p></div></div>)}</div></section>;
}
