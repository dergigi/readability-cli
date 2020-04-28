# readability-cli

A node-js wrapper around Mozilla's [Readability.js](https://github.com/mozilla/readability) so it can be invoked from the command line.

Output is [pretty](https://www.npmjs.com/package/pretty) HTML, use [pandoc](https://pandoc.org/) to convert to other formats.

### Installation

```
git clone https://github.com/dergigi/readability-cli.git
cd readability-cli
npm install
npm link
yarn link
```

### Usage

```
readability-cli https://www.activism.net/cypherpunk/manifesto.html
```

### Advanced Usage

The following example scrapes an article from Medium and converts it to markdown (including some Medium-specific cleanup):

```
# Get clean HTML
readability-cli https://medium.com/@dergigi/dear-bitcoiners-73f87e2380f2 > scraped.html

# Use pandoc to convert to markdown
pandoc -f html -t markdown scraped.html > markdown.md

# Clean up fragments using sed
sed -i -- 's/<div>//g' markdown.md
sed -i -- 's/<\/div>//g' markdown.md
sed -i -E -- 's/^::+.*$//g' markdown.md
sed -i -E -- 's/\[(.+)\]\{.+\}/\1/g' markdown.md
sed -i -E -- 's/^>(.+) --- (.+)$/\1\n>\n> <cite>\2<\/cite>/g' markdown.md

# Remove repeated blank lines
cat -s markdown.md > markdown-clean.md
```
