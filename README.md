# learn.starleap.com

Public student/parent copies of StarLeap class materials, served by GitHub Pages.

**Don't edit the course folders by hand.** Each one is written only by its
course's publish script, from the private source repo:

| Folder         | Published by                                  |
|----------------|-----------------------------------------------|
| `electronics/` | `starleap-electronics/tools/publish.sh`       |
| `lego/`        | `starleap-skilltree/deploy/publish.sh lego`   |
| `python/`      | `starleap-skilltree/deploy/publish.sh python` |

Only `index.html`, `CNAME`, `.nojekyll` and this README are edited by hand.
To roll back a bad publish: `git revert <commit>` and push.
