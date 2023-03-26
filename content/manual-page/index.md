---
title: "Manual page"
created: 2023-03-25
updated: 2023-03-25
author: "Richard Nguyen"
categories:
  - Tutorial
tags:
  - GatsbyJS
  - React
  - TypeScript
thumbnail: ./manual-page.png
---

This page is designed to be a test site that demonstrates the features of the blog. Such as **bold texts**, _italic texts_, `inline code` and so on. If you
want to see how the blog looks like, you can visit this page. Beside that, it
doesn't have any other purpose!

<!-- end -->

# Heading 1

This section demonstrates the usage of the `# Heading 1` syntax.

## Heading 2

And this section demonstrates the usage of the `## Heading 2` syntax.

### Heading 3

Only heading 1, 2, and 3 are supported.

# Syntax Highlighting

## Inline code

Inline code can be written with the backtick syntax:

```md
This is an inline code: `const add = (a: number, b: number): number => a + b;`
```

<u>The result is:</u> This is an inline code: `const add = (a: number, b: number): number => a + b;`

## With a supported language

This is a code block with `typescript` syntax highlighting:

````md
```ts
const add = (a: number, b: number): number => a + b;
```
````

It will be rendered as:

```ts
const add = (a: number, b: number): number => a + b;
```

## With a title

This is a code block with `typescript` syntax highlighting and a title:

````md
```ts title="src/add.ts"
const add = (a: number, b: number): number => a + b;
```
````

## With a line number

This is a code block with `typescript` syntax highlighting and a line number:

````md
```ts line-numbers
const add = (a: number, b: number): number => a + b;
```
````

## With line highlighting

This is a code block with `typescript` syntax highlighting and line highlighting:

````md
```ts line-numbers{2,4}
const add = (a: number, b: number): number => a + b;
```
````

# Callouts

Callout components are used to highlight important information. There are 5 types of callouts:

- `default`: Used to highlight a default callout.
- `note`: Used to highlight a note.
- `tip`: Used to highlight a tip.
- `warning`: Used to highlight a warning.
- `danger`: Used to highlight a danger.

## Default callout

Default callouts are just blockquotes without any special styles. However, if you wish to have a title for the callout, you can use the `default` keyword as the first word in the blockquote:

```md
> [!default] Default callout
>
> This is a default callout.
```

This will be rendered as:

> [!default] Default callout
>
> This is a default callout.

This will be applied to other callouts as well.

## Note callout

In order to create a note callout, you need to use the `note` keyword as the first word in the blockquote:

```md
> [!note] Note
>
> This a note callout.
```

This will be rendered as:

> [!note]
>
> This a note callout.

If there is no title, the `Note` title will be used by default.

## Tip callout

In order to create a tip callout, you need to use the `tip` keyword as the first word in the blockquote:

```md
> [!tip] Tip
>
> This a tip callout.
```

This will be rendered as:

> [!tip] Tip
>
> This a tip callout.

If there is no title, the `Tip` title will be used by default.

## Warning callout

In order to create a warning callout, you need to use the `warning` keyword as the first word in the blockquote:

```md
> [!warning] Warning
>
> This a warning callout.
```

This will be rendered as:

> [!warning] Warning
>
> This a warning callout.

If there is no title, the `Warning` title will be used by default.

## Danger callout

In order to create a danger callout, you need to use the `danger` keyword as the first word in the blockquote:

```md
> [!danger] Danger
>
> This a danger callout.
```

This will be rendered as:

> [!danger] Danger
>
> This a danger callout.

If there is no title, the `Danger` title will be used by default.

## Blockquotes

If you want to use blockquotes without any special styles, you can use the `>` syntax as usual:

```md
> Blockquote
>
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
> mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque
> eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
> molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum
> feugiat nisl ut dapibus. Maecenas ultricies mi eu turpis hendrerit fringilla.
> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
> cubilia Curae; Aliquam nibh ante, egestas id dictum a, commodo luctus libero.
```

This will be rendered as:

> Blockquote
>
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
> mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque
> eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
> molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum
> feugiat nisl ut dapibus. Maecenas ultricies mi eu turpis hendrerit fringilla.
> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
> cubilia Curae; Aliquam nibh ante, egestas id dictum a, commodo luctus libero.

# Credits

- Illustration <a target="_blank" rel="noreferrer" href="https://www.freepik.com/free-vector/magic-spell-books-fantasy-alchemy-grimoires-set_33819338.htm#page=4&query=manual&position=48&from_view=search&track=sph">Image by upklyak</a> on Freepik
