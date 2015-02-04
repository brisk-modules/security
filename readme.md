# Brisk: Security

An all inclusive security module for [Brisk](http://github.com/makesites/brisk/)


## Features


## Dependencies

* Helmet
* Cererus
* Connect-cors
* CSRF


## Install

Using npm:
```
npm install brisk-security
```


## Usage

Customize through the brisk options of your application. Everything lives under the ```security``` group:
```
{
...
	security: {

		cerberus: {...},

		cors: {...},

		csrf: false,

		helmet: {...}
	}
...
}
```

...


## Credits

Initiated by [Makis Tracend](http://github.com/tracend)

Distributed through [Makesites](http://makesites.org/)

Released under the [MIT license](http://makesites.org/licenses/MIT)
