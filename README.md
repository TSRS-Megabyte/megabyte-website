# Megabyte website

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
| `prettier --write .`   | Run the prettier linter                          |

## Style Guide

### CSS

- We use TailwindCSS to improve the development experience and to keep the CSS consistent
- This means that we only use custom CSS when _absolutely necessary_, except for a few notable exceptions. These exceptions include:
  - Custom neubrutalist box-shadows and borders
  - Animations and transitions
    Otherwise, _almost everything_ should be written in Tailwind. Never write a line of CSS that could be written in Tailwind.
- We write mobile-first CSS. This means that we write Tailwind classes for the mobile breakpoint first, and apply selectors (usually `md`) to change properties with larger breakpoints.
- Use Flexbox and Grid for complex layouts. Never use floats or positioning unless specifically required. This does not mean that a lone paragraph tag needs to go in a flexbox, but complex layouts, such as cards or grids, often benefit from modern CSS display layouts. If you find yourself repeatedly adding the same margins or paddings to elements, you're probably in a situation where you can use flex or grid layouts to write clearner and more maintainable code.
- Avoid div nesting hell. Every div you add should have a purpose. If you ever find yourself writing `wrapper-wrapper-inner-wrapper`, you probably need to refactor your code.
- If writing custom CSS classes, try to stick to Tailwind's conventions. For example, since we are not using Tailwind's colour palette, background colour classes should be in the format `bg-[colourname]`
- Class names should be disruptive. Don't write write class names like 'my-div' or 'main-div'. If you're writing a custom class, that probably means what you're writing is really important, repeated, and not covered by Tailwind – so its name should reflect its purpose.
- If you need to write css properties which tailwind provides a class for, but not the right exact value of, use Tailwind's arbitary CSS feature. For example, you can set a custom width of `26px` with the declaration 'w-[26px]'.
- Use margin-bottoms (through tailwind's `mb-*` class). Avoid `margin-top` properties, those tend to be more difficult to comprehend.
- \[Important] Run `prettier write .` before any commit. This cleans your files, and sorts tailwind classes in a consistent order. You can run `prettier write myfile.astro` to format a single file.
  In general, strive for maintainability and readability. It should be as easy as possible to make minor changes without breaking the whole layout. Strive for as little pure CSS as possible, and use Tailwind and modern CSS as much as you can.

Read the [Tailwind documentation](https://tailwindcss.com/docs) for more information.

beep beep is git working?
