#!/bin/bash
# srccd-dw
shopt -s nocasematch

myWebsiteURL=https://codeload.github.com/SteepAtticStairs/steepatticstairs.github.io/zip/refs/heads/main
ytdwnURL=https://codeload.github.com/SteepAtticStairs/ytdwn/zip/refs/heads/main
homebrewytdwnURL=https://codeload.github.com/SteepAtticStairs/homebrew-ytdwn/zip/refs/heads/main
largeFilesURL=https://codeload.github.com/SteepAtticStairs/LargeFiles/zip/refs/heads/main
updateBrewURL=https://codeload.github.com/SteepAtticStairs/updateBrew/zip/refs/heads/main
randomShellFilesURL=https://codeload.github.com/SteepAtticStairs/RandomShellFiles/zip/refs/heads/main
zshThemesURL=https://codeload.github.com/SteepAtticStairs/ZSH-Themes/zip/refs/heads/main
now="$(date '+%m.%d.%Y')"


cd ~/Downloads || exit
dirName="GithubBackup_${now}"
mkdir $dirName
cd $dirName

echo ""
echo "Would you like to download LargeFiles as well?"
echo "YES / NO"
read yeno

if [[ $yeno == yes ]]; then
    wget -O "steepatticstairs.github.io_${now}.zip" $myWebsiteURL
    wget -O "ytdwn_${now}.zip" $ytdwnURL
    wget -O "homebrew-ytdwn_${now}.zip" $homebrewytdwnURL
    wget -O "LargeFiles_${now}.zip" $largeFilesURL
    wget -O "updateBrew_${now}.zip" $updateBrewURL
    wget -O "RandomShellFiles_${now}.zip" $randomShellFilesURL
    wget -O "ZSH-Themes_${now}.zip" $zshThemesURL
elif [[ $yeno == no ]]; then
    wget -O "steepatticstairs.github.io_${now}.zip" $myWebsiteURL
    wget -O "ytdwn_${now}.zip" $ytdwnURL
    wget -O "homebrew-ytdwn_${now}.zip" $homebrewytdwnURL
    wget -O "updateBrew_${now}.zip" $updateBrewURL
    wget -O "RandomShellFiles_${now}.zip" $randomShellFilesURL
    wget -O "ZSH-Themes_${now}.zip" $zshThemesURL
fi