import { useUser } from "@/app/context/UserContext";
import { Button } from "@/shared/ui/Buttom";
import { Link } from "react-router-dom";

const User = () => {
  const { user } = useUser();

  return (
    <Link to="profile">
      <Button showborder="true" padding="4px 5px" leftItem="/icon/user.svg">
        {user?.user_name.toUpperCase()}
      </Button>
    </Link>
  );
};

export default User;
