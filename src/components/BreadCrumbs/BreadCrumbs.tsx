import React from "react";
import "./styles.scss";
import rightArrowIcon from "../../assets/icons/right-arrow.svg";

interface IBreadCrumbsProps {
  onFirstItemPress: () => void;
  firstItemText: string;
  firstItemIcon?: string;
  onSecondItemPress?: () => void;
  secondItemText?: string;
  secondItemIcon?: string;
  showSecondItem: boolean;
  thirdItemText?: string;
  thirdItemIcon?: string;
  showThirdItem?: boolean;
  onThirdItemPress?: () => void;
}

function BreadCrumbs(props: IBreadCrumbsProps) {
  return (
    <div className="breadcrumbs-container">
      <div className="breadcrumbs-item">
        {props.firstItemIcon ? (
          <img
            src={props.firstItemIcon}
            alt="home"
            onClick={props.onFirstItemPress}
            className="pointer"
          />
        ) : (
          <span onClick={props.onFirstItemPress} className="pointer">
            {props.firstItemText}
          </span>
        )}
      </div>

      {props.showSecondItem && (
        <>
          <img src={rightArrowIcon} alt="right-arrow" />
          <div className="breadcrumbs-item">
            {props.secondItemIcon ? (
              <img
                src={props.secondItemIcon}
                alt="second item"
                onClick={props.onSecondItemPress}
                className="pointer"
              />
            ) : (
              <span onClick={props.onSecondItemPress} className="pointer">
                {props.secondItemText}
              </span>
            )}
          </div>
        </>
      )}

      {props.showThirdItem && props.showSecondItem && (
        <>
          <img src={rightArrowIcon} alt="right-arrow" />
          <div className="breadcrumbs-item">
            {props.thirdItemIcon ? (
              <img
                src={props.thirdItemIcon}
                alt="third item"
                onClick={props.onThirdItemPress}
                className="pointer"
              />
            ) : (
              <span onClick={props.onThirdItemPress} className="pointer">
                {props.thirdItemText}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default BreadCrumbs;
