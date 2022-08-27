import {
  Button,
  Container,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Stack,
  Text,
  VStack,
  Spinner
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, EmailIcon } from "@chakra-ui/icons";
import { loginShadow, shadow } from "../Theme/theme.config";
import { useState,useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getRequest } from "../utilities/api";
import { AppContext } from "../ContextAPI/ContextProvider";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../ContextAPI/Actions";

export const initForm = {
  email: "",
  password: "",
};

export function LoginWithEmail() {
  const [form, setForm] = useState(initForm);
  const [show, setShow] = useState(false);
  const {state, dispatch}=useContext(AppContext)
  const Navigate=useNavigate()

  let handlePasswordShow = () => {
    setShow(!show);
  };

  let handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  let AuthLogin = () => {
    dispatch(LOGIN_REQUEST)
    getRequest("posts")
      .then((res) => {
        let authData=res.data.filter(item=>(item.email===form.email && item.password===form.password))
        authData ? dispatch(LOGIN_SUCCESS):dispatch(LOGIN_FAILURE)
        alert("Logged in Successfully")
        authData && Navigate("/")
      })
      .catch((err) => {console.log(err)
        dispatch(LOGIN_FAILURE)});
  };


  return (
    <>
      <Container
        w={450}
        m="200px auto"
        p={30}
        borderRadius={5}
        boxShadow={loginShadow}
        bg="#f3f0fa"
        fontFamily="texttype"
      >
        <Stack>
          <Text align={"center"}>Enter your email id to login </Text>
          <InputGroup>
            <InputLeftAddon
              children={<EmailIcon color="secondary" />}
              bg="primary"
            />
            <Input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter Email"
              focusBorderColor="searchBorder"
              bg="white"
            />
          </InputGroup>
          <InputGroup>
            <InputRightElement w="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                bg="transparent"
                onClick={handlePasswordShow}
              >
                {show ? "HIDE" : "SHOW"}
              </Button>
            </InputRightElement>
            <Input
              onChange={handleChange}
              name="password"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              focusBorderColor="searchBorder"
              bg="white"
            />
          </InputGroup>

          <Button
            onClick={AuthLogin}
            bg="secondary"
            color="white"
            _hover={{ bg: "searchBorder", color: "black" }}
          >
            {state.isLoading ? <Spinner /> : "Login"}
          </Button>
          {state.isError && <Text color="red">Incorrect Email or Password</Text>}
          <Text>
            No Account?{" "}
            <NavLink
              to="signup"
              style={(isActive) => ({
                color: isActive ? "purple" : "blue",
              })}
            >
              Create Account
            </NavLink>
          </Text>
        </Stack>
      </Container>
    </>
  );
}
