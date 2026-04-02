import Link from "next/link";

export default function TermsOfService() {
    const lastUpdated = "April 2, 2026";

    return (
        <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans">
            <header className="border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-10">
                <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
                        <div className="bg-blue-600 text-white p-1 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                            </svg>
                        </div>
                        Wallety
                    </Link>
                    <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                        Back to Home
                    </Link>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-6 py-12 sm:py-20 font-sans">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4">Terms of Service</h1>
                <p className="text-slate-500 mb-12 italic">Last updated: {lastUpdated}</p>

                <div className="space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accesssing or using the <strong>Wallety</strong> mobile application and website (collectively, the "Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Description of Service</h2>
                        <p>
                            Wallety provides an AI-powered financial tracking platform. Features include manual expense entry, receipt scanning (OCR), automated budget alerts, and AI-driven financial insights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Premium Subscriptions & Billing</h2>
                        <p className="mb-4">We offer a "Premium" version of Wallety via in-app purchases managed through **RevenueCat**. By subscribing, you agree to the following:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Payments are processed by the Apple App Store or Google Play Store.</li>
                            <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.</li>
                            <li>You can manage and cancel your subscription in your device's account settings.</li>
                            <li>Refunds are subject to the policies of the respective App Stores.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. AI Insights & Accuracy</h2>
                        <p>
                            Wallety uses artificial intelligence (powered by services like **Groq**) to provide financial suggestions. While we strive for accuracy, AI-generated insights are for informational purposes only and do not constitute professional financial advice. Wallety is not responsible for any financial decisions made based on these insights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. User Data & Security</h2>
                        <p>
                            Users are responsible for maintaining the security of their Google accounts used for login. We use industry-standard encryption, but you acknowledge that no transmission over the internet or cloud storage is 100% secure. You are responsible for all activity that occurs under your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Prohibited Content</h2>
                        <p>
                            You may not use the Service for any illegal purposes or to upload fraudulent receipt data. We reserve the right to terminate accounts that engage in system abuse or attempt to circumvent our security measures.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Limitation of Liability</h2>
                        <p>
                            Wallety is provided "as is" without warranty of any kind. We are not liable for any financial losses, data corruption, or service interruptions that may occur during the use of our app.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Termination</h2>
                        <p>
                            We reserve the right to terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Contact Us</h2>
                        <p>
                            Questions about the Terms of Service should be sent to us at:
                            <br />
                            <a href="mailto:limnersapp@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">limnersapp@gmail.com</a>
                        </p>
                    </section>
                </div>
            </main>

            <footer className="border-t border-slate-200 dark:border-slate-800 mt-12 py-12 text-center text-sm text-slate-500 dark:text-slate-400">
                <p>&copy; {new Date().getFullYear()} Wallety. Built to empower your finances.</p>
            </footer>
        </div>
    );
}
