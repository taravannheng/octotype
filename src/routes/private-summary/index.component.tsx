import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import TimerContext from "../../contexts/timer-context";
import { ROUTES } from "../../utils/constants";

const SummaryPagePrivate: FC = () => {
  const { timer } = useContext(TimerContext);

  return (timer === 0) ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.LANDING} />
  );
};

export default SummaryPagePrivate;
