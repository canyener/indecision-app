# indecision-app
Add your options, let the computer guide you!

# When using React with cdn

Add react cdn and app.js script to index.html

```
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="/scripts/app.js"></script>
```

Install live-server globally with ```yarn add global live-server``` or ```npm install -g live-server```

Install babel-cli globally with ```yarn add global babel-cli``` or ```npm install -g babel-cli```

Run this or add this as a script to compile 

```babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch```

Run this add this as a script to start web server 

```live-server public```

# When using webpack

```yarn run serve``` to start web server
```yarn run build``` to compile code with webpack

or simply run

```yarn run dev-server``` to compile and start web server with webpack