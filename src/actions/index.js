import users from "../test/users";

export const loginUser = (user) => {
  const matchingUser = users.find(
    (u) => u.email === user.email && u.password === user.password
  );

  if (matchingUser) {
    return {
      type: "LOGIN",
      payload: matchingUser,
    };
  } else {
    return {
      type: "LOGIN_ERROR",
      payload: "Invalid email or password",
    };
  }
};
