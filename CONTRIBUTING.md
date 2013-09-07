# Best practices for contributing

These guidelines are brought to you in a slightly edited version from Bootstrap's [statement on the same topic](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md).

## Reporting issues

Accept issues that are bug reports or feature requests. Bugs must be isolated and reproducible problems that we can fix within the code's core. Please read the following guidelines before opening any issue:

1. **Search for existing issues.** First check if someone else has reported the same issue. Moreover, the issue may have already been resolved with a fix available.
2. **Create an isolated and reproducible test case.** Be sure the problem exists in the code with a [reduced test case](http://css-tricks.com/reduced-test-cases/) that should be included in each bug report.
3. **Include a live example.** Make use of jsFiddle or jsBin to share your isolated test cases.
4. **Share as much information as possible.** Include operating system and version, browser and version, version of Strapit, customized or vanilla build, etc. where appropriate. Also include steps to reproduce the bug.



## Pull requests

- CSS changes must be done in `.less` files first, never just the compiled `.css` files
- If modifying the `.less` files, always recompile and commit the compiled files `strapit.css` and `strapit.min.css`
- Try not to pollute your pull request with unintended changes--keep them simple and small
- Try to share which browsers your code has been tested in before submitting a pull request
- Pull requests should always be against the `master` branch, never against `gh-pages`.



## Coding standards

### HTML

- Double quotes only, never single quotes
- Always use proper indentation
- Use tags and elements appropriate for an HTML5 doctype (e.g., self-closing tags)

### CSS

- Adhere to the [Recess CSS property order](http://markdotto.com/2011/11/29/css-property-order/)
- Multiple-line approach (one property and value per line)
- Always a space after a property's colon (.e.g, `display: block;` and not `display:block;`)
- End all lines with a semi-colon
- For multiple, comma-separated selectors, place each selector on its own line
- Attribute selectors, like `input[type="text"]` should always wrap the attribute's value in double quotes, for consistency and safety (see this [blog post on unquoted attribute values](http://mathiasbynens.be/notes/unquoted-attribute-values) that can lead to XSS attacks).

### JS

- Comma first
- strict mode
- "Attractive"
