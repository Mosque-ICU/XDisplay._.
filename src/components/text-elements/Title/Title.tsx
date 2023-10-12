import React from "react";
import { tremorTwMerge } from "lib";

import { getColorClassNames } from "lib";
import { Color } from "../../../lib";
import { colorPalette } from "lib/theme";

export interface TitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: Color;
}

const Title = React.forwardRef<HTMLParagraphElement, TitleProps>((props, ref) => {
  const { color, children, className, ...other } = props;
  return (
    <p
      ref={ref}
      className={tremorTwMerge(
        // common
        "font-medium text-tremor-title",
        color
          ? getColorClassNames(color, colorPalette.darkText).textColor
          : "text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis",
        className,
      )}
      {...other}
    >
      {children}
    </p>
  );
});

Title.displayName = "Title";

export default Title;