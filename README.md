# babel-plugin-drop-private-exports
A Babel plugin to drop exports meant only for testing

* It allows elements to be exported for unit testing purposes and then to be dropped from production code.
* It omits elements (variables, functions, classes) whose name starts with an underscore '`_`' from the exports lists.  
* It does not drop the element itself, it can still be used within the module, it just drops the named `export`.
* If exported under an alias, it will check the alias, not the original name.
* It checks only ES2015-style exports.

## Installation
```
npm install -D babel-plugin-drop-private-exports
```

## Usage

In `.babelrc` add:

```json
{
  "plugins": "drop-private-exports"
}
```

Or in the `babel-cli` command line:

```
babel source.js --plugins=drop-private-exports ....
```
