# Front-end Project Starter Kit

### What's this?

It's a simple starter kit for my front-end based projects.

### What's included?

- Laravel Mix
- Tailwind CSS

### How to use it?

1. Clone the repo
2. Run `npm install` then `npm run dev`

or add this function to your bash profile and use `frontstart <directoryname>`:

```bash
function frontstart {
  git clone --depth 1 --branch master git@github.com:terdelyi/frontend-starter.git $1 && cd $1 && rm -rf .git && npm install && npm run dev
}
```

The script will deploy the repo, removes .git directory, installs npm packages and runs the dev action to compile the Laravel Mix script.

Open `<directoryname>/public/index.html` in a browser. If you see a text centered horizontally and vertically on the page with colour you're done.

### Can I use it for my project?

Yes of course, this is why it's here.

### Contributions

Bugfixes in the current code are gladly welcome, but I'm going to decline any pull requests which contain additional feature requests as this package made for private purposes.
