# Components manual page

This folder is dedicated to contain generally purposed components that are used across pages and other components, i.e, the components under this folder can be used independently.

## Structure

Each folder has three core files:

1. `index.ts` &mdash; Unify all sub components to one module.
2. `type.ts` &mdash; Define types for all sub components.
3. `style.tsx` &mdash; Style all sub components using `styled-components`.

Each sub-component will be created to handle their own logic and functionalities using the according styled components from `style.tsx`, the props defined in `type.ts`, and exported in `index.ts`.

## Usage

To use a component, simply use the following `import` statement in Javascript/Typescript:

```ts
import Navbar from "@components/Navbar";
```

This will import everything defined in `src/components/Navbar`. This also allows importing a particular component:

```ts
import NavbarBrand from "@components/Navbar/Brand";
```

Finally, lower-level stuff like types and styled components can be directly imported but it's recommended to do so.

## Exceptions

- `GlobalStyle.tsx` &mdash; This is a global configuration for `styled-components`. While it still needs to be declared and defined in order to use, it's not necessary to put it under the same structure as other components.
