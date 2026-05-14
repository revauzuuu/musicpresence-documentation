# Music Presence Documentation

Welcome to the documentation project for the [Music Presence](https://musicpresence.app/) app!

The code in this repository is for the website at [docs.musicpresence.app](https://docs.musicpresence.app) and hosts all resources and information needed to navigate your way around using Music Presence. If you think that something is lacking, please open a [new issue](https://github.com/music-presence/documentation/issues) or contribute by editing the code and making a pull request here on GitHub (more information on that below).

## Contributing

### What to contribute?

- TODO

### Instructions

To write pages and see your results live, there are some prerequisites:

- You need to know how to write Markdown since the majority of pages are written in it. Don't worry, it's easy! If you're new, read this [getting started guide](https://www.markdownguide.org/getting-started) or have a look at this [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet) to refresh your knowledge of the Markdown syntax and what you can do with it
- You need to have Python 3 installed: https://www.python.org
- You should install a code editor, e.g. VSCodium: https://vscodium.com
- You need to know how to enter commands in the terminal or a command prompt
- You need to know how to use Git and make a pull request. If you are new to Git and GitHub, you can read this guide to get started: [Beginner’s guide to GitHub: Creating a pull request](https://github.blog/developer-skills/github/beginners-guide-to-github-creating-a-pull-request/)

Now follow these steps:

1. Create a fork of this repository by clicking "Fork" at the top of the [page](https://github.com/music-presence/documentation). You may want to rename the forked repository from `documentation` to e.g. `musicpresence-documentation` (optional)
2. Open VSCodium (or VS Code), make sure the Explorer is opened in the side bar and click on "Clone Repository" (alternatively you can press CTRL+SHIFT+P, enter "Git: Clone" and hit Enter)
3. Enter the URL of your fork, e.g. `https://github.com/myusername/documentation` and hit Enter
4. Select a folder where you want to clone your fork of the repository to
5. A prompt should appear to open the repository, confirm this to open it
6. Click "Yes, I trust the authors", if you trust the code in the repository. You don't necessarily have to do this because you will just be writing text, but the editor won't give e.g. code suggestions, if you don't trust the folder

You have created a fork, you cloned it and you are now ready to edit some pages!

Follow these steps to set up live preview:

1. Open a terminal in VSCodium (or VS Code) by pressing CTRL+SHIFT+P and entering "Terminal: Create New Terminal" and hitting Enter
2. Enter `python -m venv venv` to create a [virtual Python environment](https://docs.python.org/3/library/venv.html)
3. If you are on Windows, enter `.\venv\Scripts\activate.bat`
4. If you are on Mac or Linux, enter `source venv/bin/activate` instead
5. For other platforms and more information see [How venvs work](https://docs.python.org/3/library/venv.html#how-venvs-work)
6. You should now see something like `(venv)` in your terminal. This indicates that the virtual environment is activated and ready to be used
7. The next time you open a terminal, as explained in the first step, VSCodium or VS Code should automatically detect the virtual environment and perform step 3 or 4 automatically
8. Now enter `pip install -r requirements.txt`. This will install all required packages to build the site and to display your pages in a browser
9. After that enter `zensical serve`
10. Now visit http://localhost:8000 in your browser and you should see the site!
11. Keep the terminal open for as long as you want to preview your changes. The site should automatically reload whenever you make changes to pages. You can stop the execution of the command in step 10 by pressing CTRL+C

Guidance on making changes and creating new pages:

- All pages are located in the [`docs`](./docs) directory of this repository
- Adding a new page is done by creating a new file and referencing it under the `nav` key in the [`zensical.toml`](./zensical.toml) configuration file. For more information visit the [Zensical documentation](https://zensical.org/docs/setup/navigation/?h=nav#configuration)
- You can edit pages by opening the respective markdown file
- In VSCodium (or VS Code) you can search for pages using text content by pressing CTRL+SHIFT+F or opening the search in the side bar of the editor window
- All pages are written in Markdown and use [Markdown syntax](https://www.markdownguide.org/cheat-sheet)
- The project uses Zensical for page generation. Read the documentation to find extensive information on how to author pages: https://zensical.org/docs/authoring/markdown

For instructions on how to commit your changes and make a pull request so your edits can make it to the live documentation site, read the [Beginner’s guide to GitHub: Creating a pull request](https://github.blog/developer-skills/github/beginners-guide-to-github-creating-a-pull-request/).

Note that whenever you push changes to your forked repository, you will have to enter your password, if you cloned with an HTTPS url. Having an SSH key set up in your GitHub account and on your computer allows you to not have to enter your password anymore. Read more here:
- [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

### Getting help

If you need help with contributing to this project or with the Music Presence app:

- Join the Discord server: [discord.gg/musicpresence](https://discord.gg/musicpresence) or [go.musicpresence.app/discord](https://go.musicpresence.app/discord)

## License

All files in this repository except legal documents and overview and archive pages for those legal documents are licensed under the MIT License. For more detailed information refer to [`LICENSE.md`](./LICENSE.md) in the root of this repository.

Copyright (c) 2026 Jonas van den Berg and contributors
