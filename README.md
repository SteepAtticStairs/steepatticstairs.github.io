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
```

After this, you can open the `steepatticstairs.github.io` directory in the code editor of your choice. I use VSCode, but any editor will work.

# Working with go-nexrad

```
git clone https://github.com/bwiggs/go-nexrad.git
code go-nexrad
cd cmd && cd nexrad-render

aws s3 cp --no-sign-request s3://noaa-nexrad-level2/2017/08/25/KCRP/KCRP20170825_235733_V06 .
aws s3 cp --no-sign-request s3://noaa-nexrad-level2/2022/04/18/KLWX/KLWX20220418_153931_V06 .

go get -u golang.org/x/sys
```
in `cmd/nexrad-render/main.go`, around line `181`, replace
```go
// if product != "ref" {
// elv = 2 // uhhh, why did i do this again?
// }
label := fmt.Sprintf("%s %f %s VCP:%d %s %s", ar2.VolumeHeader.ICAO, ar2.ElevationScans[2][0].Header.ElevationAngle, strings.ToUpper(product), ar2.RadarStatus.VolumeCoveragePatternNum, ar2.VolumeHeader.FileName(), ar2.VolumeHeader.Date().Format(time.RFC3339))
render(out, ar2.ElevationScans[elv], label)
```
with
```go
// if product != "ref" {
// elv = 2 // uhhh, why did i do this again?
// }
label := fmt.Sprintf("%s %f %s VCP:%d %s %s", ar2.VolumeHeader.ICAO, ar2.ElevationScans[2][0].Header.ElevationAngle, strings.ToUpper(product), ar2.RadarStatus.VolumeCoveragePatternNum, ar2.VolumeHeader.FileName(), ar2.VolumeHeader.Date().Format(time.RFC3339))
render(out, ar2.ElevationScans[elv], label)
```
[this is the commit](https://github.com/bwiggs/go-nexrad/commit/046430b75e3742c2adc0e1591ef6060e87f1662d#diff-60edfbcf8dfa6fed72e8edc2bb4f7a2f3dd178ff5c5aa4ec845a3936bad3a81aR181)
```
go run . -f KCRP20170825_235733_V06 -s 2048 -p vel
# OR
go build
./nexrad-render -f KCRP20170825_235733_V06 -s 2048 -p vel
```

# Info on `largefiles`

THIS IS NEWER INFORMATION

`largefiles` is where I keep the bigger files for this repo, for the sake of efficiency. I used to store it as a submodule, but that would mean that Github Pages would take forever to deploy, as it is building the multiple gigabytes of `largefiles` every deployment, even if `largefiles` wasn't changed.

What I have now done is remove `largefiles` as a submodule, but have its own Github Pages deployment. Its repo can be found [here](https://github.com/SteepAtticStairs/largefiles). This deploys to the root folder `/largefiles/`, e.g. `https://steepatticstairs.github.io/largefiles/`. This means that if I want to link to `largefiles`, I just need to keep that in mind when making directory listings.

# To make another CORS bypass proxy

```
git clone https://github.com/Rob--W/cors-anywhere.git
cd cors-anywhere
npm install
heroku create
git push heroku master
```
I got this from [this StackOverflow answer](https://stackoverflow.com/a/43881141).

# To rip the `weather.gov` radar

```
wget -r --level 2 --random-wait --no-clobber --page-requisites -e robots=off --html-extension --convert-links --no-parent "https://radar.weather.gov"
```
I got this from [this SuperUser answer](https://superuser.com/a/1403618).

<br></br>

# Project Structure

`/bignate/` - Big Nate comics in HTML format <br>
`/calvinhobbes/` - Calvin and Hobbes comics in HTML format <br>
`/dump/` - Random files, such as CSS libraries <br>
`/harrypotter/` - HTML files with links to PDFs and audiobooks <br>
`/hasher/` - JavaScript files to hash in SHA1 and another simpler hash format <br>
`/homepages/` - Desktop and mobile homepage HTML files are stored here <br>
`/icons/` - Images that I use on this site <br>
`/kentuckybb/` - Massive collection of HTML files with links to Kentucky Basketball games <br>
`/largefiles/` - Submodule that hosts the larger files that would be inefficient to store in this repo <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--> `/games/` - Various games ported to JavaScript <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--> `/projects/` - The individual game folders <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--> `/harrypotterpdfs/` - PDFs of all 7 Harry Potter books <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--> `/theatticrealm/` - My made-up world <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--> `/2021roadatlas/` - 2021 USA Road Atlas, hosted by Internet Archive and Github <br>
`/logos/` - Various versions of my logo <br>
`/ncaam/` - Lists of college basketball AP#1 losses <br>
`/not-used/` - Files not being used but still being stored <br>
`/private/` - "Password protected" pages, redirected to from the 'other' tab on the homepage <br>
`/random/` - Random files <br>
`/weather/` - Various collection of weather tools <br>
`/youtubedownloader/` - Various resources for downloading YouTube videos <br>
`index.html` - Main homepage <br>
`logo.png` - Website logo (favicon) <br>
`README.md` - This file and the description for the github repo <br>

<br></br>

## Update directory listing in `/largefiles/theatticrealm/`

```
cd largefiles/theatticrealm && apindex . && cd ../..

# if you get a DS_Store error
cd largefiles/theatticrealm && find . -name ".DS_Store" -delete

# to delete all index.htmls in current directory (BE CAREFUL)
find . -name "index.html" -delete


# inefficient
cd ~/Github/steepatticstairs.github.io/largefiles/theatticrealm && tree . -H /largefiles/theatticrealm -o tree.html && cd ../..
```
## Update directory listing in `/largefiles/2021roadatlas/`

```
cd largefiles/2021roadatlas && apindex . && cd ../..

# if you get a DS_Store error
cd largefiles/theatticrealm && find . -name ".DS_Store" -delete

# to delete all index.htmls in current directory (BE CAREFUL)
find . -name "index.html" -delete


# inefficient / old / doesn't work anymore
cd ~/Downloads/2021RoadAtlas && tree . -H https://ia601508.us.archive.org/2/items/2021USARoadAtlas/2021RoadAtlas -o tree.html && rm -f ~/Github/steepatticstairs.github.io/2021roadatlas/tree.html && cp tree.html ~/Github/steepatticstairs.github.io/2021roadatlas/tree.html && rm -f tree.html && cd ~/Github/steepatticstairs.github.io && sed -i '' -e '$d' 2021RoadAtlas/tree.html && sed -i '' -e '$d' 2021RoadAtlas/tree.html && echo "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div>end</div></body></html>" >> 2021RoadAtlas/tree.html
```

## Install `apindex` for directory listing

`apindex` can be found [here](https://github.com/jayanta525/apindex-v2). That repository gives you an install script, but it is for a UNIX system that uses `/usr/share` as its executable path. On MacOS, it is `/usr/local/bin`. Run this script in your terminal to install `apindex` on MacOS:

```
#!/bin/bash

echo "installing apindex"
git clone --depth=1 https://github.com/jayanta525/apindex.git
cd apindex
cmake . -DCMAKE_INSTALL_PREFIX=/usr/local/bin
sudo make install
cd ..
rm -rf apindex/
```

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