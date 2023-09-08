import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Eleusinia.net!
        </p>
        <a
          className="App-link"
          href="https://eleusisbook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Future Home of the Eleusinia Portal - Click to visit Eleusis Book!
        </a>
        </Card>
        <Button onClick={signOut}>Sign Out</Button>
    </View>  
  );
}

export default withAuthenticator(App);