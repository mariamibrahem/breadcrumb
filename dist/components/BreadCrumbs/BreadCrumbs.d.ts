import "./styles.scss";
export interface IBreadCrumbsProps {
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
declare function BreadCrumbs(props: IBreadCrumbsProps): import("react/jsx-runtime").JSX.Element;
export default BreadCrumbs;
