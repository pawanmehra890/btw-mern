import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import "../Cssfiles/authbackground.css";
import { useFormik } from "formik";
import { SignInSchema } from "../Schemavalidation/SignInSchema";
import { useDispatch, useSelector } from "react-redux";
import { signinRequest } from "../action/Authaction";

const initialValues = {
  useremail: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // console.log(data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignInSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const handleSignup = (values) => {
    dispatch(signinRequest(values));
  };

  // const handleSignup = async (values) => {
  //   try {
  //     const response = await dispatch(signinRequest(values));
  //     if (response.status === "success") {
  //       navigate("/");
  //     } else {
  //       throw new Error("Incorrect password");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     // Show the error to the user, for example using an alert:
  //     alert(error.message);
  //   }
  // };
  return (
    <>
      <div className="area">
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack
            spacing={8}
            mx={"auto"}
            maxW={"lg"}
            py={12}
            px={6}
            zIndex={"9999"}
          >
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                We are happy here to see you
                <Link color={"blue.400"}> Explore what's new</Link> ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <form onSubmit={handleSubmit}>
                  <FormControl
                    id="email"
                    isInvalid={errors.useremail && touched.useremail}
                  >
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      name="useremail"
                      value={values.useremail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.useremail && touched.useremail ? (
                      <FormErrorMessage>{errors.useremail}</FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl
                    id="password"
                    isInvalid={errors.password && touched.password}
                  >
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    {errors.password && touched.password ? (
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <NavLink to="/forgotpassword" color={"#0e5176"}>
                        Forgot password?
                      </NavLink>
                    </Stack>
                    <Button
                      bg={"#0e5176"}
                      color={"white"}
                      _hover={{
                        bg: "#0e5176",
                      }}
                      type="submit"
                      onClick={() => handleSignup(values)}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </form>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Dont have a account yet?{" "}
                  <NavLink to="/register" color={"#0e5176"}>
                    Register now
                  </NavLink>
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Login;
