import { permanentRedirect } from 'next/navigation';

/** Legacy URL — consolidated into /market-insights (GSC duplicate canonical fix). */
export default function ReportsPage() {
  permanentRedirect('/market-insights');
}
