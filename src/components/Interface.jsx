import Onboarding from "./Onboarding";
import Matching from "./Matching";
import Search from "./Search";
import Messaging from "./messages/Messaging";
import { useState } from "react";

const Interface = (props) => {
  const [screen, setScreen] = useState(0);

  const onLogin = (payload) => {
    setScreen(1);
    //save the new user data
  };

  const onMessageUpdate = (payload) => {
    //do something useful
  };

  return (
    <>
      <nav>
        <button onClick={() => setScreen(0)}>Onboarding</button>
        <button onClick={() => setScreen(1)}>Matches</button>
        {/* <button onClick={() => setScreen(2)}>Search</button> */}
        <button onClick={() => setScreen(3)}>Messages</button>
      </nav>

      {screen === 0 && (
        <Onboarding
          onLogin={onLogin}

          addUser={props.addUser}
          newUserId={props.newUserId}
          setScreen={setScreen}
        />
      )}

      {screen === 1 && (
        <Matching onLikeUpdate={props.onLikeUpdate}  />
      )}


      {/* {screen === 2 && <Search users={props.users} />} */}


      {screen === 3 && (
        <Messaging
          messages={props.messages}
          onMessageUpdate={onMessageUpdate}
          addMessage={props.addMessage}
          blockUserId={props.blockUserId}
          deleteMessage={props.deleteMessage}
        />
      )}
    </>
  );
};

export default Interface;
