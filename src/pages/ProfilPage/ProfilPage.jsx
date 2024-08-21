import React from "react";
import ProfilUser from "./ui/ProfilUser/ProfilUser";
import ProfilInfo from "./ui/ProfilInfo/ProfilInfo";

const ProfilPage = () => {
  return (
    <div style={{marginBottom: '50px'}}>
      <ProfilUser />
      <ProfilInfo/>
    </div>
  );
};

export default ProfilPage;
