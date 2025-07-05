import "./styles.scss";
import rightArrowIcon from "../../icons/rightArrow.svg";
import React from "react";

export interface IBreadCrumbsProps {
  onFirstItemPress: () => void;
  firstItemText: string;
  firstItemIcon?: string;
  onSecondItemPress?: () => void;
  secondItemText?: string;
  secondItemIcon?: string;
  showSecondItem?: boolean;
  thirdItemText?: string;
  thirdItemIcon?: string;
  showThirdItem?: boolean;
  onThirdItemPress?: () => void;
}

// Add inline styles to ensure critical styling works even without CSS
const inlineStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    color: "#414651",
    fontWeight: 600,
    fontSize: "14px",
  },
  pointer: {
    cursor: "pointer",
  },
};

function BreadCrumbs(props: IBreadCrumbsProps) {
  return (
    <div className="breadcrumbs-container" style={inlineStyles.container}>
      <div className="breadcrumbs-item" style={inlineStyles.item}>
        {props.firstItemIcon ? (
          <img
            src={props.firstItemIcon}
            alt="home"
            onClick={props.onFirstItemPress}
            className="pointer"
            style={inlineStyles.pointer}
          />
        ) : (
          <span
            onClick={props.onFirstItemPress}
            className="pointer"
            style={inlineStyles.pointer}
          >
            {props.firstItemText}
          </span>
        )}
      </div>

      {props.showSecondItem && (
        <>
          <img src={rightArrowIcon} alt="right-arrow" />
          <div className="breadcrumbs-item" style={inlineStyles.item}>
            {props.secondItemIcon ? (
              <img
                src={props.secondItemIcon}
                alt="second item"
                onClick={props.onSecondItemPress}
                className="pointer"
                style={inlineStyles.pointer}
              />
            ) : (
              <span
                onClick={props.onSecondItemPress}
                className="pointer"
                style={inlineStyles.pointer}
              >
                {props.secondItemText}
              </span>
            )}
          </div>
        </>
      )}

      {props.showThirdItem && props.showSecondItem && (
        <>
          <img src={rightArrowIcon} alt="right-arrow" />
          <div className="breadcrumbs-item" style={inlineStyles.item}>
            {props.thirdItemIcon ? (
              <img
                src={props.thirdItemIcon}
                alt="third item"
                onClick={props.onThirdItemPress}
                className="pointer"
                style={inlineStyles.pointer}
              />
            ) : (
              <span
                onClick={props.onThirdItemPress}
                className="pointer"
                style={inlineStyles.pointer}
              >
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
