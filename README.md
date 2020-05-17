![CI](https://github.com/canyener/indecision-app/workflows/CI/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=canyener_indecision-app&metric=alert_status)](https://sonarcloud.io/dashboard?id=canyener_indecision-app)

# indecision-app
Add your options, let the computer guide you!

# When using React with cdn

Add react cdn and app.js script to index.html

```
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="/scripts/app.js"></script>
```
## With global modules (I strongly recommend you should avoid global modules)

Install live-server globally with ```yarn add global live-server``` or ```npm install -g live-server```

Install babel-cli globally with ```yarn add global babel-cli``` or ```npm install -g babel-cli```

Run this command as a script to compile 

```babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch```

Run this command to start web server 

```live-server public```

## Without global modules (Yay!)

 Install live-server by running ```yarn add live-server```
 
 Install babel-cli by running ```yarn add babel-cli```
 
 Add script for compiling,
 
 example script: ```"babel-compile": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"```
 
 Add script to start web server
 
 example script: ```live-server public/ --port=<port-number-you-choose>``` 

# When using webpack

```yarn run serve``` to start web server
```yarn run build``` to compile code with webpack

or simply run

```yarn run dev-server``` to compile and start web server with webpack