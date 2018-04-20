import React from "react";
import { Image, Header, Container, Divider, Icon, Grid, Segment, List, Button } from "semantic-ui-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Web3 from "web3";

const web3 = new Web3("https://open-private.herokuapp.com/");


class About extends React.Component {

  state = {
    accountList: [],
    shown: false
  }

  showAccount = () => {
    this.setState({shown: true})
    web3.eth.getAccounts().then(res => {
      res.forEach(i => {
        web3.eth.getBalance(i).then(bal =>{
          this.setState({accountList : [ ...this.state.accountList, {account: i, balance: web3.utils.fromWei(bal, "ether")} ]})
        })
      })
    })
  }


  render() {
    const { accountList, shown } = this.state

    return (
      <div>
        <NavBar active="about" fixed={true} />
        <div style={{ padding: "6em 0" }}>
          <Container textAlign="center">
            <Header style={{ color: "#2b5fa7" }} as="h1" textAlign="left">
              HOW IT WORKS
            </Header>
            <Divider hidden />
            <Container>
              <Grid textAlign="justified">
                <Grid.Row>
                  <Grid.Column width={3} />
                  <Grid.Column width={10}>
                    <Image rounded centered src="/static/images/Diagram.png" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} />
                  <Grid.Column width={12}>
                    <Header>Ideas Behind The Scene</Header>
                    <p>
                      {`Blockchain is added in EtherFund in between Client and
                        Server, as a single source of truth.`}
                    </p>
                    <p>
                      {`Compared to the traditional Client-Server model, EtherFund
                        added Blockchain as a middleman, who is responsible for
                        provide only truthy data to both client and server.`}
                    </p>
                    <p>
                      {`For Client, when user create a campaign, client create a new smart contract deployed to blockchain. The contract has an unique address associated with the campaign ID. When users interact with the blockchain, they are actually calling the methods within the smart contract. So EtherFund doesn't hold the raised amount. It's saved in blockchain smart contract, which is transparent, decentralized and immutable.`}
                    </p>
                    <p>
                      {`The main difference is on the server side. With Blockchain, clients don't send the all the data to server any more. Instead, Clients just let Server know there is a new block generated by user's request. Then server syncs with Blockchain directly to figure out what has been updated. Then update the database and send the info back to client to update the view.`}
                    </p>
                    <p>
                      {`In this way, the application can prevent from any client attack to manipulate the database and keep both client and server to deliver the always true info.`}
                    </p>
                    <Header>How to test this application?</Header>
                    <Segment.Group>
                      <Segment>
                        <Header as="h4">1. Add a Blockchain Interface</Header>
                        <p>
                          Add MetaMask Chrome extension for accessing Ethereum
                          enabled distributed application. Here is chrome extension
                          link:{" "}
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                          >
                            LINK
                          </a>
                        </p>
                        <p>
                          Here is an intro about MetaMask from ConsenSys:{" "}
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://media.consensys.net/metamask-brings-ethereum-to-your-browser-a327f87c47ce"
                          >
                            MetaMask Brings Ethereum to Your Browser
                          </a>
                        </p>
                      </Segment>
                      <Segment>
                        <Header as="h4">2. Connect to test network</Header>
                        <p>
                          For testing purpose, EtherFund Server is connected to a
                          private blockchain. It is a homemade Blockchain using
                          Ganache-cli.
                        </p>
                        <p>
                          In MetaMask, setup Custom RPC with the following URL
                          address:
                        </p>
                        <strong>https://open-private.herokuapp.com/</strong>{"     "}
                        <CopyToClipboard text={"https://open-private.herokuapp.com/"}>
                          <Button compact size="tiny">Copy the link</Button>
                        </CopyToClipboard>
                      </Segment>
                      <Segment>
                        <Header as="h4">3. Import the Private Key to test EtherFund blockchain Dapp.</Header>
                        <p><strong>Please note: Never share your private key in real life.</strong></p>
                        <p>But we would like to share one private key for FREE so you can test the application!</p>
                        <p>Import a new account by pasting the private key below. And you can see your balance.</p>
                        <CopyToClipboard text={"4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d"}>
                          <Button compact size="tiny">Copy private key</Button>
                        </CopyToClipboard>
                      </Segment>
                      <Segment>
                        <Header as="h4">4. Check Available Accounts</Header>
                        <p>Use one of the following accounts as receipient or beneficiary for testing.</p>
                        <p>You can check the balance for all accounts here:</p>
                        <p><strong>TEST MODE:</strong></p>
                        <Button compact size="tiny" onClick={shown ? null : this.showAccount}>Show Accounts</Button>
                        <List celled>
                          {accountList.map(item => (
                            <List.Item>
                              <List.Content floated='right'>
                                {item.balance} ETH
                              </List.Content>
                              <List.Content>
                                {item.account}
                              </List.Content>
                            </List.Item>
                          ))}
                        </List>
                      </Segment>
                    </Segment.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
            <Divider section hidden />
            <Header style={{ color: "#2b5fa7" }} as="h1" textAlign="left">
              ABOUT ME
            </Header>
            <Header as="h2" textAlign="left">
              <Image
                circular
                src="https://avatars0.githubusercontent.com/u/9433422?s=460&v=4"
              />{" "}
              Chen Li
              <Header.Subheader style={{ padding: "1em 0" }}>
                A Full-Stack Engineer - Javascript, NodeJS, React/Redux, Blockchain
              </Header.Subheader>
            </Header>
            <Grid columns={10}>
              <Grid.Row>
                <Grid.Column>
                  <Header as="h2" icon>
                    <a
                      className="ic"
                      href="https://github.com/lichen777"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="github square" />
                    </a>
                  </Header>
                </Grid.Column>
                <Grid.Column>
                  <Header as="h2" icon>
                    <a
                      className="ic"
                      href="https://www.linkedin.com/in/chenli777/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="linkedin square" />
                    </a>
                  </Header>
                </Grid.Column>
                <Grid.Column>
                  <Header as="h2" icon>
                    <a className="ic" href="mailto:lchen139@gmail.com">
                      <Icon name="mail square" />
                    </a>
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        <Footer fixed={false} />
      </div>
    );
  }
}

export default About;
