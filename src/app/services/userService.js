import { useCreateUserMutation, useLazyGetUserQuery } from "@/app/api";
import { useUser } from "@/app/context/UserContext";

export const useCheckAndCreateUser = () => {
  const [createUser] = useCreateUserMutation();
  const [getUser] = useLazyGetUserQuery();
  const { setUser } = useUser();

  const checkAndCreateUser = async (body) => {
    try {
      const { data: user, error } = await getUser(body.id_telegram);

      if (error && error.status === 404) {
        const createdUser = await createUser(body).unwrap();
        setUser(createdUser);
        console.log("User created successfully:", createdUser);
        return createdUser;
      } else if (user) {
        setUser(user);
        console.log("User exists:", user);
        return user;
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  return checkAndCreateUser;
};
