## MECHEER ##
>v.1.0.0

jQuery plugin that Makes Every Container Height Equal Each Row.
[Visit MECHEER landing page](http://andrewalba.github.io/mecheer)

###Features:
* Fast Setup

### Demos
See what MECHEER in action:
* [Mulitple Image Panels in Multiple rows](http://andrewalba.github.io/mecheer/#mecheer)
* More to follow

## How To Use ##

### 1. Load jQuery and include MECHEER plugin files
To use MECHEER, you’ll need to make sure both the MECHEER and jQuery 1.7 or higher scripts included.

```html
<!-- Default Styles -->
<link rel="stylesheet" href="/path/to/mecheer.css">
 
<!--  jQuery 1.7+  -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.map"></script>
```
### 2. Setup your HTML
You don't need any special markup. All you need is to add a class to each container [eg. div.frizzle] that you will be floating so MECHEER can find it. We are using Twitter Bootstrap for our example.

```html
<div class="row">
	<div class="col-md-4 col-sm-4 col-xs-12 frizzle">
		<a href="#"><img src="http://placehold.it/640x480" alt="" class="img-responsive"/></a>
	</div>
	<div class="col-md-4 col-sm-4 col-xs-12 frizzle">
		<a href="#"><img src="http://placehold.it/600x400" alt="" class="img-responsive"/></a>
	</div>
	<div class="col-md-4 col-sm-4 col-xs-12 frizzle">
		<a href="#"><img src="http://placehold.it/380x220" alt="" class="img-responsive"/></a>
	</div>
	...
	<div class="col-md-4 col-sm-4 col-xs-12 frizzle">
		<a href="#"><img src="http://placehold.it/480x270" alt="" class="img-responsive"/></a>
	</div>
	<div class="col-md-4 col-sm-4 col-xs-12 frizzle">
		<a href="#"><img src="http://placehold.it/600x338" alt="" class="img-responsive"/></a>
	</div>
</div>
```
### 3. Call the MECHEER plugin
Just initialize the plugin using `$(window).load();` jQuery method and watch the rows resize.

```javascript
$(window).load(function() {
	$('.frizzle').mecheer();
});
```

License
------------
The MIT License (MIT)