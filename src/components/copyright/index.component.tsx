import { FC } from "react";

interface CopyrightProps {
  copyrightStyle?: string;
  copyrightTextStyle?: string;
}

const Copyright: FC<CopyrightProps> = ({
  copyrightStyle = "",
  copyrightTextStyle = "",
}) => {
  return (
    <p className={`copyright text-caption text-light text-center min-w-full ${copyrightStyle}`}>
      <span className={`copyright__text ${copyrightTextStyle}`}>
        Copyright · {new Date().getFullYear()}
      </span>
    </p>
  );
};

export default Copyright;
