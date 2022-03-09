# SteepAtticStairs's Website

This is my website, where I host various things that will likely be useful to me or to others in the future.
<br></br>


## Clean `.git` folder

If I ever feel like I want to clean out the `.git` folder of this repository to remove instances of old, large files (now hosted in a submodule), I should do this:

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

After this, proceed to make unnecessary chanes, soley for the purpose of being able to commit and push again. To check the size of the directory at any point to make sure that it is working, run `du -hs .` assuming that you are navigated into the desired directory.