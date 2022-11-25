/**
 * Configuration for React components and functions
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import {
  PropsWithChildren,
  FC,
  HTMLAttributes,
  ForwardRefRenderFunction,
} from "react";

export type CPropsWithChildren<E, P> = PropsWithChildren<HTMLAttributes<E>> & P;

/**
 * @description Custom `React.FC`
 *
 * `CFC` is a (C)ustom React.(FC) that simplifies the type definition of React
 * Component in Typescript. `CFC` is a generic type that  takes two types as
 * arguments.
 *
 * `E` is the HTML Element that contains all attributes associated
 * with the type of that React Component. Mainly, it's used to pass `...rest`
 * props to the Component.
 *
 * `P` is the prop type for the Component. This should be where the actual props
 * are defined.
 *
 * @example <caption>Define a React Button Component.</caption>
 * const Button: CFC<HTMLButtonElement, BtnProps> = ({
 *    children, // From CFC
 *    color,    // From BtnProps
 *    variant,  // From BtnProps
 *    ...rest   // From HTMLButtonElement
 * }) => (
 *  <StyledBtn
 *    color={color}
 *    variant={variant}
 *    {...rest}>
 *      {children}
 *  </StyledBtn>
 * )
 */
export type CFC<E = HTMLElement, P = unknown> = FC<CPropsWithChildren<E, P>>;

export type CForwardRefFunc<
  Element = HTMLElement,
  Ref = unknown,
  Props = unknown
> = ForwardRefRenderFunction<Ref, CPropsWithChildren<Element, Props>>;

/**
 * @description Custom Mouse Event
 *
 * `CMouseEv` simplifies the type definition of Mouse Event for components
 * written in React-Typescript. `CMouseEv` is a generic type that takes types as
 * arguments.
 *
 * `T` is the HTML Element that tells React.MouseEvent what type of element
 * causes this event.
 *
 * `E` is the interface that represents some common interfaces such as `click`,
 * `dbclick`, `mouseup`, `mousedown`, etc. By default, native `MouseEvent`
 * interface are used.
 *
 * @example <caption>Define Button onClick event.</caption>
 * interface BtnProps {
 *    onClickCallback?: (e: CMouseEv<HTMLButton>) => void;
 * }
 */
export type CMouseEv<T = HTMLElement, E = MouseEvent> = React.MouseEvent<T, E>;

/**
 * @description Custom Mouse Event callback
 *
 * `CMouseEvCallback` simplifies the type definition of callbacks dealing with
 * React.MouseEvent written in React-Typescript. `CMouseEv` is a generic type
 * that takes types as arguments.
 *
 * `T` is the HTML Element that tells React.MouseEvent what type of element
 * causes this event.
 *
 * `E` is the interface that represents some common interfaces such as `click`,
 * `dbclick`, `mouseup`, `mousedown`, etc. By default, native `MouseEvent`
 * interface are used.
 *
 * `R` is the return type of this callback. By default, callbacks should return
 * nothing, or the return type should be `void`.

 * @example <caption>Define Button onClick event.</caption>
 * interface BtnProps {
 *    onClickCallback?: CMouseEvCallback<HTMLButtonElement>
 * }
 */
export type CMouseEvCallback<T = HTMLElement, E = MouseEvent, R = void> = (
  e: CMouseEv<T, E>
) => R;
