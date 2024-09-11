import { Button } from "@/shared/ui/Buttom";
import { Link } from "react-router-dom";
const Cub = () => {
  return (
    <Link to="rank">
      <Button padding="4px" showborder="true" leftItem="/icon/cup.svg"></Button>
    </Link>
  );
};

export default Cub;
