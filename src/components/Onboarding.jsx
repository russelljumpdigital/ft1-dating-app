import Login from "./Onboarding/Login";
import Register from "./Onboarding/Register";
import "./Onboarding/onboarding.css";
import { types } from "../redux/types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Onboarding = (props) => {
  const dispatch = useDispatch();
  const screen = useSelector((state) => state.onboarding.screen);

  return (
    <>
      <div>
        <nav className="onBoarding">
          <button
            className="btn btn-outline-dark"
            onClick={() =>
              dispatch({ type: types.SET_ONBOARDING_SCREEN, payload: 0 })
            }
          >
            Register
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() =>
              dispatch({ type: types.SET_ONBOARDING_SCREEN, payload: 1 })
            }
          >
            Log In
          </button>
        </nav>
        <div>
          {screen === 0 && (
            <Register newUserId={props.newUserId} setScreen={props.setScreen} />
          )}
        </div>
        <div>{screen === 1 && <Login />}</div>
      </div>
    </>
  );
};

export default Onboarding;
