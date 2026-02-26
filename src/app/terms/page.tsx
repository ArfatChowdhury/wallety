import Link from "next/link";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans">
            <header className="border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-500 text-lg rounded-md bg-blue-100 dark:bg-blue-900/30 p-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                        </svg>
                        Wallety
                    </Link>
                    <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                        Back to Home
                    </Link>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-6 py-12 sm:py-20 prose dark:prose-invert prose-slate">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4">Terms of Service</h1>
                <p className="text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        By accessing or using the Wallety mobile application and website (collectively, the "Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of Service</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        Wallety provides personal finance and expense tracking tools. The Service allows you to securely manage your financial data, categorize expenses, and sync your data across devices using Google OAuth for authentication.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">3. User Accounts and Authentication</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        To use certain features of the Service, you must sign in using your Google account (via Google OAuth 2.0). By doing so, you authorize Wallety to access basic profile information configured in your Google account. You are responsible for safeguarding the credentials you use to access Google and, consequently, our Service.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        You agree not to disclose your password or grant unauthorized access to your account to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">4. User Content</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        You retain all rights to the financial data and information you input into Wallety ("User Content"). By submitting User Content, you grant Wallety the right to store, process, and display this data solely for the purpose of providing the Service to you.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">5. Prohibited Conduct</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        You agree not to use the Service:
                    </p>
                    <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2 mb-4">
                        <li>For any unlawful purpose or to solicit others to perform or participate in any unlawful acts.</li>
                        <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others.</li>
                        <li>To submit false or misleading information.</li>
                        <li>To interfere with or circumvent the security features of the Service or any related website.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        In no event shall Wallety, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to Terms</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        If you have any questions about these Terms, please contact us at support@wallety.app.
                    </p>
                </section>
            </main>

            <footer className="border-t border-slate-200 dark:border-slate-800 mt-12 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
                <p>&copy; {new Date().getFullYear()} Wallety. All rights reserved.</p>
            </footer>
        </div>
    );
}
