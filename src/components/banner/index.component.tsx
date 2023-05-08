import { FC, useState, Fragment } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      {isOpen && (
        <div className={`banner ${bannerStyle}`}>
          {iconSrc && (
            <FontAwesomeIcon
              icon={iconSrc}
              className={`banner__icon h-[16px] w-[16px] ${iconStyle}`}
            />
          )}
          <div className="banner__text">
            {titleText && (
              <h1 className={`banner__text-title ${titleTextStyle}`}>
                {titleText}
              </h1>
            )}
            <p className={`banner__text-description ${descriptionTextStyle}`}>
              {descriptionText}
            </p>
          </div>
          {closeIconSrc && (
            <FontAwesomeIcon
              icon={closeIconSrc}
              className={`banner__icon h-[16px] w-[16px] ${closeIconStyle}`}
              onClick={closeHandler}
            />
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Banner;
