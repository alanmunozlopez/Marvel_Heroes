import { StackNavigator } from 'react-navigation';
import SignIn from '../unauthenticated-routes/sign-in';
import SignUp from '../unauthenticated-routes/sign-up';

const Unauthenticated = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    headerMode: 'none',
  },
);

export default Unauthenticated;
