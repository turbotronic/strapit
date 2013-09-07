Strapit
=======

A CSS framework mashup of Twitter's Bootstrap and ZURB's Foundation.

## How is this mashup constructed?

Basically, this framework retains the styling and semantics of Bootstrap with the Javascript and grid coming from Foundation (although that is a project currently in progress and slated for v2.1). UI elements of Foundation, e.g. subnavs, switches, and flex-video, have been ported over to the Bootstrap styles. Strapit is still written in LESS with and retains Bootstrap's mixins, however, we are considering a SASS version and porting the best of each's mixins into both languages for two distinct versions.

There are also some original UI elements and typographic conventions scattered throughout. We expect there will soon be more. We also changed some of the semantics in an attempt to reduce overall code. For example: Rather than append a 'btn-primary' class to a 'btn' class, we simply remove the 'btn-' on the former class, so the styling on an element would read <button class="btn primary block lg"> as opposed to <btn class="btn btn-primary btn-block btn-lg">. Maybe we are wrong to do this. Time will tell.

All deviations are detailed in the docs. In addition, we will be keeping up with the issues and updates of both frameworks and adding them to this framework when applicable.

## Why was this mashup constructed?

We really like Bootstrap and we really like Foundation. We wished we could use the best of both at once, so we took the things we really liked about each and put them together. We prefer Bootstrap's clean, turn-key look and it's abundance of UI options to Foundation's rather basic offerings.

However, Foundation is really strong in the way it works under the hood, both with it's simple, lightweight grid and extensible Javascript library. We like that Foundation works with Zepto, and ZURB's experiments and subsequent solutions for things like responsive tables and off-canvas layouts are elegant and worth using.
