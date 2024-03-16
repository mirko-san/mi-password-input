# mi-password-input

It is a lightweight password input field that supports password generation through password managers.
Implemented as Web Components using Lit.

This project aims to comply with the [`passwordrules` attribute](https://github.com/whatwg/html/issues/3518).

## Usage

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <form>
      <password-input
        minlength="4"
        maxlength="6"
        required="true"
      ></password-input>
      <input type="submit" />
    </form>
    <script src="https://unpkg.com/mi-password-input/dist/password-input.umd.js"></script>
  </body>
</html>
```
