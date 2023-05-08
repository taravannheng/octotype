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
        <div className={`banner flex flex-row relative bg-neutral-light p-4 relative w-full rounded ${bannerStyle}`}>
          {iconSrc && (
            <FontAwesomeIcon
              icon={iconSrc}
              className={`banner__icon h-[12px] w-[12px] bg-neutral-grey-2 text-neutral-dark p-2 rounded-full mr-4 ${iconStyle}`}
            />
          )}
          <div className="banner__text">
            {titleText && (
              <h1 className={`banner__text-title text-h4 text-neutral-dark mb-2 ${titleTextStyle}`}>
                {titleText}
              </h1>
            )}
            <p className={`banner__text-description text-body text-neutral-dark ${descriptionTextStyle}`}>
              {descriptionText}
            </p>
          </div>
          {closeIconSrc && (
            <FontAwesomeIcon
              icon={closeIconSrc}
              className={`banner__icon h-[16px] w-[16px] absolute right-2 top-2 text-neutral-dark cursor-pointer ${closeIconStyle}`}
              onClick={closeHandler}
            />
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Banner;
