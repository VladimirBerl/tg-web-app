import {
  useGetPlanInfoQuery,
  useLazyGetUserQuery,
  useGetCountPostsByTypeQuery,
  useGetRanksListQuery,
} from "@/app/api";
import { useUser } from "@/app/context/UserContext";

export const useCheckAndCreateUser = () => {
  const [getUser] = useLazyGetUserQuery();
  const { setUser } = useUser();

  useGetCountPostsByTypeQuery();
  useGetRanksListQuery();
  useGetPlanInfoQuery();

  const checkAndCreateUser = async (id) => {
    try {
      const { data: user } = await getUser(id);
      if (user) {
        setUser(user);
        return false;
      } else {
        alert("Ошибка загрузки");
        return false;
      }
    } catch (error) {
      throw error;
    }
  };

  return checkAndCreateUser;
};
