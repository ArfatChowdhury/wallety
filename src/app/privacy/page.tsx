import Link from "next/link";

export default function PrivacyPolicy() {
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

            <main className="max-w-3xl mx-auto px-6 py-12 sm:py-20">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
                <p className="text-slate-500 mb-12 italic">Last updated: {lastUpdated}</p>

                <div className="space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
                        <p>
                            Welcome to <strong>Wallety - AI Budget Tracker</strong>. We respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes how we collect, use, and protect your information when you use our mobile application and website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
                        <div className="space-y-4">
                            <p><strong>Authentication Data:</strong> We use Google OAuth 2.0 for secure login. When you sign in, we receive your name, email address, and profile picture. This data is used solely to identify your account across devices.</p>

                            <p><strong>Financial Data:</strong> Any income, expense, budget, or transaction data you enter is stored locally on your device and synchronized to our secure **Firebase Firestore** cloud servers. This allows seamless data recovery and multi-device synchronization.</p>

                            <p><strong>OCR Data (Receipts):</strong> If you use our receipt scanning feature, your camera is used to capture images of receipts. We use **Tesseract.js** to process these images locally or on-device to extract text. We do not store your raw receipt images on our servers unless you explicitly choose to upload them.</p>

                            <p><strong>AI Analysis:</strong> To provide smart budget insights, your anonymized financial summaries may be processed by **Groq AI**. This data is used only to generate personalized savings advice and is not used to train global AI models.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Third-Party Services</h2>
                        <p className="mb-4">We integrate several trusted third-party services to enhance your experience:</p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Google AdMob:</strong> We show ads to support the free tier. AdMob may collect device-specific information (like advertising IDs) to show personalized or non-personalized ads.</li>
                            <li><strong>Firebase (by Google):</strong> We use Firebase for authentication, cloud database, and crash reporting to improve app stability.</li>
                            <li><strong>RevenueCat:</strong> Used to manage premium subscriptions and in-app purchases securely.</li>
                            <li><strong>Groq:</strong> Used for processing AI-driven financial insights.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Device Permissions</h2>
                        <p className="mb-4">The app may request the following permissions:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Camera:</strong> Required for scanning receipts to auto-log expenses.</li>
                            <li><strong>Notifications:</strong> Required for budget alerts, daily reminders, and smart insights.</li>
                            <li><strong>Storage:</strong> Required for exporting financial reports in PDF or CSV format.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Data Retention & Deletion</h2>
                        <p>
                            We retain your data as long as your account is active. You can delete all your data directly from the app settings, which will wipe both local storage and cloud database records. If you log out, your local cache is cleared, but your cloud data remains saved until you delete your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Security</h2>
                        <p>
                            We employ SSL/TLS encryption for all data transfers between your device and our servers. Your Google password is never seen or stored by us, as authentication is handled entirely by Google OAuth components.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this Privacy Policy, please contact us at:
                            <br />
                            <a href="mailto:support@wallety.app" className="text-blue-600 dark:text-blue-400 hover:underline">support@wallety.app</a>
                        </p>
                    </section>
                </div>
            </main>

            <footer className="border-t border-slate-200 dark:border-slate-800 mt-12 py-12 text-center text-sm text-slate-500 dark:text-slate-400">
                <div className="max-w-4xl mx-auto px-6">
                    <p>&copy; {new Date().getFullYear()} Wallety. Built with privacy in mind.</p>
                </div>
            </footer>
        </div>
    );
}
