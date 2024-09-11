import { useCreateUserMutation, useLazyGetUserQuery } from "@/app/api";
import { useUser } from "@/app/context/UserContext";

export const useCheckAndCreateUser = () => {
  const [createUser] = useCreateUserMutation();
  const [getUser] = useLazyGetUserQuery();
  const { setUser } = useUser();

  const checkAndCreateUser = async (body, users) => {
    try {
      const { data: user, error } = await getUser(body);
      if (error) {
        const createdUser = await createUser(users).unwrap();
        setUser(createdUser);
        console.log("User created successfully:", createdUser);
        return false;
      } else if (user) {
        setUser(user);
        console.log("User exists:", user);
        return false;
      }
    } catch (error) {
      console.log("Error:", error);
      throw error;
    }
  };

  return checkAndCreateUser;
};
