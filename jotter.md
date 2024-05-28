The images used in this project are absolute so internet connect is needed 



Context steps follow what they have in w3schools, but then pay attention to some specific parts, expecially if you are passing more than one item

1. import { createContext, useContext } from "react";
2. export const DarkModeContext = createContext();
3. Wrap child components in the Context Provider and supply the state value, this value can actually be an object as against the single one that is on w3schools

Accessing the user Context in all components:
1. import the context
2. destructure the object and then make use of it..
