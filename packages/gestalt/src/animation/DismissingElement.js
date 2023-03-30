// @flow strict
import { Fragment, type Node } from 'react';
import { useAnimation } from './AnimationContext.js';

type Props = {|
  /**
   * `onDismissStart` is passed as render props to any children.
   */
  children: ({| onDismissStart: () => void |}) => Node,
|};

/**
 * DismissingElement is a render props component that provides access to the callback function `onDismissStart`. `onDismissStart` triggers the exit-animation from external trigger points in a component. Internal trigger points are pressing `ESC` key, built-in dismiss buttons, and clicking outside the component. Use DismissingElement when external elements to the component, such as headet, footer, or any content element require dismissing the animated component.
 */
function DismissingElement({ children }: Props): Node {
  const { onExternalDismiss } = useAnimation();

  return <Fragment>{children({ onDismissStart: onExternalDismiss })}</Fragment>;
}

DismissingElement.displayName = 'DismissingElement';

export default DismissingElement;