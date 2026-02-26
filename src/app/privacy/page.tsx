import Link from "next/link";

export default function PrivacyPolicy() {
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
                <h1 className="text-4xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
                <p className="text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        Welcome to Wallety. We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, and protect your information when you use our mobile application and website.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        <strong>Google OAuth Data:</strong> To provide a seamless and secure experience, Wallety uses Google OAuth 2.0 for single sign-on (SSO). When you sign in using Google, we access basic profile information including:
                    </p>
                    <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2 mb-4">
                        <li>Your name</li>
                        <li>Your primary email address</li>
                        <li>Your profile picture (if available)</li>
                    </ul>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        We use this information exclusively to create and manage your Wallety account and to personalize your experience. We do not access, read, or manage your Google Drive files, Gmail, or any other sensitive Google services.
                    </p>

                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        <strong>Expense Data:</strong> Any financial data (transactions, categories, budgets) you enter into Wallety is stored securely in our cloud infrastructure to ensure your data syncs across devices.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        We use the collected information for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2 mb-4">
                        <li>To authenticate you into the app securely via Google SSO.</li>
                        <li>To synchronize your personal expense tracking data.</li>
                        <li>To communicate with you regarding updates, security alerts, and support messages.</li>
                        <li>To improve our application and develop new features.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Sharing and Disclosure</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        Wallety does <strong>not</strong> sell, rent, or trade your personal information to third parties. We may share information only in the following limited situations:
                    </p>
                    <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2 mb-4">
                        <li>To comply with legal obligations or requests from public authorities.</li>
                        <li>To enforce our Terms of Service.</li>
                        <li>With trusted cloud infrastructure providers who host our servers and database securely.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">5. Security of Your Information</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        We implement industry-standard security measures, including encryption in transit and at rest, to protect your personal and financial information. By relying on Google OAuth, we ensure that your account passwords are never stored or managed by Wallety.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        If you have any questions or concerns about this Privacy Policy, please contact us at support@wallety.app.
                    </p>
                </section>
            </main>

            <footer className="border-t border-slate-200 dark:border-slate-800 mt-12 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
                <p>&copy; {new Date().getFullYear()} Wallety. All rights reserved.</p>
            </footer>
        </div>
    );
}
