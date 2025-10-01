export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Simon Venturi",
        "jobTitle": "Software Engineer & Web Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "Venturi Web Consulting"
        },
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "South Hams",
            "addressCountry": "UK"
        },
        "email": "simon@venturiwebconsulting.com",
        "url": "https://venturiwebconsulting.com",
        "sameAs": [
            "https://www.mvfglobal.com/"
        ],
        "knowsAbout": [
            "Web Development",
            "Software Engineering",
            "Next.js",
            "React",
            "Performance Optimization",
            "SEO"
        ],
        "alumniOf": {
            "@type": "Organization",
            "name": "MVF",
            "description": "Co-founder of MVF, fastest growing tech company in the UK in 2013"
        }
    };

    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Venturi Web Consulting",
        "url": "https://venturiwebconsulting.com",
        "founder": {
            "@type": "Person",
            "name": "Simon Venturi"
        },
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "South Hams",
            "addressCountry": "UK"
        },
        "email": "simon@venturiwebconsulting.com",
        "description": "Professional web development services specializing in clean, fast, pragmatic websites and applications.",
        "serviceType": [
            "Web Development",
            "Website Design",
            "Performance Optimization",
            "SEO Optimization",
            "Technical Consulting"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationData),
                }}
            />
        </>
    );
}