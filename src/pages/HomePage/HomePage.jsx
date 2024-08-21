import HomeIphone from "./ui/HomeIphone/HomeIphone";
import HomeShope from "./ui/HomeShope/HomeShope";
import HomeMain from "./ui/HomeMain/HomeMain";

// import { useCreateUserMutation, useGetUserQuery } from "@/app/api";
// import { useEffect } from "react";
// const user = {
//   id_telegram: 553,
//   user_name: "test",
// };
export default function HomePage() {
  // const [createUser, { isError }] = useCreateUserMutation();
  // const { data, error, isLoading } = useGetUserQuery(553);
  // const handleCreatUser = async (user) => {
  //   await createUser(user).unwrap();
  //   console.log(isError);
  // };

  // useEffect(() => {
  //   if (error) {
  //     handleCreatUser(user);
  //     console.log(error);
  //   }
  // }, [isLoading]);

  return (
    <>
      <HomeIphone />
      <HomeShope />
      <HomeMain />
    </>
  );
}
