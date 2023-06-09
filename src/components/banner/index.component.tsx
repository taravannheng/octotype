import { FC, Fragment, useContext } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ThemeContext from "../../contexts/theme-context";

interface BannerProps {
  bannerStyle?: string;
  iconStyle?: string;
  titleTextStyle?: string;
  descriptionTextStyle?: string;
  closeIconStyle?: string;
  iconSrc?: IconProp;
  closeIconSrc?: IconProp;
  titleText?: string;
  descriptionText: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Banner: FC<BannerProps> = ({
  bannerStyle,
  iconStyle,
  titleTextStyle,
  descriptionTextStyle,
  closeIconStyle,
  iconSrc,
  closeIconSrc,
  titleText,
  descriptionText,
  isOpen,
  setIsOpen
}) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      {isOpen && (
        <div className={`banner flex flex-row relative p-4 relative w-full rounded-[1rem] ${isDarkTheme ? 'bg-dark-dark' : 'bg-light-white'} ${bannerStyle}`}>
          {iconSrc && (
            <FontAwesomeIcon
              icon={iconSrc}
              className={`banner__icon h-[12px] w-[12px] min-w-[12px] max-w-[12px] max-h-[12px] min-h-[12px] p-2 rounded-full mr-4 ${iconStyle}`}
            />
          )}
          <div className="banner__text">
            {titleText && (
              <h1 className={`banner__text-title text-h4 text-dark-darkest mb-2 ${titleTextStyle}`}>
                {titleText}
              </h1>
            )}
            <p className={`banner__text-description text-body ${isDarkTheme ? 'text-dark-white' : 'text-light-darkest'} ${descriptionTextStyle}`}>
              {descriptionText}
            </p>
          </div>
          {closeIconSrc && (
            <FontAwesomeIcon
              icon={closeIconSrc}
              className={`banner__icon h-[16px] w-[16px] min-w-[16px] max-w-[16px] max-h-[16px] min-h-[16px] absolute right-2 top-2 text-dark-darkest cursor-pointer ${closeIconStyle}`}
              onClick={closeHandler}
            />
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Banner;
