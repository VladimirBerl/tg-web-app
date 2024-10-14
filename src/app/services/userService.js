import {
  useGetPlanInfoQuery,
  useCreateUserMutation,
  useLazyGetUserQuery,
  useGetCountPostsByTypeQuery,
  useGetRanksListQuery,
} from "@/app/api";
import { useUser } from "@/app/context/UserContext";

export const useCheckAndCreateUser = () => {
  const [createUser] = useCreateUserMutation();
  const [getUser] = useLazyGetUserQuery();
  const { setUser } = useUser();

  useGetCountPostsByTypeQuery();
  useGetRanksListQuery();
  useGetPlanInfoQuery();

  const checkAndCreateUser = async (id, users) => {
    try {
      const { data: user, error } = await getUser(id);
      if (error) {
        const createdUser = await createUser(users).unwrap();
        setUser(createdUser);
        return false;
      } else if (user) {
        setUser(user);
        return false;
      }
    } catch (error) {
      throw error;
    }
  };

  return checkAndCreateUser;
};
