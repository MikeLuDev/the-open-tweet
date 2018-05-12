import Head from 'next/head'

const colors = {
    green: '#27AE60',
    blue: '#1DA1F2',
    white: '#ffffff',
    gray: '#E6ECF0'
}

const currentTweet = "The Open Tweet is a web app for crowd sourcing tweets from the online community. Click the button below and you'll have the opportunity to edit one of the 280 characters contained in this tweet. Please try to be respectful. Just kidding - be as vulgar as you want and have fun! :)";

const PageHeader = () => {
    return (
        <section>
            <h1>The Open Tweet</h1>
            <h2>Sends in 4:29</h2>
            <style jsx>{`
                section {
                    margin: 12px;
                    padding: 8px 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background: ${colors.blue};
                    color: white;
                }
            `}</style>
        </section>
    )
}

const PageButton = ({ handleButtonClick, text }) => {
    return (
        <button onClick={handleButtonClick}>
            {text}
            <style jsx>{`
                button {
                    margin: 12px;
                    display: flex;
                    justify-content: center;
                    background: ${colors.green};
                    color: white;
                }
            `}</style>
        </button>
    )
}

class EditContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit_character: 0,
        }
    }

    render() {
        return (
            <section>

            </section>
        )
    }
}

const LandingBody = ({ tweet }) => {
    return (
        <section>
            <div>
                <img src="https://via.placeholder.com/64x64" />
                <a href="https://www.twitter.com/theOpenTweet" target="_blank" rel="noopener">@theOpenTweet</a>
            </div>
            <p>{tweet}</p>
            <style jsx>{`
                section {
                    background: ${colors.white};
                    padding: 16px;
                    flex-grow: 1;
                    margin: 0 12px;
                }
                a {
                    font-size: 20px;
                }
                p {
                    font-size: 18px;
                }
                img {
                    border-radius: 50%;
                    max-width: 48px;
                    margin-right: 12px;
                }
                div {
                    display: flex;
                    align-items: center;
                    margin-bottom: 12px;
                }
            `}</style>
        </section>
    )
}

class PageContent extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.kAppStages = {
            0: 'landing',
            1: 'editing'
        }
        this.state = {
            stage: this.kAppStages[0],
            button_text: 'Edit Tweet',
            tweet: currentTweet,
        }
    }

    handleButtonClick() {
        const currentStage = this.state.stage;
        if (currentStage == this.kAppStages[0]) {
            this.setState({
                stage: this.kAppStages[1]
            })
        } else if (currentStage == this.kAppStages[1]) {
            this.setState({
                stage: this.kAppStages[0]
            })
        }
        console.log(this.state.stage);
    }

    render() {
        return (
            <div>
                <PageHeader />
                <LandingBody tweet={this.state.tweet} />
                <PageButton
                    text={this.state.button_text}
                    handleButtonClick={this.handleButtonClick} />
                <style jsx>{`
                div {
                    max-width: 720px;
                    max-height: 720px;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 100vh;
                }
                `}</style>
            </div>
        )
    }

}

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet" />
                </Head>
                <PageContent />
                <style jsx>{`
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
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        width: 100vw;
                    }
                    p, h1, h2 {
                        margin: 0;
                        padding: 0;
                    }
                    button {
                        margin: 0;
                        padding: 8px;
                        border: 0;
                        font-family: 'roboto';
                        font-size: 20px;
                    }
                    a {
                        color: ${colors.blue};
                        text-decoration: none;
                    }
                    h2 {
                        font-size: 21px;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}