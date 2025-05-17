# ColorGuesser

## 1. Setup del proyecto

Primeramente instalamos node y npm. Después ejecutamos el siguiente comando en un directorio vacío.

```bash
npm init
```

Nos pedirá unas cuantas cosas a rellenar:

- `package name`: `colorguesser`
- `version`: `(1.0.0)`
- `description`: La que sea
- `entry point`: `(index.js)`
- `test command`: `test`
- `git repository`: ` `
- `keywords`: ` `
- `author`: ` `
- `license`: `(ISC)`
- `type`: `(module)`

Después, agregamos el paquete `live-server` usando `npm install --save-dev live-server` y agregamos un script para el inicio:

```json
{
  ...
  "scripts": {
    "start": "live-server"
  },
}
```

Populamos el `index.html`:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ColorGuesser</title>
    <link rel="stylesheet" href="styles.css" />
</head>

<body>
    <h1>Hello World</h1>

    <script src="index.js"></script>
</body>
</html>
```

Y el `index.js`:

```js
console.log("Hello World!")
```

Después probamos que todo funcione con `npm run start`.