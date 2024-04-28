import viteLogo from '/vite.svg'
import "./App.css"
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
    <div slot="confirm-sign-up" style={{ textAlign: 'center' }}>
    <View className="App">
      <Card>
        <Image src={viteLogo} className="App-logo" alt="logo" />
        <Heading level={1}>Welcome to React application using AWS Amplify!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
    </div>
  );
}

export default withAuthenticator(App);

