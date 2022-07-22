import React from "react";
import { configureAnchors } from "react-scrollable-anchor";

import {
  // SaibaMais,

  Topo,
  Reservar,
  BarraTopo,
  Line,
  Video,
  Biografia,
  Footer,
} from "../../components";

const Home_Page = () => {
  configureAnchors({ offset: -60, scrollDuration: 2000 });

  return (
    <div>
      {/* <SaibaMais /> */}


      <Topo />
      {/* <BarraTopo /> */}
       <Reservar />
       <Line />
       {/* <Video />
      <Biografia /> */}
      <Footer /> 
    </div>
  );
};

export default Home_Page;
