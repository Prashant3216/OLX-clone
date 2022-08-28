import {
  Button,
  Container,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Show,
  Stack,
  Text,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, EmailIcon } from "@chakra-ui/icons";
import { loginShadow, shadow } from "../Theme/theme.config";
import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { postSignup } from "../utilities/api";
import { AppContext } from "../ContextAPI/ContextProvider";
import {
  LOGIN_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../ContextAPI/Actions";

export const initForm = {
  email: "",
  password: "",
  number: "",
};

export function Signup() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState();
  const { state, dispatch } = useContext(AppContext);
  const Navigate = useNavigate();
    const [inputDisableToggle, setInputDisableToggle] = useState("");
  let handlePasswordShow = () => {
    setShow(!show);
  };

  let handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  let handleSignup = () => {
    dispatch(SIGNUP_REQUEST);
    postSignup(form)
      .then((res) => {
        console.log(res);
        dispatch(SIGNUP_SUCCESS);
        alert("Signup Successfull! Please login");
        form.email && Navigate("/login_with_email");
        form.number && Navigate("/login_with_phone");
      })
      .catch((err) => {
        dispatch(SIGNUP_FAILURE);
        console.log(err);
      });
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
          <Text align={"center"}>Enter Email or Phone for SignUp</Text>
          <InputGroup>
            <InputLeftAddon
              children={<EmailIcon color="secondary" />}
              bg="primary"
            />
            <Input
              onChange={handleChange}
              name="email"
                onFocus={() => {
                  setInputDisableToggle("email");
                }}
                disabled={inputDisableToggle === "number"}
              type="email"
              placeholder="Enter Email"
              focusBorderColor="searchBorder"
              bg="white"
            />
          </InputGroup>
          <Text align={"center"}>OR</Text>
          <InputGroup>
            <InputLeftAddon
              children={<PhoneIcon color="secondary" />}
              bg="primary"
            />
            <Input
              onChange={handleChange}
              name="number"
              type="number"
                onFocus={() => {
                  setInputDisableToggle("number");
                }}
                disabled={inputDisableToggle === "email"}
              placeholder="Enter Number"
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
            onClick={handleSignup}
            bg="secondary"
            color="white"
            _hover={{ bg: "searchBorder", color: "black" }}
          >
            {state.isLoading ? <Spinner /> : "SignUp"}
          </Button>
          {state.isError && (
            <Text color="red">somethng went wrong plaese try again</Text>
          )}
        </Stack>
      </Container>
    </>
  );
}
