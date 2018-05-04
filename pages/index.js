import Head from 'next/head'

const colors = {
    green: '#27AE60',
    blue: '#1DA1F2',
    white: '#ffffff',
    gray: '#E6ECF0'
}

const PageHeader = () => {
    return (
        <section>
            <h1>The Open Tweet</h1>
            <style jsx>{`
                display: flex;
                justify-content: center;
                background: ${colors.blue};
                color: white;
                padding: 4px 0;
            `}</style>
        </section>
    )
}

const PageButton = () => {
    return (
        <button>
            <h1>Button</h1>
            <style jsx>{`
                display: flex;
                justify-content: center;
                background: ${colors.green};
                color: white;
            `}</style>
        </button>
    )
}

const PageBody = () => {
    return (
        <section>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel posuere libero, non euismod arcu. Quisque viverra sollicitudin nisl, in congue ante fermentum sed. Proin egestas libero sit amet dolor eleifend, et convallis leo mattis. Pellentesque rhoncus elementum posuere.
            </p>
            <style jsx>{`
                section {
                    background: ${colors.white};
                    padding: 16px;
                }
                p {
                    font-size: 22px;
                }
            `}</style>
        </section>
    )
}

const PageContent = () => {
    return (
        <div>
            <PageHeader />
            <PageBody />
            <PageButton />
            <style jsx>{`
                    max-width: 720px;
                    width: 100%;
                `}</style>
        </div>
    )
}

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet" />
                </Head>
                <PageContent />
                <style jsx>{`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    width: 100%;
                `}</style>
                <style jsx global>{`
                    html {
                        margin: 0;
                        padding: 0;
                    }
                    body {
                        font-family: 'Roboto';
                        background: ${colors.gray};
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }
                    p, h1, h2 {
                        margin: 0;
                        padding: 0;
                    }
                    section {
                        margin-bottom: 12px;
                    }
                    button {
                        margin: 0;
                        padding: 8px;
                        border: 0;
                        width: 100%;
                        font-family: 'roboto'
                    }
                `}</style>
            </div>
        )
    }
}