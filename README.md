UGV: Unmanned Ground Vehicle
===

### Setting up:
To build a development environment on your own machine, run the following from your command line:

1. `cd directory/of/your/choice`
2. `git clone https://github.com/milotoor/UGV.git`
3. `cd UGV`
4. `npm update`

Note that these commands rely on you having already installed the [git](http://git-scm.com/) and [npm](https://www.npmjs.org/) CLI (Command Line Interface).  Hopefully you know what git is. npm stands for Node Package Manager and is a package manager for JavaScript projects.  While our project is by no means exclusively JavaScript-driven, there will be a fair amount of it on the front-end, so if you plan on doing **_any_** front-end development (i.e. working on or making even the *slightest* alteration to that code) you will need it as well.  The `npm update` command will automatically download (locally) the packages that the site's build requires.

==

### Running a Node server:
To deliver content from the server on board the UGV to the browser, we will be running a Node server.  Booting the server on the embedded OS is mission critical but I'm not yet sure how to do so (will work on this once we have the server configured on board the BeagleBone).  For the meantime, booting a server on localhost is trivial and provides a sufficient environment for simple dev work (i.e. tweaking the communications protocol). Run the following command to boot a server on localhost:

1. `cd UGV/root/directory/`
2. `node site/src/js/server/server.js`
