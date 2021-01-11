# create-react-app (react-scripts 4.0.1) and react-map-gl (6.0.3)
Using create-react-app and the latest react-map-gl does not work.

Steps to reproduce
1. clone this repo
1. add mapbox API token to .env.local
```
REACT_APP_MAPBOX_TOKEN=<your mapbox token>
```
1. `npm i`
1. `npm run build`
1. `npm i -g serve`
1. `npx serve -s build`
1. open up http://localhost:5000, open up dev tools, notice errors

```
Uncaught ReferenceError: y is not defined
    at a915e7a2-d12d-45dc-b9bc-45bf5baa8c10:1
    at a915e7a2-d12d-45dc-b9bc-45bf5baa8c10:1
    at a915e7a2-d12d-45dc-b9bc-45bf5baa8c10:1
```
