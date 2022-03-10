#!/bin/bash
# srccd-dw

url=https://codeload.github.com/SteepAtticStairs/steepatticstairs.github.io/zip/refs/heads/main
now="$(date '+%m.%d.%Y')"


cd ~/Downloads

wget -O "steepatticstairs.github.io_${now}.zip" $url