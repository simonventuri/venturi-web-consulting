"use client";

import { useState, useEffect } from "react";

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [hasConsented, setHasConsented] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie-consent");
        if (consent === null) {
            setShowBanner(true);
        } else if (consent === "accepted") {
            setHasConsented(true);
            enableGoogleAnalytics();
        }
    }, []);

    const enableGoogleAnalytics = () => {
        // Enable Google Analytics
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: "granted",
            });
        }
    };

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setShowBanner(false);
        setHasConsented(true);
        enableGoogleAnalytics();
    };

    const declineCookies = () => {
        localStorage.setItem("cookie-consent", "declined");
        setShowBanner(false);

        // Disable Google Analytics
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: "denied",
            });
        }
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-100 border-t border-neutral-200 p-4 z-50">
            <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                    <p className="text-sm text-neutral-700">
                        This website uses cookies to improve your experience and analyze website traffic.
                        By clicking "Accept", you consent to the use of cookies for analytics purposes.
                    </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                    <button
                        onClick={declineCookies}
                        className="badge border-neutral-300 hover:bg-neutral-200 text-sm"
                    >
                        Decline
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="badge hover:bg-neutral-200 text-sm"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}