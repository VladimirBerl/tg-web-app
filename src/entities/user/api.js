import { useChangeUserCountMutation } from "@/app/api";
import { useUser } from "@/app/context/UserContext";

export const useUpdateUserCoins = () => {
  const { user } = useUser();
  const [changeUserCount] = useChangeUserCountMutation();

  const updateCoins = async (amount, description) => {
    try {
      await changeUserCount({
        id: user.id_telegram,
        body: {
          amount,
          description,
          add: true,
        },
      }).unwrap();
    } catch (error) {
      console.error("Failed to update tokens:", error);
      throw error;
    }
  };

  return { updateCoins, user };
};
