import Head from 'next/head'

const Meta = ({ title, description, keywords }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width,initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Devslopes 30-Day JavaScript Coding Challenge!',
    keywords: 'javascript, devslopes, challenge, web development',
    description: 'Devslopes 30-day JavaScript coding challenge'
}

export default Meta
