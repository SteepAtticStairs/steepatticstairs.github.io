# SteepAtticStairs's Website

This is my website, where I host various things that will likely be useful to me or to others in the future.

<br></br>

# Setup Instructions

If you want to work on this repository yourself, this is what you should do to clone and setup the project.

```
# navigate to the directory of your choice
cd your-directory

# clone the project
git clone https://github.com/SteepAtticStairs/steepatticstairs.github.io.git

# cd into the project
cd steepatticstairs.github.io

# add the largefiles submodule
git submodule init; git submodule update
```

After this, you can open the `steepatticstairs.github.io` directory in the code editor of your choice. I use VSCode, but any editor will work.

<br></br>

# Project Structure

`/bignate/` - Big Nate comics in HTML format <br>
`/calvinhobbes/` - Calvin and Hobbes comics in HTML format <br>
`/harrypotter/` - HTML files with links to PDFs and audiobooks <br>
`/hasher/` - JavaScript files to hash in SHA1 and another simpler hash format <br>
`/homepages/` - Desktop and mobile homepage HTML files are stored here <br>
`/kentuckybb/` - Massive collection of HTML files with links to Kentucky Basketball games <br>
`/largefiles/` - Submodule that hosts the larger files that would be inefficient to store in this repo <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--> `/games/` - Various games ported to JavaScript <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--> `/projects/` - The individual game folders <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--> `/harrypotterpdfs/` - PDFs of all 7 Harry Potter books <br>
`/ncaam/` - Lists of college basketball AP#1 losses <br>
`/not-used/` - Files not being used but still being stored <br>
`/private/` - "Password protected" pages, redirected to from the 'other' tab on the homepage <br>
`/random/` - Random files <br>
`/youtubedownloader/` - Various resources for downloading YouTube videos <br>
`index.html` - Redirects to the right homepage based on your mobile / desktop status <br>
`logo.png` - Website logo (favicon) <br>
`README.md` - This file and the description for the github repo <br>

<br></br>

## Clean `.git` folder <i>(i did this already)</i>

If I ever feel like I want to clean out the `.git` folder of this repository to remove instances of old, large files (now hosted in a submodule), I should do this. I must do `brew install git-filter-repo` first.**

```
# removes history of the games directory
git filter-repo --path games --invert-paths
git gc

# removes history of the harrypotterpdfs directory
git filter-repo --path harrypotter/harrypotterpdfs --invert-paths
git gc

# removes history of the DickVitaleVideo.mp4 file
git filter-repo --path kentuckybb/DickVitaleVideo.mp4 --invert-paths
git gc
```

After this, proceed to make unnecessary chanes, soley for the purpose of being able to commit and push again. To check the size of the directory at any point to make sure that it is working, run `du -hs .` assuming that I am navigated into the desired directory.

<br></br>

** I got the `git-filter-repo` tool from [this StackOverflow answer](https://stackoverflow.com/a/61544937/17010196).