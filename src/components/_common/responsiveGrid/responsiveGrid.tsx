import React from 'react';
import commonReactComponentProps from '../../../typescript/commonReactComponentProps';

type Props = {
  mobile: number,
  tablet: number,
  desktop: number,
} & commonReactComponentProps

export default function ResponsiveGrid(props) {
  const { children } = props;
  return (
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
  );
}

ResponsiveGrid.Column = (props: Props) => {
  const {
    children,
    mobile,
    tablet,
    desktop,
  } = props;
  return (
    <div className={` col-sm-${mobile.toString()} col-md-${tablet.toString()} col-lg-${desktop.toString()}`}>
      {children}
    </div>
  );
};
