import { useEffect } from "react";

import MakeAccordion from "../components/page/make/MakeAccordion";

import useReset from "../hooks/useReset";

const MakePage = () => {
  const { resetState } = useReset();

  useEffect(() => {
    resetState();
  }, []);

  return <MakeAccordion />;
};

export default MakePage;
