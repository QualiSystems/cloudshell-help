# CloudShell Help

The help website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.


## Local Deployment

If you would like to run the help site locally and serve it to others (might be relevant for offline environments), you should first:
1. Clone the repository
2. Run the following command to install the relevant packages (requires `npm` to be installed):
```
$ npm install
```
3. Then, build the version using:
```
$ npm run build
```
4. To serve it, use the following command (example):
```
$ npm run serve -- --build --port 80 --host 0.0.0.0
```

You can check for other options on the [following page](https://docusaurus.io/docs/next/deployment).


## How to contribute

1. Clone the repository
2. Run the following command to install the relevant packages (requires `npm` to be installed):
```
$ npm install
```
3. Once all the packages are installed, you can start the local server using the follwing command:
```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

**Note**: when running locally, the search feature is not working. If you really need to check it, you'll need to build the website first using:
```
$ npm run build
```
And then run it using:
```
$ npm run serve
```

### Few Guidelines

The latest version of the help is always the one under the `docs` folder.

From it, new versions can be made of when time comes. These are stored under the `versioned_docs` folder.
If you're making any updates to a page, and it makes sense to go back and fix older versions, please make sure you do so under that folder.

While working on updates/fixes, make sure you review how things look like on the local running deployment, under the Next version (which appears only while in dev-mode for now).

If you link to other pages, make sure to use relative links, so they would work well between versions.

If you need to add a new image/screenshot, make sure to place them under the static/Images folder, and keep the naming convension of using a dash instead of spaces in the file names. Also, try to find a relevant folder based on the area of this image.

There are many examples of how to use tables/images/links/admonitions (notes/warning/etc) - so don't try to reinvent the wheel and try to be in-line with other examples.

### Create a PR

When done with the updates, make sure you commit the changes with a clear message, and then make a PR to the `main` branch.

