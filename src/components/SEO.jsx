import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
    title,
    description,
    name = 'Aiplonex Technologies',
    type = 'website',
    keywords,
    path = '',
    image = '/og-image.jpg',
    schema
}) {
    const siteUrl = 'https://aiplonex.com';
    const fullUrl = `${siteUrl}${path}`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title} | {name}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:site_name" content={name} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Schema.org Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
